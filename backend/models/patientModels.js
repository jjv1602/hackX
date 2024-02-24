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
            name: { type: String },
            quantity: { type: String },
        }
        ],
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
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

})

//Decrypting the password
// it would compare the password
patientSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
    // enteredPassword password entered by user
    // this.password - password in the database stored with email
};
const Pat = mongoose.model('Pat', patientSchema);
module.exports = Pat;