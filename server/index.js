require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      massive = require('massive');

const { PORT_NUM, CONNECTION_STR, SECRET_SESH} = process.env;
const { register, login, userSession, logout} = require('./controller/auth');
const { getAll, search, filter } = require('./controller/controller');
const app = express()

//MIDDLEWARE
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
    secret: SECRET_SESH
}))

//DB CONNECTION
massive({
    connectionString: CONNECTION_STR,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    // db.seed()
    console.log('hooked up to DB')
    app.listen(PORT_NUM, () => console.log(`brought to you by port ${PORT_NUM}`))
})


//AUTH ENDPOINTS
app.post('/auth/register', register);
app.post('/auth/login', login);
app.get('/auth/session', userSession);
app.delete('/auth/logout', logout);

//Endpoints
app.get('/api/products', getAll);
app.get('/api/search', search);

app.get('/api/byprice/:search', filter);