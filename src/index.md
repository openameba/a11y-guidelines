---
pageType: default
layout: index
isTop: true
---

<!-- タイトル直下の caption(.Lead)。概要・適合レベルとは等は /about/ に移設し、
トップは達成基準のチェックリストが 1st View に入る構成にしている -->
<p class="Lead">
WCAG2.1に記載の項目のうち、Amebaブランドのサービスで準拠すべき項目。（※WCAG2.1の項目は、追加作業中）<br>
本ガイドラインの目的と適合レベルについては<a href="/about/">「このガイドラインについて」</a>を参照。
</p>

<!-- 目次をランドマーク化(1.3.1)。見出し「目次」は廃止したため、
領域の名前は aria-label で担保する -->
<nav aria-label="目次">

{% import 'macros/successCriteriaList.njk' as scs with context %}

## 1. 知覚可能

### 1.1 代替テキストを提供する

{{ scs.scList(collections.SC, "1.1") }}

### 1.2 動画・音声に代替コンテンツを提供する

{{ scs.scList(collections.SC, "1.2") }}

### 1.3 様々な方法・環境で利用できる

{{ scs.scList(collections.SC, "1.3") }}

### 1.4 判別できる（見やすく、聞きやすく、区別しやすく）

{{ scs.scList(collections.SC, "1.4") }}

## 2. 操作可能

### 2.1 キーボードで操作ができる

{{ scs.scList(collections.SC, "2.1") }}

### 2.2 十分な時間がある

{{ scs.scList(collections.SC, "2.2") }}

### 2.3 発作を防止する

{{ scs.scList(collections.SC, "2.3") }}

### 2.4 ナビゲーションできる

{{ scs.scList(collections.SC, "2.4") }}

### 2.5 入力方法

{{ scs.scList(collections.SC, "2.5") }}

## 3. 理解可能

### 3.1 読みやすい

{{ scs.scList(collections.SC, "3.1") }}

### 3.2 予測できる

{{ scs.scList(collections.SC, "3.2") }}

### 3.3 入力しやすい、間違いにくい

{{ scs.scList(collections.SC, "3.3") }}

## 4. 堅牢性

### 4.1 互換性を保つ

{{ scs.scList(collections.SC, "4.1") }}

</nav>
