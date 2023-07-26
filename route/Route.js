import bModel from '../model/BookModel';
import express from 'express';
// import { addUser, getUsers } from '../controller/userCon.js';
const bookRouter = express.Router();

//adding data
userRouter.post('/addBook', async (req, res, next) => {
	const { title, author, categories, image } = req.body;   
	try {
		const instructorData = new bModel({ title, author, categories, image });
		const savedData = await instructorData.save();
		res.status(200).send(savedData);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});
//getting all data
userRouter.get('/allBook', async (req, res, next) => {
	try {
		const All = await bModel.find();
		if (!All) {
			res.status(400).json({ message: 'book not found' });
		}
		res.status(200).send(All);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

export default bookRouter;
