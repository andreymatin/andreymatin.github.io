# How to avoid Search Crawler via JavaScript

```javascript
if (!navigator.userAgent.match(/(bot|crawler)/i)) {
...
}
```