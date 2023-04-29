---
layout: "../../layouts/PostLayout.astro"
title: CSS At-Rules
date: 2023-04-26
author: Anna Dixon
image: { src: "/images/post-6.jpg", alt: "A picture of a coder" }
description: CSS at-rules are special statements that start with an `@` sign and provide instructions to the CSS engine on how to behave or perform certain tasks.
draft: false
category: css
---

## CSS At-Rules

CSS at-rules are special statements that start with an `@` sign and provide instructions to the CSS engine on how to behave or perform certain tasks. They can be used for various purposes, such as importing other style sheets, defining custom fonts, creating animations, applying conditional styles, and more.

There are different types of at-rules, each with its own syntax and functionality. Some at-rules follow a simple structure of `@keyword rule;`, while others have a block of nested statements enclosed in curly braces `{}`.

In this post, we will look at some of the most common and useful at-rules in CSS and how to use them.

### @import

The `@import` rule allows you to import another style sheet into the current one. It must be placed at the top of the file, before any other rules. You can specify the URL of the style sheet to import, optionally followed by a media query to limit its scope.

For example:

```css
@import url("global.css");
@import url("print.css") print;
```

The first line imports the `global.css` file and applies it to all media types. The second line imports the `print.css` file and applies it only when printing.

### @charset

The `@charset` rule specifies the character encoding of the style sheet. It must be placed at the very top of the file, before any other rules or comments. It can only have one value, which is a string representing the encoding name.

For example:

```css
@charset "UTF-8";
```

The above line indicates that the style sheet uses UTF-8 encoding, which supports a wide range of characters from different languages and scripts.

### @font-face

The `@font-face` rule allows you to define a custom font that can be downloaded and used on your web pages. It has a block of statements that describe various aspects of the font, such as its name, source, format, weight, style, etc.

For example:

```css
@font-face {
  font-family: "MyWebFont";
  src: url("myfont.woff2") format("woff2"), url("myfont.woff") format("woff");
  font-weight: bold;
  font-style: italic;
}
```

The above rule defines a font named "MyWebFont" that can be referenced by other rules using the `font-family` property. It specifies two sources for the font file, one in WOFF2 format and one in WOFF format, and indicates their respective formats using the `format()` function. It also sets the font weight to bold and the font style to italic.

### @keyframes

The `@keyframes` rule defines a set of keyframes for an animation. A keyframe is a point in the animation where you specify the values of the properties you want to animate. You can use percentages or keywords (`from`, `to`) to mark the keyframes.

For example:

```css
@keyframes pulse {
  0% {
    background-color: #001f3f;
  }
  100% {
    background-color: #ff4136;
  }
}
```

The above rule defines an animation named "pulse" that changes the background color from dark blue to bright red. It has two keyframes: one at 0% (or `from`) and one at 100% (or `to`). You can use this animation on any element by using the `animation` property or its sub-properties.

### @media

The `@media` rule allows you to apply different styles depending on the media type or features of the device or browser. It has a block of nested statements that are only applied if the media query evaluates to true.

For example:

```css
@media (max-width: 600px) {
  .container {
    width: 100%;
    margin: 0 auto;
  }
}
```

The above rule applies a different style for elements with class `.container` when the viewport width is less than or equal to 600 pixels. It sets their width to 100% and centers them horizontally.

There are many other at-rules in CSS, such as `@supports`, `@page`, `@namespace`, etc. You can learn more about them on [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule).
