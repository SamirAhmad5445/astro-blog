---
layout: "../../layouts/PostLayout.astro"
title: HTML and Accessiblity
date: 2023-05-03
author: Samir Ahmad
image: { src: "/images/post-1.jpg", alt: "A picture of coder" }
description: HTML (Hypertext Markup Language) is the foundation of any website. It defines the structure and content of a web page. However, not all HTML code is created equal.
draft: false
category: html
---

## How to write accessible HTML code

HTML (Hypertext Markup Language) is the foundation of any website. It defines the structure and content of a web page. However, not all HTML code is created equal. Some HTML code can be inaccessible to people with disabilities, such as visual impairments, hearing impairments, cognitive impairments, or motor impairments. Accessibility is the practice of making web content usable by everyone, regardless of their abilities or preferences.

In this post, I will share some tips on how to write accessible HTML code that follows the Web Content Accessibility Guidelines (WCAG), a set of standards and best practices for web accessibility.

### Use semantic elements

Semantic elements are HTML tags that have a specific meaning and purpose. For example, `<h1>` is a semantic element that indicates a heading level 1, `<p>` is a semantic element that indicates a paragraph, and `<nav>` is a semantic element that indicates a navigation menu. Semantic elements help screen readers and other assistive technologies understand the structure and meaning of your web page. They also help you write cleaner and more organized code.

Avoid using non-semantic elements, such as `<div>` and `<span>`, for content that has a semantic meaning. For example, do not use `<div>` to create headings or paragraphs, or `<span>` to create links or buttons. Instead, use the appropriate semantic elements for those purposes.

### Use headings correctly

Headings are important for accessibility because they provide an outline of your web page and help users navigate through your content. Headings also help screen readers announce the topic and level of each section.

Use headings in a logical and hierarchical order, starting from `<h1>` to `<h6>`. Do not skip heading levels or use headings for styling purposes. For example, do not use `<h3>` for a subheading under `<h1>`, or use `<h1>` for a large font size. Use CSS to style your headings instead.

### Use alt text for images

Alt text (alternative text) is a text description that conveys the meaning and function of an image. Alt text is essential for accessibility because it helps screen readers and other assistive technologies understand what the image is about. Alt text also helps users who have slow internet connections or who have disabled images in their browsers.

Use the `alt` attribute to provide alt text for your images. For example:

```html
<img src="logo.png" alt="Company logo" />
```

The alt text should be concise and descriptive, but not redundant or irrelevant. For example, do not use alt text like "image of ..." or "logo of ...", as these are already implied by the context. Also, do not use alt text like "click here" or "download now", as these are not descriptive of the image itself. Instead, use alt text that describes the content or purpose of the image.

If the image is purely decorative and does not convey any information or function, you can use an empty `alt` attribute (`alt=""`) to indicate that the image can be ignored by screen readers.

### Use labels for form inputs

Labels are important for accessibility because they help users understand what each form input is for and how to fill it out. Labels also help screen readers and other assistive technologies associate each input with its corresponding label.

Use the `<label>` element to provide labels for your form inputs. For example:

```html
<label for="name">Name:</label> <input type="text" id="name" name="name" />
```

The `for` attribute of the `<label>` element should match the `id` attribute of the input element. This creates a link between the label and the input.

Alternatively, you can nest the input element inside the label element. For example:

```html
<label>
  Name:
  <input type="text" name="name" />
</label>
```

This also creates a link between the label and the input without using the `for` and `id` attributes.

### Use landmarks to organize your page

Landmarks are HTML elements that indicate different regions or sections of your web page, such as header, footer, main content, navigation, sidebar, etc. Landmarks help users navigate through your page and find the information they need quickly and easily. Landmarks also help screen readers and other assistive technologies identify the role and purpose of each section.

Use landmark elements to organize your page into meaningful sections. For example:

```html
<header>
  <!-- header content -->
</header>

<nav>
  <!-- navigation menu -->
</nav>

<main>
  <!-- main content -->
</main>

<aside>
  <!-- sidebar content -->
</aside>

<footer>
  <!-- footer content -->
</footer>
```

These are some of the most common landmark elements, but there are others as well. You can also use the `role` attribute to specify the role of a section if it is not clear from the element itself. For example:

```html
<div role="banner">
  <!-- header content -->
</div>

<div role="navigation">
  <!-- navigation menu -->
</div>

<div role="main">
  <!-- main content -->
</div>

<div role="complementary">
  <!-- sidebar content -->
</div>

<div role="contentinfo">
  <!-- footer content -->
</div>
```

The `role` attribute can also be used to provide additional information about the function of an element, such as `role="button"` or `role="search"`.

### Conclusion

These are some of the basic tips on how to write accessible HTML code that follows the WCAG standards. By following these tips, you can make your web pages more user-friendly and inclusive for everyone. Remember, accessibility is not only a moral duty, but also a legal requirement and a business opportunity. Happy coding!
