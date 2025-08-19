# Yokai Labs Configs

A collection of shared configuration packages for Yokai Labs projects.
The goal is **consistency across applications**, not strict enforcement of any particular style.

## Packages

- [`@yokailabs/prettier-config`](./packages/prettier-config)
  Shared Prettier configuration.

## Development

This repo uses [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces) and [Changesets](https://github.com/changesets/changesets) for versioning and publishing.

### Typical workflow

```bash
# install deps
npm install

# format code in repo
npm run fmt

# create a changeset for version bump
npm run changeset

# release & publish packages
npm run release
```
