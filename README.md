# jbrowse-react-app-nextjs

This is a demo of using the @jbrowse/react-app NPM package with nextjs with the
app router

## Demo of `@jbrowse/react-app2` with next.js

See this app running at https://jbrowse.org/demos/app-nextjs/.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Deploy

This page is deployed to https://jbrowse.org/demos/app-nextjs (uses
`output:export` in next.config.js to create static build with no server side)

## Footnote

Might not work with turbopack (which is next.js v16 default)

Gives errors like:

```
Module [project]/node_modules/@mui/x-data-grid/index.css [app-client] (css) was instantiated because it was required from module [project]/node_modules/@mui/x-data-grid/DataGrid/index.js [app-client] (ecmascript), but the module factory is not available. It might have been deleted in an HMR update.
```

In dev mode, the current app also says:

"TypeError: undefined is not a non-null object"

For bgzip based tracks (tabix, bam)

This is likely due to a webpack issue, but production builds work fine
