import Book from "../../models/book.model";

class DashBoardController {
    async showDashBoard(req, res) {
        let products = await Book.find().limit(9);
        res.render('user/dashboard',{data:products});
    }
}
export default DashBoardController;