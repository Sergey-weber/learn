const router = require('express').Router();
const User = require('../model/User');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

const { registerValidation, loginValidation } = require('../validations');

router.post('/register', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')

    //Let's validate
    const { error } = registerValidation( req.body );  
    const { email } = req.body;  
    console.log(req.body);
    if ( error ) {
        return res.status(400).send(error.details[0].message);
    }

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Chacking if the user is already in the databse
    const getUser = await User.findOne({ email: email });

    if ( getUser ) return res.status(400).send(`Email - ${email} уже зарегестрирован`);

    const user = new User({
        name: req.body.name,
        email: email,
        password: hashedPassword,
    });

    try {
        const savedUser = await user.save();

        return res.send({user: user._id});
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {
    //Let's validate
    const { error } = loginValidation( req.body );  
    const { email } = req.body;  

    if ( error ) {
        return res.status(400).send(error.details[0].message);
    }

    //Chacking if the email exist
    const user = await User.findOne({ email: email });

    console.log(user);

    if ( !user ) return res.status(400).send("Email or password is wrong");

    // Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);


    if ( !validPass ) return res.status(400).send("Password is not valid");

    //Create and assign a token
    const token  = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);

    // const responseUser

    res.header('auth-token', token).send(setUserResponse(user, token)); 
});


const setUserResponse = (user, token) => ({...user, token});



module.exports = router;