// BUY HÀO NGUYỄN
const now = new Date();
const nowIso = now.toISOString();
const nowMs = now.getTime();

// Dữ liệu giả lập RevenueCat chuẩn
const obj = {
  "request_date": nowIso,
  "request_date_ms": nowMs,
  "subscriber": {
    "entitlements": {
      "pro": {
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.algoriddim.djay.pro.yearly",
        "purchase_date": "2024-01-01T00:00:00Z"
      }
    },
    "first_seen": "2024-01-01T00:00:00Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "original_app_user_id": "$RCAnonymousID:djay_pro_user",
    "original_application_version": "1.0",
    "original_purchase_date": "2024-01-01T00:00:00Z",
    "other_purchases": {},
    "subscriptions": {
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
    }
  }
};

$done({ body: JSON.stringify(obj) });
