<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project conventions

- Use the existing App Router patterns.
- Keep changes scoped and validate with TypeScript, lint, build, and browser checks.
- Never expose server-only credentials to client components.

## Next.js 16 upgrade reference

Use the relevant Next.js 16 guide under `node_modules/next/dist/docs/` before making framework changes.
