const express = require('express');
const color = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const products= require('./data/products');
const dotenv= require('dotenv');
const connectDb = require('./config/db');

const productRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/UsersRoute');
const orderRoutes = require('./routes/orderRoutes');

const {errorHandler} = require('./middlewares/errorMiddleware');
//dotenv configcd cd 
dotenv.config();

//connecting to MongoDB database
connectDb();
const app=express();
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//middleware bodyparser
app.use(express.json());

app.use(cors());

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to node server</h1>');
});

app.use(`/api/products`,productRoutes);
app.use(`/api/users`,userRoutes);
app.use(`/api/orders`, orderRoutes);
app.use(errorHandler);

const PORT = 8080;
app.listen(process.env.PORT||PORT, ()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${process.env.PORT}`.inverse);
});
