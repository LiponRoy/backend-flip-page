import express from 'express';
import dotEnv from 'dotenv';
import mongoose from 'mongoose';
const app = express()
dotEnv.config();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const connect = async () => {
	try {
		mongoose.set('strictQuery', false);
		await mongoose.connect(process.env.MONGO);
		console.log('Connected to mongoDB.');
	} catch (error) {
		throw error;
	}
};
mongoose.connection.on('disconnected', () => {
	console.log('mongoDB disconnected!');
});

const port = process.env.PORT;
app.listen(port, () => {
	connect();
	const myApp = `App is running on port : ${port}`;
	console.log(myApp);
});