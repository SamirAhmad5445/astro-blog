---
layout: "../../layouts/PostLayout.astro"
title: New pseudo selectors
date: 2023-04-29
author: Samir Ahmad
image: { src: "/images/post-3.jpg", alt: "A picture of a coder" }
description: Pseudo selectors are special keywords that we can use to select HTML elements based on some criteria that are not directly expressed in the document tree.
draft: false
category: CSS
---

## the :is(), :where(), and :has() pseudo selectors

Pseudo selectors are special keywords that we can use to select HTML elements based on some criteria that are not directly expressed in the document tree. For example, we can use pseudo selectors to select elements based on their state (:hover, :active, :focus, etc.), their position (:first-child, :nth-child, :last-child, etc.), or their content (:empty, :blank, etc.).

In this post, I will show you how to use three new pseudo selectors that have been recently added to the CSS specification: :is(), :where(), and :has(). These pseudo selectors allow us to create more flexible and powerful selectors that can simplify our code and reduce repetition.

### The :is() pseudo selector

The :is() pseudo selector takes a list of selectors as an argument and matches any element that matches at least one of those selectors. For example, the selector `:is(p, span)` will match any `<p>` or `<span>` element.

The main benefit of using :is() is that it can reduce the complexity and verbosity of our selectors, especially when we want to apply the same style to multiple elements that share some common ancestor or sibling. For example, suppose we want to make all `<h1>`, `<h2>`, and `<p>` elements inside a `<section>` with a class of "primary" or "secondary" green. Without using :is(), we would have to write something like this:

```css
section.primary h1,
section.primary h2,
section.primary p,
section.secondary h1,
section.secondary h2,
section.secondary p {
  color: green;
}
```

That's a lot of repetition and potential for errors. With :is(), we can simplify it to this:

```css
section:is(.primary, .secondary) :is(h1, h2, p) {
  color: green;
}
```

That's much more concise and readable. We can also nest multiple :is() pseudo selectors inside each other to create more complex patterns.

### The :where() pseudo selector

The :where() pseudo selector is very similar to the :is() pseudo selector, except that it has no effect on specificity. Specificity is a measure of how specific a selector is compared to other selectors that match the same element. The more specific a selector is, the higher priority it has when applying styles.

For example, suppose we have this HTML code:

```html
<div id="container">
  <p class="intro">This is an introduction.</p>
  <p>This is another paragraph.</p>
</div>
```

And this CSS code:

```css
p {
  color: blue;
}

#container p {
  color: red;
}
```

The first selector (`p`) matches both `<p>` elements, but the second selector (`#container p`) is more specific because it includes an id selector (`#container`), which has a higher specificity than a type selector (`p`). Therefore, both `<p>` elements will have a red color.

Now suppose we add another CSS rule using the :is() pseudo selector:

```css
:is(#container) .intro {
  color: green;
}
```

This selector matches the first `<p>` element that has a class of "intro" and is inside an element with an id of "container". This selector is even more specific than the previous one because it includes a class selector (`.intro`), which has a higher specificity than a type selector (`p`). Therefore, the first `<p>` element will have a green color.

However, if we replace :is() with :where(), like this:

```css
:where(#container) .intro {
  color: green;
}
```

This selector will have no effect because it has the same specificity as the first selector (`p`), which is lower than the second selector (`#container p`). The :where() pseudo selector ignores the specificity of its argument and only considers the specificity of the rest of the selector. Therefore, both `<p>` elements will still have a red color.

The main benefit of using :where() is that it can prevent specificity conflicts when using multiple selectors that share some common parts. For example, suppose we want to style all `<h1>` elements differently depending on whether they are inside an `<article>`, a `<section>`, or an `<aside>` Without using :where(), we would have to write something like this:

```css
article h1 {
  color: blue;
}

section h1 {
  color: green;
}

aside h1 {
  color: orange;
}
```

This works fine, but it creates a specificity conflict between the three selectors, because they all have the same specificity (one type selector and one element selector). This means that if we want to override the color of any `<h1>` element with another selector, we would have to use a more specific selector than these ones.

With :where(), we can simplify it to this:

```css
:where(article, section, aside) h1 {
  color: blue;
}

:where(section) h1 {
  color: green;
}

:where(aside) h1 {
  color: orange;
}
```

This also works fine, but it avoids the specificity conflict because the :where() pseudo selector has no effect on specificity. This means that all these selectors have the same specificity as a single type selector (`h1`), which is lower than a class selector or an id selector. This makes it easier to override the color of any `<h1>` element with another selector.

### The :has() pseudo selector

The :has() pseudo selector is a new and experimental pseudo selector that matches an element if it has a descendant element that matches another selector. For example, the selector `div:has(p)` will match any `<div>` element that has a `<p>` element inside it.

The main benefit of using :has() is that it allows us to select elements based on their content rather than their attributes or position. For example, suppose we want to style all `<ul>` elements that have at least one `<li>` element with a class of "active". Without using :has(), we would have to use JavaScript to add a class or an attribute to those `<ul>` elements and then style them accordingly. With :has(), we can simply write this:

```css
ul:has(li.active) {
  border: 2px solid green;
}
```

This will match any `<ul>` element that has at least one `<li>` element with a class of "active" and give it a green border.

However, there are some limitations and caveats when using :has():

- The :has() pseudo selector is not yet supported by any browser natively. You can use a polyfill library like [jQuery](https://jquery.com/) or [Sizzle](https://sizzlejs.com/) to use it in your code, but this may affect performance and compatibility.
- The :has() pseudo selector cannot be used in stylesheets. It can only be used in JavaScript or in other contexts where selectors are evaluated dynamically, such as `document.querySelector()` or `document.querySelectorAll()`.
- The :has() pseudo selector cannot accept another :has() pseudo selector as an argument. For example, `div:has(p:has(span))` is not valid and will not work.
- The :has() pseudo selector cannot accept combinators or pseudo-elements as arguments. For example, `div:has(> p)` or `div:has(p::first-line)` are not valid and will not work.

### Conclusion

In this post, I have shown you how to use three new pseudo selectors in CSS: :is(), :where(), and :has(). These pseudo selectors allow us to create more flexible and powerful selectors that can simplify our code and reduce repetition. To learn more about these and other pseudo selectors in CSS, you can check out some online resources such as:

- [How the CSS :is, :where and :has Pseudo-class Selectors Work — SitePoint](https://www.sitepoint.com/css-is-where-has-pseudo-class-selectors/)
- [A Guide to Using the :is(), :where(), and :has() Pseudo Elements in CSS | by Austin Rutledge | Medium](https://medium.com/@austinrutledge0/a-guide-to-using-the-is-where-and-has-pseudo-elements-in-css-96916b65be27)
- [CSS Selectors Reference - W3Schools](https://www.w3schools.com/cssref/css_selectors.php)
