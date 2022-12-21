declare class BookController {
    showFormAddBook(req: any, res: any): void;
    addBook(req: any, res: any): Promise<void>;
    showList(req: any, res: any): Promise<void>;
    showBookDetail(req: any, res: any): Promise<void>;
    updateBook(req: any, res: any): Promise<void>;
    deleteBook(req: any, res: any): Promise<void>;
}
declare let bookController: BookController;
export default bookController;
