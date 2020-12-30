First, clone this repository and install dependencies:

```
git clone https://github.com/weijiekoh/circom_runtime_bug.git &&
cd circom_runtime_bug &&
npm i &&
npm run build
```

Run `build/index.js` to see the bug in action:

```
node build/index.js
```

The bug is that the `calculateWitness` function of `circom_runtime`'s
`WitnessCalculator` class does not check whether an input is missing. In this
example, we have a Poseidon circuit which requires three inputs, but none are
provided. Yet, `calculatewitness()` fails silently.
