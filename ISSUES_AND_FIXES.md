# Project Troubleshooting & Fixes Documentation

This document serves as a ledger of errors, bugs, and knowledge gaps encountered during the development of this project, along with detailed explanations and fixes to help serve as a future reference.

---

### 1. `SummaryCard` inside a Client Component Wrapper (Server to Client Nesting)
**Issue**: Importing a Server Component (`SummaryCard`) that uses `async`/`await` and Prisma directly into a Client Component (`page.tsx` marked with `"use client"`) crashed the app. React Client Components cannot render Server Components directly.
**Fix**: Refactored `DashboardShell` to intercept the `"use client"` directive, hooks, and presentation logic, then accepted standard `children`. Made `page.tsx` a purely Server Component that renders the `DashboardShell` and passes `SummaryCard` down as `children`. In Next.js, it's perfectly fine to pass Server Components as children to a Client Component.

### 2. Prisma Database Desync (`finances.user_id does not exist`)
**Issue**: Creating a new model with `@map("user_id")` created a mismatch where the Prisma schema updated but the local database hadn't caught up because a migration was not run yet. Additionally, the `Finance` model was completely redundant to the `User` model.
**Fix**: Flattened the database schema by removing the `Finance` table entirely and moving the `salary` and `limit` profile attributes directly onto the `User` table to avoid painful multi-parent relationships. 

### 3. `Module not found: Can't resolve 'dns'`
**Issue**: Added inline Prisma logic into `salary-form.tsx` but then imported `salary-form.tsx` into `Modal.tsx`, which had `"use client"`. Because Prisma uses the NodeJS `pg` driver containing `dns` and `net` libraries, Next.js tried bundling these for the browser, crashing the compiler.
**Fix**: Segregated server logic away from the client UI. Extracted `addSalary` into a separate `lib/actions.ts` file marked explicitly with `"use server"`. Converted the form to a normal Client component that points to the imported `addSalary` server action cleanly.

### 4. Prisma Query Typo (`prisma.transaction.create`)
**Issue**: Attempting to query `prisma.transaction.create` crashed the application because it said the transaction table didn't exist in Prisma. 
**Fix**: The schema model was defined as plural `model Transactions`. Prisma maps plural model definitions to plural object keys, which meant the code needed to be modified to `prisma.transactions.create`. 

### 5. Form Submission `FormData` Emptiness (Null actions)
**Issue**: Clicking "Submit" on a transaction form resulted in empty data getting pushed to the server action, failing database inserts silently or saving `NaN` defaults.
**Fix**: Form fields need HTML `name` attributes. The UI `<Input />` components only carried `id` tags. Added `name="txn-description"`, `name="txn-amount"`, etc. matching the `id` parameters to populate the `FormData` standard natively.

### 6. Sidebar active state path string interpolation bug
**Issue**: The sidebar logic meant to highlight the active `Link` was attempting to execute `/ ${data.sidebarMain.title} ` using string literals instead of backtick template literals, and attempting the check globally outside the map function on an Array directly.
**Fix**: Moved the path logic *inside* the `<map>` loop where `item` instances are scoped. Fixed string concatenations to `pathname === item.link || pathname.startsWith(\`\${item.link}/\`)`.

### 7. Tailwind CSS Dynamic Class Ignoring (`w-[x%]`)
**Issue**: The `LimitCard` progress bar didn't scale dynamically even when calculating `30%`. 
**Fix**: Tailwind does not execute JavaScript logic at runtime; it scans static code for known patterns. Using classes like `w-[\${percentage}%]` doesn't exist at build time so the styles are silently dropped. Replaced it with native React inline styling (`style={{ width: \`\${percentage}%\` }}`).

### 8. Manual Refresh Overheads & Unclosed Modals on Server Actions
**Issue**: Form data successfully transmitted via actions wouldn't update the UI until the user manually refreshed. Secondly, `<Form action={...}>` alone fired the action but didn't instruct the Zustand interactive modal state to close.
**Fix**: 
- **Auto-updating Data:** Appended the NextJS `revalidatePath("/dashboard")` inside the server functions (in `actions.ts`) to immediately signal Next.js router to clear client cache and refetch new component data.
- **Closing Modal automatically:** Wrapped the server actions inside an async client function mapping in the components (e.g. `const handleSubmit = async (formData) => { await addTransaction(formData); closeModal(); }`). 

### 9. `@auth/prisma-adapter` Type Constraints Error 
**Issue**: TypeScript screamed regarding `adapter: PrismaAdapter(prisma)` in `auth.ts` because a custom Prisma output directory (`@/app/generated/prisma`) fundamentally clashes with `@auth/prisma-adapter` types defaulting back to standard `@prisma/client`. Furthermore, initializing `const prisma = new PrismaClient()` directly into `auth.ts` risked hitting a connection exhaust limit.
**Fix**: Pointed `auth.ts` back to the singleton instance provided by `lib/prisma.ts` safely protecting connection states. Appended `adapter: PrismaAdapter(prisma as any)` to forcibly overwrite TypeScript flagging differences. 

### 10. `GET /api/auth/session 404` and `<!DOCTYPE>` ClientFetchErrors
**Issue**: Implementing NextAuth crashed local login because endpoints (`/api/auth/*`) returned 404s. `middleware.ts` incorrectly mapped NodeJS environments, relied on `auth.ts` (loading Prisma on Node.js restricted Edge-Runtimes), and omitted routing rules (`matcher`).
**Fix**: Purged `auth.ts` from the `middleware.ts`. Substituted with the NextAuth split-config approach (`auth.config.ts`), removed the Nodejs export, and manually added the explicit route `matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]` to prevent middleware interception on API routes.

### 11. API Route Compilation Failure due to `@prisma/adapter-pg` Misconfiguration
**Issue**: Even after fixing the middleware, `/api/auth/session` continued to return an HTML 404 page with a `ClientFetchError`. This happened because the NextAuth API route (`app/api/auth/[...nextauth]/route.ts`) completely failed to register during Next.js compilation. The root cause was `lib/prisma.ts`: `PrismaPg` was initialized by passing an object with a `connectionString`, which caused a fatal Node.js error internally, crashing any file that imported `prisma` (like `auth.ts`).
**Fix**: Modified `lib/prisma.ts` to correctly import `{ Pool }` from the native `pg` package. Initialized the pool with `new Pool({ connectionString: ... })` and passed that instantiated `pool` into `new PrismaPg(pool)`. This allowed `auth.ts` and the Next.js API route to successfully mount and serve JSON responses.

### 12. `middleware` Deprecation and Memory Restart Error in Next.js 16
**Issue**: The console threw a fatal `middleware file convention is deprecated` error alongside recurring `/api/auth/session` 404s and HTML fetch parsing errors. Next.js reached a memory threshold, restarted, and enforced the Next.js 16.x strict convention which deprecates `middleware.ts` in favor of `proxy.ts`. Because the application still used `middleware.ts` and exported a variable named `middleware`, routing failed entirely during the restart, returning Next.js unhandled HTML to the NextAuth client API checks.
**Fix**: Renamed `middleware.ts` to `proxy.ts`. However, directly renaming it to `export const { auth: proxy } = NextAuth(...)` caused a separate Next.js compiler crash: `TypeError: adapterFn is not a function`. This happened because Next.js 16 (using Turbopack) cannot statically analyze destructured variables as valid proxy endpoints. To fix it, the code was rewritten to cleanly instantiate NextAuth and use an explicit default export: 
```ts
const { auth } = NextAuth(authConfig)
export default auth
```
