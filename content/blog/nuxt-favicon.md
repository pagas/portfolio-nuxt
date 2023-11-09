---
title: Nuxt favicon
description: Nuxt favicon
date: 2023-11-09
cover: nuxt.png
tags:
  - nuxt
  - favicon
---

# Nuxt favicon

- All modern browsers (tested with Chrome 4, Firefox 3.5, IE8, Opera 10 and Safari 4) will always request a favicon.ico unless you've specified the icon via \<link\>.

```html
<link rel="icon" href="favicon.ico" />
```

- ICOs and PNGs both allow full alpha channel based transparency
- ICO allows for backwards compatibility to older browsers (e.g. IE6)
- PNG probably has broader tooling support for transparency, but you can find tools to create alpha-channel ICOs as well
- icon size should be 32x32

## Nuxt by default request favicon icon from

```./public/favicon.ico```

## Or you can update it in nuxt config

```ts
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    rel: 'icon',
                    href: './images/gear.png', // public directory
                }
            ]
        }
    },
})
```