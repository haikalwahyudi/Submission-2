let webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BDekdwUkggY8MSaL50-zAmBttRARMbfgUMR9fgTQxitTjd0AxNtclZ9qMkRCKm9SRC1hJ6s7ONZr9Plk1Izs5_A",
    "privateKey": "as_Lajo6wJY2QAfjUd7aYwFPk0XE-7c3RsYaXKn1ab4"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eeZAugA_8ZA:APA91bFKAkg4LmhlfOpbX-r532zJt9WMerGkp5bgpnCupDJp0y598YKwSmrc3TAzv8NAOSnyBqDQ1pay8Mf8hJNL8rIn4nrAuHKr-IJwbNrlqJiWqvkcdXIBm92POUPVTXZS4zQIRR2N",
    "keys": {
        "p256dh": "BCS9vuUnhBpHmHOsN1Lh6YAA4WFOqsm26C9PCkTGnLlV2hM6AI9M9YW82uPvW9O/3fo8LoIV6Vobgb9q7NxeWPM=",
        "auth": "W7KKBYX7yXKojKAcXwzWKw=="
    }
};
const payload = 'Selamat datang di WEB PWA Football Club';

const options = {
    gcmAPIKey: '567908731702',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);