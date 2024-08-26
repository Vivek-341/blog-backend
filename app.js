const express = require('express');
const app = express();
const blog = require('./controller/blog.js');
const user = require('./controller/user.js');
const thread = require('./controller/thread.js');
const login = require('./controller/login.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});

app.use('/blog', blog);
app.use('/user', user);
app.use('/thread', thread);
app.use('/login', login);

app.listen(3030);
