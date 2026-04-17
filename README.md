# moon side coffee - Sample Website

埼玉県ふじみ野のカフェ「moon side coffee」のサンプルサイト。  
ココナラHP制作サービスのポートフォリオとして使用。

## 🚀 クイックスタート

```bash
# ローカルサーバーで起動（Python必須）
python3 -m http.server 8000

# ブラウザで開く
open http://localhost:8000
```

または、`index.html` をブラウザに直接ドラッグ＆ドロップでもOK。

## 📁 ファイル構成

```
moonside-coffee-project/
├── index.html                    # メインHTML
├── README.md                     # このファイル
├── css/
│   └── style.css                 # 全スタイル
├── js/
│   └── main.js                   # スクロール連動・波アニメ・HERO切替
├── assets/
│   ├── images/                   # 写真（7枚）
│   │   ├── coffee-top.jpg        # コーヒー上から
│   │   ├── espresso-machine.jpg  # エスプレッソ抽出中
│   │   ├── bagel.jpg             # ベーグル
│   │   ├── interior.jpg          # 店内（La Marzocco）
│   │   ├── hands.jpg             # コーヒーを持つ手
│   │   ├── exterior.jpg          # 外観
│   │   └── book-coffee.jpg       # 本とコーヒー
│   ├── logo/
│   │   ├── logo-white.png        # 白抜きロゴ（背景透過）★使用中
│   │   ├── logo-black.jpg        # 黒ロゴ（参考）
│   │   └── logo-black-bg.png     # 黒背景の白ロゴ（参考）
│   └── illustrations/
│       ├── man-cat.png           # 男性＋猫イラスト
│       ├── bagel-cursor-dark.png # ベーグルカーソル（暗色背景用）
│       └── bagel-cursor-white.png# ベーグルカーソル（黒背景用）
├── docs/
│   ├── design-system.md          # カラー・フォントの設計メモ
│   └── section-structure.md      # 各セクションの構造説明
└── sections/                      # （将来のリファクタ用。現状は空）
```

## 🎨 デザインシステム

### カラー
```css
--black:  #1C1410;  /* フッター、Access背景 */
--white:  #FAFAF6;  /* Instagram背景 */
--cream:  #F2EDE4;  /* ベースクリーム（Coffee背景）*/
--cream2: #E8E0D2;  /* セクション区切り */
--brown:  #7B5B47;  /* メインブラウン */
--brown2: #5C3D2C;  /* 濃いブラウン */
--latte:  #C4A882;  /* アクセント */
```

### フォント
- 英語: **DM Sans**（Google Fonts）
- 日本語: **Noto Sans JP**

## 🎬 主要な動的要素

1. **HERO画像スライドショー** (6秒ごとにフェード切替)
   - 1枚目: 外観写真
   - 2枚目: 店内カウンター写真

2. **波のスクロール連動アニメーション**
   - `.wiggle-svg` クラスの波がスクロール量に応じて揺れる

3. **セクション要素のふわり浮き出る登場演出**
   - `.rv` クラスが IntersectionObserver でトリガー
   - blur + scale + translateY の3要素で柔らかく登場

4. **カスタムカーソル**
   - 通常: 濃ブラウンのベーグル
   - 黒背景エリア: 白線画のベーグル

5. **ギャラリー横スクロール**
   - 4枚×2セットの画像が40秒周期で流れる
   - ホバーで停止

## 📝 セクション構成

| # | セクション | ID | 背景色 |
|---|-----------|------|------|
| 1 | HERO | `#top` | 画像 |
| 2 | About us | `#concept` | cream2 |
| 3 | Gallery | - | cream2 |
| 4 | Instagram | `#instagram` | white |
| 5 | Bagel | `#bagel` | cream2 |
| 6 | Coffee | `#menu` | cream |
| 7 | Access | `#access` | black |
| 8 | Footer | - | black |

## 🛠️ よくあるカスタマイズ

### 画像を差し替える
`assets/images/` 内のファイルを同じファイル名で上書き。

### 文章を変更する
`index.html` を直接編集。各セクションには目印コメント（`<!-- ABOUT -->`など）があります。

### カラーを変更する
`css/style.css` の `:root` セクションでCSS変数を変更すると全体に反映。

### HERO画像の切替間隔を変更
`js/main.js` の `setInterval(switchHeroBg, 6000)` の値（ミリ秒）を調整。

## 🌐 本番公開

### 静的ホスティング（無料枠あり）
- **Cloudflare Pages**: `wrangler pages deploy ./`
- **Netlify**: GitHubと連携 or フォルダをドラッグ&ドロップ
- **Vercel**: `vercel` コマンド

### WordPressに移植する場合
- [Smash Balloon Social Photo Feed](https://smashballoon.com/instagram-feed/) で Instagram自動連携
- `[instagram-feed num=3 cols=3]` で最新3枚を自動表示

## 📌 現在のバージョン

v22（2026-04-17時点）

## 📄 ライセンス

このサンプルサイトは「SEO Design Works」のポートフォリオとして制作。
画像・イラスト・ロゴは moon side coffee 様から提供いただいたもの。
