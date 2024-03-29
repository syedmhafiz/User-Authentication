const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const alpha = "Zero One Two";

//EJS
app.use(expressLayouts);
app.set('view-engine', 'ejs');


//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started in port ${PORT}`));
