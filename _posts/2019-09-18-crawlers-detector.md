---
layout: post
title: "How to avoid Search Crawler via JavaScript"
date: 2019-08-03 03:14
tags: [javascript, bot, crawler]
---

```javascript
if (!navigator.userAgent.match(/(bot|crawler)/i)) {
...
}
```