const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
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
 }
});

userSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) {
            return next(err);
        }
        this.password = hash;
        next();

    });

})

module.exports = mongoose.model('user', userSchema);