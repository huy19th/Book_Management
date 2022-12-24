import fs from 'fs';

const validateBookProperties = (req, res, next) => {
    console.log(req.file);
    let error = {};
    if (!req.body.name) error['name'] = `Please include book's name`;
    if (!req.body.author) error['author'] = `Please include author`;
    if (!req.body.publisher) error['publisher'] = `Please include publisher`;
    if (!req.body.category) error['category'] = `Please include at least 1 category`;
    if (!req.body.quantity) error['quantity'] = `Please include quantity`;
    if (!req.body.price) error['price'] = `Please include price`;

    if (Object.keys(error).length) {
        let backURL = req.header('Referer');
        req.flash('error', error);
        req.flash('book', req.body);
        res.redirect(backURL);

        if (req.file) {
            fs.unlink(`./public/sharing/img/book/${req.file.filename}`, err => {
                console.log(err);
            })
        }
    }
    else {
        next();
    }
}

export default validateBookProperties;