---
layout: "../../layouts/PostLayout.astro"
title: CSS Custom variables
date: 2023-04-25
author: Victoria Greenfelder
image: { src: "/images/post-5.jpg", alt: "A picture of a coder" }
description: Custom properties, also known as CSS variables, are entities defined by CSS authors that contain specific values to be reused throughout a document.
draft: false
category: css
---

## How to use custom properties (variables) in CSS

Custom properties, also known as CSS variables, are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., `--main-color: black;`) and are accessed using the `var()` function (e.g., `color: var(--main-color);`). Custom properties can help us to create dynamic and reusable styles that depend on variables, conditions, or themes.

In this post, I will show you how to use custom properties in CSS and how to take advantage of their features and benefits.

### Basic usage

Declaring a custom property is done using a custom property name that begins with a double hyphen (`--`), and a property value that can be any valid CSS value. Like any other property, this is written inside a ruleset, like so:

```css
element {
  --main-bg-color: brown;
}
```

Note that the selector given to the ruleset defines the scope that the custom property can be used in. A common best practice is to define custom properties on the `:root` pseudo-class, so that they can be applied globally across your HTML document:

```css
:root {
  --main-bg-color: brown;
}
```

However, this doesn't always have to be the case: you may have a good reason for limiting the scope of your custom properties.

Note: Custom property names are case sensitive — `--my-color` will be treated as a separate custom property to `--My-color`.

Using the custom property value is done by specifying your custom property name inside the `var()` function, in place of a regular property value:

```css
element {
  background-color: var(--main-bg-color);
}
```

### Benefits of custom properties

Custom properties have several advantages over regular CSS properties:

- They allow us to avoid repetition and duplication of values. For example, if we want to use the same color for multiple elements or properties, we can define it once as a custom property and then use it wherever we need it. This way, if we want to change the color later, we only need to update it in one place.
- They allow us to create semantic and meaningful names for values. For example, instead of using `#a24e34` as a color value, we can use `--red` as a custom property name and then use it as `color: var(--red);`. This makes our code more readable and understandable.
- They allow us to create dynamic and responsive styles that depend on variables or conditions. For example, we can use custom properties to create color themes that can be changed by the user or by the system. We can also use custom properties to create responsive layouts that adapt to different screen sizes or devices.
- They allow us to leverage the cascade and inheritance of CSS. Custom properties are subject to the cascade and inherit their value from their parent element. This means that we can override or modify the value of a custom property in different contexts or scopes. For example, we can use media queries or pseudo-classes to change the value of a custom property based on different conditions.

### Examples of custom properties

Let's see some examples of how we can use custom properties in CSS.

#### Creating color themes

One common use case for custom properties is creating color themes for our website. We can define different colors as custom properties on the `:root` element and then use them throughout our document. For example:

```css
:root {
  --primary-color: #990000;
  --secondary-color: #01f3e6;
  --tertiary-color: #f0e765;
  --background-color: #f5f5f5;
  --text-color: #333333;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}

h1 {
  color: var(--primary-color);
}

a {
  color: var(--secondary-color);
}

button {
  background-color: var(--tertiary-color);
}
```

Now, if we want to change the color theme of our website, we only need to update the values of the custom properties on the `:root` element. For example:

```css
:root {
  --primary-color: #006699;
  --secondary-color: #ff6600;
  --tertiary-color: #99cc33;
  --background-color: #ffffff;
  --text-color: #000000;
}
```

This way, we can create different color themes for our website and switch between them easily.

#### Creating responsive layouts

Another common use case for custom properties is creating responsive layouts that adapt to different screen sizes or devices. We can use custom properties to define different values for different properties depending on the viewport width or height. For example:

```css
:root {
  --base-font-size: 16px;
  --base-line-height: 1.5;
  --base-spacing: 1rem;
}

@media (min-width: 768px) {
  :root {
    --base-font-size: 18px;
    --base-line-height: 1.6;
    --base-spacing: 1.5rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --base-font-size: 20px;
    --base-line-height: 1.7;
    --base-spacing: 2rem;
  }
}

body {
  font-size: var(--base-font-size);
  line-height: var(--base-line-height);
}

h1 {
  margin-bottom: var(--base-spacing);
}

p {
  margin-bottom: calc(var(--base-spacing) / 2);
}
```

Now, our layout will change according to the viewport width, using the values of the custom properties that are defined in the corresponding media query.

#### Creating dynamic styles with JavaScript

One of the most powerful features of custom properties is that they can be updated and manipulated with JavaScript. This opens up a lot of possibilities for creating dynamic and interactive styles that depend on user input, data, or events. For example:

```html
<input id="range" type="range" min="0" max="360" value="0" />
<div id="box"></div>
```

```css
#box {
  width: 200px;
  height: 200px;
  background-color: hsl(var(--hue), 100%, 50%);
}
```

```js
const range = document.getElementById("range");
const box = document.getElementById("box");

range.addEventListener("input", function () {
  // Set the value of the custom property --hue to the value of the range input
  box.style.setProperty("--hue", this.value);
});
```

Now, we can change the background color of the box by moving the range input, which updates the value of the custom property `--hue` with JavaScript.

### Conclusion

In this post, I have shown you how to use custom properties (variables) in CSS and how to take advantage of their features and benefits. Custom properties allow us to create dynamic and reusable styles that depend on variables, conditions, or themes. They also allow us to leverage the cascade and inheritance of CSS and to manipulate them with JavaScript.

To learn more about custom properties in CSS, you can check out some online resources such as:

- [Using CSS custom properties (variables) - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [A Complete Guide to Custom Properties | CSS-Tricks](https://css-tricks.com/a-complete-guide-to-custom-properties/)
- [Custom properties (--\*): CSS variables - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
