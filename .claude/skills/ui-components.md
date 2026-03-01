# UI Components

## Buttons

All buttons must use the following Tailwind classes:

- **Corners:** `rounded-lg`
- **Background:** `bg-blue-600`
- **Text:** `text-white`
- **Hover:** `hover:bg-blue-700`

Example:
```html
<button className="rounded-lg bg-blue-600 text-white hover:bg-blue-700">
  Click me
</button>
```

If a button is an anchor tag or link styled as a button, apply the same classes.

## Sections

All `<section>` elements must use consistent responsive padding:

- **Mobile (default):** `p-4`
- **Desktop (`md` breakpoint and up):** `md:p-8`

Example:
```html
<section className="p-4 md:p-8">
  {/* section content */}
</section>
```

Apply this padding directly on the `<section>` tag or on its immediate container `<div>` if the section needs a full-width background.
