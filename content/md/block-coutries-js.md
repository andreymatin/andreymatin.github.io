---
title: "Block guests by countries via JavaScript without API requests"
date: 2019-09-27 18:18
date-update: 2021-03-29 01:06
tags: [javascript, gist]
---

It's a light solution for blocking guest based on client-side javascript

1. Detect Browser's Language
2. Check detection results by blocked list
3. Show or hide page content.

```javascript
window.onload = function () {

  const navLang = navigator.language;
  let showContent = true;

  // Blocked coutries code list
  const blocked_countries = ['c1', 'c2', 'c3'];

  // Show initially hidden styles
  const hiddenStyles = `
  .container {
       display: block;
  }
`;

  // Check List
  blocked_countries.map(function (item) {
    if (navLang.toLowerCase().includes(item)) {
      showContent = false;
    }
  })


  /* Function to add style element */
  function addStyle(styles) {

    /* Create style document */
    var css = document.createElement('style');
    css.type = 'text/css';

    if (css.styleSheet) {
      css.styleSheet.cssText = styles;
    } else {
      css.appendChild(document.createTextNode(styles));
    }

    /* Append style to the tag name */
    document.getElementsByTagName("head")[0].appendChild(css);
  }

  /**
   * Hide content
   */
  function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

  if (showContent) {
    addStyle(hiddenStyles);
  } else {
    removeElementsByClass('container');
  }

}

```
