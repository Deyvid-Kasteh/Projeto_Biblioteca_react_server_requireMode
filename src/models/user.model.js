const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {

        firstName: {
            type: String,
            required: true,
        },

        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            index: { unique: true }
        },
        password: {
            type: String,
            required: true,
            minlength: 7,
        },
    },
    {
        timestamps: true
    }


);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel