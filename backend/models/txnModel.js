const mongoose = require('mongoose')
const Doc = require('./docModels');
const Pat = require('./patientModels');
const txnSchema = mongoose.Schema(
    {
        docId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doc'
        },
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pat'
        },
        amt:{
            type:mongoose.Schema.Types.Number
        }
        status:{
            type:String
        }
    },
    {
        timestamps: true,
    }
);

const Txn = mongoose.model('Txn', txnSchema);
module.exports = Txn;