const mongoose = require('mongoose');
//using for hash password
const bcrypt = require('bcrypt');
//using for set token
const jwt = require('jsonwebtoken');
//using for super secret password
const config = require('../config/config').get(process.env.NODE_ENV);

const SALT_I = 10;


const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:100
    },
    familly:{
        type:String,
        maxlength:100
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    role:{
        type:Number,
        default:0
    },
    token:{
        type:String
    }
});

//hashing password before save on database
userSchema.pre('save', function(next){
    const user =this;
    if(user.isModified('password')){
       bcrypt.genSalt(SALT_I,function(err,salt){
           if(err) return next(err);
           bcrypt.hash(user.password,salt,function(err,hash){
               if(err) next(err);
               user.password = hash;
               next()
           })
       })       
    }else{
        next();
    }
})


//compare user password with password in database
userSchema.methods.comparePassword = function(candidatePasword,cb){
    bcrypt.compare(candidatePasword,this.password,function(err,isMatch){
        if(err) return cb(err)
        return cb(null,isMatch)      
    }) 
}

//generate token for loged in user
userSchema.methods.generateToken =function(cb){
    const user = this;
    const token = jwt.sign(user._id.toHexString(),config.SECRET);
    user.token = token;
    user.save(function(err,user){
        if(err) cb(err);
        cb(null,user);
    })
 
}

//compare if the token is correct or not
userSchema.statics.findByToken = function(token,cb){
    const user = this;
    jwt.verify( token , config.SECRET,function(err,decode){
        user.findOne({"_id":decode,"token":token},function( err, user){
            if(err) return cb(err);
            cb(null,user)
        })
    })
}
//delete token for loged out user
userSchema.methods.deleteToken = function(token,cb){
    const user = this;
    user.updateOne({$unset:{token:1}},function(err,user){
        if(err) return cb(err)
        cb(null,user)
    })
}
const User = mongoose.model('User',userSchema);

module.exports = {User}
