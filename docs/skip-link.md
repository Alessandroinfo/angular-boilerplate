## Skip Link

Put this `<app-skip-link></app-skip-link>` on the root of your template app.

You need to set the id on the correct html element `id="main-content"`.

### Description
Skip link is a navigational aid that helps users to quickly skip over the repeated content and access the main content of the page. It's usually hidden from sight and only visible when a user interacts with it, for example, by pressing the 'tab' key. Once it's visible, users can follow the link to skip over the navigation menu, sidebar, and other repeated content and go straight to the main content of the page.

Here is an example of how a skip link can be implemented in HTML:

```
<a href="#main-content" class="skip-link">Skip to main content</a>

<main id="main-content" tabindex="-1">
  <!-- Main content of the page goes here -->
</main>
```

In this example, the skip link has a class of 'skip-link' and links to the main content of the page with the id 'main-content'. The main content also has a tabindex of -1 to make it focusable and allow users to navigate to it using the 'tab' key.
