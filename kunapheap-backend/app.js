const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');

const path = require('path')

const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// app.get('/', async (req, res, next) => {
//   res.send({ message: 'Awesome it works 🐻' });
// });

 app.use(express.static(path.join(__dirname,'build')))

app.use('/admin', require('./src/routes/api.route'));
app.use('/user',require('./src/routes/user.route'));
app.use('/category',require('./src/routes/category.route'))
app.use('/product',require('./src/routes/product.route'))
app.use('/coloronsize',require('./src/routes/colorOnSize.route'))
app.use('/item',require('./src/routes/item.route'))

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
