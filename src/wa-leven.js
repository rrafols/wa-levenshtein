const fs = require('fs')

function leven(left, right) {
    let idx = 0

    for (let i = 0; i < left.length; i++) {
        buffer[idx++] = left[i].charCodeAt(0)
    }

    for (let i = 0; i < right.length; i++) {
        buffer[idx++] = right[i].charCodeAt(0)
    }

    return waObject.exports.levenshtein(left.length, right.length)
}

let memory = new WebAssembly.Memory({ initial: 1 })
let buffer = new Uint8Array(memory.buffer)
let importObject = {
    js: {
        mem: memory
    },
    console: {
        log: function(arg) {
            console.log(arg);
        }
    }
}

let source = fs.readFileSync('./src/levenshtein.wasm');
let waModule = new WebAssembly.Module(new Uint8Array(source))
let waObject = new WebAssembly.Instance(waModule, importObject)

module.exports = leven