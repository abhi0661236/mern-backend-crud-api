import Books from '../models/Book.js';


export const getBooks = async (req, res) => {
    console.log("getBooks api is called....");
    try{
        const books = await Books.find();
        console.log(books);
        res.status(200).json({books});
    }catch (err){
        res.status(404).json({ nobooksfound: 'No Books found' });
    }

}
export const getBook = async (req, res) => {
    console.log("getBook api is called....");
    try {
        const Book = await Books.findById({_id: req.params.id});
        console.log(Book);
        res.status(200).json({Book});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const addBook = async (req, res) => {
    console.log("getBook api is called....");
    console.log(req.body);
    try {
        await Books.create(req.body);
        res.status(200).json({message: "Book has been added successfully."});
    } catch (error) {
        res.status(409).json({message:"Failed to add..."});
    }

}
export const removeBook = async (req, res) => {
    console.log("getBook api is called....");
    try {
        const deleted = await Books.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Deleted successfully",deleted});
    } catch (error) {
        res.status(409).json({message:"Unable to delete the book..."});
    }
}
export const updateBook = async (req, res) => {
    console.log("getBook api is called....");
    try {
        await Books.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({message: "updated successfully..."});
    } catch (error) {
        res.status(409).json({message:"Failed to update..."});
    }
}