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

{% import 'macros/successCriteriaList.njk' as scs with context %}

### 1. 知覚可能

#### 1.1 代替テキストを提供する

{{ scs.scList(collections.sc, "1.1")}}

#### 1.2 動画・音声に代替コンテンツを提供する

{{ scs.scList(collections.sc, "1.2")}}

#### 1.3 様々な方法・環境で利用できる

{{ scs.scList(collections.sc, "1.3")}}

#### 1.4 判別できる（見やすく、聞きやすく、区別しやすく）

{{ scs.scList(collections.sc, "1.4")}}

### 2. 操作可能

#### 2.1 キーボードで操作ができる

{{ scs.scList(collections.sc, "2.1")}}

#### 2.2 十分な時間がある

{{ scs.scList(collections.sc, "2.2")}}

#### 2.3 発作を防止する

{{ scs.scList(collections.sc, "2.3")}}

#### 2.4 ナビゲーションできる

{{ scs.scList(collections.sc, "2.4")}}

#### 2.5 入力方法

{{ scs.scList(collections.sc, "2.5")}}

### 3. 理解可能

#### 3.1 読みやすい

{{ scs.scList(collections.sc, "3.1")}}

#### 3.2 予測できる

{{ scs.scList(collections.sc, "3.2")}}

#### 3.3 入力しやすい、間違いにくい

{{ scs.scList(collections.sc, "3.3")}}

### 4. 堅牢性

#### 4.1 互換性を保つ

{{ scs.scList(collections.sc, "4.1")}}
