---
layout: post
title: "PWA development: short notes"
date: 2019-08-03 03:14
tags: [javascript, pwa]
---


# I. Setup

## OpenSSL

Windows Download Page:
https://slproweb.com/products/Win32OpenSSL.html

General troubleshooting:
https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate/47646463#47646463

Shell Commands:

```
openssl genrsa -out rootCA.key 4096
openssl req -x509 -new -nodes -key rootCA.key -newkey rsa:4096 -sha256 -days 1024 -out rootCA.pem
openssl req -new -newkey rsa:4096 -sha256 -nodes -keyout device.key -out device.csr
openssl x509 -req -in device.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out device.crt -days 2000 -sha256 -extfile v3.ext
```

v3.ext file:

```
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
[alt_names]
DNS.1 = localhost
IP.1 = 192.168.0.2
IP.2 = 127.0.0.1
```

## Chrome

- Certificate manipulations [install / accept]

## Gulp


```javascript
  /**
   * WebServer
   */
  function webServer() {
    connect.server({
      host: '0.0.0.0',
      root: './html/',
      port: 3000,
      livereload: true,
      https: {
        key: fs.readFileSync('E:\\Server\\https\\server.key'),
        cert: fs.readFileSync('E:\\Server\\https\\server.crt')
      }
    });
  }
```

## VSC

.vscode/settings.json

```json
{
  "liveServer.settings.https": {
  "enable": true,
  "cert": "E:\\Server\\https\\server.crt",
  "key": "E:\\Server\\https\\server.key",
  "passphrase": "https"
  }
}
```

## WAMP / Apache

httpd.conf:

```
LoadModule ssl_module modules/mod_ssl.so
Include conf/extra/httpd-ssl.conf
LoadModule socache_shmcb_module modules/mod_socache_shmcb.so
```

httpd-ssl.conf:

```
SSLCertificateFile "${SRVROOT}/conf/key/certificate.crt"
SSLCertificateKeyFile "${SRVROOT}/conf/key/private.key"
```


# II. Scri

## Testing

- Chrome Lighthouse
- https://www.pwabuilder.com/

## Cache

- manifest
- install
- fetch

## Push API
- https://www.izooto.com/how-web-push-api-works
- https://developers.google.com/web/fundamentals/codelabs/push-notifications/
- https://flaviocopes.com/push-api/


# IV. Information Resources

- https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
- https://serviceworke.rs/push-subscription-management_index_doc.html
- https://www.pwabuilder.com/serviceworker
- https://codelabs.developers.google.com/codelabs/your-first-pwapp/#0
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
- https://vaadin.com/tutorials/learn-pwa/turn-website-into-a-pwa
