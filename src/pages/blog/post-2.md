---
layout: "../../layouts/PostLayout.astro"
title: Introduction to CSS Selectors
date: 2023-04-25
author: Victoria Greenfelder
image: { src: "/images/post-2.jpg", alt: "A picture of a coder" }
description: Selectors are patterns that we use to select the HTML elements that we want to style with CSS.
draft: true
category: css
---

## Introduction to CSS Selectors

Selectors are patterns that we use to select the HTML elements that we want to style with CSS. Selectors are very important because they allow us to apply different styles to different elements based on their attributes, relationships, states, and more. In this post, I will show you some of the most common and useful selectors in CSS and how to use them.

### Basic selectors

Basic selectors are the simplest and most common selectors in CSS. They allow us to select elements based on their name, id, class, or attribute.

- **Type selector**: This selector matches all elements that have the given node name. For example, `p` will select all `<p>` elements in the document.
- **ID selector**: This selector matches the element that has the given id attribute. There should be only one element with a given id in a document. For example, `#header` will select the element that has `id="header"`.
- **Class selector**: This selector matches all elements that have the given class attribute. An element can have more than one class. For example, `.intro` will select all elements that have `class="intro"`.
- **Attribute selector**: This selector matches all elements that have the given attribute, or have the given attribute with a specific value or a value that contains a certain substring. For example, `[href]` will select all elements that have the `href` attribute, and `[href^="https"]` will select all elements that have the `href` attribute with a value that starts with "https".

### Combinator selectors

Combinator selectors are selectors that combine two or more simple selectors using a combinator symbol. They allow us to select elements based on their relationship with other elements.

- **Descendant combinator**: This selector matches all elements that are descendants of another element. A descendant is an element that is nested inside another element, directly or indirectly. The descendant combinator is represented by a space. For example, `div p` will select all `<p>` elements that are inside a `<div>` element.
- **Child combinator**: This selector matches all elements that are direct children of another element. A child is an element that is nested directly inside another element, without any other element in between. The child combinator is represented by a greater-than sign (`>`). For example, `ul > li` will select all `<li>` elements that are directly inside a `<ul>` element.
- **General sibling combinator**: This selector matches all elements that are siblings of another element. Siblings are elements that share the same parent element. The general sibling combinator is represented by a tilde (`~`). For example, `h1 ~ p` will select all `<p>` elements that are siblings of an `<h1>` element.
- **Adjacent sibling combinator**: This selector matches all elements that are adjacent siblings of another element. Adjacent siblings are elements that share the same parent element and are placed immediately after each other. The adjacent sibling combinator is represented by a plus sign (`+`). For example, `h1 + p` will select the first `<p>` element that is placed immediately after an `<h1>` element.

### Pseudo-class selectors

Pseudo-class selectors are selectors that match elements based on their state or position in the document. Pseudo-classes are preceded by a colon (`:`). There are many pseudo-classes in CSS, but here are some of the most common ones:

- **:hover**: This selector matches an element when the user hovers over it with the mouse cursor. For example, `a:hover` will select all `<a>` elements when the user hovers over them.
- **:active**: This selector matches an element when it is activated by the user. For example, `button:active` will select all `<button>` elements when they are clicked or pressed by the user.
- **:focus**: This selector matches an element when it has focus. Focus means that the element can receive user input, such as typing or clicking. For example, `input:focus` will select all `<input>` elements when they have focus.
- **:first-child**: This selector matches an element when it is the first child of its parent element. For example, `p:first-child` will select all `<p>` elements that are the first child of their parent element.
- **:last-child**: This selector matches an element when it is the last child of its parent element. For example, `p:last-child` will select all `<p>` elements that are the last child of their parent element.
- **:nth-child(n)**: This selector matches an element when it is the nth child of its parent element, according to a formula. The formula can be a number, a keyword, or an expression. For example, `p:nth-child(2)` will select all `<p>` elements that are the second child of their parent element, and `p:nth-child(odd)` will select all `<p>` elements that are odd-numbered children of their parent element.

### Pseudo-element selectors

Pseudo-element selectors are selectors that match a part of an element or a virtual element that is not directly represented in the document tree. Pseudo-elements are preceded by two colons (`::`). There are a few pseudo-elements in CSS, but here are some of the most common ones:

- **::first-line**: This selector matches the first line of text of an element. For example, `p::first-line` will select the first line of text of all `<p>` elements.
- **::first-letter**: This selector matches the first letter of text of an element. For example, `p::first-letter` will select the first letter of text of all `<p>` elements.
- **::before**: This selector matches a virtual element that is inserted before the content of an element. It can be used to insert some content or style before an element. For example, `p::before` will match a virtual element that is inserted before the content of all `<p>` elements.
- **::after**: This selector matches a virtual element that is inserted after the content of an element. It can be used to insert some content or style after an element. For example, `p::after` will match a virtual element that is inserted after the content of all `<p>` elements.

### Conclusion

In this post, I have shown you some of the most common and useful selectors in CSS and how to use them. Selectors are very powerful and flexible tools that allow us to style different elements based on their attributes, relationships, states, and more. To learn more about selectors and other aspects of CSS, you can check out some online resources such as:

- [CSS Selectors Reference - W3Schools](https://www.w3schools.com/cssref/css_selectors.php)
- [CSS selectors - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [CSS Selectors - W3Schools](https://www.w3schools.com/CSS/css_selectors.asp)
