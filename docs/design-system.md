# デザインシステム

## カラーパレット

| 用途 | 変数名 | カラーコード | 見た目 |
|------|-------|------------|--------|
| 最暗 | `--black` | `#1C1410` | 黒＋わずかにブラウン |
| 白 | `--white` | `#FAFAF6` | 純白よりやや温かい |
| ベース | `--cream` | `#F2EDE4` | クリーム |
| セクション2 | `--cream2` | `#E8E0D2` | 少し濃いクリーム |
| メインブラウン | `--brown` | `#7B5B47` | マットな茶色 |
| 濃ブラウン | `--brown2` | `#5C3D2C` | ダークブラウン |
| アクセント | `--latte` | `#C4A882` | ラテ色 |
| サブアクセント | `--latte2` | `#A68860` | 濃いラテ |

### 色の使い分け

- **黒背景**: Accessセクション、Footer、ホバー時の暗転
- **白背景**: Instagramセクションのみ
- **cream**: ベース（Coffeeセクション）
- **cream2**: About us、Gallery、Bagelセクション
- **brown/brown2**: テキスト・見出し・ボタン
- **latte**: アクセント（「Today's Beans」のピル、装飾線）

## タイポグラフィ

### フォント選定

```css
--font-display: 'DM Sans', sans-serif;    /* 英語見出し */
--font-body:    'Noto Sans JP', sans-serif; /* 日本語本文 */
```

### ウェイト
- 見出し（h1, h2）: 300（Light / Italic も）
- 本文: 300, 400
- 強調: 500

### サイズ規則
- HERO h1: 72px
- セクション h2: 44-46px
- 本文: 13px
- タグラベル: 10-11px（letter-spacing大き目）

## 余白設計

- セクション内padding: 100px 80px（デスクトップ）
- セクション間: 波区切り または cream2→white のコントラスト
- カード内padding: 22-28px
- 要素間ギャップ: 8px（密）、16px（標準）、24px（ゆったり）

## 角丸

- `--border-radius-sm`: 6px（ボタン・タグ）
- `--border-radius-md`: 12-16px（カード小）
- `--border-radius-lg`: 20-24px（カード大、画像）
- フル丸: 50%（アイコン）、40px（ピル型ボタン）

## 動きの法則

### Easing
`cubic-bezier(0.22, 1, 0.36, 1)` - ease-out の品のよい版

### Duration
- マイクロインタラクション: 0.3s
- 要素登場: 1.2s
- 背景切替: 2s
- ギャラリースライド: 40s（1周）

### Delay階層
- `.d1`: 0.15s
- `.d2`: 0.3s  
- `.d3`: 0.45s
- `.d4`: 0.6s

## 画像処理

### フィルター
すべての写真に `filter: saturate(.85)` を適用。
マットで落ち着いた印象を統一。

### ホバー時
`filter: saturate(1) brightness(1)` + `transform: scale(1.04-1.06)`

## 波（SVG Wave）の設計原則

1. **幅は必ず120%**、`left: -10%` または `margin-left: -10%`
2. **class="wiggle-svg"** を付けてスクロール連動
3. **親divに明示的な background-color** を設定
4. `margin-bottom: -1px` で次セクションとの隙間を消す
5. path は `0,80 → ... → 1440,80 → 0,80 Z` で下端を完全にfillで塗る

### 波の使用箇所

| 位置 | 親背景 | path fill |
|------|--------|----------|
| HERO下 | (hero内部) | cream2 |
| Gallery→Instagram | cream2 | white |
| Bagel→Coffee（現状なし） | - | - |
| Coffee→Access | cream | black |
| Footer直上 | cream | black |
