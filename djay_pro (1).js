// BUY HÀO NGUYỄN - UPDATED FOR NEW REVENUECAT API
const now = new Date();
const nowIso = now.toISOString();

if ($response && $response.body) {
  try {
    let obj = JSON.parse($response.body);
    
    // Cấu trúc bổ sung cho API mới (Sửa đổi trực tiếp ở tầng gốc hoặc tầng subscriber)
    const entitlementsData = {
      "pro": {
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.algoriddim.djay.pro.yearly",
        "purchase_date": "2024-01-01T00:00:00Z"
      }
    };

    const subscriptionsData = {
      "com.algoriddim.djay.pro.yearly": {
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
      }
    };

    // 1. Gán cho cấu trúc API Cũ (Nếu app vẫn gọi cổng cũ)
    if (obj.subscriber) {
      obj.subscriber.entitlements = Object.assign(obj.subscriber.entitlements || {}, entitlementsData);
      obj.subscriber.subscriptions = Object.assign(obj.subscriber.subscriptions || {}, subscriptionsData);
    }
    
    // 2. Gán cho cấu trúc API Mới (Dành cho bản v5.6.x mới)
    if (obj.entitlements || obj.subscriptions) {
      obj.entitlements = Object.assign(obj.entitlements || {}, entitlementsData);
      obj.subscriptions = Object.assign(obj.subscriptions || {}, subscriptionsData);
    } else {
      // Ép tạo mới nếu gói tin trả về trống
      obj.entitlements = entitlementsData;
      obj.subscriptions = subscriptionsData;
    }

    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    $done({});
  }
} else {
  $done({});
}
