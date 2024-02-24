const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const docSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        pic: {
            type: String,
            required: true,
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        speciality:{
            type:String,
            required:true
        },
        introduction:{
            type:String,
        },
        yoe:{
            type:String,
        },

        contact:{
            type: String,
            required: true,
            default:
                "Not provided",
        }
    },
    {
        timestamps: true,
    }
);
docSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

})
docSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
const Doc = mongoose.model('Doc', docSchema);
module.exports = Doc;