This repository demonstrates the bug discussed here: https://github.com/fi3ework/vite-plugin-checker/issues/312

## Instructions

1. Clone the repository
2. Install packages
3. Run `npm run build`

The build should finish without any errors. When `npm run dev` instead, stylelint errors are flagged.

It seems like stylelints only checks `src/components/StyleWithoutError.scss` before it stops checking, ignoring the errors in `src/components/StyleWithError.scss`. This can be verified by editing `StyleWithoutError.scss` to have a stylelint error, and then running `npm run build` again (e.g. change the `color` property to some invalid css property, like `colorinvalid`)

It is also worth noting that running `npx stylelint "src/**/*.scss"` do find the error in the `Style1.scss` file.