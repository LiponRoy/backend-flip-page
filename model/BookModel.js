import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		author: { type: String, required: true },
		categories: { type: String, required: true },
		image: { type: String, required: true },
	},
	{ timestamps: true },
);

const books = mongoose.model('flipPage', BookSchema);
export default books;