const mongoose=require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const products = require('./data/products');
const User = require('./models/user');
const Product = require('./models/product');
const Order = require('./models/order');
const connectDb = require("./config/db");
const { red } = require('colors');
require('colors');

dotenv.config();
connectDb();

const importData = async() =>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        const createUser = await User.insertMany(users)
        const adminUser = createUser[0]._id
        const sampleData = products.map((p)=>{
            return {...p, user:adminUser};
        })
        await Product.insertMany(sampleData)
        console.log("Data imported!".green.inverse);
        process.exit();
    }
     catch( err) {
         console.log(`${err}`.red.inverse)
         process.exit(1);
     }
};

const dataDestroy = async() =>{
    
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        console.log("Data destroyed!".green.inverse)
        process.exit();
    } catch(error) {
        console.log(`${error}`.red.inverse)
        process.exit(1);
    }
}

if(process.argv[2]==="-d") {
    dataDestroy()
} else {
    importData();
}