const mongoose = require('mongoose');
const connectToDb = ()=>{
    const connnectionPrams ={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try {
        mongoose.connect(process.env.DB_URL, connnectionPrams)
        console.log(`Successfully connected to Database`)
    } catch (error) {
        console.log(`Could not connect to the database ${error}`)
        
    }

}
module.exports= connectToDb;