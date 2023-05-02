---
layout: "../../layouts/PostLayout.astro"
title: Audio and Video in HTML
date: 2023-05-05
author: Samir Ahmad
image: { src: "/images/post-3.jpg", alt: "A picture of coder" }
description: HTML (Hypertext Markup Language) is the language of the web. It defines the structure and content of a web page. But HTML is not only about text and images.
draft: false
category: HTML
---

## How to make some noise and show some motion with HTML

HTML (Hypertext Markup Language) is the language of the web. It defines the structure and content of a web page. But HTML is not only about text and images. HTML can also handle sound and video, thanks to two elements: `<audio>` and `<video>`.

In this post, I will show you how to use these elements to add some noise and motion to your web page. I will also share some tips and tricks on how to control and customize them.

### The `<audio>` element

The `<audio>` element allows you to embed a sound file in your web page. You can use it to play music, podcasts, sound effects, or any other audio content. To use the `<audio>` element, you need to provide the source of the sound file using the `src` attribute or the `<source>` element. For example:

```html
<audio src="song.mp3"></audio>
```

or

```html
<audio>
  <source src="song.mp3" type="audio/mpeg" />
  <source src="song.ogg" type="audio/ogg" />
</audio>
```

The second example uses multiple `<source>` elements to provide different formats of the same sound file. This is useful for cross-browser compatibility, as not all browsers support the same audio formats. The browser will choose the first format that it can play and ignore the rest.

By default, the `<audio>` element does not show any controls for playing, pausing, or adjusting the volume of the sound. To enable these controls, you need to add the `controls` attribute to the `<audio>` element. For example:

```html
<audio src="song.mp3" controls></audio>
```

This will show a simple audio player with a play/pause button, a progress bar, and a volume slider.

You can also customize the appearance and behavior of the audio player using some other attributes, such as:

- `autoplay` - This attribute makes the sound start playing automatically when the page loads. Use this with caution, as it can be annoying or distracting for some users.
- `loop` - This attribute makes the sound repeat indefinitely when it reaches the end.
- `muted` - This attribute makes the sound start with no volume.
- `preload` - This attribute specifies how much of the sound file should be loaded before playing. The possible values are `none`, `metadata`, or `auto`. The default value is `auto`, which means the browser decides how much to preload based on network conditions and user preferences.

You can also use JavaScript to manipulate the `<audio>` element programmatically. For example, you can use the `play()`, `pause()`, `volume`, and `currentTime` properties and methods to control the playback of the sound. You can also use the `addEventListener()` method to listen for events such as `play`, `pause`, `ended`, and `timeupdate`.

### The `<video>` element

The `<video>` element allows you to embed a video file in your web page. You can use it to play movies, animations, recordings, or any other video content. To use the `<video>` element, you need to provide the source of the video file using the `src` attribute or the `<source>` element. For example:

```html
<video src="movie.mp4"></video>
```

or

```html
<video>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.webm" type="video/webm" />
</video>
```

The second example uses multiple `<source>` elements to provide different formats of the same video file. This is useful for cross-browser compatibility, as not all browsers support the same video formats. The browser will choose the first format that it can play and ignore the rest.

By default, the `<video>` element does not show any controls for playing, pausing, or adjusting the volume of the video. To enable these controls, you need to add the `controls` attribute to the `<video>` element. For example:

```html
<video src="movie.mp4" controls></video>
```

This will show a simple video player with a play/pause button, a progress bar, a volume slider, and a fullscreen button.

You can also customize the appearance and behavior of the video player using some other attributes, such as:

- `autoplay` - This attribute makes the video start playing automatically when the page loads. Use this with caution, as it can be annoying or distracting for some users.
- `loop` - This attribute makes the video repeat indefinitely when it reaches the end.
- `muted` - This attribute makes the video start with no sound.
- `preload` - This attribute specifies how much of the video file should be loaded before playing. The possible values are `none`, `metadata`, or `auto`. The default value is `auto`, which means the browser decides how much to preload based on network conditions and user preferences.
- `poster` - This attribute specifies an image to show before the video starts playing or when the video is not available. This can be useful for providing a preview or a fallback for the video.

You can also use JavaScript to manipulate the `<video>` element programmatically. For example, you can use the same properties and methods as the `<audio>` element to control the playback of the video. You can also use the `addEventListener()` method to listen for events such as `play`, `pause`, `ended`, and `timeupdate`.

### Conclusion

The `<audio>` and `<video>` elements allow you to add sound and motion to your web page with HTML. You can use them to play any audio or video content that you want, and customize them with various attributes and JavaScript. These elements are supported by most modern browsers and provide a native and user-friendly experience for your visitors.

I hope you enjoyed this post and learned something new about the sound and video elements in HTML. If you want to learn more about these elements, you can check out these resources:

- [HTML audio element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [HTML video element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Using HTML5 audio and video - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
