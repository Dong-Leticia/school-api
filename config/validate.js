const yup = requires("yup")
function validate(data){
const userSchema=yup.object().shape({
    username:yup.string().requre("username must be filled").min(3).max(20),
    email:yup.string().email().requre("email is required").min(3).max(50),
    passworg:yup.string().requre("password required").min(8).max(20),

});
return userSchema.validate(date);
}
module.exports = {validate};