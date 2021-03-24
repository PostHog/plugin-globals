## PostHog Plugin Globals

[![npm package](https://img.shields.io/npm/v/@posthog/plugin-globals?style=flat-square)](https://www.npmjs.com/package/@posthog/plugin-globals)
[![MIT License](https://img.shields.io/badge/License-MIT-red.svg?style=flat-square)](https://opensource.org/licenses/MIT)

This package contains types for globals exposed to PostHog plugins.

To use, install via yarn or npm:

```shell
yarn add --dev @posthog/plugin-globals
npm install --save-dev @posthog/plugin-globals
```

Then add the following to your `tsconfig.json`:

```json5
{
    "include": [
      /* keep exisitng entries like "src" or "**.ts" and add: */
      "./node_modules/@posthog/plugin-globals/globals.d.ts"
    ]
}
```

Alternatively (only if the previous step is not suitable), add the following to the top of your `index.ts`:

```typescript
import '@posthog/plugin-globals'
```

Enjoy an improved plugin authoring experience!

## Questions?

### [Join our Slack community.](https://join.slack.com/t/posthogusers/shared_invite/enQtOTY0MzU5NjAwMDY3LTc2MWQ0OTZlNjhkODk3ZDI3NDVjMDE1YjgxY2I4ZjI4MzJhZmVmNjJkN2NmMGJmMzc2N2U3Yjc3ZjI5NGFlZDQ)
