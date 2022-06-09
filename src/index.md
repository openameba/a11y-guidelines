---
pageType: default
layout: index
isTop: true
---

## 概要

Ameba Accessibility Guidelinesは、Amebaのサービスを利用するユーザーの「誰もがいつでも迷わずコンテンツを楽しむことができる」ようにするための、制作指針集である。

Amebaのサービスに携わるコンテンツや開発者は、高品質なサービスを提供するため、ガイドラインに沿った制作/開発を**強く推奨する。**

## 対象となるサービス

本ガイドラインに準拠するサービス一覧。
各サービス毎に、アクセシビリティ改善プロジェクトの目的と対象とする範囲を定義する。

- [アメブロ](/services#アメブロ)
- [REQU](/services#requ)

## 各項目の構成

- 達成基準を対応する目的と意義、対応すると得られるメリットなど
- テスト・チェック方法
- 実装方法
- 参考文献

## 目次

WCAG2.1に記載の項目のうち、Amebaブランドのサービスで準拠すべき項目。（※WCAG2.1の項目は、追加作業中）

### 適合レベル
各項目を達成するアクセシビリティ上の重要度を示す指標である。[WCAG 2.1の適合レベル](https://waic.jp/docs/WCAG21/#cc1)は、次のようにレベルA、レベルAA、レベルAAAの3つに分類されている。
<dl>
  <dt>レベルA</dt>
  <dd><strong>最低限</strong>のレベル。達成できていないと、スクリーンリーダーや拡大鏡などの支援技術を用いても、サービスを利用できない</dd>
  <dt>レベルAA</dt>
  <dd><strong>より良い</strong>レベル。達成できれば、支援技術無しでもサービスを利用できることが多くなり、より多くのユーザー・状況で使えるようになる</dd>
  <dt>レベルAAA</dt>
  <dd><strong>より発展的な</strong>レベル。達成できれば、よりサービスを利用しやすくなる場合がある。ただし、項目の中には達成が難しいものもあり、サービスによって検討が必要なものもある</dd>
</dl>

{% import 'macros/successCriteriaList.njk' as scs with context %}

### 1. 知覚可能

#### 1.1 代替テキストを提供する

{{ scs.scList(collections.SC, "1.1") }}

#### 1.2 動画・音声に代替コンテンツを提供する

{{ scs.scList(collections.SC, "1.2") }}

#### 1.3 様々な方法・環境で利用できる

{{ scs.scList(collections.SC, "1.3") }}

#### 1.4 判別できる（見やすく、聞きやすく、区別しやすく）

{{ scs.scList(collections.SC, "1.4") }}

### 2. 操作可能

#### 2.1 キーボードで操作ができる

{{ scs.scList(collections.SC, "2.1") }}

#### 2.2 十分な時間がある

{{ scs.scList(collections.SC, "2.2") }}

#### 2.3 発作を防止する

{{ scs.scList(collections.SC, "2.3") }}

#### 2.4 ナビゲーションできる

{{ scs.scList(collections.SC, "2.4") }}

#### 2.5 入力方法

{{ scs.scList(collections.SC, "2.5") }}

### 3. 理解可能

#### 3.1 読みやすい

{{ scs.scList(collections.SC, "3.1") }}

#### 3.2 予測できる

{{ scs.scList(collections.SC, "3.2") }}

#### 3.3 入力しやすい、間違いにくい

{{ scs.scList(collections.SC, "3.3") }}

### 4. 堅牢性

#### 4.1 互換性を保つ

{{ scs.scList(collections.SC, "4.1") }}
