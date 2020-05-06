const bcrypt = require('bcryptjs');

module.exports = {

    register: async (req, res) => {
        const db = req.app.get('db');
        const {email, password} = req.body;
        // console.log('register', email, password)
        const [foundUser] = await db.auth.check_user(email);

        if(foundUser){
           return res.status(409).json('Email already exist')
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const [newUser] = await db.auth.create_user([email, hash]);
        req.session.user = newUser;
        // console.log('session', req.session.user)
        res.status(201).json(req.session.user)
    },

    login: async (req, res) => {
        const db = req.app.get('db');
        const { email, password } = req.body;
        console.log('login', req.body)
        const [foundUser] = await db.auth.check_user(email);

        if(!foundUser){
            return res.status(404).json('Incorrect email or password')
        }
        
        const authorized = await bcrypt.compareSync(password, foundUser.password);

        if(authorized){
            delete foundUser.password
            req.session.user = foundUser;
            console.log('loginSession', req.session.user)
            res.status(200).json(req.session.user)
        }else{
            res.status(404).json('Incorrect email or password')
        }

    },

    logout: (req, res) => {

        req.session.destroy()
        res.sendStatus(200)

    },

    userSession: async (req, res) => {
        if(req.session.user){
            res.status(200).json(req.session.user)
        }else{
            res.sendStatus(404)
        }
    },
}
