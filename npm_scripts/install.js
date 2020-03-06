const fs = require('fs');
const path = require('path');

const BinWrapper = require('bin-wrapper');

const [, , version] = process.argv;

const base = 'https://github.com/gohugoio/hugo/releases/download';
const bin = new BinWrapper({ skipCheck: true })
	.src(`${base}/v${version}/hugo_extended_${version}_macOS-64bit.tar.gz`, 'darwin', 'x64')
	.src(`${base}/v${version}/hugo_extended_${version}_Linux-64bit.tar.gz`, 'linux', 'x64')
	.dest(path.resolve(__dirname, '../vendor/hugo'))
  .use('hugo')
	.version(version);

bin.run().then(function() {
  const symlink = path.resolve(__dirname, '../node_modules/.bin/hugo');

  const target = path.relative(
    path.resolve(__dirname, '..'),
    '../../vendor/hugo/hugo'
  );

  try {
    fs.unlinkSync(symlink);
  } catch {}

  fs.symlinkSync(target, symlink);
}).catch(function(err) {
  console.error(err);
  process.exitCode = 1;
});
