---
layout: "../../layouts/PostLayout.astro"
title: How to start with CSS
date: 2023-04-20
author: Darnell McClure
image: { src: "/images/post-1.jpg", alt: "A picture of a coder" }
description: CSS stands for Cascading Style Sheets and it is the language we use to style an HTML document.
draft: false
category: css
---

## How to start with CSS

CSS stands for Cascading Style Sheets and it is the language we use to style an HTML document. CSS describes how HTML elements should be displayed on the web page. In this post, I will show you some basic steps to start using CSS in your web projects.

### Linking CSS to HTML

The first thing we need to do is to tell the HTML document that we have some CSS rules we want it to use. There are different ways to apply CSS to an HTML document, but the most common and recommended way is to link a separate CSS file from the head of the HTML document.

To do that, we need to create a file with the `.css` extension and save it in the same folder as our HTML document. For example, we can name it `styles.css`. Then, we need to add a `<link>` element inside the `<head>` of the HTML document, like this:

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

This tells the browser that we have a stylesheet, using the `rel` attribute, and the location of that stylesheet as the value of the `href` attribute.

### Styling HTML elements

Now that we have linked our CSS file to our HTML document, we can start writing some CSS rules to style our HTML elements. A CSS rule consists of a selector and a declaration block. The selector specifies which element or elements we want to style, and the declaration block contains one or more declarations that define how to style them. Each declaration consists of a property and a value, separated by a colon and ending with a semicolon.

For example, if we want to make all `<h1>` elements red, we can write this rule in our `styles.css` file:

```css
h1 {
  color: red;
}
```

The selector is `h1`, which means it will apply to all `<h1>` elements in the HTML document. The declaration block is enclosed by curly braces and contains one declaration: `color: red;`. The property is `color`, which specifies the text color of the element, and the value is `red`, which is one of the predefined color names in CSS.

We can add more declarations to the same rule, or write more rules for different selectors, depending on what we want to achieve. For example, if we want to change the font family and size of all `<p>` elements, we can write this rule:

```css
p {
  font-family: verdana;
  font-size: 20px;
}
```

The selector is `p`, which means it will apply to all `<p>` elements in the HTML document. The declaration block contains two declarations: `font-family: verdana;` and `font-size: 20px;`. The property `font-family` specifies the font name or family of the element, and the value `verdana` is one of the generic font families in CSS. The property `font-size` specifies the size of the font in pixels, and the value `20px` means 20 pixels.

### Learning more about CSS

There are many more things you can do with CSS, such as adding colors, backgrounds, borders, margins, padding, alignment, positioning, layout, animation, and more. To learn more about CSS, you can check out some online resources such as:

- [Getting started with CSS | MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)
- [CSS Tutorial | w3schools](https://www.w3schools.com/css/default.asp)
- [Starting with HTML + CSS](https://www.w3.org/Style/Examples/011/firstcss.en.html)
