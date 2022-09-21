const RestProxy = require('sp-rest-proxy')
const settings = {
    port: 8080
}

const restProxy = new RestProxy(settings)
restProxy.serve()