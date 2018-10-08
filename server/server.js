const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV)
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE , {useNewUrlParser:true});
mongoose.set('useCreateIndex',true);

app.use(bodyParser.json());
app.use(cookieParser());

const { Event } = require('./models/event');
const { User }  = require('./models/user');
const { Auth }    = require('./middleware/auth');

//Events CRUD

//GET
app.get('/api/events',(req,res)=>{
    let limit = parseInt(req.query.limit);
    let order = req.query.order;
    Event.find().limit(limit).sort({_id:order}).exec((err,doc)=>{
        if(err) res.status(400).json({
            message:'خطای دریافت اطلاعات از سرور'
        })
        res.send(doc)
    })
})

//POST
app.post('/api/event' , (req,res) => {
  const event = new Event (req.body);
  event.save((err,doc) =>{
      if(err) return res.status(400).send(err);
      res.status(200).json({
          event:true,
          event_id:doc._id
      })
  })
})


//UPDATE


//DELETE



//USER CRUD

//GET

app.get('/api/auth',Auth,(req,res)=>{
    res.json({
        isAuth:true,
        email:req.user.email,
        id:req.user._id
    })
})
app.get('/api/users',(req,res)=>{
    User.find().exec((err,users)=>{
        if(err) return res.status(400).send(err)
        res.status(200).send(users)
})
})

app.get('/api/user',(req,res)=>{
    const id = req.query.id;
    User.findById(id,(err,user)=>{
        if(err) return res.send(err)
        res.status(200).json({
            user:user
        })
    }) 
})

app.get('/api/logout',Auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err)
        res.sendStatus(200)
    })
})
//POST
app.post('/api/register',(req,res)=>{
    const user = new User(req.body);
    user.save((err,doc)=>{
        if(err) return res.json({success:false})
        res.status(200).json({
            success:true,
            user:doc
        })
    })
})
app.post('/api/login',(req,res)=>{
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({isAuth:false,message:"کاربر با این ایمیل یافت نشد"})
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                isAuth:false,
                message:"رمز عبور اشتباه است"
            })
            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('auth',user.token).status(200).json({
                    isAuth:true,
                    id:user._id,
                    email:user.email
                })
            })
        })
    })
})

//UPDATE

//DELETE

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log('SERVER RUNNIG ON PORT 3001');
})