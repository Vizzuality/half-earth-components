# Half Earth components playground

[Styleguidist](https://github.com/styleguidist/react-styleguidist) playground to see the reusable components for the halft earth project.

## How to use it

```
yarn github:vizzuality/half-earth-components#versionNumber
```

```
import { NoContent, Loading, Table } from 'he-components';
```

and will be ready to use them!

## Development

To launch the playground and see the component list run:
```
yarn start
```

When you want to try a component directly in the project run:
```
yarn link
```

```
yarn watch
```

Go to the project and run yarn link "he-components" to use the local version instead of the github one.

## Release

1. Merge master to build.
2. Run `yarn compile`.
3. Push your changes.
4. Go to github releases and tag a new version pointing to build branch.
