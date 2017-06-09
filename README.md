# アメブロアクセシビリティ方針(草案)

[Google Drive - アクセシビリティ勉強会](https://drive.google.com/drive/folders/0B4btJ5QQ5ixSclZSQnpxTm5sRDQ)に共有資料を配置します

## プロジェクトの目的
誰もがいつでも、迷わず「書く」「読む」「応える」ができる状態を目指す
- 実現可能性を確認して、対象範囲を明確にする（調査）
- 開発者がハッピーに開発しプロダクトに誇りを持てるものにする
- アクセシビリティを考慮できて当たり前な文化をつくる
 
## プロジェクトの目標
- （2020）年までに、ブログを書く・閲覧する・リアクションの機能を、WCAG2.0のレベルAに準拠＋レベルAAに一部準拠させる
  - 最低限レベルAを満たしつつ、レベルAAのうち、目的達成のために重要と思われる項目を満たす
  - WCAG2.0の準拠すべき項目一覧を作る
- レベルAに準拠＋レベルAAに一部準拠したスタイルガイド・コードガイドを作る
 
## 目標に対する具体的な手段
- デザイン時にチェックツールを使う（Color Contrast Analyser for Sketch とか）
- 作成したガイドラインに沿ったデザインと実装になっているか
 
## 対象範囲（スコープ）
1. 当面の目標：SPブラウザのtop,記事詳細
  - http://ameblo.jp/user
  - http://ameblo.jp/user/entry-xxx.html
1. 最終目標：
  - デバイス：SP/PCブラウザ、スマホ、タブレット
  - 対象箇所
    - 閲覧面（[https://ameblo.jp/](https://ameblo.jp/)）
    - 管理面（[http://ameba.jp/](http://ameba.jp/)）
    - 芸能人・有名人ブログ（[https://official.ameba.jp/](https://official.ameba.jp/)）
    - ハッシュタグ一覧（[https://blogtag.ameba.jp/](https://blogtag.ameba.jp/)）
    - Ameba公式ジャンル（[https://blogger.ameba.jp/](https://blogger.ameba.jp/)）
    - アメンバー記事（[http://secret.ameba.jp/user/amemberentry-xxx.html](http://secret.ameba.jp/user/amemberentry-xxx.html)）
    - プロフィール（[http://profile.ameba.jp/user/](http://profile.ameba.jp/user/)）
 
## TODO
1. WCAG2.0ガイドライン項目の列挙
1. SPブラウザのtop,記事詳細の、目標に沿わない点の洗い出し（6月末目処）
  - フロント：土岐、田中、松浦
  - デザイン：とっつー相談
  - ディレクター：大塚さん相談
1. 現状を踏まえ、アクション決定
1. アメブロ a11y ガイドラインにまとめる
  - コードガイド（だいさん?
  - デザインガイド（とつかさん?
1. ワークフローの確立
  - [react-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - 決定アクションに応じてルールを選定する
  - [Sketch のプラグイン](https://github.com/getflourish/Sketch-Color-Contrast-Analyser)
    - デザイナー陣にインストールする
    - PR 時のチェック項目化
    - QC室への共有	
  - その後
    - PC刷新後、SPブラウザの知見を展開
    - モダン化は並行して進められると◎
 
## スケジュール
前項の洗い出しを受けて決定
- 2017年9月末: 〜〜
- 2017年12月末: 〜〜
