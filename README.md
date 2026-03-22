# dataset-hg07

HyperGraph dataset package with 105 samples.

## Install

```bash
bun add https://github.com/tscircuit/dataset-hg07
```

## Usage

```ts
import { manifest, sample001, sample105 } from "dataset-hg07"
```

Each sample is exported from the package root via `index.js`, and `index.d.ts` provides TypeScript types for the manifest and sample data. The raw JSON files live under `samples/`.
