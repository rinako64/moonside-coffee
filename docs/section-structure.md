# セクション構造

## ナビゲーション

**ファイル位置**: `index.html` 冒頭  
**固定表示**: スクロールで背景が黒く変化

### HTML構造
```html
<nav id="nav">
  <div></div>                    <!-- 左側は空（ロゴはHEROに大きく配置） -->
  <div class="nav-links">
    <a href="#top">HOME</a>
    <a href="#instagram">INSTAGRAM</a>
    <a href="#concept">ABOUT US</a>
    <a href="#access">ACCESS</a>
  </div>
</nav>
```

---

## 1. HERO（トップビジュアル）

**ID**: `#top`  
**高さ**: 100vh（最低700px）  
**背景**: 画像2枚のスライドショー（6秒ごと）

### 要素
- 白抜きロゴ（画像）
- キャッチコピー「自家製焙煎コーヒーと...」
- CTAボタン（Menu / Access）
- スクロールインジケーター
- 下部の波（スクロール連動で揺れる）

### 画像切替の仕組み
```html
<div class="hero-bg hero-bg-1 active" id="heroBg1"></div>
<div class="hero-bg hero-bg-2" id="heroBg2"></div>
```
両方を重ねて置き、`active`クラスで表示制御（JSで切替）。

---

## 2. About us

**ID**: `#concept`  
**背景**: cream2  
**レイアウト**: 2カラム（左イラスト、右テキスト）

### 内容
- **タイトル**: About us.
- **サブタイトル**: 暮らしに寄り添う、コーヒーとベーグルを
- **本文**: 暮らしの一部になれたら...（ユーザー提供文章）
- **左側**: 男性と猫のイラスト（man-cat.png）

---

## 3. Gallery

**背景**: cream2  
**動き**: 4枚×2セット、40秒で左へ自動スクロール

### 使用画像
1. エスプレッソ抽出 (espresso-machine.jpg)
2. コーヒーを持つ手 (hands.jpg)
3. ベーグル (bagel.jpg)
4. 店内 (interior.jpg)

---

## 4. Instagram

**ID**: `#instagram`  
**背景**: white（#FAFAF6）  
**レイアウト**: 3カラムのグリッド

### 内容
- ヘッダー: @moonside2022
- タイトル: Instagram.
- フォローボタン → 実際のInstagramリンク
- 投稿3枚（現状はサンプル画像、将来 Smash Balloon で自動化）

---

## 5. Handmade Bagel

**ID**: `#bagel`  
**背景**: cream2  
**レイアウト**: 2カラム（**左テキスト、右画像**）

### 画像の特殊処理
左側がマスクでグラデーションフェード：
```css
-webkit-mask-image: linear-gradient(to right, transparent 0%, ...);
```
画像が背景から徐々に立ち上がる質感。

### 内容
- タイトル: Handmade Bagel.
- サブタイトル: 手ごね自家製ベーグル
- 本文: 毎日食べたいベーグル...（ユーザー提供文章）

---

## 6. Coffee

**ID**: `#menu`（※クラス名の名残。中身はCoffee）  
**背景**: cream  
**レイアウト**: 2カラム（左に大きな縦長写真、右テキスト）

### 内容
- **タイトル**: Coffee.
- **サブタイトル**: 自家焙煎コーヒーのこだわり
- **本文**: 半熱風式6kg焙煎機...（ユーザー提供文章）
- **左側**: エスプレッソマシン写真（espresso-machine.jpg、aspect-ratio 3/4）

---

## 7. Access

**ID**: `#access`  
**背景**: black  
**レイアウト**: 2カラム（左マップ、右情報）

### 内容
- **左**: 簡易マップ風SVG + ピン
- **右**: 住所・営業時間・定休日・TEL・駐車場・SNS
  - 〒356-0004 埼玉県ふじみ野市上福岡1-14-21
  - 火・水・木 6:30-14:00
  - 土・日・祝 8:30-15:00
  - 定休日: 月・金

### Notes欄
ユーザー指定の3つの注意書きを表示。

---

## 8. Footer

**背景**: black  
**レイアウト**: 2カラム

### 内容
- 左: ロゴ + ブランド説明 + SNS（IG / X / FB）
- 右: メニューリンク（Home / Instagram / About us / Access）
- 下部: コピーライト + 所在地

---

## セクション間の繋ぎ（波）

| 繋ぎ目 | 方式 |
|--------|------|
| HERO → About us | HERO内SVG波 |
| About us → Gallery | なし（同色cream2） |
| Gallery → Instagram | wave-scroll（スクロール連動） |
| Instagram → Bagel | 直線（波なし） |
| Bagel → Coffee | 直線（波なし） |
| Coffee → Access | wdiv-access（スクロール連動、白線除去済み） |
| Access → Footer | 直接接続（同色black） |

---

## 各セクションの登場アニメーション（.rv）

すべての主要要素に`class="rv"`が付与されている。

### 要素単位での付与場所
- sec-tag（ラベル）
- h2（タイトル）
- h2-jp（サブタイトル）
- concept-body（本文）
- コンテンツのメインビジュアル

### 遅延バリエーション
同じセクション内で複数要素をずらして登場させる場合：
```html
<div class="rv">要素A</div>       <!-- 0秒 -->
<div class="rv d1">要素B</div>    <!-- 0.15秒 -->
<div class="rv d2">要素C</div>    <!-- 0.3秒 -->
<div class="rv d3">要素D</div>    <!-- 0.45秒 -->
```
