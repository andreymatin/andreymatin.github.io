---
layout: post
title: "How to avoid Search Crawler via JavaScript"
date: 2019-09-18 18:03
tags: [javascript, bot, crawler]
---

```javascript
if (!navigator.userAgent.match(/(bot|crawler)/i)) {
...
}
```
