# 育兒簡單說 — 靜態網站專案說明

## 專案概述

「育兒簡單說（Parenting is Simple）」是一個親職教育諮詢服務的靜態官方網站，
使用 Bootstrap 5 作為 UI 框架，以繁體中文為主要語言。

---

## 技術規格

| 項目 | 說明 |
|------|------|
| UI 框架 | Bootstrap 5.3.3（CDN 引入） |
| 圖示庫 | Bootstrap Icons 1.11.3（CDN 引入） |
| 字型 | Noto Sans TC（Google Fonts CDN） |
| 自訂樣式 | `assets/css/custom.css` |
| 全域邏輯 | `assets/js/main.js` |
| 語言 | `zh-TW`（繁體中文） |
| 渲染方式 | 純靜態 HTML，無需後端或建置工具 |

---

## 資料夾結構

```
parentingissimple/
├── index.html              # 首頁
├── professional.html       # 專業介紹頁
├── service.html            # 服務項目頁
├── article.html            # 文章資源頁
├── contact.html            # 聯絡我們頁
│
├── assets/
│   ├── css/
│   │   └── custom.css      # 自訂樣式（覆蓋 Bootstrap 預設）
│   ├── js/
│   │   └── main.js         # 全域 JS 邏輯
│   ├── images/             # 圖片資源（放置 og-image.jpg 等）
│   └── fonts/              # 本地字型（需要時放置於此）
│
├── components/
│   ├── navbar.html         # 導覽列片段（供參考，不需 JS include）
│   └── footer.html         # 頁尾片段（供參考，不需 JS include）
│
└── README.md               # 本說明文件
```

---

## 各檔案說明

### HTML 頁面

| 檔案 | 用途 | 主要區塊 |
|------|------|----------|
| `index.html` | 網站首頁 | Hero、數據統計、特色介紹、服務預覽、關於我們、最新文章、見證分享、CTA |
| `professional.html` | 諮詢師介紹 | 個人簡介、資歷證照、核心理念、職涯時間軸 |
| `service.html` | 服務項目總覽 | 六大服務卡片、服務流程步驟、方案費用、常見問題 FAQ |
| `article.html` | 文章資源列表 | 分類篩選、精選文章、文章格線、分頁導覽、電子報訂閱 |
| `contact.html` | 聯絡預約頁 | 聯絡資訊卡片、預約表單（含驗證）、地圖佔位、服務時間表 |

### 資產檔案

#### `assets/css/custom.css`

覆蓋 Bootstrap 預設變數並定義專案設計系統：

- **CSS 變數（`:root`）**：主色 `#4A8FA3`、副色 `#F5A623`、強調色 `#68B984`，以及間距、圓角、陰影等設計 token
- **Bootstrap 主色覆蓋**：`.btn-primary`、`.text-primary`、`.bg-primary` 等
- **元件樣式**：Navbar（固定置頂 + 捲動陰影 + 底線 active 指示器）、Hero、統計數字、服務卡片、定價卡片、文章卡片、見證卡片、時間軸、頁尾、回頂部按鈕
- **捲動淡入動畫**：`[data-fade]` 屬性搭配 `IntersectionObserver`，支援 `data-delay="1~4"` 錯開動畫
- **響應式調整**：`768px` 以下的行動版最佳化

#### `assets/js/main.js`

採用 IIFE 封裝，避免全域污染：

| 函式 | 功能 |
|------|------|
| `setActiveNavLink()` | 比對 `pathname` 自動為當前頁的 nav-link 加上 `active` class |
| `initNavbarScroll()` | 捲動超過 30px 時為 `.navbar` 加上 `.scrolled`（觸發陰影） |
| `initBackToTop()` | 捲動超過 320px 時顯示 `#backToTop` 按鈕，點擊平滑回頂 |
| `initSmoothScroll()` | 攔截錨點連結（`href="#..."`），以 `scrollTo` 平滑捲動並補償 navbar 高度 |
| `initContactForm()` | `#contactForm` 的 Bootstrap 表單驗證 + 假送出（帶 spinner 與成功提示，替換為真實 fetch 即可） |
| `initFadeIn()` | 使用 `IntersectionObserver` 監看 `[data-fade]` 元素，進入視窗後加上 `.visible` |

### 元件片段（供參考）

