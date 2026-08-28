# Contributing to Ameba Accessibility Guidelines

Ameba Accessibility Guidelinesは、WCAG2.1をベースに、Amebaの開発に即した事例を交えて解説するドキュメントです。

Amebaのサービスはこのガイドラインに則って開発されることを推奨しています。そのため新しいガイドラインや意図の修正のPull RequestはAmeba在籍メンバーからのみとしています🙇（ごめんなさい）

しかし、リンク先のミス、誤字・脱字、WCAGの誤訳・解釈の間違いなどのPull Request・issue提起は大歓迎です。

もちろん、わかりづらい点や疑問に思う箇所がありましたら、お気軽にissueでお教えください！

Only Ameba members can create pull requests for new guidelines or changes of intention.
But, pull requests or issues to fix links, typos, missunderstanding of WCAG are welcomed! Thank you!.

## How to contribute

- fork openameba/a11y-guidelines
- open Pull Request from your repository
  - branch naming is free!
  - example: `fix/*`, `patch/*`, `feat/*`, etc...

## How to setup for developers

お手元のマシンで確認する方法について記載しています。

https://nodejs.org/en/ から node.js をダウンロードしインストールします。

このプロジェクトはパッケージマネージャーとして [pnpm](https://pnpm.io/) を使用しています。Node.jsに同梱されている [Corepack](https://nodejs.org/api/corepack.html) を有効化すると、`package.json` の `packageManager` フィールドで指定されたバージョンのpnpmが自動的に使えるようになります。

```console
$ corepack enable
```

インストールができたら、以下のコマンドを実行します。

```console
$ pnpm install
$ pnpm start
```

するとHTTPサーバーが起動するので、 http://localhost:3000 にブラウザからアクセスすると確認ができます。
