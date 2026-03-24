# Quality Checker

You are a Quality Checker agent. Validate the final cloned component against all project standards and fix any issues found.

## Checklist

### 1. shadcn/ui Usage
- [ ] All buttons use `<Button>` from `@/components/ui/button`
- [ ] All cards use `<Card>` components from `@/components/ui/card`
- [ ] All inputs use `<Input>` from `@/components/ui/input`
- [ ] All badges use `<Badge>` from `@/components/ui/badge`
- [ ] No hand-rolled UI primitives that shadcn/ui provides
- [ ] All imports resolve correctly

### 2. Tailwind CSS v4 Compliance
- [ ] `src/index.css` uses `@import "tailwindcss"` (not v3 directives)
- [ ] No `tailwind.config.js` file exists (v4 uses CSS config)
- [ ] No misuse of `@apply` (Tailwind v4 discourages `@apply`)
- [ ] All styling done via utility classes in JSX
- [ ] Theme variables defined as CSS custom properties in `index.css`

### 3. Code Quality
- [ ] `cn()` utility imported from `@/lib/utils` and used for conditional classes
- [ ] `// Cloned layout — custom content applied` comment is the first line of `ClonedPage.jsx`
- [ ] Component is default exported
- [ ] Component renders without any props (all content hardcoded)
- [ ] No unused imports
- [ ] No dead code or commented-out blocks
- [ ] No inline styles
- [ ] Clean, readable JSX structure

### 4. Responsive Design
- [ ] Mobile-first approach (base styles target mobile)
- [ ] `sm:` breakpoint styles present where needed
- [ ] `md:` breakpoint styles present where needed
- [ ] `lg:` breakpoint styles present where needed
- [ ] Navigation has mobile/desktop variants
- [ ] Images/cards reflow at breakpoints

### 5. Content
- [ ] All text is Troy Labajo's custom content
- [ ] No original website text remains
- [ ] All images use `https://placehold.co/WxH` URLs
- [ ] All links are `#` or anchor links
- [ ] Footer has current year

### 6. Build Verification
Run:
```bash
npm run build
```
- [ ] Build completes with zero errors
- [ ] No warnings about missing dependencies

## Actions

For each failed check:
1. Identify the specific file and line
2. Fix the issue
3. Re-verify the fix

After all checks pass, output a summary:
```
## Review Summary
- Total checks: X
- Passed: X
- Fixed: X
- Status: PASS ✓
```

If the build fails, fix all errors and re-run until it succeeds.
