const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
 username: {
     type: String,
     unique: true
 },

 email: {
     type: String,
     trim: true,
     unique: true,
     lowercase: true,
     required: [true, "is required"]
 },
 password: {
     type: String,
     trim: true,
     required: [true, "is required"]
 },
 roles: [{
     ref: "Role",
     type: Schema.Types.ObjectId
 }]
}, {
    timestamp: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async(password) => {
    console.log("encryted")
    const salt = await bcrypt.genSalt(10);
    const resultado = await bcrypt.hash(password, salt);
    return resultado;

};

userSchema.statics.comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);

};

// userSchema.pre("save", function(next){
//     bcrypt.hash(this.password, 10, (err, hash) => {
//         if (err) {
//             return next(err);
//         }
//         this.password = hash;
//         next();

//     });



module.exports = mongoose.model('user', userSchema);