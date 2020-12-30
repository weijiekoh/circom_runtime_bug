const circomRuntime = require('circom_runtime')
const { WitnessCalculatorBuilder } = circomRuntime
const fastFile = require('fastfile')

const main = async () => {
    const fdWasm = await fastFile.readExisting('./poseidon.wasm')
    const wasm = await fdWasm.read(fdWasm.totalSize)
    await fdWasm.close()

    const options = {
        sanityCheck: true,
    }
    const wc = await WitnessCalculatorBuilder(wasm, options)
    const witness = await wc.calculateWitness(
        {
        },
        true,
    )
    console.log('Passed in an empty input object to the WitnessCalculator, but calculateWitness() did not throw')
}

if (require.main === module) {
    main()
}
