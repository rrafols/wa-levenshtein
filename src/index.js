const fs = require('fs')

let webAssemblyObj

function leven(left, right) {
    let idx = 0

    for (let i = 0; i < left.length; i++) {
        buffer[idx++] = left[i].charCodeAt(0)
    }

    for (let i = 0; i < right.length; i++) {
        buffer[idx++] = right[i].charCodeAt(0)
    }

    return webAssemblyObj.instance.exports.levenshtein(left.length, right.length)
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
let typedArray = new Uint8Array(source);

WebAssembly.instantiate(typedArray, importObject)
    .then(obj => webAssemblyObj = obj)

module.exports = leven