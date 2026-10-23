# Static Astro integration

Copy the dialog markup and the small source module into your own project. Render the ordinary navigation and the hidden trigger in the initial HTML. Call `setupDrawer` from a normal Astro script using element references from that page.

The example requires no React component or client hydration. Keep CSS selectors scoped to your header and dialog if your site already has other dialogs. Preserve the fallback navigation until the browser confirms support for `showModal`.

If your site uses client-side navigation, remove or replace old page listeners when swapping the page and initialise only the current elements. The reference is tested with full page loads, not every client router. Use the current official Astro script documentation for the framework version in your project.

The drawer is a modal navigation dialog with ordinary links, not an ARIA application menu. Do not add menu roles that imply different keyboard behaviour. Re-run the keyboard test after changing markup or styling.

References: [HTML dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog), [WAI modal dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/), [Astro scripts](https://docs.astro.build/en/guides/client-side-scripts/).
