# Keyboard test

Serve the project with `npm run serve`. Test the complete page and `examples/minimal.html`.

1. Use Tab to reach Menu. Open once with Enter and once with Space.
2. Check that focus starts on Close. Move through the menu with Tab and Shift+Tab. Focus must stay within the open modal.
3. Press Escape. Focus should return to Menu without changing the reading position.
4. Scroll the page, open and close again, and verify the scroll position is restored.
5. Choose a page anchor. The drawer should close and the destination should receive focus.
6. Test a narrow viewport, enlarged text and reduced motion. The close control must remain reachable.
7. Disable JavaScript and reload. The ordinary navigation must remain visible and usable.

Record the actual browser, operating system and assistive technology when reporting a result. Automated browser checks are documented separately. Manual screen-reader testing has not been performed for this release.
