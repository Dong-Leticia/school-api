const mongoose = require("mongoose")
const { string } = require("yup")

const userSchema = mongoose.schema({
    username: {
        type: string,
        unique: true,
        require: true,
    },

    email: {
        type: true,
        require: true,
        unique: true
    },
    password: {
        type: string,
        require: true,
    } 
});

const user = mongoose.model("user",userSchema)
module.exports = user;

