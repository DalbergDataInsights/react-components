# Publishing new version

# Consuming packages

1. In your project, create .npmrc

```
registry=https://registry.npmjs.org

@dalbergdatainsights:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<your auth token>
always-auth=true
```

2. Get your GitHub token and plug it in
3. Add .npmrc to your .gitignore, don't push your token!

# TODO

- [ ] come up with a better props drill ideas
- [ ] decide on the GridLayout directly into the container / new component
- [ ] decide on the container defaults locations
