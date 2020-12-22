---
pageType: default
layout: single
isTop: true
---

## 概要

Ameba Accessibility Guidelinesは、Amebaのサービスを利用するユーザーの「誰もがいつでも迷わずコンテンツを楽しむことができる」ようにするための、制作指針集である。

Amebaのサービスに携わるコンテンツや開発者は、高品質なサービスを提供するため、ガイドラインに沿った制作/開発を**強く推奨する。**

## 対象となるサービス

本ガイドラインに準拠するサービス一覧。
各サービス毎に、アクセシビリティ改善プロジェクトの目的と対象とする範囲を定義する。

- [アメブロ]({{ site.dir }}/services#アメブロ)
- [REQU]({{ site.dir }}/services#requ)

## 各項目の構成

- 達成基準を対応する目的と意義、対応すると得られるメリットなど
- テスト・チェック方法
- 実装方法
- 参考文献

## 目次

WCAG2.1に記載の項目のうち、Amebaブランドのサービスで準拠すべき項目。（A〜AAAは適合レベル）

※WCAG2.1の項目は、現在追加作業中。

### 1. 知覚可能

#### 1.1 代替テキストを提供する

- [1.1.1 画像に代替テキストを提供する](/{{ site.dir }}/1/1/1)<span class="Label">A</span>

#### 1.2 動画・音声に代替コンテンツを提供する

- [1.2.1 収録済みの動画に代替コンテンツを提供する](/{{ site.dir }}/1/2/1)<span class="Label">A</span>

#### 1.3 様々な方法・環境で利用できる

- [1.3.1 情報や関係性を明確にする](/{{ site.dir }}/1/3/1)<span class="Label">A</span>
- [1.3.2 意味のある順序でコンテンツを表現する](/{{ site.dir }}/1/3/2)<span class="Label">A</span>
- [1.3.3 感覚的な特徴だけで説明しない](/{{ site.dir }}/1/3/3)<span class="Label">A</span>
- [1.3.4 表示の向きを固定しない](/{{ site.dir }}/1/3/4)<span class="Label">AA</span>
- [1.3.5 入力目的を特定できる](/{{ site.dir }}/1/3/5)<span class="Label">AA</span>

#### 1.4 判別できる（見やすく、聞きやすく、区別しやすく）

- [1.4.1 色だけで伝えない](/{{ site.dir }}/1/4/1)<span class="Label">A</span>
- [1.4.2 音声を制御できるようにする](/{{ site.dir }}/1/4/2)<span class="Label">A</span>
- [1.4.3 テキストや文字画像のコントラストを確保する](/{{ site.dir }}/1/4/3)<span class="Label">AA</span>
- [1.4.4 テキストサイズを拡大縮小できる](/{{ site.dir }}/1/4/4)<span class="Label">AA</span>
- [1.4.7 音声コンテンツを背景音で邪魔しない](/{{ site.dir }}/1/4/7)<span class="Label">AAA</span>
- [1.4.8 テキストの可読性を担保する](/{{ site.dir }}/1/4/8)<span class="Label">AAA</span>
- [1.4.10 リフローできる](/{{ site.dir }}/1/4/10)<span class="Label">AA</span>
- [1.4.13 ホバーまたはフォーカスで表示されるコンテンツを制御できる](/{{ site.dir }}/1/4/13)<span class="Label">AA</span>

### 2. 操作可能

#### 2.1 キーボードで操作ができる

- [2.1.1 キーボード、タッチデバイスで操作できる](/{{ site.dir }}/2/1/1)<span class="Label">A</span>
- [2.1.2 キーボード操作を可能にする](/{{ site.dir }}/2/1/2)<span class="Label">A</span>
- [2.1.4 単一文字キーのショートカットを解除、回避、限定できる](/{{ site.dir }}/2/1/4)<span class="Label">A</span>

#### 2.2 十分な時間がある

- [2.2.1 コンテンツに制限時間を設けない](/{{ site.dir }}/2/2/1)<span class="Label">A</span>
- [2.2.2 動く、自動更新するコンテンツに配慮する](/{{ site.dir }}/2/2/2)<span class="Label">A</span>
- [2.2.4 コンテンツの更新を中断または延期できる](/{{ site.dir }}/2/2/4)<span class="Label">AAA</span>

#### 2.3 発作を防止する

- [2.3.1 画面の点滅を防止する](/{{ site.dir }}/2/3/1)<span class="Label">A</span>
- [2.3.3 ユーザー操作で起きるアニメーションを無効にできる](/{{ site.dir }}/2/3/3)<span class="Label">AAA</span>

#### 2.4 ナビゲーションできる

- [2.4.1 重複する情報をスキップできるようにする](/{{ site.dir }}/2/4/1)<span class="Label">A</span>
- [2.4.2 ページの主題がわかるタイトルを設定する](/{{ site.dir }}/2/4/2)<span class="Label">A</span>
- [2.4.3 適切なフォーカス順序にする](/{{ site.dir }}/2/4/3)<span class="Label">A</span>
- [2.4.4 リンクの目的を理解できるようにする](/{{ site.dir }}/2/4/4)<span class="Label">A</span>
- [2.4.5 コンテンツへの到達手段を複数用意する](/{{ site.dir }}/2/4/5)<span class="Label">AA</span>
- [2.4.6 見出しやラベルは、主題または目的を説明する](/{{ site.dir }}/2/4/6)<span class="Label">AA</span>
- [2.4.7 フォーカスを見えるようにする](/{{ site.dir }}/2/4/7)<span class="Label">AA</span>
- [2.4.8 現在位置を確認することができる](/{{ site.dir }}/2/4/8)<span class="Label">AAA</span>
- [2.4.10 各セクションに見出しをつける](/{{ site.dir }}/2/4/10)<span class="Label">AAA</span>

#### 2.5 入力方法
- [2.5.1 ポインタジェスチャを必須としない](/{{ site.dir }}/2/5/1)<span class="Label">A</span>
- [2.5.2 ポインタ操作のキャンセルができる](/{{ site.dir }}/2/5/2)<span class="Label">A</span>
- [2.5.3 目に見えるテキストと支援技術で読み上げるテキストの内容が一致している](/{{ site.dir }}/2/5/3)<span class="Label">A</span>
- [2.5.4 動きによる操作以外でも操作を可能にする](/{{ site.dir }}/2/5/4)<span class="Label">A</span>

### 3. 理解可能

#### 3.1 読みやすい

- [3.1.1 ページの言語を指定する](/{{ site.dir }}/3/1/1)<span class="Label">A</span>
- [3.1.3 一般的でない用語は補足説明をする](/{{ site.dir }}/3/1/3)<span class="Label">AAA</span>
- [3.1.5 難しい文章表現を避ける](/{{ site.dir }}/3/1/5)<span class="Label">AAA</span>

#### 3.2 予測できる

- [3.2.1 フォーカス時にコンテンツを大きく変更しない](/{{ site.dir }}/3/2/1)<span class="Label">A</span>
- [3.2.2 入力時に予測できない変化を起こさない](/{{ site.dir }}/3/2/2)<span class="Label">A</span>
- [3.2.3 ナビゲーションの位置を統一する](/{{ site.dir }}/3/2/3)<span class="Label">AA</span>
- [3.2.4 一貫した識別性を持たせる](/{{ site.dir }}/3/2/4)<span class="Label">AA</span>

#### 3.3 入力しやすい、間違いにくい

- [3.3.1 エラーを特定できる](/{{ site.dir }}/3/3/1)<span class="Label">A</span>
- [3.3.2 入力項目にラベルまたは説明をつける](/{{ site.dir }}/3/3/2)<span class="Label">A</span>
- [3.3.3 エラーの修正を提案する](/{{ site.dir }}/3/3/3)<span class="Label">AA</span>
- [3.3.4 入力時のエラーを回避できる](/{{ site.dir }}/3/3/4)<span class="Label">AA</span>
- [3.3.5 状況に応じたヘルプが利用できる](/{{ site.dir }}/3/3/5)<span class="Label">AAA</span>

### 4. 堅牢性

#### 4.1 互換性を保つ

- [4.1.1 HTMLを正しく記述する](/{{ site.dir }}/4/1/1)<span class="Label">A</span>
- [4.1.2 HTMLの要素や属性を正しい役割で使用する](/{{ site.dir }}/4/1/2)<span class="Label">A</span>
- [4.1.3 コンテンツの変更をユーザーに知らせる](/{{ site.dir }}/4/1/3)<span class="Label">AA</span>
