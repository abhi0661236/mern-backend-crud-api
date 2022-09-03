// For database connection

import mongoose from 'mongoose';



const connectDB = (username, password) =>{
	const db = `mongodb+srv://${username}:${password}@gettingstarted.vczxijv.mongodb.net/?retryWrites=true&w=majority`;
	try {
		mongoose.connect(db,{useNewUrlParser: true});

		console.log("MongoDB is connected...");
	}catch(err){
		console.error(err.message);
		process.exit(1);
	}

}

export default connectDB;