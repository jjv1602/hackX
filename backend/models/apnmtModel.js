const meetingDetails = new Schema({
    prescription: String,
    meetingTimestamp: Date,
    videoCallLink: String,
    aiResponse: String,
    currentBp: String,
    txnId: String
});

const mongoose = require('mongoose')
const Doc = require('./docModels');
const Pat = require('./patientModels');
const apnmtSchema = mongoose.Schema(
    {
        docId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doc'
        },
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pat'
        },
        allApnmt: [meetingDetails]
    },
    {
        timestamps: true,
    }
);

const Apnmt = mongoose.model('Apnmt', apnmtSchema);
module.exports = Apnmt;