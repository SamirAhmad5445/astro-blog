---
layout: "../../layouts/PostLayout.astro"
title: Why Sass is Awesome?
date: 2023-04-30
author: Samir Ahmad
image: { src: "/images/post-8.png", alt: "A picture of a sass logo" }
description: CSS is a beautiful language that allows us to style our web pages and create stunning designs. But sometimes, CSS can be frustrating and tedious to write.
draft: false
category: sass
---

## Why Sass is Awesome: A Love Letter to CSS

CSS is a beautiful language that allows us to style our web pages and create stunning designs. But sometimes, CSS can be frustrating and tedious to write. That's why I love Sass, a preprocessor that extends CSS with features that make it more powerful and enjoyable. Here are some of the reasons why Sass is awesome and why you should use it too:

## Variables:

Sass lets you define variables for any value that you want to reuse in your stylesheet and you declare a variable with `$` sign followed by the name of the variable. You can use variables for colors, fonts, sizes, margins, breakpoints and anything else that you can think of. Variables make your code more consistent and easier to change.

```scss
$size: 24px;
$big-size: $size * 2; // 48px
```

## Mixins:

Sass lets you create mixins, which are chunks of code that can be included in different selectors. Mixins help you avoid repetition and write more concise code. You can use mixins for common patterns, such as clearfix, media queries, transitions, animations and more. You can also pass arguments to mixins to customize them for different situations. For example:

```scss
// simple flude container
@mixin container($width) {
  max-width: $width;
  margin-inline: auto;
  padding-inline: 1rem;
}

// use the mixin with @include
body {
  @include container(45ch);
}
```

the final output of this code is:

```css
body {
  max-width: 45ch;
  margin-inline: auto;
  padding-inline: 1rem;
}
```

## Nesting:

Sass lets you nest selectors inside each other to create a hierarchy that reflects the HTML structure. Nesting makes your code more readable and organized. You don't have to write long and complex selectors or worry about specificity issues. You can also use the `&` symbol to refer to the parent selector and create modifier classes or pseudo-elements. so if we have in HTML:

```html
<div class="card">
  <header>...</header>
  <div class="card-content">...</div>
</div>
```

we can use nesting to style the children like this:

```scss
.card {
  ...
  header {
    font: {
      size: 2rem;
      family: system-ui;
    }
  }
  &-content { ... }
  &:is(:hover, :focus) { ... }
}
```

## Inheritance:

Sass lets you use the `@extend` directive to inherit styles from another selector. Inheritance helps you avoid duplication and keep your code DRY (Don't Repeat Yourself). You can use inheritance for common elements, such as buttons, headings, links and more. You can also use placeholders to create abstract classes that are only used for extending and not outputted in the compiled CSS.

## Functions:

Sass lets you use built-in functions or create your own to perform calculations, manipulate colors, generate content and more. Functions give you more power and flexibility in your CSS. You can use functions for creating grids, color schemes, typography systems and more. You can also use the `@return` directive to return a value from a function.

Here is a function to add some numbers and return the sum:

```scss
@function sum($numbers...) {
  $sum: 0;
  // loop over all numebr
  @each $number in $numbers {
    $sum: $sum + $number;
  }
  // return the sum
  @return $sum;
}
```

And now we can use it in anywhere

```scss
.box {
  max-width: sum(15px, 8px, 7px); // 30px
}
```

## Operators:

Sass lets you use arithmetic operators to perform calculations with numbers, colors and other values. Operators allow you to create dynamic styles based on variables or conditions. You can use operators for creating responsive layouts, proportional sizing, color manipulation and more. You can also use logical operators to create conditional statements with the `@if`, `@else` and `@else if` directives.

## Partials and Imports:

Sass lets you split your code into multiple files and import them into a main file. Partials and imports help you modularize your code and keep it organized. You can use partials for separating different components, such as variables, mixins, base styles, layout styles and theme styles. You can also use the `@use` and `@forward` directives to import and deliver other Sass files or even plain CSS files.

Example for importing file we could put the function we created in separate partial file called "\_functions.scss" and imported like this:

```scss
@use "./functions" as *;

.box {
  max-width: sum(15px, 8px, 7px); // also 30px
}
```

## Comments:

Sass lets you write comments in two ways: single-line comments that start with `//` and are removed in the compiled CSS, and multi-line comments that start with `/*` and end with `*/` and are preserved in the compiled CSS. Comments help you document your code and explain your decisions. You can use comments for describing the purpose of a variable, mixin or function, adding notes or reminders, or crediting the source of a code snippet.

Sass is awesome because it makes CSS more expressive, elegant and fun. It allows you to write less code and do more with it. It helps you create maintainable, scalable and modular stylesheets that are easy to update and debug. It also has a large and active community that provides support, resources and inspiration.

If you want to learn more about Sass, you can visit [the official website](https://sass-lang.com/) or [the documentation](https://sass-lang.com/documentation). You can also find tutorials, articles, videos and podcasts on [Sass News](https://sassnews.com/), [Sass Guidelines](https://sass-guidelin.es/) or [Sass Bites](https://www.youtube.com/channel/UCfwABgpgmVhcKXw0djJAiUg).

Sass is awesome and I hope you love it too! 💖
