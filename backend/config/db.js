const mongoose = require('mongoose');
require('colors');
const connectDb = ()=>{
    const conn = mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    })
    .then(conn=>console.log(`MongoDB connected ${conn.connection.host}`.yellow))
    .catch(err=>{
        console.error(`Error: ${err.message}`)
        process.exit(1);
    })

}

module.exports=connectDb;