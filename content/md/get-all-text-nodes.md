---
layout: post
title: "How to get all text nodes except empty via JavaScript"
date: 2019-09-25 17:52
tags: [javascript]
---

```javascript
    /**
     * Get Text Nodes
     */
    function getTextNodes() {
      let walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
      let node = walk.firstChild();
      let nodesList = [];

      // Node traverse
      while (node) {

        // Add not empty text node
        if (node.nodeValue.replace(/\u00a0/g, 'x').trim().length != 0) {
          nodesList.push(node);
        }

        node = walk.nextNode();
      }

      return nodesList;
    }

    let nod = getTextNodes();

```
