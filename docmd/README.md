@dalbergdatainsights/react-components / [Exports](modules.md)

# Publishing new version

WIP

# Consuming packages

1. In your project, create .npmrc

```ini
registry=https://registry.npmjs.org

@dalbergdatainsights:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<your auth token>
always-auth=true
```

2. Get your GitHub token and plug it in
3. Add .npmrc to your .gitignore, don't push your token!

# Developer TODO and Roadmap

- [ ] come up with a better props drill ideas
- [ ] decide on the GridLayout directly into the container / new component
- [ ] decide on the container defaults locations

## NamedGrid

- [ ] Do we need context consume in Grid if it's used on top level only?
- [ ] Make it take in breakpoints - find usecase first

# Core Library

## Wrapper

## Event management

## State observation

## Component initialization

# Components

## Table

React table component to conveniently display out of the box data.

### Props

data - required - list of records (objects or lists) - data for visualisation
header - list of iHeader type (se below)
displayHeader -

# Layouts

# Contribution

## Follow library structure to benefit from core functions

## Follow library structure to integrate efficiently
