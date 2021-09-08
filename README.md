This repo has a version of TypeScript from [#45786](https://github.com/microsoft/TypeScript/pull/45786) which splits TS2322 errors into 2 columns showing source/target.

To try the errors:

```sh
git clone https://github.com/orta/ts-2-col-tester
cd ts-2-col-tester

# I included the node_modules, as the version can expire
npm run build
```

