/***********************************************
* App: djay Pro (Algoriddim)
* Function: Mở khóa gói Pro (RevenueCat Bypass)
* Dựa trên log API: api.revenuecat.com[cite: 1]
***********************************************/

const ua = $request.headers['User-Agent'] || $request.headers['user-agent'] || '';

if (ua.includes('djay')) {
    let body = {};
    try {
        body = JSON.parse($response.body);
    } catch (e) {
        // Nếu response không phải JSON hợp lệ thì bỏ qua
        $done({});
        return;
    }

    // Đảm bảo cấu trúc dữ liệu subscriber tồn tại
    if (!body.subscriber) {
        body.subscriber = {};
    }
    if (!body.subscriber.entitlements) {
        body.subscriber.entitlements = {};
    }
    if (!body.subscriber.subscriptions) {
        body.subscriber.subscriptions = {};
    }

    // Cấu hình quyền lợi Pro vĩnh viễn
    const proEntitlement = {
        "grace_period_expires_date": null,
        "purchase_date": "2024-01-01T00:00:00Z",
        "product_identifier": "com.algoriddim.djay.pro.sub.yearly",
        "expires_date": "2099-12-31T23:59:59Z"
    };

    const proSubscription = {
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "billing_issues_detected_at": null,
        "period_type": "normal",
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "unsubscribe_detected_at": null,
        "original_purchase_date": "2024-01-01T00:00:00Z",
        "purchase_date": "2024-01-01T00:00:00Z",
        "store": "app_store"
    };

    // Gán quyền Pro vào các trường dữ liệu của RevenueCat
    body.subscriber.entitlements["pro"] = proEntitlement;
    body.subscriber.subscriptions["com.algoriddim.djay.pro.sub.yearly"] = proSubscription;

    $done({ body: JSON.stringify(body) });
} else {
    $done({});
}
