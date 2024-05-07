import dev from './dev.js'
import test from './test.js'
import pre from './pre.js'
import prod from './prod.js'
const config = {
    dev,
    test,
    pre,
    prod
}

export default {
    ...config[process.env.NODE_ENV]
}