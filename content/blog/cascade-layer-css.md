---
title: Cascade CSS Layer
description: Cascade CSS Layer
date: 2023-09-11
cover: css-blue-icon.webp
tags:
  - css
---
# Cascade CSS Layer  👋🏻

Layers allow you to group your CSS code together to ignore selector specificity outside of that layer. Everything in one layer is going to only concern itself with what is in that layer, and everything in another layer is going to concern itself with things in that layer. And you can define the order of the layers, to figure out how things override. 

CSS Layers have their own specificity and selectors specificity outside of those layers is not taken into account.

**User Agent Stylesheet layer** a default browser layer.  
**Author layer** - custom CSS developer writes. 

```css
@layer utilities {
    .p-1 {
        padding: 1rem;
    }
}
```

## Specify exact layer order you want, not the order they are defind in the file

```css
@layer base, utilities;
```

## Import css framework in specific layer

```css
@import url('https://cdn/bootstrap.min.css') layer(frameowrk);
```

## Nesting layers
```css
@layer utilities {
    @layer anotherLayer {
        .btn {
            padding: 2rem;
        }
    }
    .p-1 {
        padding: 1rem;
    }
}
/** OR */
@layer utilities.anotherLayer {
    .btn {
        padding: 2rem;
    }
}

```