`components/navbar.html` 和 `components/footer.html` 是獨立的 HTML 片段，
**僅作為開發參考**。各 HTML 頁面中直接內嵌相同的 navbar 與 footer 結構，
不使用 JS `fetch` 或伺服器端 include，確保純靜態部署相容性。

---

## HTML 頁面共用結構

每支 HTML 頁面均包含以下固定結構：

```html
<head>
  <!-- 基礎 meta -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="...">
  <meta name="keywords" content="...">

  <!-- Open Graph（SNS 分享預覽） -->
  <meta property="og:title" content="頁面標題 | 育兒簡單說">
  <meta property="og:description" content="...">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://parentingissimple.com/...">
  <meta property="og:image" content=".../assets/images/og-image.jpg">
  <meta property="og:site_name" content="育兒簡單說">
  <meta property="og:locale" content="zh_TW">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">

  <!-- CDN：Bootstrap 5 CSS + Bootstrap Icons + Google Fonts -->
  <!-- 自訂樣式 -->
  <link href="assets/css/custom.css" rel="stylesheet">
</head>
<body>
  <!-- Navbar（內嵌） -->
  <nav class="navbar ..."> ... </nav>

  <main>
    <!-- 各頁面獨立內容 -->
  </main>

  <!-- Footer（內嵌） -->
  <footer class="footer"> ... </footer>

  <!-- 回頂部按鈕 -->
  <button id="backToTop"> ... </button>

  <!-- CDN：Bootstrap 5 JS Bundle -->
  <!-- 自訂 JS -->
  <script src="assets/js/main.js"></script>
</body>
```

---

## 使用說明

### 本機預覽

直接在瀏覽器開啟 `index.html` 即可預覽（需有網路連線以載入 CDN 資源）。
如需完整模擬伺服器環境，建議使用：

```bash
# Python（內建）
python3 -m http.server 8080

# Node.js（安裝 serve 後）
npx serve .

# VS Code 擴充功能
# 安裝 Live Server 後按 Go Live
```

### 新增頁面

1. 複製任一現有 HTML 頁面作為起點
2. 更新 `<head>` 中的 `<title>`、`description`、OG tags
3. 保留 navbar 和 footer 的完整結構，不需修改
4. 更新 navbar 中對應頁面的 `nav-link`（active 狀態由 JS 自動處理）
5. 撰寫 `<main>` 內的頁面專屬內容

### 新增圖片

將圖片放置於 `assets/images/` 目錄，路徑參考方式：

```html
<img src="assets/images/your-image.jpg" alt="描述文字" width="400" height="300">
```

建議準備：
- `og-image.jpg`（1200×630px）：供 Open Graph 分享使用
- 各頁面文章封面圖、人物照片等

### 替換色系

修改 `assets/css/custom.css` 最上方的 CSS 變數即可全站換色：

```css
:root {
  --bs-primary: #4A8FA3;   /* 主色：可換為品牌色 */
  --bs-secondary: #F5A623; /* 副色 */
  --color-accent: #68B984; /* 強調色 */
}
```

### 啟用真實表單送出

`contact.html` 的表單目前為前端模擬，替換 `main.js` 中的 `setTimeout` 區塊為實際 API 呼叫：

```javascript
// 取代 setTimeout 區塊
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(Object.fromEntries(new FormData(form)))
})
.then(res => { /* 處理成功 */ })
.catch(err => { /* 處理錯誤 */ });
```

---

## 設計規範

| 項目 | 值 |
|------|-----|
| 主色（Primary） | `#4A8FA3` |
| 副色（Secondary） | `#F5A623` |
| 強調色（Accent） | `#68B984` |
| 深色（Dark） | `#2C3E50` |
| 文字色 | `#3D3D3D` |
| 淺底色 | `#F8FAFB` |
| 邊框色 | `#E4ECF0` |
| 主要字型 | Noto Sans TC / PingFang TC / Microsoft JhengHei |
| Navbar 高度 | 70px（行動版 62px） |
| 卡片圓角 | 14px |
| 過渡動畫 | 0.3s ease |

---

## 部署

本專案為純靜態檔案，可部署至任何靜態網頁托管服務：

- **GitHub Pages**：推送至 `gh-pages` 分支或 `docs/` 目錄
- **Netlify / Vercel**：直接連結 Git repository，零設定自動部署
- **傳統虛擬主機**：將所有檔案上傳至 `public_html/` 目錄  

---

*最後更新：2026-06-28*
