/**
 * 培兒蒂 Parenting is Simple - 線上預約表單後端
 *
 * 用途：接收 contact.html 預約表單送出的資料，寫入 Google Sheet，
 *       並回傳 JSON 格式的成功/失敗訊息給前端。
 *
 * 部署方式：
 *   1. 開啟你要儲存預約資料的 Google Sheet
 *   2. 上方選單「擴充功能」>「Apps Script」，打開此專案的程式碼編輯器
 *   3. 把這份檔案的內容整個貼進去（取代預設的 Code.gs）
 *   4. 點「部署」>「新增部署作業」，類型選「網頁應用程式」
 *      - 執行身分：我
 *      - 誰可以存取：任何人
 *   5. 部署後複製取得的網址，貼到 contact.html 的 GOOGLE_SHEET_WEB_APP_URL
 *
 * 詳細步驟請見同資料夾內的 README.md
 */

// 資料要寫入的工作表分頁名稱，若不存在會自動建立
const SHEET_NAME = '預約資料';

/**
 * 接收前端 POST 請求的進入點
 * 前端會以 JSON 字串當作 body 送出，格式範例：
 * {
 *   "parentName": "王小明",
 *   "email": "example@email.com",
 *   "phone": "0900-000-000",
 *   "childAge": "3-6 歲（學齡前期）",
 *   "services": ["發展評估", "感統訓練"],
 *   "concern": "孩子在學校比較坐不住..."
 * }
 */
function doPost(e) {
  try {
    const requestData = JSON.parse(e.postData.contents);

    // 後端二次驗證：避免有人略過前端直接呼叫這支 API 寫入空白/錯誤資料
    const parentName = (requestData.parentName || '').trim();
    const email = (requestData.email || '').trim();
    const phone = (requestData.phone || '').trim();

    if (!parentName || !email || !phone) {
      return buildJsonResponse({
        success: false,
        message: '必填欄位（家長姓名、電子郵件、聯繫電話）不可為空'
      });
    }

    if (!isValidEmail(email)) {
      return buildJsonResponse({
        success: false,
        message: '電子郵件格式不正確'
      });
    }

    const sheet = getOrCreateSheet();

    // 多選的服務項目是陣列，轉成逗號頓號分隔的字串，方便存入單一欄位
    const interestedServices = Array.isArray(requestData.services)
      ? requestData.services.join('、')
      : (requestData.services || '');

    // 寫入新的一列資料到工作表最下方
    sheet.appendRow([
      new Date(),                     // 送出時間
      parentName,                     // 家長姓名
      email,                          // 電子郵件
      phone,                          // 聯繫電話
      requestData.childAge || '',     // 孩子年齡
      interestedServices,             // 感興趣的服務
      requestData.concern || ''       // 關心的議題
    ]);

    return buildJsonResponse({
      success: true,
      message: '預約資料已成功送出'
    });

  } catch (error) {
    // JSON 解析失敗、試算表寫入失敗等未預期錯誤都會落在這裡
    return buildJsonResponse({
      success: false,
      message: '伺服器處理發生錯誤：' + error.message
    });
  }
}

/**
 * 取得目前綁定的試算表中，指定名稱的工作表分頁
 * 若該分頁不存在，會自動建立並加上標題列
 */
function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(['送出時間', '家長姓名', '電子郵件', '聯繫電話', '孩子年齡', '感興趣的服務', '關心的議題']);
  }

  return sheet;
}

/**
 * 簡易 Email 格式驗證
 */
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

/**
 * 統一組成 JSON 格式回應
 * 回傳純文字（MimeType.JSON）而非自訂 header，
 * 因為 Apps Script 網頁應用程式在「任何人」存取權限下，
 * Google 會自動處理跨網域請求所需的回應，前端不需額外設定即可讀取結果。
 */
function buildJsonResponse(dataObject) {
  return ContentService
    .createTextOutput(JSON.stringify(dataObject))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 選用：讓你可以直接用瀏覽器開啟部署網址來確認服務是否正常運作
 * （純測試用途，不影響表單送出功能）
 */
function doGet(e) {
  return buildJsonResponse({
    success: true,
    message: '培兒蒂預約表單服務運作中，請使用 POST 方式送出資料'
  });
}
