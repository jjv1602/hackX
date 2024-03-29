const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const patientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        pwd: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true
        },
        age: {
            type: String
        },
        medicalReports: [{
            filename: {
                type: String,
                required: true
            },
            fileurl: {
                type: String,
                required: true
            }
        }],
        medicines: [{
            medname: { type: String },
            qnt: { type: String },
            dur:{type:String},
            mor:{type:Boolean},
            aft:{type:Boolean},
            nght:{type:Boolean}
        }],
        bloodGrp: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

patientSchema.pre('save', async function (next) {
    //    we need to check whether password is modified egs- user is RAJ he first creates pwd - 1234 but then he changes the password to 4232 so if this is modified then again need to encrypt the password
    // else just pass to next( ) function
    if (!this.isModified('pwd')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.pwd = await bcrypt.hash(this.pwd, salt);

})

patientSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
const Pat = mongoose.model('Pat', patientSchema);
module.exports = Pat;