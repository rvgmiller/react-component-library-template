# React Component Library Template

This template provides a useful starting point for creating a React component library.

## Components

Out of the box, this template provides support for building components with:

- [TypeScript](https://www.typescriptlang.org)
- CSS modules
- Tests using [React Testing Library](https://testing-library.com) / [Jest](https://jestjs.io/)
- Documentation and UI testing with [Storybook](https://storybook.js.org)

An example `Button` component is provided to show the intended component structure.

## Scripts

### Build

```bash
npm run build
```

### Publish

```bash
npm publish
```

### Format Code

```bash
npm run prettier
```

### Run Tests

```bash
npm run test
```

### Storybook (local)

```bash
npm run storybook
```

### Build Storybook

```bash
npm run build-storybook
```

## Using The Library

### Installation

```bash
npm install @rvgmiller/react-component-library-template
```

### Using A Component (e.g. `Button`)

```jsx
import { Button } from "@rvgmiller/react-component-library-template"

const ExampleApp = () => {
  return (
    <div>
      <Button label="Hello World!" />
    </div>
  )
}
```

## Husky / Git Hooks

[Husky](https://typicode.github.io/husky) is used to perform a number of tasks when committing and pushing:

### Commit

- [commitlint](https://commitlint.js.org/) ensures commit messages follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- A pre-commit hook runs a test [Rollup](https://rollupjs.org) build; performs linting (with [ESLint](https://eslint.org)); and formats the staged code using [Prettier](https://prettier.io)

### Push

An additional Rollup build is also performed pre-push.

## GitHub Actions

A workflow has been added to the project that will automatically publish the library to GitHub Packages whenever a new release is created.
