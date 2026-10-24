// Script Mock Response cho djay Pro (RevenueCat)
const obj = {
  "request_date": "2026-01-01T00:00:00Z",
  "request_date_ms": 1767225600000,
  "subscriber": {
    "entitlements": {
      "pro": {
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.algoriddim.djay.pro.yearly",
        "purchase_date": "2026-01-01T00:00:00Z"
      }
    },
    "original_app_user_id": "djay_pro_user",
    "original_application_version": "1.0",
    "original_purchase_date": "2026-01-01T00:00:00Z",
    "subscriptions": {
      "com.algoriddim.djay.pro.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-12-31T23:59:59Z",
        "is_sandbox": false,
        "original_purchase_date": "2026-01-01T00:00:00Z",
        "period_type": "normal",
        "purchase_date": "2026-01-01T00:00:00Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
};

$done({ body: JSON.stringify(obj) });
