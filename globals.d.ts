declare const posthog: {
    capture: (event: string, properties?: Record<string, any>) => Promise<void>
}

// TODO: add things like `fetch`, `google`, etc here
// ... possibly by compiling types imported from devDependencies into one `globals.d.ts` file via rollup or so
