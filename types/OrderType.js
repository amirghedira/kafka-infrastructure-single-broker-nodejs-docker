const avsv = require('avsc');


const orderType = avsv.Type.forSchema({
    type: 'record',
    fields: [
        {
            name: '_id',
            type: 'string'
        },
        {
            name: 'price',
            type: 'int'
        },
        {
            name: 'clientId',
            type: 'string'
        },
    ]
})


module.exports = orderType