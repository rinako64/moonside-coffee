# Claude Code 作業ガイド

このファイルは、Claude Codeでこのプロジェクトを編集する際の指針です。

## 🎯 プロジェクトの目的

**moon side coffee（架空のカフェ）のサンプルサイト**を制作し、
ココナラでホームページ制作サービスを販売する際の**ポートフォリオ**として使用する。

## 📂 重要なファイルマップ

### 編集頻度が高いファイル（優先）

1. **`index.html`** - HTML構造・文章・セクション配置
2. **`css/style.css`** - デザイン・レイアウト・アニメーション
3. **`js/main.js`** - 動的な挙動（スクロール・波・切替）

### 編集頻度が低いファイル

- `assets/images/*` - 画像差し替え時のみ
- `assets/logo/*` - ロゴ変更時のみ
- `assets/illustrations/*` - イラスト・カーソル変更時のみ

## 🏗️ セクション構造

```
index.html の中で各セクションは以下の順に並んでいる：

<nav>                         ← ナビゲーション
<section class="hero">        ← HERO（画像スライドショー）
  + <svg class="hero-wave">   ← HERO下の波

<section class="concept">     ← About us
<!-- GALLERY -->              ← 横スクロールギャラリー
<div class="wave-scroll">     ← 波（Instagram前）
<section class="insta-sec">   ← Instagram
<section class="bagel-sec">   ← Handmade Bagel
<section class="menu-sec">    ← Coffee（※クラス名はmenu-secだが中身はCoffee）
<div class="wdiv-access">     ← 波（Access前）
<section class="access-sec">  ← Access
<footer>                      ← フッター
```

## 🎨 デザイン原則

### 絶対守るべきこと

1. **色のパレットを崩さない** - CSS変数 `--black/--white/--cream/--cream2/--brown/--brown2/--latte` だけを使う
2. **フォントを変えない** - DM Sans（英語）+ Noto Sans JP（日本語）
3. **セクション背景の連続性を意識** - 隣接セクションは同系色か波で繋ぐ
4. **波（.wiggle-svg）の幅は120%以上** - 揺れても端が切れないようにするため

### 避けるべきこと

- ❌ 絵文字をUI要素として使う（参考サイトはマットでおしゃれな路線）
- ❌ ゴシック以外の装飾フォント
- ❌ 鮮やかな原色
- ❌ 角張った角丸なしのデザイン（`border-radius`を使う）

## 🎬 アニメーションの仕組み

### スクロール連動の波
```js
// js/main.js 内
const allWaves = document.querySelectorAll('.wiggle-svg');
// scrollYに応じてtranslateXで左右に揺らす
```

- 波を追加する場合: SVGに `class="wiggle-svg"` を付ければ自動的に揺れる
- 波の親divは背景色を明示しておく（cream2, white, blackなど）

### ふわり登場アニメーション
```css
/* css/style.css 内 */
.rv { opacity: 0; transform: translateY(40px) scale(.96); filter: blur(4px); }
.rv.in { opacity: 1; transform: none; filter: blur(0); }
```

- 要素にクラス `rv` を追加するとスクロールで登場
- 遅延が必要な場合は `rv d1 / rv d2 / rv d3` を使う

### HERO画像スライドショー
```js
setInterval(switchHeroBg, 6000);  // 6秒ごと切替
```

## ✏️ よくある変更タスクと手順

### タスク1: 文章を変更する
→ `index.html` を直接編集。セクション名で検索（例: `<!-- ABOUT -->`、`<section class="insta-sec">`）

### タスク2: 画像を差し替える
→ `assets/images/` に同名で上書き。HTMLの`<img src>`は変更不要。

### タスク3: セクションを追加する
1. `index.html` の適切な位置に `<section>` を追加
2. `css/style.css` に対応するスタイル追加
3. 上下のセクション背景と合うように波（`wiggle-svg`）を挟む
4. 内部の要素に `class="rv"` を付けて登場アニメ有効化
5. ナビとフッターのメニューリンクも追加

### タスク4: 色を変える
→ `css/style.css` の `:root { --... }` で一括変更

### タスク5: 動作確認する
```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## 🐛 よくある不具合と対処

| 症状 | 原因 | 対処 |
|------|------|------|
| サイトが途中で切れる | div開き/閉じの不整合 | タグをカウントして確認 |
| 波が左から棒のように出る | wiggle-svgのwidthが100%のまま | widthを120%に、left: -10%を追加 |
| カーソルが消える | 黒背景エリアで暗色カーソル使用 | `bagel-cursor-white.png` を適用するCSSが効いているか確認 |
| HERO画像が切り替わらない | `id="heroBg1"` `id="heroBg2"` が存在するか | JSのgetElementByIdが返すか確認 |
| アニメーションが動かない | `.rv` に `.in` が付与されない | IntersectionObserverの設定確認 |

## 🔄 バージョン管理の提案

このプロジェクトをGitで管理する場合：

```bash
cd moonside-coffee-project
git init
git add .
git commit -m "Initial commit: moon side coffee sample site v22"
```

`.gitignore` 例：
```
node_modules/
.DS_Store
*.log
```

## 🚀 ココナラサービスへの組み込み

このサンプルサイトは以下に活用：

1. **サービスページのサムネイル** - スクリーンショットを撮影
2. **サービスページ内の制作例** - 「こういうサイトが作れます」のデモ
3. **商談時のポートフォリオ** - URLを見せて実際の動きを提示

## 💡 将来の拡張案

- [ ] Instagram API連携で最新投稿を自動表示（Smash Balloon推奨）
- [ ] お問い合わせフォームの追加
- [ ] 予約システム埋め込み
- [ ] 多言語対応（英語版の用意）
- [ ] 高解像度画像のWebP化でさらに軽量化
- [ ] 画像のlazy loading（既にloading="lazy"適用済み）
