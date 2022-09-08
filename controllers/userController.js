const user=require("../models/userschema")
const bcryptjs = ("bcryptjs")

// addind a user


const addUser = async (req, res) => {
    // encrypting a password
    const solt = await bcryptjs.genSalt(10)
    const hashedpassword = await bcryptjs.hash(req.body.password,salt)

    const newUser = new User({
        username:req.body.username,
        email: req.body.email,
        password:req.body.password
    });

    await newYUser.save();
    res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email:newUser.email
    })
}
module.exports={addUser}