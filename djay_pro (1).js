// BUY HÀO NGUYỄN
const now = new Date();
const nowIso = now.toISOString();
const nowMs = now.getTime();


if ($response && $response.body) {
  try {
    let obj = JSON.parse($response.body);
    
    // Khởi tạo đối tượng subscriber nếu chưa có
    obj.subscriber = obj.subscriber || {};
    obj.subscriber.entitlements = obj.subscriber.entitlements || {};
    obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};

    // Gán quyền Pro
    obj.subscriber.entitlements["pro"] = {
      "expires_date": "2099-12-31T23:59:59Z",
      "grace_period_expires_date": null,
      "product_identifier": "com.algoriddim.djay.pro.yearly",
      "purchase_date": "2024-01-01T00:00:00Z"
    };

    // Gán thông tin gói đăng ký Pro
    obj.subscriber.subscriptions["com.algoriddim.djay.pro.yearly"] = {
      "auto_resume_date": null,
      "billing_issues_detected_at": null,
      "expires_date": "2099-12-31T23:59:59Z",
      "grace_period_expires_date": null,
      "is_sandbox": false,
      "original_purchase_date": "2024-01-01T00:00:00Z",
      "ownership_type": "PURCHASED",
      "period_type": "normal",
      "purchase_date": "2024-01-01T00:00:00Z",
      "refunded_at": null,
      "store": "app_store",
      "store_transaction_id": "1000000123456789",
      "unsubscribe_detected_at": null
    };

    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    $done({});
  }
} else {
  $done({});
}
