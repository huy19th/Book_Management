"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
var LOCAL_DB_URL = 'mongodb://localhost:27017/book_test';
var CLOUD_DB_URL = 'mongodb+srv://bluebird:0825@bluebird.dthv7st.mongodb.net/book_management';
var userSchema = new mongoose_2.Schema({
    email: String,
    password: String,
    name: String,
    phone: String,
    role: String
});
var User = (0, mongoose_2.model)('User', userSchema);
var bookSchema = new mongoose_2.Schema({
    name: String,
    category: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'Category' }],
    author: { type: mongoose_2.Schema.Types.ObjectId, ref: 'Author' },
    publisher: { type: mongoose_2.Schema.Types.ObjectId, ref: 'Publisher' },
    description: String,
    image: String,
    quantity: Number,
    price: Number
});
var Book = (0, mongoose_2.model)('Book', bookSchema);
var categorySchema = new mongoose_2.Schema({
    name: String,
    description: String
});
var Category = (0, mongoose_2.model)('Category', categorySchema);
var authorSchema = new mongoose_2.Schema({
    name: String,
    biography: String,
    image: String
});
var Author = (0, mongoose_2.model)('Author', authorSchema);
var publisherSchema = new mongoose_2.Schema({
    name: String,
    info: String,
    logo: String
});
var Publisher = (0, mongoose_2.model)('Publisher', publisherSchema);
var orderSchema = new mongoose_2.Schema({
    orderDate: Date,
    deliveryDate: Date,
    user: { type: mongoose_2.Schema.Types.ObjectId, ref: 'User' },
    totalMoney: Number
});
var Order = (0, mongoose_2.model)('Order', orderSchema);
var orderDetailSchema = new mongoose_2.Schema({
    order: { type: mongoose_2.Schema.Types.ObjectId, ref: 'Order' },
    book: { type: mongoose_2.Schema.Types.ObjectId, ref: 'Book' },
    quantity: Number
});
var OrderDetail = (0, mongoose_2.model)('OrderDetail', orderDetailSchema);
mongoose_1["default"].set('strictQuery', false);
mongoose_1["default"].connect(CLOUD_DB_URL)
    .then(function () { return console.log('DB Connected!'); })["catch"](function (error) { return console.log('DB connection error:', error.message); });
//Tạo User;
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var user0, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, author1, author2, author3, author4, author5, author6, author7, author8, publisher1, publisher2, publisher3, publisher4, category1, category2, category3, category4, category5, category6, category7, category8, category9, category10, category11, category12, category13, category14, book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15, book16, book17, book18, book19, book20, book21, book22, book23, book24, book25, book26, book27, book28, book29, book30, book31, book32, book33, book34, book35, book36, book37, book38, book39, book40, book41, book42, book43, book44, book45, book46, book47, book48, book49, book50, book51, order1, order2, order3, order4, order5, order6, order7, order8, order9, order10, order11, order12, order13, order14, order15, order16, order17, order18, order19, order20, order21, order22, order23, order24, order25, order26, order27, order28, order29, order30, order31, order32, order33, order34, order35, order36, order37, order38, order39, order40, order41, order42, order43, order44, order45, order46, order47, order48, order49, order50, order51, order52, order53, order54, order55, order56, order57, order58, order59, order60, order61, order62, order63, order64, order65, order67, order68, order69, order70, order71, order72, order73, order74, order75, order76, order77, order78, order79, order80, order81, order82, order83, order84, order85, order86, order87, order88, order89, order90, order91, order93, order94, order95, order96, order97, order98, order99, order100, order101, order103, order104, order105, order106, order107, order108, order109, order110, order111, order112, order113, order114, order115, order116, order117, order118, order119, order120, order121, order122, order123, order124, order125, order126, order127, order128, order129, order130, order131, order132, order133, order134, order135, order137, order138, order139, order140, order142, order143, order144, order145, order146, order147, order148, order149, order150, orderDetail1, orderDetail2, orderDetail3, orderDetail4, orderDetail5, orderDetail6, orderDetail7, orderDetail8, orderDetail9, orderDetail10, orderDetail11, orderDetail12, orderDetail13, orderDetail14, orderDetail15, orderDetail16, orderDetail17, orderDetail18, orderDetail19, orderDetail20, orderDetail21, orderDetail22, orderDetail23, orderDetail24, orderDetail25, orderDetail26, orderDetail27, orderDetail28, orderDetail29, orderDetail30, orderDetail31, orderDetail32, orderDetail33, orderDetail34, orderDetail35, orderDetail36, orderDetail37, orderDetail38, orderDetail39, orderDetail40, orderDetail41, orderDetail42, orderDetail43, orderDetail44, orderDetail45, orderDetail46, orderDetail47, orderDetail48, orderDetail49, orderDetail50, orderDetail51, orderDetail52, orderDetail53, orderDetail54, orderDetail55, orderDetail56, orderDetail57, orderDetail58, orderDetail59, orderDetail60, orderDetail61, orderDetail62, orderDetail63, orderDetail64, orderDetail65, orderDetail66, orderDetail67, orderDetail68, orderDetail69, orderDetail70, orderDetail71, orderDetail72, orderDetail73, orderDetail74, orderDetail75, orderDetail76, orderDetail77, orderDetail78, orderDetail79, orderDetail80, orderDetail81, orderDetail82, orderDetail83, orderDetail84, orderDetail85, orderDetail86, orderDetail87, orderDetail88, orderDetail89, orderDetail90, orderDetail91, orderDetail92, orderDetail93, orderDetail94, orderDetail95, orderDetail96, orderDetail97, orderDetail98, orderDetail99, orderDetail100, orderDetail101, orderDetail102, orderDetail103, orderDetail104, orderDetail105, orderDetail106, orderDetail107, orderDetail108, orderDetail109, orderDetail110, orderDetail111, orderDetail112, orderDetail113, orderDetail114, orderDetail115, orderDetail116, orderDetail117, orderDetail118, orderDetail119, orderDetail120, orderDetail121, orderDetail122, orderDetail123, orderDetail124, orderDetail125, orderDetail126, orderDetail127, orderDetail128, orderDetail129, orderDetail130, orderDetail131, orderDetail132, orderDetail133, orderDetail134, orderDetail135, orderDetail136, orderDetail137, orderDetail138, orderDetail139, orderDetail140, orderDetail141, orderDetail142, orderDetail143, orderDetail144, orderDetail145, orderDetail146, orderDetail147, orderDetail148, orderDetail149, orderDetail150, orderDetail151, orderDetail152, orderDetail153, orderDetail154, orderDetail155, orderDetail156, orderDetail157, orderDetail158, orderDetail159, orderDetail160, orderDetail161, orderDetail162, orderDetail163, orderDetail164, orderDetail165, orderDetail166, orderDetail167, orderDetail168, orderDetail169, orderDetail170, orderDetail171, orderDetail172, orderDetail173, orderDetail174, orderDetail175, orderDetail176, orderDetail177, orderDetail178, orderDetail179, orderDetail180, orderDetail181, orderDetail182, orderDetail183, orderDetail184, orderDetail185, orderDetail186, orderDetail187, orderDetail188, orderDetail189, orderDetail190, orderDetail191, orderDetail192, orderDetail193, orderDetail194, orderDetail195, orderDetail196, orderDetail197, orderDetail198, orderDetail199, orderDetail200, orderDetail201, orderDetail202, orderDetail203, orderDetail204, orderDetail205, orderDetail206, orderDetail207, orderDetail208, orderDetail209, orderDetail210, orderDetail211, orderDetail212, orderDetail213, orderDetail214, orderDetail215, orderDetail216, orderDetail217, orderDetail218, orderDetail219, orderDetail220, orderDetail221, orderDetail222, orderDetail223, orderDetail224, orderDetail225, orderDetail226, orderDetail227, orderDetail228, orderDetail229, orderDetail230, orderDetail231, orderDetail232, orderDetail233, orderDetail234, orderDetail235, orderDetail236, orderDetail237, orderDetail238, orderDetail239, orderDetail240, orderDetail241, orderDetail242, orderDetail243, orderDetail244, orderDetail245, orderDetail246, orderDetail247, orderDetail248, orderDetail249, orderDetail250, orderDetail251, orderDetail252, orderDetail253, orderDetail254, orderDetail255, orderDetail256, orderDetail257, orderDetail258, orderDetail259, orderDetail260, orderDetail261, orderDetail262, orderDetail263, orderDetail264, orderDetail265, orderDetail266, orderDetail267, orderDetail268, orderDetail269, orderDetail270, orderDetail271, orderDetail272, orderDetail273, orderDetail274, orderDetail275, orderDetail276, orderDetail277, orderDetail278, orderDetail279, orderDetail280, orderDetail281, orderDetail282, orderDetail283, orderDetail284, orderDetail285, orderDetail286, orderDetail287, orderDetail288, orderDetail289, orderDetail290, orderDetail291, orderDetail292, orderDetail293, orderDetail294, orderDetail295, orderDetail296, orderDetail297, orderDetail298, orderDetail299, orderDetail300, orderDetail301, orderDetail302, orderDetail303, orderDetail304, orderDetail305, orderDetail306, orderDetail307, orderDetail308, orderDetail309, orderDetail310, orderDetail311, orderDetail312, orderDetail313, orderDetail314, orderDetail315, orderDetail316, orderDetail317, orderDetail318, orderDetail319, orderDetail320, orderDetail321, orderDetail322, orderDetail323, orderDetail324, orderDetail325, orderDetail326, orderDetail327, orderDetail328, orderDetail329, orderDetail330, orderDetail331, orderDetail332, orderDetail333, orderDetail334, orderDetail335, orderDetail336, orderDetail337, orderDetail338, orderDetail339, orderDetail340, orderDetail341, orderDetail342, orderDetail343, orderDetail344, orderDetail345, orderDetail346, orderDetail347, orderDetail348, orderDetail349, orderDetail350, orderDetail351, orderDetail352, orderDetail353, orderDetail354, orderDetail355, orderDetail356, orderDetail357, orderDetail358, orderDetail359, orderDetail360, orderDetail361, orderDetail362, orderDetail363, orderDetail364, orderDetail365, orderDetail366, orderDetail367, orderDetail368, orderDetail369, orderDetail370, orderDetail371, orderDetail372, orderDetail373, orderDetail374, orderDetail375, orderDetail376, orderDetail377, orderDetail378, orderDetail379, orderDetail380, orderDetail381, orderDetail382, orderDetail383, orderDetail384, orderDetail385, orderDetail386, orderDetail387, orderDetail388, orderDetail389, orderDetail390, orderDetail391, orderDetail392, orderDetail393, orderDetail394, orderDetail395, orderDetail396, orderDetail397, orderDetail398, orderDetail399, orderDetail400, orderDetail401, orderDetail402, orderDetail403, orderDetail404, orderDetail405, orderDetail406, orderDetail407, orderDetail408, orderDetail409, orderDetail410, orderDetail411, orderDetail412, orderDetail413, orderDetail414, orderDetail415, orderDetail416, orderDetail417, orderDetail418, orderDetail419, orderDetail420, orderDetail421, orderDetail422, orderDetail423, orderDetail424, orderDetail425, orderDetail426, orderDetail427, orderDetail428, orderDetail429, orderDetail430, orderDetail431, orderDetail432, orderDetail433, orderDetail434, orderDetail435, orderDetail436, orderDetail437, orderDetail438, orderDetail439, orderDetail440, orderDetail441, orderDetail442, orderDetail443, orderDetail444, orderDetail445, orderDetail446, orderDetail447, orderDetail448, orderDetail449, orderDetail450, orderDetail451, orderDetail452, orderDetail453, orderDetail454;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user0 = new User({ email: 'eren@gmail.com', password: '123456', name: 'Eren Yeager', phone: '0575400395', address: 'Earth', role: 'admin' });
                return [4 /*yield*/, user0.save()];
            case 1:
                _a.sent();
                user1 = new User({ email: 'mikasa@gmail.com', password: '123456', name: 'Mikasa Ackerman', phone: '0397447651', address: 'Earth', role: 'user' });
                return [4 /*yield*/, user1.save()];
            case 2:
                _a.sent();
                user2 = new User({ email: 'armin@gmail.com', password: '123456', name: 'Armin Alert', phone: '0833614637', address: 'Earth', role: 'user' });
                return [4 /*yield*/, user2.save()];
            case 3:
                _a.sent();
                user3 = new User({ email: 'annie@gmail.com', password: '123456', name: 'Annie Leonheart', phone: '0800635667', address: 'Earth', role: 'user' });
                return [4 /*yield*/, user3.save()];
            case 4:
                _a.sent();
                user4 = new User({ email: 'reiner@gmail.com', password: '123456', name: 'Reiner Braun', phone: '0898917636', address: 'Earth', role: 'user' });
                return [4 /*yield*/, user4.save()];
            case 5:
                _a.sent();
                user5 = new User({ email: 'bertholdt@gmail.com', password: '123456', name: 'Bertholdt Hoover', phone: '0798459174', address: 'Earth', role: 'user' });
                return [4 /*yield*/, user5.save()];
            case 6:
                _a.sent();
                user6 = new User({ email: 'jean@gmail.com', password: '123456', name: 'Jean Kirschtein', phone: '0748465841', address: 'Earth', role: 'user' });
                return [4 /*yield*/, user6.save()];
            case 7:
                _a.sent();
                user7 = new User({ email: 'levi@gmail.com', password: '123456', name: 'Levi Ackerman', phone: '0374818608', address: 'Earth', role: 'user' });
                return [4 /*yield*/, user7.save()];
            case 8:
                _a.sent();
                user8 = new User({ email: 'hange@gmail.com', password: '123456', name: 'Hange Zoe', phone: '0695351762', address: 'Earth', role: 'user' });
                return [4 /*yield*/, user8.save()];
            case 9:
                _a.sent();
                user9 = new User({ email: 'erwin@gmail.com', password: '123456', name: 'Erwin Smith', phone: '0910715236', address: 'Earth', role: 'user' });
                return [4 /*yield*/, user9.save()];
            case 10:
                _a.sent();
                user10 = new User({ email: 'floch@gmail.com', password: '123456', name: 'Floch Forster', phone: '0884920510', address: 'Earth', role: 'user' });
                return [4 /*yield*/, user10.save()];
            case 11:
                _a.sent();
                author1 = new Author({ name: 'J. R. R. Tolkien' });
                return [4 /*yield*/, author1.save()];
            case 12:
                _a.sent();
                author2 = new Author({ name: 'Isayama Hajime' });
                return [4 /*yield*/, author2.save()];
            case 13:
                _a.sent();
                author3 = new Author({ name: 'One' });
                return [4 /*yield*/, author3.save()];
            case 14:
                _a.sent();
                author4 = new Author({ name: 'Nekomaki' });
                return [4 /*yield*/, author4.save()];
            case 15:
                _a.sent();
                author5 = new Author({ name: 'J. K. Rowling' });
                return [4 /*yield*/, author5.save()];
            case 16:
                _a.sent();
                author6 = new Author({ name: 'Ayya Khema' });
                return [4 /*yield*/, author6.save()];
            case 17:
                _a.sent();
                author7 = new Author({ name: 'Roderick Gordon' });
                return [4 /*yield*/, author7.save()];
            case 18:
                _a.sent();
                author8 = new Author({ name: 'Yuki Urushibara' });
                return [4 /*yield*/, author8.save()];
            case 19:
                _a.sent();
                publisher1 = new Publisher({ name: 'Nhã Nam' });
                return [4 /*yield*/, publisher1.save()];
            case 20:
                _a.sent();
                publisher2 = new Publisher({ name: 'Kodansah Comics' });
                return [4 /*yield*/, publisher2.save()];
            case 21:
                _a.sent();
                publisher3 = new Publisher({ name: 'Kim Đồng' });
                return [4 /*yield*/, publisher3.save()];
            case 22:
                _a.sent();
                publisher4 = new Publisher({ name: 'Lao Động' });
                return [4 /*yield*/, publisher4.save()];
            case 23:
                _a.sent();
                category1 = new Category({ name: 'Action' });
                return [4 /*yield*/, category1.save()];
            case 24:
                _a.sent();
                category2 = new Category({ name: 'Adventure' });
                return [4 /*yield*/, category2.save()];
            case 25:
                _a.sent();
                category3 = new Category({ name: 'Classics' });
                return [4 /*yield*/, category3.save()];
            case 26:
                _a.sent();
                category4 = new Category({ name: 'Crime' });
                return [4 /*yield*/, category4.save()];
            case 27:
                _a.sent();
                category5 = new Category({ name: 'Fairy tales' });
                return [4 /*yield*/, category5.save()];
            case 28:
                _a.sent();
                category6 = new Category({ name: 'Fantasy' });
                return [4 /*yield*/, category6.save()];
            case 29:
                _a.sent();
                category7 = new Category({ name: 'Mystery' });
                return [4 /*yield*/, category7.save()];
            case 30:
                _a.sent();
                category8 = new Category({ name: 'Horror' });
                return [4 /*yield*/, category8.save()];
            case 31:
                _a.sent();
                category9 = new Category({ name: 'Romance' });
                return [4 /*yield*/, category9.save()];
            case 32:
                _a.sent();
                category10 = new Category({ name: 'Fiction' });
                return [4 /*yield*/, category10.save()];
            case 33:
                _a.sent();
                category11 = new Category({ name: 'Slice of life' });
                return [4 /*yield*/, category11.save()];
            case 34:
                _a.sent();
                category12 = new Category({ name: 'Thrillers' });
                return [4 /*yield*/, category12.save()];
            case 35:
                _a.sent();
                category13 = new Category({ name: 'War' });
                return [4 /*yield*/, category13.save()];
            case 36:
                _a.sent();
                category14 = new Category({ name: 'Superhero' });
                return [4 /*yield*/, category14.save()];
            case 37:
                _a.sent();
                book1 = new Book({ name: 'The Fellowship of the Ring', category: [category6._id], author: author1._id, publisher: publisher1._id, description: 'The Lord of the Rings, fantasy novel by J.R.R. Tolkien initially published in three parts as The Fellowship of the Ring (1954), The Two Towers (1955), and The Return of the King (1955). The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien’s extensive knowledge of philology and folklore.', quantity: 6, price: 200000 });
                return [4 /*yield*/, book1.save()];
            case 38:
                _a.sent();
                book2 = new Book({ name: 'The Two Towers', category: [category6._id], author: author1._id, publisher: publisher1._id, description: 'The Lord of the Rings, fantasy novel by J.R.R. Tolkien initially published in three parts as The Fellowship of the Ring (1954), The Two Towers (1955), and The Return of the King (1955). The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien’s extensive knowledge of philology and folklore.', quantity: 3, price: 200000 });
                return [4 /*yield*/, book2.save()];
            case 39:
                _a.sent();
                book3 = new Book({ name: 'The Return of the King', category: [category6._id], author: author1._id, publisher: publisher1._id, description: 'The Lord of the Rings, fantasy novel by J.R.R. Tolkien initially published in three parts as The Fellowship of the Ring (1954), The Two Towers (1955), and The Return of the King (1955). The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien’s extensive knowledge of philology and folklore.', quantity: 6, price: 200000 });
                return [4 /*yield*/, book3.save()];
            case 40:
                _a.sent();
                book4 = new Book({ name: 'Attack on Titan volume 28', category: [category1._id], author: author2._id, publisher: publisher2._id, description: 'Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.', quantity: 7, price: 31500 });
                return [4 /*yield*/, book4.save()];
            case 41:
                _a.sent();
                book5 = new Book({ name: 'Attack on Titan volume 29', category: [category1._id], author: author2._id, publisher: publisher2._id, description: 'Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.', quantity: 7, price: 32000 });
                return [4 /*yield*/, book5.save()];
            case 42:
                _a.sent();
                book6 = new Book({ name: 'Attack on Titan volume 30', category: [category1._id], author: author2._id, publisher: publisher2._id, description: 'Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.', quantity: 5, price: 32500 });
                return [4 /*yield*/, book6.save()];
            case 43:
                _a.sent();
                book7 = new Book({ name: 'Attack on Titan volume 31', category: [category1._id], author: author2._id, publisher: publisher2._id, description: 'Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.', quantity: 9, price: 33000 });
                return [4 /*yield*/, book7.save()];
            case 44:
                _a.sent();
                book8 = new Book({ name: 'Attack on Titan volume 32', category: [category1._id], author: author2._id, publisher: publisher2._id, description: 'Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.', quantity: 6, price: 33500 });
                return [4 /*yield*/, book8.save()];
            case 45:
                _a.sent();
                book9 = new Book({ name: 'Attack on Titan volume 33', category: [category1._id], author: author2._id, publisher: publisher2._id, description: 'Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.', quantity: 8, price: 34000 });
                return [4 /*yield*/, book9.save()];
            case 46:
                _a.sent();
                book10 = new Book({ name: 'Attack on Titan volume 34', category: [category1._id], author: author2._id, publisher: publisher2._id, description: 'Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.', quantity: 3, price: 35000 });
                return [4 /*yield*/, book10.save()];
            case 47:
                _a.sent();
                book11 = new Book({ name: 'One-Punch Man volume 14', category: [category14._id], author: author3._id, publisher: publisher3._id, description: 'One-Punch Man is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.', quantity: 7, price: 20000 });
                return [4 /*yield*/, book11.save()];
            case 48:
                _a.sent();
                book12 = new Book({ name: 'One-Punch Man volume 15', category: [category14._id], author: author3._id, publisher: publisher3._id, description: 'One-Punch Man is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.', quantity: 8, price: 20000 });
                return [4 /*yield*/, book12.save()];
            case 49:
                _a.sent();
                book13 = new Book({ name: 'One-Punch Man volume 16', category: [category14._id], author: author3._id, publisher: publisher3._id, description: 'One-Punch Man is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.', quantity: 9, price: 20000 });
                return [4 /*yield*/, book13.save()];
            case 50:
                _a.sent();
                book14 = new Book({ name: 'One-Punch Man volume 17', category: [category14._id], author: author3._id, publisher: publisher3._id, description: 'One-Punch Man is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.', quantity: 5, price: 20000 });
                return [4 /*yield*/, book14.save()];
            case 51:
                _a.sent();
                book15 = new Book({ name: 'One-Punch Man volume 18', category: [category14._id], author: author3._id, publisher: publisher3._id, description: 'One-Punch Man is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.', quantity: 5, price: 20000 });
                return [4 /*yield*/, book15.save()];
            case 52:
                _a.sent();
                book16 = new Book({ name: 'One-Punch Man volume 19', category: [category14._id], author: author3._id, publisher: publisher3._id, description: 'One-Punch Man is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.', quantity: 4, price: 20000 });
                return [4 /*yield*/, book16.save()];
            case 53:
                _a.sent();
                book17 = new Book({ name: 'One-Punch Man volume 20', category: [category14._id], author: author3._id, publisher: publisher3._id, description: 'One-Punch Man is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.', quantity: 11, price: 20000 });
                return [4 /*yield*/, book17.save()];
            case 54:
                _a.sent();
                book18 = new Book({ name: 'One-Punch Man volume 21', category: [category14._id], author: author3._id, publisher: publisher3._id, description: 'One-Punch Man is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.', quantity: 5, price: 20000 });
                return [4 /*yield*/, book18.save()];
            case 55:
                _a.sent();
                book19 = new Book({ name: 'One-Punch Man volume 22', category: [category14._id], author: author3._id, publisher: publisher3._id, description: 'One-Punch Man is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.', quantity: 7, price: 20000 });
                return [4 /*yield*/, book19.save()];
            case 56:
                _a.sent();
                book20 = new Book({ name: 'One-Punch Man volume 23', category: [category14._id], author: author3._id, publisher: publisher3._id, description: 'One-Punch Man is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.', quantity: 5, price: 20000 });
                return [4 /*yield*/, book20.save()];
            case 57:
                _a.sent();
                book21 = new Book({ name: 'Neko to Jii-chan volume 1', category: [category11._id], author: author4._id, publisher: publisher3._id, description: 'The story follows the everyday lives of Daikichi, an elderly man, and his pet cat, Tama. Daikichi has lived his entire life in a small island town, and although young people have begun moving there and the landscape and scenery have begun to change, the one thing that remains constant is Daikichi.', quantity: 7, price: 50000 });
                return [4 /*yield*/, book21.save()];
            case 58:
                _a.sent();
                book22 = new Book({ name: 'Neko to Jii-chan volume 2', category: [category11._id], author: author4._id, publisher: publisher3._id, description: 'The story follows the everyday lives of Daikichi, an elderly man, and his pet cat, Tama. Daikichi has lived his entire life in a small island town, and although young people have begun moving there and the landscape and scenery have begun to change, the one thing that remains constant is Daikichi.', quantity: 9, price: 50000 });
                return [4 /*yield*/, book22.save()];
            case 59:
                _a.sent();
                book23 = new Book({ name: 'Neko to Jii-chan volume 3', category: [category11._id], author: author4._id, publisher: publisher3._id, description: 'The story follows the everyday lives of Daikichi, an elderly man, and his pet cat, Tama. Daikichi has lived his entire life in a small island town, and although young people have begun moving there and the landscape and scenery have begun to change, the one thing that remains constant is Daikichi.', quantity: 8, price: 50000 });
                return [4 /*yield*/, book23.save()];
            case 60:
                _a.sent();
                book24 = new Book({ name: 'Neko to Jii-chan volume 4', category: [category11._id], author: author4._id, publisher: publisher3._id, description: 'The story follows the everyday lives of Daikichi, an elderly man, and his pet cat, Tama. Daikichi has lived his entire life in a small island town, and although young people have begun moving there and the landscape and scenery have begun to change, the one thing that remains constant is Daikichi.', quantity: 4, price: 50000 });
                return [4 /*yield*/, book24.save()];
            case 61:
                _a.sent();
                book25 = new Book({ name: 'Neko to Jii-chan volume 5', category: [category11._id], author: author4._id, publisher: publisher3._id, description: 'The story follows the everyday lives of Daikichi, an elderly man, and his pet cat, Tama. Daikichi has lived his entire life in a small island town, and although young people have begun moving there and the landscape and scenery have begun to change, the one thing that remains constant is Daikichi.', quantity: 10, price: 50000 });
                return [4 /*yield*/, book25.save()];
            case 62:
                _a.sent();
                book26 = new Book({ name: 'Neko to Jii-chan volume 6', category: [category11._id], author: author4._id, publisher: publisher3._id, description: 'The story follows the everyday lives of Daikichi, an elderly man, and his pet cat, Tama. Daikichi has lived his entire life in a small island town, and although young people have begun moving there and the landscape and scenery have begun to change, the one thing that remains constant is Daikichi.', quantity: 7, price: 50000 });
                return [4 /*yield*/, book26.save()];
            case 63:
                _a.sent();
                book27 = new Book({ name: 'Neko to Jii-chan volume 7', category: [category11._id], author: author4._id, publisher: publisher3._id, description: 'The story follows the everyday lives of Daikichi, an elderly man, and his pet cat, Tama. Daikichi has lived his entire life in a small island town, and although young people have begun moving there and the landscape and scenery have begun to change, the one thing that remains constant is Daikichi.', quantity: 4, price: 50000 });
                return [4 /*yield*/, book27.save()];
            case 64:
                _a.sent();
                book28 = new Book({ name: "Harry Potter and the Sorcerer's Stone", category: [category10._id], author: author5._id, publisher: publisher1._id, description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).", quantity: 10, price: 170000 });
                return [4 /*yield*/, book28.save()];
            case 65:
                _a.sent();
                book29 = new Book({ name: "Harry Potter and the Chamber of Secrets", category: [category10._id], author: author5._id, publisher: publisher1._id, description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).", quantity: 8, price: 170000 });
                return [4 /*yield*/, book29.save()];
            case 66:
                _a.sent();
                book30 = new Book({ name: "Harry Potter and the Prisoner of Azkaban", category: [category10._id], author: author5._id, publisher: publisher1._id, description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).", quantity: 4, price: 170000 });
                return [4 /*yield*/, book30.save()];
            case 67:
                _a.sent();
                book31 = new Book({ name: "Harry Potter and the Goblet of Fire", category: [category10._id], author: author5._id, publisher: publisher1._id, description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).", quantity: 10, price: 170000 });
                return [4 /*yield*/, book31.save()];
            case 68:
                _a.sent();
                book32 = new Book({ name: "Harry Potter and the Order of the Phoenix", category: [category10._id], author: author5._id, publisher: publisher1._id, description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).", quantity: 3, price: 170000 });
                return [4 /*yield*/, book32.save()];
            case 69:
                _a.sent();
                book33 = new Book({ name: "Harry Potter and the Half-Blood Prince", category: [category10._id], author: author5._id, publisher: publisher1._id, description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).", quantity: 4, price: 170000 });
                return [4 /*yield*/, book33.save()];
            case 70:
                _a.sent();
                book34 = new Book({ name: "Harry Potter and the Deathly Hallows", category: [category10._id], author: author5._id, publisher: publisher1._id, description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).", quantity: 6, price: 170000 });
                return [4 /*yield*/, book34.save()];
            case 71:
                _a.sent();
                book35 = new Book({ name: 'Being Nobody, Going Nowhere', category: [category11._id], author: author6._id, publisher: publisher4._id, description: '', quantity: 4, price: 170000 });
                return [4 /*yield*/, book35.save()];
            case 72:
                _a.sent();
                book36 = new Book({ name: 'Tunnels', category: [category7._id], author: author7._id, publisher: publisher4._id, description: "Tunnels is a subterranean fiction novel by British authors Roderick Gordon and Brian Williams. It was initially self-published as The Highfield Mole in 2005, and re-released as Tunnels by The Chicken House in 2007. The story follows Will Burrows, a 14-year-old 'archaeologist', who stumbles upon an underground civilization called The Colony. Will and his friend Chester flee The Colony and set out to find Will's father, in the Deeps, a place even deeper in the Earth than The Colony.", quantity: 5, price: 220000 });
                return [4 /*yield*/, book36.save()];
            case 73:
                _a.sent();
                book37 = new Book({ name: 'Deeper', category: [category7._id], author: author7._id, publisher: publisher4._id, description: "Tunnels is a subterranean fiction novel by British authors Roderick Gordon and Brian Williams. It was initially self-published as The Highfield Mole in 2005, and re-released as Tunnels by The Chicken House in 2007. The story follows Will Burrows, a 14-year-old 'archaeologist', who stumbles upon an underground civilization called The Colony. Will and his friend Chester flee The Colony and set out to find Will's father, in the Deeps, a place even deeper in the Earth than The Colony.", quantity: 3, price: 220000 });
                return [4 /*yield*/, book37.save()];
            case 74:
                _a.sent();
                book38 = new Book({ name: 'Freefall', category: [category7._id], author: author7._id, publisher: publisher4._id, description: "Tunnels is a subterranean fiction novel by British authors Roderick Gordon and Brian Williams. It was initially self-published as The Highfield Mole in 2005, and re-released as Tunnels by The Chicken House in 2007. The story follows Will Burrows, a 14-year-old 'archaeologist', who stumbles upon an underground civilization called The Colony. Will and his friend Chester flee The Colony and set out to find Will's father, in the Deeps, a place even deeper in the Earth than The Colony.", quantity: 7, price: 220000 });
                return [4 /*yield*/, book38.save()];
            case 75:
                _a.sent();
                book39 = new Book({ name: 'Closer', category: [category7._id], author: author7._id, publisher: publisher4._id, description: "Tunnels is a subterranean fiction novel by British authors Roderick Gordon and Brian Williams. It was initially self-published as The Highfield Mole in 2005, and re-released as Tunnels by The Chicken House in 2007. The story follows Will Burrows, a 14-year-old 'archaeologist', who stumbles upon an underground civilization called The Colony. Will and his friend Chester flee The Colony and set out to find Will's father, in the Deeps, a place even deeper in the Earth than The Colony.", quantity: 4, price: 220000 });
                return [4 /*yield*/, book39.save()];
            case 76:
                _a.sent();
                book40 = new Book({ name: 'Spiral', category: [category7._id], author: author7._id, publisher: publisher4._id, description: "Tunnels is a subterranean fiction novel by British authors Roderick Gordon and Brian Williams. It was initially self-published as The Highfield Mole in 2005, and re-released as Tunnels by The Chicken House in 2007. The story follows Will Burrows, a 14-year-old 'archaeologist', who stumbles upon an underground civilization called The Colony. Will and his friend Chester flee The Colony and set out to find Will's father, in the Deeps, a place even deeper in the Earth than The Colony.", quantity: 9, price: 220000 });
                return [4 /*yield*/, book40.save()];
            case 77:
                _a.sent();
                book41 = new Book({ name: 'Terminal', category: [category7._id], author: author7._id, publisher: publisher4._id, description: "Tunnels is a subterranean fiction novel by British authors Roderick Gordon and Brian Williams. It was initially self-published as The Highfield Mole in 2005, and re-released as Tunnels by The Chicken House in 2007. The story follows Will Burrows, a 14-year-old 'archaeologist', who stumbles upon an underground civilization called The Colony. Will and his friend Chester flee The Colony and set out to find Will's father, in the Deeps, a place even deeper in the Earth than The Colony.", quantity: 4, price: 220000 });
                return [4 /*yield*/, book41.save()];
            case 78:
                _a.sent();
                book42 = new Book({ name: 'Mushishi volume 1', category: [category5._id], author: author8._id, publisher: publisher2._id, description: "Mushishi is a manga series written and illustrated by Yuki Urushibara, published in Kodansha's Afternoon magazine from January 1999 to August 2008. The story revolves around strange creatures called mushi (蟲) that can cause strange phenomena to the world and creatures around them. Only some can see the mushi, either by being born with the ability or by being affected by the mushi in some way. Some people, called mushi-shi, study to learn more about these creatures and about life itself. One such person is Ginko, the main character of the story, who travels and assists people plagued by mushi", quantity: 6, price: 25000 });
                return [4 /*yield*/, book42.save()];
            case 79:
                _a.sent();
                book43 = new Book({ name: 'Mushishi volume 2', category: [category5._id], author: author8._id, publisher: publisher2._id, description: "Mushishi is a manga series written and illustrated by Yuki Urushibara, published in Kodansha's Afternoon magazine from January 1999 to August 2008. The story revolves around strange creatures called mushi (蟲) that can cause strange phenomena to the world and creatures around them. Only some can see the mushi, either by being born with the ability or by being affected by the mushi in some way. Some people, called mushi-shi, study to learn more about these creatures and about life itself. One such person is Ginko, the main character of the story, who travels and assists people plagued by mushi", quantity: 6, price: 25000 });
                return [4 /*yield*/, book43.save()];
            case 80:
                _a.sent();
                book44 = new Book({ name: 'Mushishi volume 3', category: [category5._id], author: author8._id, publisher: publisher2._id, description: "Mushishi is a manga series written and illustrated by Yuki Urushibara, published in Kodansha's Afternoon magazine from January 1999 to August 2008. The story revolves around strange creatures called mushi (蟲) that can cause strange phenomena to the world and creatures around them. Only some can see the mushi, either by being born with the ability or by being affected by the mushi in some way. Some people, called mushi-shi, study to learn more about these creatures and about life itself. One such person is Ginko, the main character of the story, who travels and assists people plagued by mushi", quantity: 5, price: 25000 });
                return [4 /*yield*/, book44.save()];
            case 81:
                _a.sent();
                book45 = new Book({ name: 'Mushishi volume 4', category: [category5._id], author: author8._id, publisher: publisher2._id, description: "Mushishi is a manga series written and illustrated by Yuki Urushibara, published in Kodansha's Afternoon magazine from January 1999 to August 2008. The story revolves around strange creatures called mushi (蟲) that can cause strange phenomena to the world and creatures around them. Only some can see the mushi, either by being born with the ability or by being affected by the mushi in some way. Some people, called mushi-shi, study to learn more about these creatures and about life itself. One such person is Ginko, the main character of the story, who travels and assists people plagued by mushi", quantity: 6, price: 25000 });
                return [4 /*yield*/, book45.save()];
            case 82:
                _a.sent();
                book46 = new Book({ name: 'Mushishi volume 5', category: [category5._id], author: author8._id, publisher: publisher2._id, description: "Mushishi is a manga series written and illustrated by Yuki Urushibara, published in Kodansha's Afternoon magazine from January 1999 to August 2008. The story revolves around strange creatures called mushi (蟲) that can cause strange phenomena to the world and creatures around them. Only some can see the mushi, either by being born with the ability or by being affected by the mushi in some way. Some people, called mushi-shi, study to learn more about these creatures and about life itself. One such person is Ginko, the main character of the story, who travels and assists people plagued by mushi", quantity: 12, price: 25000 });
                return [4 /*yield*/, book46.save()];
            case 83:
                _a.sent();
                book47 = new Book({ name: 'Mushishi volume 6', category: [category5._id], author: author8._id, publisher: publisher2._id, description: "Mushishi is a manga series written and illustrated by Yuki Urushibara, published in Kodansha's Afternoon magazine from January 1999 to August 2008. The story revolves around strange creatures called mushi (蟲) that can cause strange phenomena to the world and creatures around them. Only some can see the mushi, either by being born with the ability or by being affected by the mushi in some way. Some people, called mushi-shi, study to learn more about these creatures and about life itself. One such person is Ginko, the main character of the story, who travels and assists people plagued by mushi", quantity: 5, price: 25000 });
                return [4 /*yield*/, book47.save()];
            case 84:
                _a.sent();
                book48 = new Book({ name: 'Mushishi volume 7', category: [category5._id], author: author8._id, publisher: publisher2._id, description: "Mushishi is a manga series written and illustrated by Yuki Urushibara, published in Kodansha's Afternoon magazine from January 1999 to August 2008. The story revolves around strange creatures called mushi (蟲) that can cause strange phenomena to the world and creatures around them. Only some can see the mushi, either by being born with the ability or by being affected by the mushi in some way. Some people, called mushi-shi, study to learn more about these creatures and about life itself. One such person is Ginko, the main character of the story, who travels and assists people plagued by mushi", quantity: 6, price: 25000 });
                return [4 /*yield*/, book48.save()];
            case 85:
                _a.sent();
                book49 = new Book({ name: 'Mushishi volume 8', category: [category5._id], author: author8._id, publisher: publisher2._id, description: "Mushishi is a manga series written and illustrated by Yuki Urushibara, published in Kodansha's Afternoon magazine from January 1999 to August 2008. The story revolves around strange creatures called mushi (蟲) that can cause strange phenomena to the world and creatures around them. Only some can see the mushi, either by being born with the ability or by being affected by the mushi in some way. Some people, called mushi-shi, study to learn more about these creatures and about life itself. One such person is Ginko, the main character of the story, who travels and assists people plagued by mushi", quantity: 8, price: 25000 });
                return [4 /*yield*/, book49.save()];
            case 86:
                _a.sent();
                book50 = new Book({ name: 'Mushishi volume 9', category: [category5._id], author: author8._id, publisher: publisher2._id, description: "Mushishi is a manga series written and illustrated by Yuki Urushibara, published in Kodansha's Afternoon magazine from January 1999 to August 2008. The story revolves around strange creatures called mushi (蟲) that can cause strange phenomena to the world and creatures around them. Only some can see the mushi, either by being born with the ability or by being affected by the mushi in some way. Some people, called mushi-shi, study to learn more about these creatures and about life itself. One such person is Ginko, the main character of the story, who travels and assists people plagued by mushi", quantity: 4, price: 25000 });
                return [4 /*yield*/, book50.save()];
            case 87:
                _a.sent();
                book51 = new Book({ name: 'Mushishi volume 10', category: [category5._id], author: author8._id, publisher: publisher2._id, description: "Mushishi is a manga series written and illustrated by Yuki Urushibara, published in Kodansha's Afternoon magazine from January 1999 to August 2008. The story revolves around strange creatures called mushi (蟲) that can cause strange phenomena to the world and creatures around them. Only some can see the mushi, either by being born with the ability or by being affected by the mushi in some way. Some people, called mushi-shi, study to learn more about these creatures and about life itself. One such person is Ginko, the main character of the story, who travels and assists people plagued by mushi", quantity: 7, price: 25000 });
                return [4 /*yield*/, book51.save()];
            case 88:
                _a.sent();
                order1 = new Order({ orderDate: '2021-2-13', deliverDate: '2021-2-17', user: user10._id, totalMoney: 231500 });
                return [4 /*yield*/, order1.save()];
            case 89:
                _a.sent();
                order2 = new Order({ orderDate: '2022-9-11', deliverDate: '2022-9-12', user: user3._id, totalMoney: 75000 });
                return [4 /*yield*/, order2.save()];
            case 90:
                _a.sent();
                order3 = new Order({ orderDate: '2022-1-17', deliverDate: '2022-1-18', user: user10._id, totalMoney: 66000 });
                return [4 /*yield*/, order3.save()];
            case 91:
                _a.sent();
                order4 = new Order({ orderDate: '2022-11-23', deliverDate: '2022-11-25', user: user4._id, totalMoney: 50000 });
                return [4 /*yield*/, order4.save()];
            case 92:
                _a.sent();
                order5 = new Order({ orderDate: '2021-8-30', deliverDate: '2021-9-3', user: user7._id, totalMoney: 565000 });
                return [4 /*yield*/, order5.save()];
            case 93:
                _a.sent();
                order6 = new Order({ orderDate: '2021-11-22', deliverDate: '2021-11-23', user: user5._id, totalMoney: 83000 });
                return [4 /*yield*/, order6.save()];
            case 94:
                _a.sent();
                order7 = new Order({ orderDate: '2022-8-22', deliverDate: '2022-8-26', user: user7._id, totalMoney: 425000 });
                return [4 /*yield*/, order7.save()];
            case 95:
                _a.sent();
                order8 = new Order({ orderDate: '2022-9-24', deliverDate: '2022-9-25', user: user10._id, totalMoney: 90000 });
                return [4 /*yield*/, order8.save()];
            case 96:
                _a.sent();
                order9 = new Order({ orderDate: '2021-7-23', deliverDate: '2021-7-25', user: user8._id, totalMoney: 486000 });
                return [4 /*yield*/, order9.save()];
            case 97:
                _a.sent();
                order10 = new Order({ orderDate: '2022-12-2', deliverDate: '2022-12-6', user: user5._id, totalMoney: 25000 });
                return [4 /*yield*/, order10.save()];
            case 98:
                _a.sent();
                order11 = new Order({ orderDate: '2022-9-25', deliverDate: '2022-9-29', user: user8._id, totalMoney: 291500 });
                return [4 /*yield*/, order11.save()];
            case 99:
                _a.sent();
                order12 = new Order({ orderDate: '2021-5-3', deliverDate: '2021-5-5', user: user9._id, totalMoney: 449000 });
                return [4 /*yield*/, order12.save()];
            case 100:
                _a.sent();
                order13 = new Order({ orderDate: '2021-4-16', deliverDate: '2021-4-17', user: user10._id, totalMoney: 405000 });
                return [4 /*yield*/, order13.save()];
            case 101:
                _a.sent();
                order14 = new Order({ orderDate: '2021-5-19', deliverDate: '2021-5-22', user: user8._id, totalMoney: 70000 });
                return [4 /*yield*/, order14.save()];
            case 102:
                _a.sent();
                order15 = new Order({ orderDate: '2022-10-9', deliverDate: '2022-10-10', user: user7._id, totalMoney: 245000 });
                return [4 /*yield*/, order15.save()];
            case 103:
                _a.sent();
                order16 = new Order({ orderDate: '2022-6-17', deliverDate: '2022-6-18', user: user2._id, totalMoney: 70000 });
                return [4 /*yield*/, order16.save()];
            case 104:
                _a.sent();
                order17 = new Order({ orderDate: '2021-9-13', deliverDate: '2021-9-17', user: user9._id, totalMoney: 615000 });
                return [4 /*yield*/, order17.save()];
            case 105:
                _a.sent();
                order18 = new Order({ orderDate: '2021-10-1', deliverDate: '2021-10-3', user: user3._id, totalMoney: 240000 });
                return [4 /*yield*/, order18.save()];
            case 106:
                _a.sent();
                order19 = new Order({ orderDate: '2022-11-10', deliverDate: '2022-11-12', user: user4._id, totalMoney: 372000 });
                return [4 /*yield*/, order19.save()];
            case 107:
                _a.sent();
                order20 = new Order({ orderDate: '2021-12-6', deliverDate: '2021-12-10', user: user5._id, totalMoney: 75000 });
                return [4 /*yield*/, order20.save()];
            case 108:
                _a.sent();
                order21 = new Order({ orderDate: '2021-7-7', deliverDate: '2021-7-11', user: user7._id, totalMoney: 95000 });
                return [4 /*yield*/, order21.save()];
            case 109:
                _a.sent();
                order22 = new Order({ orderDate: '2021-12-11', deliverDate: '2021-12-14', user: user3._id, totalMoney: 632000 });
                return [4 /*yield*/, order22.save()];
            case 110:
                _a.sent();
                order23 = new Order({ orderDate: '2021-4-25', deliverDate: '2021-4-29', user: user3._id, totalMoney: 222500 });
                return [4 /*yield*/, order23.save()];
            case 111:
                _a.sent();
                order24 = new Order({ orderDate: '2021-7-4', deliverDate: '2021-7-7', user: user7._id, totalMoney: 50000 });
                return [4 /*yield*/, order24.save()];
            case 112:
                _a.sent();
                order25 = new Order({ orderDate: '2021-2-26', deliverDate: '2021-3-2', user: user10._id, totalMoney: 515000 });
                return [4 /*yield*/, order25.save()];
            case 113:
                _a.sent();
                order26 = new Order({ orderDate: '2022-7-10', deliverDate: '2022-7-12', user: user4._id, totalMoney: 385500 });
                return [4 /*yield*/, order26.save()];
            case 114:
                _a.sent();
                order27 = new Order({ orderDate: '2021-7-12', deliverDate: '2021-7-16', user: user7._id, totalMoney: 273500 });
                return [4 /*yield*/, order27.save()];
            case 115:
                _a.sent();
                order28 = new Order({ orderDate: '2022-4-23', deliverDate: '2022-4-26', user: user10._id, totalMoney: 770000 });
                return [4 /*yield*/, order28.save()];
            case 116:
                _a.sent();
                order29 = new Order({ orderDate: '2021-7-4', deliverDate: '2021-7-5', user: user1._id, totalMoney: 290000 });
                return [4 /*yield*/, order29.save()];
            case 117:
                _a.sent();
                order30 = new Order({ orderDate: '2022-11-30', deliverDate: '2022-12-1', user: user10._id, totalMoney: 170000 });
                return [4 /*yield*/, order30.save()];
            case 118:
                _a.sent();
                order31 = new Order({ orderDate: '2022-2-3', deliverDate: '2022-2-7', user: user2._id, totalMoney: 338500 });
                return [4 /*yield*/, order31.save()];
            case 119:
                _a.sent();
                order32 = new Order({ orderDate: '2022-8-7', deliverDate: '2022-8-11', user: user10._id, totalMoney: 170000 });
                return [4 /*yield*/, order32.save()];
            case 120:
                _a.sent();
                order33 = new Order({ orderDate: '2022-6-9', deliverDate: '2022-6-11', user: user6._id, totalMoney: 204000 });
                return [4 /*yield*/, order33.save()];
            case 121:
                _a.sent();
                order34 = new Order({ orderDate: '2021-1-1', deliverDate: '2021-1-5', user: user3._id, totalMoney: 390000 });
                return [4 /*yield*/, order34.save()];
            case 122:
                _a.sent();
                order35 = new Order({ orderDate: '2022-2-20', deliverDate: '2022-2-22', user: user2._id, totalMoney: 372500 });
                return [4 /*yield*/, order35.save()];
            case 123:
                _a.sent();
                order36 = new Order({ orderDate: '2021-4-20', deliverDate: '2021-4-22', user: user4._id, totalMoney: 324000 });
                return [4 /*yield*/, order36.save()];
            case 124:
                _a.sent();
                order37 = new Order({ orderDate: '2021-5-30', deliverDate: '2021-6-2', user: user6._id, totalMoney: 85000 });
                return [4 /*yield*/, order37.save()];
            case 125:
                _a.sent();
                order38 = new Order({ orderDate: '2022-12-5', deliverDate: '2022-12-6', user: user6._id, totalMoney: 660000 });
                return [4 /*yield*/, order38.save()];
            case 126:
                _a.sent();
                order39 = new Order({ orderDate: '2022-5-5', deliverDate: '2022-5-8', user: user8._id, totalMoney: 50000 });
                return [4 /*yield*/, order39.save()];
            case 127:
                _a.sent();
                order40 = new Order({ orderDate: '2021-11-14', deliverDate: '2021-11-18', user: user10._id, totalMoney: 870000 });
                return [4 /*yield*/, order40.save()];
            case 128:
                _a.sent();
                order41 = new Order({ orderDate: '2021-4-29', deliverDate: '2021-5-2', user: user9._id, totalMoney: 195000 });
                return [4 /*yield*/, order41.save()];
            case 129:
                _a.sent();
                order42 = new Order({ orderDate: '2022-12-9', deliverDate: '2022-12-13', user: user1._id, totalMoney: 245000 });
                return [4 /*yield*/, order42.save()];
            case 130:
                _a.sent();
                order43 = new Order({ orderDate: '2022-3-10', deliverDate: '2022-3-13', user: user1._id, totalMoney: 20000 });
                return [4 /*yield*/, order43.save()];
            case 131:
                _a.sent();
                order44 = new Order({ orderDate: '2021-2-10', deliverDate: '2021-2-13', user: user2._id, totalMoney: 392000 });
                return [4 /*yield*/, order44.save()];
            case 132:
                _a.sent();
                order45 = new Order({ orderDate: '2021-5-9', deliverDate: '2021-5-10', user: user7._id, totalMoney: 420000 });
                return [4 /*yield*/, order45.save()];
            case 133:
                _a.sent();
                order46 = new Order({ orderDate: '2021-8-18', deliverDate: '2021-8-22', user: user4._id, totalMoney: 630000 });
                return [4 /*yield*/, order46.save()];
            case 134:
                _a.sent();
                order47 = new Order({ orderDate: '2022-6-24', deliverDate: '2022-6-27', user: user9._id, totalMoney: 540000 });
                return [4 /*yield*/, order47.save()];
            case 135:
                _a.sent();
                order48 = new Order({ orderDate: '2021-8-11', deliverDate: '2021-8-12', user: user8._id, totalMoney: 270000 });
                return [4 /*yield*/, order48.save()];
            case 136:
                _a.sent();
                order49 = new Order({ orderDate: '2021-4-14', deliverDate: '2021-4-17', user: user6._id, totalMoney: 440000 });
                return [4 /*yield*/, order49.save()];
            case 137:
                _a.sent();
                order50 = new Order({ orderDate: '2022-8-12', deliverDate: '2022-8-16', user: user6._id, totalMoney: 240000 });
                return [4 /*yield*/, order50.save()];
            case 138:
                _a.sent();
                order51 = new Order({ orderDate: '2021-4-13', deliverDate: '2021-4-17', user: user4._id, totalMoney: 129000 });
                return [4 /*yield*/, order51.save()];
            case 139:
                _a.sent();
                order52 = new Order({ orderDate: '2021-1-30', deliverDate: '2021-2-2', user: user9._id, totalMoney: 624000 });
                return [4 /*yield*/, order52.save()];
            case 140:
                _a.sent();
                order53 = new Order({ orderDate: '2021-5-10', deliverDate: '2021-5-11', user: user4._id, totalMoney: 435000 });
                return [4 /*yield*/, order53.save()];
            case 141:
                _a.sent();
                order54 = new Order({ orderDate: '2022-5-3', deliverDate: '2022-5-5', user: user10._id, totalMoney: 222500 });
                return [4 /*yield*/, order54.save()];
            case 142:
                _a.sent();
                order55 = new Order({ orderDate: '2022-4-26', deliverDate: '2022-4-27', user: user8._id, totalMoney: 498000 });
                return [4 /*yield*/, order55.save()];
            case 143:
                _a.sent();
                order56 = new Order({ orderDate: '2021-2-12', deliverDate: '2021-2-15', user: user4._id, totalMoney: 50000 });
                return [4 /*yield*/, order56.save()];
            case 144:
                _a.sent();
                order57 = new Order({ orderDate: '2021-5-2', deliverDate: '2021-5-6', user: user2._id, totalMoney: 52500 });
                return [4 /*yield*/, order57.save()];
            case 145:
                _a.sent();
                order58 = new Order({ orderDate: '2021-1-9', deliverDate: '2021-1-10', user: user2._id, totalMoney: 81500 });
                return [4 /*yield*/, order58.save()];
            case 146:
                _a.sent();
                order59 = new Order({ orderDate: '2021-1-3', deliverDate: '2021-1-5', user: user2._id, totalMoney: 300000 });
                return [4 /*yield*/, order59.save()];
            case 147:
                _a.sent();
                order60 = new Order({ orderDate: '2022-1-13', deliverDate: '2022-1-14', user: user2._id, totalMoney: 440000 });
                return [4 /*yield*/, order60.save()];
            case 148:
                _a.sent();
                order61 = new Order({ orderDate: '2022-2-8', deliverDate: '2022-2-12', user: user9._id, totalMoney: 245000 });
                return [4 /*yield*/, order61.save()];
            case 149:
                _a.sent();
                order62 = new Order({ orderDate: '2022-12-5', deliverDate: '2022-12-6', user: user9._id, totalMoney: 370000 });
                return [4 /*yield*/, order62.save()];
            case 150:
                _a.sent();
                order63 = new Order({ orderDate: '2022-1-29', deliverDate: '2022-2-1', user: user9._id, totalMoney: 131500 });
                return [4 /*yield*/, order63.save()];
            case 151:
                _a.sent();
                order64 = new Order({ orderDate: '2021-9-17', deliverDate: '2021-9-20', user: user5._id, totalMoney: 355000 });
                return [4 /*yield*/, order64.save()];
            case 152:
                _a.sent();
                order65 = new Order({ orderDate: '2021-11-22', deliverDate: '2021-11-25', user: user4._id, totalMoney: 830000 });
                return [4 /*yield*/, order65.save()];
            case 153:
                _a.sent();
                order67 = new Order({ orderDate: '2022-5-21', deliverDate: '2022-5-23', user: user10._id, totalMoney: 447000 });
                return [4 /*yield*/, order67.save()];
            case 154:
                _a.sent();
                order68 = new Order({ orderDate: '2021-6-2', deliverDate: '2021-6-4', user: user1._id, totalMoney: 33500 });
                return [4 /*yield*/, order68.save()];
            case 155:
                _a.sent();
                order69 = new Order({ orderDate: '2022-12-18', deliverDate: '2022-12-19', user: user1._id, totalMoney: 643000 });
                return [4 /*yield*/, order69.save()];
            case 156:
                _a.sent();
                order70 = new Order({ orderDate: '2021-12-15', deliverDate: '2021-12-19', user: user10._id, totalMoney: 240000 });
                return [4 /*yield*/, order70.save()];
            case 157:
                _a.sent();
                order71 = new Order({ orderDate: '2021-4-16', deliverDate: '2021-4-18', user: user5._id, totalMoney: 240000 });
                return [4 /*yield*/, order71.save()];
            case 158:
                _a.sent();
                order72 = new Order({ orderDate: '2021-6-3', deliverDate: '2021-6-4', user: user8._id, totalMoney: 75000 });
                return [4 /*yield*/, order72.save()];
            case 159:
                _a.sent();
                order73 = new Order({ orderDate: '2022-8-16', deliverDate: '2022-8-20', user: user7._id, totalMoney: 50000 });
                return [4 /*yield*/, order73.save()];
            case 160:
                _a.sent();
                order74 = new Order({ orderDate: '2022-8-2', deliverDate: '2022-8-3', user: user4._id, totalMoney: 522000 });
                return [4 /*yield*/, order74.save()];
            case 161:
                _a.sent();
                order75 = new Order({ orderDate: '2021-3-4', deliverDate: '2021-3-7', user: user9._id, totalMoney: 205000 });
                return [4 /*yield*/, order75.save()];
            case 162:
                _a.sent();
                order76 = new Order({ orderDate: '2021-3-17', deliverDate: '2021-3-21', user: user10._id, totalMoney: 195000 });
                return [4 /*yield*/, order76.save()];
            case 163:
                _a.sent();
                order77 = new Order({ orderDate: '2022-3-1', deliverDate: '2022-3-4', user: user3._id, totalMoney: 85000 });
                return [4 /*yield*/, order77.save()];
            case 164:
                _a.sent();
                order78 = new Order({ orderDate: '2022-4-9', deliverDate: '2022-4-10', user: user6._id, totalMoney: 260000 });
                return [4 /*yield*/, order78.save()];
            case 165:
                _a.sent();
                order79 = new Order({ orderDate: '2021-1-14', deliverDate: '2021-1-17', user: user5._id, totalMoney: 100000 });
                return [4 /*yield*/, order79.save()];
            case 166:
                _a.sent();
                order80 = new Order({ orderDate: '2022-7-18', deliverDate: '2022-7-19', user: user10._id, totalMoney: 490000 });
                return [4 /*yield*/, order80.save()];
            case 167:
                _a.sent();
                order81 = new Order({ orderDate: '2022-4-29', deliverDate: '2022-5-2', user: user3._id, totalMoney: 95000 });
                return [4 /*yield*/, order81.save()];
            case 168:
                _a.sent();
                order82 = new Order({ orderDate: '2022-11-18', deliverDate: '2022-11-19', user: user7._id, totalMoney: 298500 });
                return [4 /*yield*/, order82.save()];
            case 169:
                _a.sent();
                order83 = new Order({ orderDate: '2021-7-11', deliverDate: '2021-7-12', user: user3._id, totalMoney: 20000 });
                return [4 /*yield*/, order83.save()];
            case 170:
                _a.sent();
                order84 = new Order({ orderDate: '2021-11-10', deliverDate: '2021-11-11', user: user7._id, totalMoney: 20000 });
                return [4 /*yield*/, order84.save()];
            case 171:
                _a.sent();
                order85 = new Order({ orderDate: '2022-6-19', deliverDate: '2022-6-20', user: user9._id, totalMoney: 45000 });
                return [4 /*yield*/, order85.save()];
            case 172:
                _a.sent();
                order86 = new Order({ orderDate: '2022-9-25', deliverDate: '2022-9-28', user: user8._id, totalMoney: 220000 });
                return [4 /*yield*/, order86.save()];
            case 173:
                _a.sent();
                order87 = new Order({ orderDate: '2021-9-30', deliverDate: '2021-10-2', user: user8._id, totalMoney: 410000 });
                return [4 /*yield*/, order87.save()];
            case 174:
                _a.sent();
                order88 = new Order({ orderDate: '2022-8-27', deliverDate: '2022-8-28', user: user5._id, totalMoney: 50000 });
                return [4 /*yield*/, order88.save()];
            case 175:
                _a.sent();
                order89 = new Order({ orderDate: '2021-6-30', deliverDate: '2021-7-4', user: user5._id, totalMoney: 276500 });
                return [4 /*yield*/, order89.save()];
            case 176:
                _a.sent();
                order90 = new Order({ orderDate: '2021-1-28', deliverDate: '2021-1-29', user: user7._id, totalMoney: 298000 });
                return [4 /*yield*/, order90.save()];
            case 177:
                _a.sent();
                order91 = new Order({ orderDate: '2021-12-21', deliverDate: '2021-12-24', user: user2._id, totalMoney: 84000 });
                return [4 /*yield*/, order91.save()];
            case 178:
                _a.sent();
                order93 = new Order({ orderDate: '2022-7-18', deliverDate: '2022-7-21', user: user7._id, totalMoney: 270000 });
                return [4 /*yield*/, order93.save()];
            case 179:
                _a.sent();
                order94 = new Order({ orderDate: '2022-9-2', deliverDate: '2022-9-4', user: user7._id, totalMoney: 492000 });
                return [4 /*yield*/, order94.save()];
            case 180:
                _a.sent();
                order95 = new Order({ orderDate: '2022-12-1', deliverDate: '2022-12-3', user: user5._id, totalMoney: 247000 });
                return [4 /*yield*/, order95.save()];
            case 181:
                _a.sent();
                order96 = new Order({ orderDate: '2021-3-5', deliverDate: '2021-3-9', user: user8._id, totalMoney: 600000 });
                return [4 /*yield*/, order96.save()];
            case 182:
                _a.sent();
                order97 = new Order({ orderDate: '2022-10-31', deliverDate: '2022-11-3', user: user8._id, totalMoney: 220000 });
                return [4 /*yield*/, order97.save()];
            case 183:
                _a.sent();
                order98 = new Order({ orderDate: '2021-12-24', deliverDate: '2021-12-26', user: user2._id, totalMoney: 75000 });
                return [4 /*yield*/, order98.save()];
            case 184:
                _a.sent();
                order99 = new Order({ orderDate: '2022-9-29', deliverDate: '2022-10-1', user: user10._id, totalMoney: 222000 });
                return [4 /*yield*/, order99.save()];
            case 185:
                _a.sent();
                order100 = new Order({ orderDate: '2021-3-14', deliverDate: '2021-3-16', user: user5._id, totalMoney: 460000 });
                return [4 /*yield*/, order100.save()];
            case 186:
                _a.sent();
                order101 = new Order({ orderDate: '2022-1-25', deliverDate: '2022-1-28', user: user6._id, totalMoney: 295000 });
                return [4 /*yield*/, order101.save()];
            case 187:
                _a.sent();
                order103 = new Order({ orderDate: '2021-11-22', deliverDate: '2021-11-26', user: user8._id, totalMoney: 490000 });
                return [4 /*yield*/, order103.save()];
            case 188:
                _a.sent();
                order104 = new Order({ orderDate: '2022-11-21', deliverDate: '2022-11-24', user: user10._id, totalMoney: 415000 });
                return [4 /*yield*/, order104.save()];
            case 189:
                _a.sent();
                order105 = new Order({ orderDate: '2021-5-27', deliverDate: '2021-5-29', user: user2._id, totalMoney: 621500 });
                return [4 /*yield*/, order105.save()];
            case 190:
                _a.sent();
                order106 = new Order({ orderDate: '2021-12-30', deliverDate: '2021-12-31', user: user10._id, totalMoney: 115000 });
                return [4 /*yield*/, order106.save()];
            case 191:
                _a.sent();
                order107 = new Order({ orderDate: '2021-4-21', deliverDate: '2021-4-24', user: user3._id, totalMoney: 231500 });
                return [4 /*yield*/, order107.save()];
            case 192:
                _a.sent();
                order108 = new Order({ orderDate: '2021-12-2', deliverDate: '2021-12-6', user: user6._id, totalMoney: 91500 });
                return [4 /*yield*/, order108.save()];
            case 193:
                _a.sent();
                order109 = new Order({ orderDate: '2021-9-1', deliverDate: '2021-9-4', user: user4._id, totalMoney: 98000 });
                return [4 /*yield*/, order109.save()];
            case 194:
                _a.sent();
                order110 = new Order({ orderDate: '2022-4-18', deliverDate: '2022-4-22', user: user10._id, totalMoney: 70000 });
                return [4 /*yield*/, order110.save()];
            case 195:
                _a.sent();
                order111 = new Order({ orderDate: '2021-1-31', deliverDate: '2021-2-1', user: user5._id, totalMoney: 415000 });
                return [4 /*yield*/, order111.save()];
            case 196:
                _a.sent();
                order112 = new Order({ orderDate: '2022-3-25', deliverDate: '2022-3-28', user: user9._id, totalMoney: 265000 });
                return [4 /*yield*/, order112.save()];
            case 197:
                _a.sent();
                order113 = new Order({ orderDate: '2022-3-3', deliverDate: '2022-3-6', user: user3._id, totalMoney: 74000 });
                return [4 /*yield*/, order113.save()];
            case 198:
                _a.sent();
                order114 = new Order({ orderDate: '2021-3-1', deliverDate: '2021-3-2', user: user5._id, totalMoney: 75000 });
                return [4 /*yield*/, order114.save()];
            case 199:
                _a.sent();
                order115 = new Order({ orderDate: '2022-5-26', deliverDate: '2022-5-30', user: user1._id, totalMoney: 935000 });
                return [4 /*yield*/, order115.save()];
            case 200:
                _a.sent();
                order116 = new Order({ orderDate: '2022-10-13', deliverDate: '2022-10-17', user: user9._id, totalMoney: 253000 });
                return [4 /*yield*/, order116.save()];
            case 201:
                _a.sent();
                order117 = new Order({ orderDate: '2021-3-11', deliverDate: '2021-3-13', user: user4._id, totalMoney: 125000 });
                return [4 /*yield*/, order117.save()];
            case 202:
                _a.sent();
                order118 = new Order({ orderDate: '2021-4-23', deliverDate: '2021-4-26', user: user3._id, totalMoney: 240000 });
                return [4 /*yield*/, order118.save()];
            case 203:
                _a.sent();
                order119 = new Order({ orderDate: '2021-12-26', deliverDate: '2021-12-27', user: user5._id, totalMoney: 220000 });
                return [4 /*yield*/, order119.save()];
            case 204:
                _a.sent();
                order120 = new Order({ orderDate: '2021-8-30', deliverDate: '2021-8-31', user: user7._id, totalMoney: 296500 });
                return [4 /*yield*/, order120.save()];
            case 205:
                _a.sent();
                order121 = new Order({ orderDate: '2022-5-19', deliverDate: '2022-5-21', user: user1._id, totalMoney: 50000 });
                return [4 /*yield*/, order121.save()];
            case 206:
                _a.sent();
                order122 = new Order({ orderDate: '2021-5-31', deliverDate: '2021-6-4', user: user7._id, totalMoney: 128500 });
                return [4 /*yield*/, order122.save()];
            case 207:
                _a.sent();
                order123 = new Order({ orderDate: '2022-7-28', deliverDate: '2022-7-31', user: user7._id, totalMoney: 50000 });
                return [4 /*yield*/, order123.save()];
            case 208:
                _a.sent();
                order124 = new Order({ orderDate: '2021-1-22', deliverDate: '2021-1-23', user: user4._id, totalMoney: 75000 });
                return [4 /*yield*/, order124.save()];
            case 209:
                _a.sent();
                order125 = new Order({ orderDate: '2022-1-12', deliverDate: '2022-1-13', user: user10._id, totalMoney: 635000 });
                return [4 /*yield*/, order125.save()];
            case 210:
                _a.sent();
                order126 = new Order({ orderDate: '2022-5-29', deliverDate: '2022-6-2', user: user1._id, totalMoney: 20000 });
                return [4 /*yield*/, order126.save()];
            case 211:
                _a.sent();
                order127 = new Order({ orderDate: '2022-4-12', deliverDate: '2022-4-16', user: user4._id, totalMoney: 190000 });
                return [4 /*yield*/, order127.save()];
            case 212:
                _a.sent();
                order128 = new Order({ orderDate: '2021-9-13', deliverDate: '2021-9-15', user: user5._id, totalMoney: 248000 });
                return [4 /*yield*/, order128.save()];
            case 213:
                _a.sent();
                order129 = new Order({ orderDate: '2021-2-16', deliverDate: '2021-2-18', user: user2._id, totalMoney: 426500 });
                return [4 /*yield*/, order129.save()];
            case 214:
                _a.sent();
                order130 = new Order({ orderDate: '2021-2-2', deliverDate: '2021-2-6', user: user5._id, totalMoney: 170000 });
                return [4 /*yield*/, order130.save()];
            case 215:
                _a.sent();
                order131 = new Order({ orderDate: '2022-2-8', deliverDate: '2022-2-12', user: user4._id, totalMoney: 270000 });
                return [4 /*yield*/, order131.save()];
            case 216:
                _a.sent();
                order132 = new Order({ orderDate: '2022-8-11', deliverDate: '2022-8-15', user: user4._id, totalMoney: 54000 });
                return [4 /*yield*/, order132.save()];
            case 217:
                _a.sent();
                order133 = new Order({ orderDate: '2022-2-13', deliverDate: '2022-2-15', user: user10._id, totalMoney: 557000 });
                return [4 /*yield*/, order133.save()];
            case 218:
                _a.sent();
                order134 = new Order({ orderDate: '2022-2-13', deliverDate: '2022-2-16', user: user2._id, totalMoney: 32500 });
                return [4 /*yield*/, order134.save()];
            case 219:
                _a.sent();
                order135 = new Order({ orderDate: '2021-1-10', deliverDate: '2021-1-11', user: user1._id, totalMoney: 204000 });
                return [4 /*yield*/, order135.save()];
            case 220:
                _a.sent();
                order137 = new Order({ orderDate: '2022-3-13', deliverDate: '2022-3-16', user: user6._id, totalMoney: 240000 });
                return [4 /*yield*/, order137.save()];
            case 221:
                _a.sent();
                order138 = new Order({ orderDate: '2022-4-25', deliverDate: '2022-4-27', user: user6._id, totalMoney: 140000 });
                return [4 /*yield*/, order138.save()];
            case 222:
                _a.sent();
                order139 = new Order({ orderDate: '2021-5-10', deliverDate: '2021-5-14', user: user7._id, totalMoney: 165000 });
                return [4 /*yield*/, order139.save()];
            case 223:
                _a.sent();
                order140 = new Order({ orderDate: '2022-8-21', deliverDate: '2022-8-22', user: user10._id, totalMoney: 50000 });
                return [4 /*yield*/, order140.save()];
            case 224:
                _a.sent();
                order142 = new Order({ orderDate: '2021-3-20', deliverDate: '2021-3-22', user: user5._id, totalMoney: 80000 });
                return [4 /*yield*/, order142.save()];
            case 225:
                _a.sent();
                order143 = new Order({ orderDate: '2021-8-8', deliverDate: '2021-8-9', user: user10._id, totalMoney: 20000 });
                return [4 /*yield*/, order143.save()];
            case 226:
                _a.sent();
                order144 = new Order({ orderDate: '2022-8-3', deliverDate: '2022-8-7', user: user8._id, totalMoney: 225000 });
                return [4 /*yield*/, order144.save()];
            case 227:
                _a.sent();
                order145 = new Order({ orderDate: '2022-7-2', deliverDate: '2022-7-3', user: user2._id, totalMoney: 275000 });
                return [4 /*yield*/, order145.save()];
            case 228:
                _a.sent();
                order146 = new Order({ orderDate: '2022-9-12', deliverDate: '2022-9-14', user: user2._id, totalMoney: 195000 });
                return [4 /*yield*/, order146.save()];
            case 229:
                _a.sent();
                order147 = new Order({ orderDate: '2021-12-5', deliverDate: '2021-12-9', user: user8._id, totalMoney: 245000 });
                return [4 /*yield*/, order147.save()];
            case 230:
                _a.sent();
                order148 = new Order({ orderDate: '2022-8-11', deliverDate: '2022-8-13', user: user6._id, totalMoney: 405000 });
                return [4 /*yield*/, order148.save()];
            case 231:
                _a.sent();
                order149 = new Order({ orderDate: '2021-6-5', deliverDate: '2021-6-9', user: user2._id, totalMoney: 170000 });
                return [4 /*yield*/, order149.save()];
            case 232:
                _a.sent();
                order150 = new Order({ orderDate: '2022-12-13', deliverDate: '2022-12-17', user: user1._id, totalMoney: 220000 });
                return [4 /*yield*/, order150.save()];
            case 233:
                _a.sent();
                orderDetail1 = new OrderDetail({ order: order139._id, book: book18._id, quantity: 1 });
                return [4 /*yield*/, orderDetail1.save()];
            case 234:
                _a.sent();
                orderDetail2 = new OrderDetail({ order: order21._id, book: book11._id, quantity: 1 });
                return [4 /*yield*/, orderDetail2.save()];
            case 235:
                _a.sent();
                orderDetail3 = new OrderDetail({ order: order144._id, book: book47._id, quantity: 1 });
                return [4 /*yield*/, orderDetail3.save()];
            case 236:
                _a.sent();
                orderDetail4 = new OrderDetail({ order: order101._id, book: book45._id, quantity: 1 });
                return [4 /*yield*/, orderDetail4.save()];
            case 237:
                _a.sent();
                orderDetail5 = new OrderDetail({ order: order105._id, book: book29._id, quantity: 1 });
                return [4 /*yield*/, orderDetail5.save()];
            case 238:
                _a.sent();
                orderDetail6 = new OrderDetail({ order: order62._id, book: book41._id, quantity: 1 });
                return [4 /*yield*/, orderDetail6.save()];
            case 239:
                _a.sent();
                orderDetail7 = new OrderDetail({ order: order139._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail7.save()];
            case 240:
                _a.sent();
                orderDetail8 = new OrderDetail({ order: order9._id, book: book32._id, quantity: 1 });
                return [4 /*yield*/, orderDetail8.save()];
            case 241:
                _a.sent();
                orderDetail9 = new OrderDetail({ order: order36._id, book: book41._id, quantity: 1 });
                return [4 /*yield*/, orderDetail9.save()];
            case 242:
                _a.sent();
                orderDetail10 = new OrderDetail({ order: order131._id, book: book47._id, quantity: 1 });
                return [4 /*yield*/, orderDetail10.save()];
            case 243:
                _a.sent();
                orderDetail11 = new OrderDetail({ order: order31._id, book: book1._id, quantity: 1 });
                return [4 /*yield*/, orderDetail11.save()];
            case 244:
                _a.sent();
                orderDetail12 = new OrderDetail({ order: order40._id, book: book32._id, quantity: 1 });
                return [4 /*yield*/, orderDetail12.save()];
            case 245:
                _a.sent();
                orderDetail13 = new OrderDetail({ order: order78._id, book: book11._id, quantity: 1 });
                return [4 /*yield*/, orderDetail13.save()];
            case 246:
                _a.sent();
                orderDetail14 = new OrderDetail({ order: order77._id, book: book20._id, quantity: 1 });
                return [4 /*yield*/, orderDetail14.save()];
            case 247:
                _a.sent();
                orderDetail15 = new OrderDetail({ order: order65._id, book: book30._id, quantity: 1 });
                return [4 /*yield*/, orderDetail15.save()];
            case 248:
                _a.sent();
                orderDetail16 = new OrderDetail({ order: order133._id, book: book27._id, quantity: 1 });
                return [4 /*yield*/, orderDetail16.save()];
            case 249:
                _a.sent();
                orderDetail17 = new OrderDetail({ order: order55._id, book: book41._id, quantity: 1 });
                return [4 /*yield*/, orderDetail17.save()];
            case 250:
                _a.sent();
                orderDetail18 = new OrderDetail({ order: order3._id, book: book6._id, quantity: 1 });
                return [4 /*yield*/, orderDetail18.save()];
            case 251:
                _a.sent();
                orderDetail19 = new OrderDetail({ order: order40._id, book: book16._id, quantity: 1 });
                return [4 /*yield*/, orderDetail19.save()];
            case 252:
                _a.sent();
                orderDetail20 = new OrderDetail({ order: order125._id, book: book38._id, quantity: 1 });
                return [4 /*yield*/, orderDetail20.save()];
            case 253:
                _a.sent();
                orderDetail21 = new OrderDetail({ order: order125._id, book: book28._id, quantity: 1 });
                return [4 /*yield*/, orderDetail21.save()];
            case 254:
                _a.sent();
                orderDetail22 = new OrderDetail({ order: order103._id, book: book30._id, quantity: 1 });
                return [4 /*yield*/, orderDetail22.save()];
            case 255:
                _a.sent();
                orderDetail23 = new OrderDetail({ order: order106._id, book: book16._id, quantity: 1 });
                return [4 /*yield*/, orderDetail23.save()];
            case 256:
                _a.sent();
                orderDetail24 = new OrderDetail({ order: order138._id, book: book12._id, quantity: 1 });
                return [4 /*yield*/, orderDetail24.save()];
            case 257:
                _a.sent();
                orderDetail25 = new OrderDetail({ order: order18._id, book: book36._id, quantity: 1 });
                return [4 /*yield*/, orderDetail25.save()];
            case 258:
                _a.sent();
                orderDetail26 = new OrderDetail({ order: order111._id, book: book44._id, quantity: 1 });
                return [4 /*yield*/, orderDetail26.save()];
            case 259:
                _a.sent();
                orderDetail27 = new OrderDetail({ order: order29._id, book: book15._id, quantity: 1 });
                return [4 /*yield*/, orderDetail27.save()];
            case 260:
                _a.sent();
                orderDetail28 = new OrderDetail({ order: order46._id, book: book45._id, quantity: 1 });
                return [4 /*yield*/, orderDetail28.save()];
            case 261:
                _a.sent();
                orderDetail29 = new OrderDetail({ order: order70._id, book: book17._id, quantity: 1 });
                return [4 /*yield*/, orderDetail29.save()];
            case 262:
                _a.sent();
                orderDetail30 = new OrderDetail({ order: order78._id, book: book29._id, quantity: 1 });
                return [4 /*yield*/, orderDetail30.save()];
            case 263:
                _a.sent();
                orderDetail31 = new OrderDetail({ order: order124._id, book: book26._id, quantity: 1 });
                return [4 /*yield*/, orderDetail31.save()];
            case 264:
                _a.sent();
                orderDetail32 = new OrderDetail({ order: order67._id, book: book5._id, quantity: 1 });
                return [4 /*yield*/, orderDetail32.save()];
            case 265:
                _a.sent();
                orderDetail33 = new OrderDetail({ order: order7._id, book: book16._id, quantity: 1 });
                return [4 /*yield*/, orderDetail33.save()];
            case 266:
                _a.sent();
                orderDetail34 = new OrderDetail({ order: order128._id, book: book7._id, quantity: 1 });
                return [4 /*yield*/, orderDetail34.save()];
            case 267:
                _a.sent();
                orderDetail35 = new OrderDetail({ order: order135._id, book: book9._id, quantity: 1 });
                return [4 /*yield*/, orderDetail35.save()];
            case 268:
                _a.sent();
                orderDetail36 = new OrderDetail({ order: order76._id, book: book44._id, quantity: 1 });
                return [4 /*yield*/, orderDetail36.save()];
            case 269:
                _a.sent();
                orderDetail37 = new OrderDetail({ order: order12._id, book: book50._id, quantity: 1 });
                return [4 /*yield*/, orderDetail37.save()];
            case 270:
                _a.sent();
                orderDetail38 = new OrderDetail({ order: order25._id, book: book40._id, quantity: 1 });
                return [4 /*yield*/, orderDetail38.save()];
            case 271:
                _a.sent();
                orderDetail39 = new OrderDetail({ order: order73._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail39.save()];
            case 272:
                _a.sent();
                orderDetail40 = new OrderDetail({ order: order133._id, book: book33._id, quantity: 1 });
                return [4 /*yield*/, orderDetail40.save()];
            case 273:
                _a.sent();
                orderDetail41 = new OrderDetail({ order: order106._id, book: book43._id, quantity: 1 });
                return [4 /*yield*/, orderDetail41.save()];
            case 274:
                _a.sent();
                orderDetail42 = new OrderDetail({ order: order115._id, book: book45._id, quantity: 1 });
                return [4 /*yield*/, orderDetail42.save()];
            case 275:
                _a.sent();
                orderDetail43 = new OrderDetail({ order: order42._id, book: book39._id, quantity: 1 });
                return [4 /*yield*/, orderDetail43.save()];
            case 276:
                _a.sent();
                orderDetail44 = new OrderDetail({ order: order94._id, book: book5._id, quantity: 1 });
                return [4 /*yield*/, orderDetail44.save()];
            case 277:
                _a.sent();
                orderDetail45 = new OrderDetail({ order: order132._id, book: book16._id, quantity: 1 });
                return [4 /*yield*/, orderDetail45.save()];
            case 278:
                _a.sent();
                orderDetail46 = new OrderDetail({ order: order142._id, book: book10._id, quantity: 1 });
                return [4 /*yield*/, orderDetail46.save()];
            case 279:
                _a.sent();
                orderDetail47 = new OrderDetail({ order: order145._id, book: book41._id, quantity: 1 });
                return [4 /*yield*/, orderDetail47.save()];
            case 280:
                _a.sent();
                orderDetail48 = new OrderDetail({ order: order59._id, book: book26._id, quantity: 1 });
                return [4 /*yield*/, orderDetail48.save()];
            case 281:
                _a.sent();
                orderDetail49 = new OrderDetail({ order: order28._id, book: book16._id, quantity: 1 });
                return [4 /*yield*/, orderDetail49.save()];
            case 282:
                _a.sent();
                orderDetail50 = new OrderDetail({ order: order128._id, book: book15._id, quantity: 1 });
                return [4 /*yield*/, orderDetail50.save()];
            case 283:
                _a.sent();
                orderDetail51 = new OrderDetail({ order: order52._id, book: book29._id, quantity: 1 });
                return [4 /*yield*/, orderDetail51.save()];
            case 284:
                _a.sent();
                orderDetail52 = new OrderDetail({ order: order113._id, book: book15._id, quantity: 1 });
                return [4 /*yield*/, orderDetail52.save()];
            case 285:
                _a.sent();
                orderDetail53 = new OrderDetail({ order: order39._id, book: book51._id, quantity: 1 });
                return [4 /*yield*/, orderDetail53.save()];
            case 286:
                _a.sent();
                orderDetail54 = new OrderDetail({ order: order140._id, book: book42._id, quantity: 1 });
                return [4 /*yield*/, orderDetail54.save()];
            case 287:
                _a.sent();
                orderDetail55 = new OrderDetail({ order: order35._id, book: book34._id, quantity: 1 });
                return [4 /*yield*/, orderDetail55.save()];
            case 288:
                _a.sent();
                orderDetail56 = new OrderDetail({ order: order107._id, book: book4._id, quantity: 1 });
                return [4 /*yield*/, orderDetail56.save()];
            case 289:
                _a.sent();
                orderDetail57 = new OrderDetail({ order: order29._id, book: book22._id, quantity: 1 });
                return [4 /*yield*/, orderDetail57.save()];
            case 290:
                _a.sent();
                orderDetail58 = new OrderDetail({ order: order36._id, book: book20._id, quantity: 1 });
                return [4 /*yield*/, orderDetail58.save()];
            case 291:
                _a.sent();
                orderDetail59 = new OrderDetail({ order: order71._id, book: book14._id, quantity: 1 });
                return [4 /*yield*/, orderDetail59.save()];
            case 292:
                _a.sent();
                orderDetail60 = new OrderDetail({ order: order49._id, book: book22._id, quantity: 1 });
                return [4 /*yield*/, orderDetail60.save()];
            case 293:
                _a.sent();
                orderDetail61 = new OrderDetail({ order: order133._id, book: book10._id, quantity: 1 });
                return [4 /*yield*/, orderDetail61.save()];
            case 294:
                _a.sent();
                orderDetail62 = new OrderDetail({ order: order7._id, book: book15._id, quantity: 1 });
                return [4 /*yield*/, orderDetail62.save()];
            case 295:
                _a.sent();
                orderDetail63 = new OrderDetail({ order: order10._id, book: book45._id, quantity: 1 });
                return [4 /*yield*/, orderDetail63.save()];
            case 296:
                _a.sent();
                orderDetail64 = new OrderDetail({ order: order72._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail64.save()];
            case 297:
                _a.sent();
                orderDetail65 = new OrderDetail({ order: order89._id, book: book43._id, quantity: 1 });
                return [4 /*yield*/, orderDetail65.save()];
            case 298:
                _a.sent();
                orderDetail66 = new OrderDetail({ order: order127._id, book: book18._id, quantity: 1 });
                return [4 /*yield*/, orderDetail66.save()];
            case 299:
                _a.sent();
                orderDetail67 = new OrderDetail({ order: order25._id, book: book50._id, quantity: 1 });
                return [4 /*yield*/, orderDetail67.save()];
            case 300:
                _a.sent();
                orderDetail68 = new OrderDetail({ order: order1._id, book: book4._id, quantity: 1 });
                return [4 /*yield*/, orderDetail68.save()];
            case 301:
                _a.sent();
                orderDetail69 = new OrderDetail({ order: order121._id, book: book45._id, quantity: 1 });
                return [4 /*yield*/, orderDetail69.save()];
            case 302:
                _a.sent();
                orderDetail70 = new OrderDetail({ order: order114._id, book: book49._id, quantity: 1 });
                return [4 /*yield*/, orderDetail70.save()];
            case 303:
                _a.sent();
                orderDetail71 = new OrderDetail({ order: order80._id, book: book48._id, quantity: 1 });
                return [4 /*yield*/, orderDetail71.save()];
            case 304:
                _a.sent();
                orderDetail72 = new OrderDetail({ order: order5._id, book: book31._id, quantity: 1 });
                return [4 /*yield*/, orderDetail72.save()];
            case 305:
                _a.sent();
                orderDetail73 = new OrderDetail({ order: order12._id, book: book3._id, quantity: 1 });
                return [4 /*yield*/, orderDetail73.save()];
            case 306:
                _a.sent();
                orderDetail74 = new OrderDetail({ order: order105._id, book: book1._id, quantity: 1 });
                return [4 /*yield*/, orderDetail74.save()];
            case 307:
                _a.sent();
                orderDetail75 = new OrderDetail({ order: order80._id, book: book37._id, quantity: 1 });
                return [4 /*yield*/, orderDetail75.save()];
            case 308:
                _a.sent();
                orderDetail76 = new OrderDetail({ order: order8._id, book: book26._id, quantity: 1 });
                return [4 /*yield*/, orderDetail76.save()];
            case 309:
                _a.sent();
                orderDetail77 = new OrderDetail({ order: order85._id, book: book14._id, quantity: 1 });
                return [4 /*yield*/, orderDetail77.save()];
            case 310:
                _a.sent();
                orderDetail78 = new OrderDetail({ order: order120._id, book: book25._id, quantity: 1 });
                return [4 /*yield*/, orderDetail78.save()];
            case 311:
                _a.sent();
                orderDetail79 = new OrderDetail({ order: order142._id, book: book15._id, quantity: 1 });
                return [4 /*yield*/, orderDetail79.save()];
            case 312:
                _a.sent();
                orderDetail80 = new OrderDetail({ order: order5._id, book: book44._id, quantity: 1 });
                return [4 /*yield*/, orderDetail80.save()];
            case 313:
                _a.sent();
                orderDetail81 = new OrderDetail({ order: order46._id, book: book3._id, quantity: 1 });
                return [4 /*yield*/, orderDetail81.save()];
            case 314:
                _a.sent();
                orderDetail82 = new OrderDetail({ order: order145._id, book: book10._id, quantity: 1 });
                return [4 /*yield*/, orderDetail82.save()];
            case 315:
                _a.sent();
                orderDetail83 = new OrderDetail({ order: order17._id, book: book49._id, quantity: 1 });
                return [4 /*yield*/, orderDetail83.save()];
            case 316:
                _a.sent();
                orderDetail84 = new OrderDetail({ order: order115._id, book: book36._id, quantity: 1 });
                return [4 /*yield*/, orderDetail84.save()];
            case 317:
                _a.sent();
                orderDetail85 = new OrderDetail({ order: order28._id, book: book38._id, quantity: 1 });
                return [4 /*yield*/, orderDetail85.save()];
            case 318:
                _a.sent();
                orderDetail86 = new OrderDetail({ order: order74._id, book: book49._id, quantity: 1 });
                return [4 /*yield*/, orderDetail86.save()];
            case 319:
                _a.sent();
                orderDetail87 = new OrderDetail({ order: order120._id, book: book51._id, quantity: 1 });
                return [4 /*yield*/, orderDetail87.save()];
            case 320:
                _a.sent();
                orderDetail88 = new OrderDetail({ order: order126._id, book: book18._id, quantity: 1 });
                return [4 /*yield*/, orderDetail88.save()];
            case 321:
                _a.sent();
                orderDetail89 = new OrderDetail({ order: order109._id, book: book11._id, quantity: 1 });
                return [4 /*yield*/, orderDetail89.save()];
            case 322:
                _a.sent();
                orderDetail90 = new OrderDetail({ order: order62._id, book: book25._id, quantity: 1 });
                return [4 /*yield*/, orderDetail90.save()];
            case 323:
                _a.sent();
                orderDetail91 = new OrderDetail({ order: order65._id, book: book40._id, quantity: 1 });
                return [4 /*yield*/, orderDetail91.save()];
            case 324:
                _a.sent();
                orderDetail92 = new OrderDetail({ order: order40._id, book: book38._id, quantity: 1 });
                return [4 /*yield*/, orderDetail92.save()];
            case 325:
                _a.sent();
                orderDetail93 = new OrderDetail({ order: order94._id, book: book22._id, quantity: 1 });
                return [4 /*yield*/, orderDetail93.save()];
            case 326:
                _a.sent();
                orderDetail94 = new OrderDetail({ order: order147._id, book: book47._id, quantity: 1 });
                return [4 /*yield*/, orderDetail94.save()];
            case 327:
                _a.sent();
                orderDetail95 = new OrderDetail({ order: order108._id, book: book4._id, quantity: 1 });
                return [4 /*yield*/, orderDetail95.save()];
            case 328:
                _a.sent();
                orderDetail96 = new OrderDetail({ order: order63._id, book: book27._id, quantity: 1 });
                return [4 /*yield*/, orderDetail96.save()];
            case 329:
                _a.sent();
                orderDetail97 = new OrderDetail({ order: order55._id, book: book26._id, quantity: 1 });
                return [4 /*yield*/, orderDetail97.save()];
            case 330:
                _a.sent();
                orderDetail98 = new OrderDetail({ order: order5._id, book: book3._id, quantity: 1 });
                return [4 /*yield*/, orderDetail98.save()];
            case 331:
                _a.sent();
                orderDetail99 = new OrderDetail({ order: order149._id, book: book34._id, quantity: 1 });
                return [4 /*yield*/, orderDetail99.save()];
            case 332:
                _a.sent();
                orderDetail100 = new OrderDetail({ order: order65._id, book: book36._id, quantity: 1 });
                return [4 /*yield*/, orderDetail100.save()];
            case 333:
                _a.sent();
                orderDetail101 = new OrderDetail({ order: order67._id, book: book3._id, quantity: 1 });
                return [4 /*yield*/, orderDetail101.save()];
            case 334:
                _a.sent();
                orderDetail102 = new OrderDetail({ order: order96._id, book: book13._id, quantity: 1 });
                return [4 /*yield*/, orderDetail102.save()];
            case 335:
                _a.sent();
                orderDetail103 = new OrderDetail({ order: order121._id, book: book48._id, quantity: 1 });
                return [4 /*yield*/, orderDetail103.save()];
            case 336:
                _a.sent();
                orderDetail104 = new OrderDetail({ order: order97._id, book: book26._id, quantity: 1 });
                return [4 /*yield*/, orderDetail104.save()];
            case 337:
                _a.sent();
                orderDetail105 = new OrderDetail({ order: order137._id, book: book16._id, quantity: 1 });
                return [4 /*yield*/, orderDetail105.save()];
            case 338:
                _a.sent();
                orderDetail106 = new OrderDetail({ order: order12._id, book: book29._id, quantity: 1 });
                return [4 /*yield*/, orderDetail106.save()];
            case 339:
                _a.sent();
                orderDetail107 = new OrderDetail({ order: order64._id, book: book17._id, quantity: 1 });
                return [4 /*yield*/, orderDetail107.save()];
            case 340:
                _a.sent();
                orderDetail108 = new OrderDetail({ order: order91._id, book: book23._id, quantity: 1 });
                return [4 /*yield*/, orderDetail108.save()];
            case 341:
                _a.sent();
                orderDetail109 = new OrderDetail({ order: order111._id, book: book28._id, quantity: 1 });
                return [4 /*yield*/, orderDetail109.save()];
            case 342:
                _a.sent();
                orderDetail110 = new OrderDetail({ order: order67._id, book: book32._id, quantity: 1 });
                return [4 /*yield*/, orderDetail110.save()];
            case 343:
                _a.sent();
                orderDetail111 = new OrderDetail({ order: order74._id, book: book11._id, quantity: 1 });
                return [4 /*yield*/, orderDetail111.save()];
            case 344:
                _a.sent();
                orderDetail112 = new OrderDetail({ order: order40._id, book: book41._id, quantity: 1 });
                return [4 /*yield*/, orderDetail112.save()];
            case 345:
                _a.sent();
                orderDetail113 = new OrderDetail({ order: order60._id, book: book35._id, quantity: 1 });
                return [4 /*yield*/, orderDetail113.save()];
            case 346:
                _a.sent();
                orderDetail114 = new OrderDetail({ order: order27._id, book: book8._id, quantity: 1 });
                return [4 /*yield*/, orderDetail114.save()];
            case 347:
                _a.sent();
                orderDetail115 = new OrderDetail({ order: order88._id, book: book27._id, quantity: 1 });
                return [4 /*yield*/, orderDetail115.save()];
            case 348:
                _a.sent();
                orderDetail116 = new OrderDetail({ order: order2._id, book: book50._id, quantity: 1 });
                return [4 /*yield*/, orderDetail116.save()];
            case 349:
                _a.sent();
                orderDetail117 = new OrderDetail({ order: order122._id, book: book8._id, quantity: 1 });
                return [4 /*yield*/, orderDetail117.save()];
            case 350:
                _a.sent();
                orderDetail118 = new OrderDetail({ order: order148._id, book: book14._id, quantity: 1 });
                return [4 /*yield*/, orderDetail118.save()];
            case 351:
                _a.sent();
                orderDetail119 = new OrderDetail({ order: order17._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail119.save()];
            case 352:
                _a.sent();
                orderDetail120 = new OrderDetail({ order: order4._id, book: book50._id, quantity: 1 });
                return [4 /*yield*/, orderDetail120.save()];
            case 353:
                _a.sent();
                orderDetail121 = new OrderDetail({ order: order40._id, book: book17._id, quantity: 1 });
                return [4 /*yield*/, orderDetail121.save()];
            case 354:
                _a.sent();
                orderDetail122 = new OrderDetail({ order: order95._id, book: book46._id, quantity: 1 });
                return [4 /*yield*/, orderDetail122.save()];
            case 355:
                _a.sent();
                orderDetail123 = new OrderDetail({ order: order96._id, book: book39._id, quantity: 1 });
                return [4 /*yield*/, orderDetail123.save()];
            case 356:
                _a.sent();
                orderDetail124 = new OrderDetail({ order: order59._id, book: book2._id, quantity: 1 });
                return [4 /*yield*/, orderDetail124.save()];
            case 357:
                _a.sent();
                orderDetail125 = new OrderDetail({ order: order42._id, book: book43._id, quantity: 1 });
                return [4 /*yield*/, orderDetail125.save()];
            case 358:
                _a.sent();
                orderDetail126 = new OrderDetail({ order: order125._id, book: book2._id, quantity: 1 });
                return [4 /*yield*/, orderDetail126.save()];
            case 359:
                _a.sent();
                orderDetail127 = new OrderDetail({ order: order65._id, book: book44._id, quantity: 1 });
                return [4 /*yield*/, orderDetail127.save()];
            case 360:
                _a.sent();
                orderDetail128 = new OrderDetail({ order: order15._id, book: book50._id, quantity: 1 });
                return [4 /*yield*/, orderDetail128.save()];
            case 361:
                _a.sent();
                orderDetail129 = new OrderDetail({ order: order106._id, book: book12._id, quantity: 1 });
                return [4 /*yield*/, orderDetail129.save()];
            case 362:
                _a.sent();
                orderDetail130 = new OrderDetail({ order: order9._id, book: book27._id, quantity: 1 });
                return [4 /*yield*/, orderDetail130.save()];
            case 363:
                _a.sent();
                orderDetail131 = new OrderDetail({ order: order60._id, book: book26._id, quantity: 1 });
                return [4 /*yield*/, orderDetail131.save()];
            case 364:
                _a.sent();
                orderDetail132 = new OrderDetail({ order: order38._id, book: book31._id, quantity: 1 });
                return [4 /*yield*/, orderDetail132.save()];
            case 365:
                _a.sent();
                orderDetail133 = new OrderDetail({ order: order72._id, book: book49._id, quantity: 1 });
                return [4 /*yield*/, orderDetail133.save()];
            case 366:
                _a.sent();
                orderDetail134 = new OrderDetail({ order: order55._id, book: book49._id, quantity: 1 });
                return [4 /*yield*/, orderDetail134.save()];
            case 367:
                _a.sent();
                orderDetail135 = new OrderDetail({ order: order26._id, book: book40._id, quantity: 1 });
                return [4 /*yield*/, orderDetail135.save()];
            case 368:
                _a.sent();
                orderDetail136 = new OrderDetail({ order: order99._id, book: book31._id, quantity: 1 });
                return [4 /*yield*/, orderDetail136.save()];
            case 369:
                _a.sent();
                orderDetail137 = new OrderDetail({ order: order100._id, book: book40._id, quantity: 1 });
                return [4 /*yield*/, orderDetail137.save()];
            case 370:
                _a.sent();
                orderDetail138 = new OrderDetail({ order: order101._id, book: book23._id, quantity: 1 });
                return [4 /*yield*/, orderDetail138.save()];
            case 371:
                _a.sent();
                orderDetail139 = new OrderDetail({ order: order147._id, book: book30._id, quantity: 1 });
                return [4 /*yield*/, orderDetail139.save()];
            case 372:
                _a.sent();
                orderDetail140 = new OrderDetail({ order: order35._id, book: book6._id, quantity: 1 });
                return [4 /*yield*/, orderDetail140.save()];
            case 373:
                _a.sent();
                orderDetail141 = new OrderDetail({ order: order96._id, book: book11._id, quantity: 1 });
                return [4 /*yield*/, orderDetail141.save()];
            case 374:
                _a.sent();
                orderDetail142 = new OrderDetail({ order: order124._id, book: book48._id, quantity: 1 });
                return [4 /*yield*/, orderDetail142.save()];
            case 375:
                _a.sent();
                orderDetail143 = new OrderDetail({ order: order20._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail143.save()];
            case 376:
                _a.sent();
                orderDetail144 = new OrderDetail({ order: order94._id, book: book42._id, quantity: 1 });
                return [4 /*yield*/, orderDetail144.save()];
            case 377:
                _a.sent();
                orderDetail145 = new OrderDetail({ order: order146._id, book: book30._id, quantity: 1 });
                return [4 /*yield*/, orderDetail145.save()];
            case 378:
                _a.sent();
                orderDetail146 = new OrderDetail({ order: order108._id, book: book14._id, quantity: 1 });
                return [4 /*yield*/, orderDetail146.save()];
            case 379:
                _a.sent();
                orderDetail147 = new OrderDetail({ order: order83._id, book: book20._id, quantity: 1 });
                return [4 /*yield*/, orderDetail147.save()];
            case 380:
                _a.sent();
                orderDetail148 = new OrderDetail({ order: order22._id, book: book5._id, quantity: 1 });
                return [4 /*yield*/, orderDetail148.save()];
            case 381:
                _a.sent();
                orderDetail149 = new OrderDetail({ order: order35._id, book: book28._id, quantity: 1 });
                return [4 /*yield*/, orderDetail149.save()];
            case 382:
                _a.sent();
                orderDetail150 = new OrderDetail({ order: order14._id, book: book20._id, quantity: 1 });
                return [4 /*yield*/, orderDetail150.save()];
            case 383:
                _a.sent();
                orderDetail151 = new OrderDetail({ order: order97._id, book: book29._id, quantity: 1 });
                return [4 /*yield*/, orderDetail151.save()];
            case 384:
                _a.sent();
                orderDetail152 = new OrderDetail({ order: order36._id, book: book9._id, quantity: 1 });
                return [4 /*yield*/, orderDetail152.save()];
            case 385:
                _a.sent();
                orderDetail153 = new OrderDetail({ order: order82._id, book: book35._id, quantity: 1 });
                return [4 /*yield*/, orderDetail153.save()];
            case 386:
                _a.sent();
                orderDetail154 = new OrderDetail({ order: order114._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail154.save()];
            case 387:
                _a.sent();
                orderDetail155 = new OrderDetail({ order: order142._id, book: book42._id, quantity: 1 });
                return [4 /*yield*/, orderDetail155.save()];
            case 388:
                _a.sent();
                orderDetail156 = new OrderDetail({ order: order107._id, book: book2._id, quantity: 1 });
                return [4 /*yield*/, orderDetail156.save()];
            case 389:
                _a.sent();
                orderDetail157 = new OrderDetail({ order: order130._id, book: book31._id, quantity: 1 });
                return [4 /*yield*/, orderDetail157.save()];
            case 390:
                _a.sent();
                orderDetail158 = new OrderDetail({ order: order77._id, book: book12._id, quantity: 1 });
                return [4 /*yield*/, orderDetail158.save()];
            case 391:
                _a.sent();
                orderDetail159 = new OrderDetail({ order: order31._id, book: book17._id, quantity: 1 });
                return [4 /*yield*/, orderDetail159.save()];
            case 392:
                _a.sent();
                orderDetail160 = new OrderDetail({ order: order56._id, book: book49._id, quantity: 1 });
                return [4 /*yield*/, orderDetail160.save()];
            case 393:
                _a.sent();
                orderDetail161 = new OrderDetail({ order: order109._id, book: book19._id, quantity: 1 });
                return [4 /*yield*/, orderDetail161.save()];
            case 394:
                _a.sent();
                orderDetail162 = new OrderDetail({ order: order123._id, book: book24._id, quantity: 1 });
                return [4 /*yield*/, orderDetail162.save()];
            case 395:
                _a.sent();
                orderDetail163 = new OrderDetail({ order: order128._id, book: book50._id, quantity: 1 });
                return [4 /*yield*/, orderDetail163.save()];
            case 396:
                _a.sent();
                orderDetail164 = new OrderDetail({ order: order30._id, book: book31._id, quantity: 1 });
                return [4 /*yield*/, orderDetail164.save()];
            case 397:
                _a.sent();
                orderDetail165 = new OrderDetail({ order: order22._id, book: book36._id, quantity: 1 });
                return [4 /*yield*/, orderDetail165.save()];
            case 398:
                _a.sent();
                orderDetail166 = new OrderDetail({ order: order2._id, book: book26._id, quantity: 1 });
                return [4 /*yield*/, orderDetail166.save()];
            case 399:
                _a.sent();
                orderDetail167 = new OrderDetail({ order: order50._id, book: book41._id, quantity: 1 });
                return [4 /*yield*/, orderDetail167.save()];
            case 400:
                _a.sent();
                orderDetail168 = new OrderDetail({ order: order70._id, book: book35._id, quantity: 1 });
                return [4 /*yield*/, orderDetail168.save()];
            case 401:
                _a.sent();
                orderDetail169 = new OrderDetail({ order: order113._id, book: book20._id, quantity: 1 });
                return [4 /*yield*/, orderDetail169.save()];
            case 402:
                _a.sent();
                orderDetail170 = new OrderDetail({ order: order110._id, book: book18._id, quantity: 1 });
                return [4 /*yield*/, orderDetail170.save()];
            case 403:
                _a.sent();
                orderDetail171 = new OrderDetail({ order: order133._id, book: book51._id, quantity: 1 });
                return [4 /*yield*/, orderDetail171.save()];
            case 404:
                _a.sent();
                orderDetail172 = new OrderDetail({ order: order110._id, book: book27._id, quantity: 1 });
                return [4 /*yield*/, orderDetail172.save()];
            case 405:
                _a.sent();
                orderDetail173 = new OrderDetail({ order: order19._id, book: book31._id, quantity: 1 });
                return [4 /*yield*/, orderDetail173.save()];
            case 406:
                _a.sent();
                orderDetail174 = new OrderDetail({ order: order77._id, book: book51._id, quantity: 1 });
                return [4 /*yield*/, orderDetail174.save()];
            case 407:
                _a.sent();
                orderDetail175 = new OrderDetail({ order: order26._id, book: book25._id, quantity: 1 });
                return [4 /*yield*/, orderDetail175.save()];
            case 408:
                _a.sent();
                orderDetail176 = new OrderDetail({ order: order45._id, book: book40._id, quantity: 1 });
                return [4 /*yield*/, orderDetail176.save()];
            case 409:
                _a.sent();
                orderDetail177 = new OrderDetail({ order: order100._id, book: book27._id, quantity: 1 });
                return [4 /*yield*/, orderDetail177.save()];
            case 410:
                _a.sent();
                orderDetail178 = new OrderDetail({ order: order133._id, book: book43._id, quantity: 1 });
                return [4 /*yield*/, orderDetail178.save()];
            case 411:
                _a.sent();
                orderDetail179 = new OrderDetail({ order: order87._id, book: book41._id, quantity: 1 });
                return [4 /*yield*/, orderDetail179.save()];
            case 412:
                _a.sent();
                orderDetail180 = new OrderDetail({ order: order104._id, book: book39._id, quantity: 1 });
                return [4 /*yield*/, orderDetail180.save()];
            case 413:
                _a.sent();
                orderDetail181 = new OrderDetail({ order: order63._id, book: book4._id, quantity: 1 });
                return [4 /*yield*/, orderDetail181.save()];
            case 414:
                _a.sent();
                orderDetail182 = new OrderDetail({ order: order13._id, book: book28._id, quantity: 1 });
                return [4 /*yield*/, orderDetail182.save()];
            case 415:
                _a.sent();
                orderDetail183 = new OrderDetail({ order: order103._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail183.save()];
            case 416:
                _a.sent();
                orderDetail184 = new OrderDetail({ order: order9._id, book: book8._id, quantity: 1 });
                return [4 /*yield*/, orderDetail184.save()];
            case 417:
                _a.sent();
                orderDetail185 = new OrderDetail({ order: order99._id, book: book12._id, quantity: 1 });
                return [4 /*yield*/, orderDetail185.save()];
            case 418:
                _a.sent();
                orderDetail186 = new OrderDetail({ order: order91._id, book: book9._id, quantity: 1 });
                return [4 /*yield*/, orderDetail186.save()];
            case 419:
                _a.sent();
                orderDetail187 = new OrderDetail({ order: order139._id, book: book26._id, quantity: 1 });
                return [4 /*yield*/, orderDetail187.save()];
            case 420:
                _a.sent();
                orderDetail188 = new OrderDetail({ order: order133._id, book: book5._id, quantity: 1 });
                return [4 /*yield*/, orderDetail188.save()];
            case 421:
                _a.sent();
                orderDetail189 = new OrderDetail({ order: order18._id, book: book17._id, quantity: 1 });
                return [4 /*yield*/, orderDetail189.save()];
            case 422:
                _a.sent();
                orderDetail190 = new OrderDetail({ order: order139._id, book: book44._id, quantity: 1 });
                return [4 /*yield*/, orderDetail190.save()];
            case 423:
                _a.sent();
                orderDetail191 = new OrderDetail({ order: order57._id, book: book20._id, quantity: 1 });
                return [4 /*yield*/, orderDetail191.save()];
            case 424:
                _a.sent();
                orderDetail192 = new OrderDetail({ order: order25._id, book: book29._id, quantity: 1 });
                return [4 /*yield*/, orderDetail192.save()];
            case 425:
                _a.sent();
                orderDetail193 = new OrderDetail({ order: order39._id, book: book42._id, quantity: 1 });
                return [4 /*yield*/, orderDetail193.save()];
            case 426:
                _a.sent();
                orderDetail194 = new OrderDetail({ order: order93._id, book: book37._id, quantity: 1 });
                return [4 /*yield*/, orderDetail194.save()];
            case 427:
                _a.sent();
                orderDetail195 = new OrderDetail({ order: order138._id, book: book20._id, quantity: 1 });
                return [4 /*yield*/, orderDetail195.save()];
            case 428:
                _a.sent();
                orderDetail196 = new OrderDetail({ order: order82._id, book: book47._id, quantity: 1 });
                return [4 /*yield*/, orderDetail196.save()];
            case 429:
                _a.sent();
                orderDetail197 = new OrderDetail({ order: order21._id, book: book22._id, quantity: 1 });
                return [4 /*yield*/, orderDetail197.save()];
            case 430:
                _a.sent();
                orderDetail198 = new OrderDetail({ order: order99._id, book: book5._id, quantity: 1 });
                return [4 /*yield*/, orderDetail198.save()];
            case 431:
                _a.sent();
                orderDetail199 = new OrderDetail({ order: order26._id, book: book6._id, quantity: 1 });
                return [4 /*yield*/, orderDetail199.save()];
            case 432:
                _a.sent();
                orderDetail200 = new OrderDetail({ order: order144._id, book: book1._id, quantity: 1 });
                return [4 /*yield*/, orderDetail200.save()];
            case 433:
                _a.sent();
                orderDetail201 = new OrderDetail({ order: order148._id, book: book19._id, quantity: 1 });
                return [4 /*yield*/, orderDetail201.save()];
            case 434:
                _a.sent();
                orderDetail202 = new OrderDetail({ order: order17._id, book: book24._id, quantity: 1 });
                return [4 /*yield*/, orderDetail202.save()];
            case 435:
                _a.sent();
                orderDetail203 = new OrderDetail({ order: order145._id, book: book11._id, quantity: 1 });
                return [4 /*yield*/, orderDetail203.save()];
            case 436:
                _a.sent();
                orderDetail204 = new OrderDetail({ order: order46._id, book: book20._id, quantity: 1 });
                return [4 /*yield*/, orderDetail204.save()];
            case 437:
                _a.sent();
                orderDetail205 = new OrderDetail({ order: order111._id, book: book25._id, quantity: 1 });
                return [4 /*yield*/, orderDetail205.save()];
            case 438:
                _a.sent();
                orderDetail206 = new OrderDetail({ order: order100._id, book: book14._id, quantity: 1 });
                return [4 /*yield*/, orderDetail206.save()];
            case 439:
                _a.sent();
                orderDetail207 = new OrderDetail({ order: order43._id, book: book18._id, quantity: 1 });
                return [4 /*yield*/, orderDetail207.save()];
            case 440:
                _a.sent();
                orderDetail208 = new OrderDetail({ order: order76._id, book: book31._id, quantity: 1 });
                return [4 /*yield*/, orderDetail208.save()];
            case 441:
                _a.sent();
                orderDetail209 = new OrderDetail({ order: order80._id, book: book12._id, quantity: 1 });
                return [4 /*yield*/, orderDetail209.save()];
            case 442:
                _a.sent();
                orderDetail210 = new OrderDetail({ order: order45._id, book: book3._id, quantity: 1 });
                return [4 /*yield*/, orderDetail210.save()];
            case 443:
                _a.sent();
                orderDetail211 = new OrderDetail({ order: order6._id, book: book23._id, quantity: 1 });
                return [4 /*yield*/, orderDetail211.save()];
            case 444:
                _a.sent();
                orderDetail212 = new OrderDetail({ order: order67._id, book: book18._id, quantity: 1 });
                return [4 /*yield*/, orderDetail212.save()];
            case 445:
                _a.sent();
                orderDetail213 = new OrderDetail({ order: order52._id, book: book3._id, quantity: 1 });
                return [4 /*yield*/, orderDetail213.save()];
            case 446:
                _a.sent();
                orderDetail214 = new OrderDetail({ order: order55._id, book: book7._id, quantity: 1 });
                return [4 /*yield*/, orderDetail214.save()];
            case 447:
                _a.sent();
                orderDetail215 = new OrderDetail({ order: order41._id, book: book31._id, quantity: 1 });
                return [4 /*yield*/, orderDetail215.save()];
            case 448:
                _a.sent();
                orderDetail216 = new OrderDetail({ order: order7._id, book: book47._id, quantity: 1 });
                return [4 /*yield*/, orderDetail216.save()];
            case 449:
                _a.sent();
                orderDetail217 = new OrderDetail({ order: order90._id, book: book37._id, quantity: 1 });
                return [4 /*yield*/, orderDetail217.save()];
            case 450:
                _a.sent();
                orderDetail218 = new OrderDetail({ order: order79._id, book: book22._id, quantity: 1 });
                return [4 /*yield*/, orderDetail218.save()];
            case 451:
                _a.sent();
                orderDetail219 = new OrderDetail({ order: order139._id, book: book19._id, quantity: 1 });
                return [4 /*yield*/, orderDetail219.save()];
            case 452:
                _a.sent();
                orderDetail220 = new OrderDetail({ order: order34._id, book: book34._id, quantity: 1 });
                return [4 /*yield*/, orderDetail220.save()];
            case 453:
                _a.sent();
                orderDetail221 = new OrderDetail({ order: order3._id, book: book8._id, quantity: 1 });
                return [4 /*yield*/, orderDetail221.save()];
            case 454:
                _a.sent();
                orderDetail222 = new OrderDetail({ order: order116._id, book: book38._id, quantity: 1 });
                return [4 /*yield*/, orderDetail222.save()];
            case 455:
                _a.sent();
                orderDetail223 = new OrderDetail({ order: order87._id, book: book30._id, quantity: 1 });
                return [4 /*yield*/, orderDetail223.save()];
            case 456:
                _a.sent();
                orderDetail224 = new OrderDetail({ order: order132._id, book: book9._id, quantity: 1 });
                return [4 /*yield*/, orderDetail224.save()];
            case 457:
                _a.sent();
                orderDetail225 = new OrderDetail({ order: order115._id, book: book37._id, quantity: 1 });
                return [4 /*yield*/, orderDetail225.save()];
            case 458:
                _a.sent();
                orderDetail226 = new OrderDetail({ order: order52._id, book: book24._id, quantity: 1 });
                return [4 /*yield*/, orderDetail226.save()];
            case 459:
                _a.sent();
                orderDetail227 = new OrderDetail({ order: order8._id, book: book16._id, quantity: 1 });
                return [4 /*yield*/, orderDetail227.save()];
            case 460:
                _a.sent();
                orderDetail228 = new OrderDetail({ order: order17._id, book: book36._id, quantity: 1 });
                return [4 /*yield*/, orderDetail228.save()];
            case 461:
                _a.sent();
                orderDetail229 = new OrderDetail({ order: order148._id, book: book46._id, quantity: 1 });
                return [4 /*yield*/, orderDetail229.save()];
            case 462:
                _a.sent();
                orderDetail230 = new OrderDetail({ order: order106._id, book: book22._id, quantity: 1 });
                return [4 /*yield*/, orderDetail230.save()];
            case 463:
                _a.sent();
                orderDetail231 = new OrderDetail({ order: order46._id, book: book40._id, quantity: 1 });
                return [4 /*yield*/, orderDetail231.save()];
            case 464:
                _a.sent();
                orderDetail232 = new OrderDetail({ order: order112._id, book: book37._id, quantity: 1 });
                return [4 /*yield*/, orderDetail232.save()];
            case 465:
                _a.sent();
                orderDetail233 = new OrderDetail({ order: order38._id, book: book38._id, quantity: 1 });
                return [4 /*yield*/, orderDetail233.save()];
            case 466:
                _a.sent();
                orderDetail234 = new OrderDetail({ order: order9._id, book: book6._id, quantity: 1 });
                return [4 /*yield*/, orderDetail234.save()];
            case 467:
                _a.sent();
                orderDetail235 = new OrderDetail({ order: order82._id, book: book27._id, quantity: 1 });
                return [4 /*yield*/, orderDetail235.save()];
            case 468:
                _a.sent();
                orderDetail236 = new OrderDetail({ order: order13._id, book: book17._id, quantity: 1 });
                return [4 /*yield*/, orderDetail236.save()];
            case 469:
                _a.sent();
                orderDetail237 = new OrderDetail({ order: order36._id, book: book23._id, quantity: 1 });
                return [4 /*yield*/, orderDetail237.save()];
            case 470:
                _a.sent();
                orderDetail238 = new OrderDetail({ order: order64._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail238.save()];
            case 471:
                _a.sent();
                orderDetail239 = new OrderDetail({ order: order135._id, book: book34._id, quantity: 1 });
                return [4 /*yield*/, orderDetail239.save()];
            case 472:
                _a.sent();
                orderDetail240 = new OrderDetail({ order: order138._id, book: book26._id, quantity: 1 });
                return [4 /*yield*/, orderDetail240.save()];
            case 473:
                _a.sent();
                orderDetail241 = new OrderDetail({ order: order52._id, book: book9._id, quantity: 1 });
                return [4 /*yield*/, orderDetail241.save()];
            case 474:
                _a.sent();
                orderDetail242 = new OrderDetail({ order: order101._id, book: book41._id, quantity: 1 });
                return [4 /*yield*/, orderDetail242.save()];
            case 475:
                _a.sent();
                orderDetail243 = new OrderDetail({ order: order108._id, book: book18._id, quantity: 1 });
                return [4 /*yield*/, orderDetail243.save()];
            case 476:
                _a.sent();
                orderDetail244 = new OrderDetail({ order: order70._id, book: book27._id, quantity: 1 });
                return [4 /*yield*/, orderDetail244.save()];
            case 477:
                _a.sent();
                orderDetail245 = new OrderDetail({ order: order24._id, book: book48._id, quantity: 1 });
                return [4 /*yield*/, orderDetail245.save()];
            case 478:
                _a.sent();
                orderDetail246 = new OrderDetail({ order: order93._id, book: book27._id, quantity: 1 });
                return [4 /*yield*/, orderDetail246.save()];
            case 479:
                _a.sent();
                orderDetail247 = new OrderDetail({ order: order22._id, book: book19._id, quantity: 1 });
                return [4 /*yield*/, orderDetail247.save()];
            case 480:
                _a.sent();
                orderDetail248 = new OrderDetail({ order: order94._id, book: book33._id, quantity: 1 });
                return [4 /*yield*/, orderDetail248.save()];
            case 481:
                _a.sent();
                orderDetail249 = new OrderDetail({ order: order115._id, book: book27._id, quantity: 1 });
                return [4 /*yield*/, orderDetail249.save()];
            case 482:
                _a.sent();
                orderDetail250 = new OrderDetail({ order: order46._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail250.save()];
            case 483:
                _a.sent();
                orderDetail251 = new OrderDetail({ order: order11._id, book: book41._id, quantity: 1 });
                return [4 /*yield*/, orderDetail251.save()];
            case 484:
                _a.sent();
                orderDetail252 = new OrderDetail({ order: order129._id, book: book31._id, quantity: 1 });
                return [4 /*yield*/, orderDetail252.save()];
            case 485:
                _a.sent();
                orderDetail253 = new OrderDetail({ order: order69._id, book: book34._id, quantity: 1 });
                return [4 /*yield*/, orderDetail253.save()];
            case 486:
                _a.sent();
                orderDetail254 = new OrderDetail({ order: order13._id, book: book33._id, quantity: 1 });
                return [4 /*yield*/, orderDetail254.save()];
            case 487:
                _a.sent();
                orderDetail255 = new OrderDetail({ order: order90._id, book: book15._id, quantity: 1 });
                return [4 /*yield*/, orderDetail255.save()];
            case 488:
                _a.sent();
                orderDetail256 = new OrderDetail({ order: order84._id, book: book11._id, quantity: 1 });
                return [4 /*yield*/, orderDetail256.save()];
            case 489:
                _a.sent();
                orderDetail257 = new OrderDetail({ order: order56._id, book: book44._id, quantity: 1 });
                return [4 /*yield*/, orderDetail257.save()];
            case 490:
                _a.sent();
                orderDetail258 = new OrderDetail({ order: order60._id, book: book38._id, quantity: 1 });
                return [4 /*yield*/, orderDetail258.save()];
            case 491:
                _a.sent();
                orderDetail259 = new OrderDetail({ order: order54._id, book: book18._id, quantity: 1 });
                return [4 /*yield*/, orderDetail259.save()];
            case 492:
                _a.sent();
                orderDetail260 = new OrderDetail({ order: order28._id, book: book22._id, quantity: 1 });
                return [4 /*yield*/, orderDetail260.save()];
            case 493:
                _a.sent();
                orderDetail261 = new OrderDetail({ order: order23._id, book: book17._id, quantity: 1 });
                return [4 /*yield*/, orderDetail261.save()];
            case 494:
                _a.sent();
                orderDetail262 = new OrderDetail({ order: order59._id, book: book49._id, quantity: 1 });
                return [4 /*yield*/, orderDetail262.save()];
            case 495:
                _a.sent();
                orderDetail263 = new OrderDetail({ order: order37._id, book: book10._id, quantity: 1 });
                return [4 /*yield*/, orderDetail263.save()];
            case 496:
                _a.sent();
                orderDetail264 = new OrderDetail({ order: order69._id, book: book2._id, quantity: 1 });
                return [4 /*yield*/, orderDetail264.save()];
            case 497:
                _a.sent();
                orderDetail265 = new OrderDetail({ order: order4._id, book: book43._id, quantity: 1 });
                return [4 /*yield*/, orderDetail265.save()];
            case 498:
                _a.sent();
                orderDetail266 = new OrderDetail({ order: order48._id, book: book23._id, quantity: 1 });
                return [4 /*yield*/, orderDetail266.save()];
            case 499:
                _a.sent();
                orderDetail267 = new OrderDetail({ order: order77._id, book: book11._id, quantity: 1 });
                return [4 /*yield*/, orderDetail267.save()];
            case 500:
                _a.sent();
                orderDetail268 = new OrderDetail({ order: order143._id, book: book14._id, quantity: 1 });
                return [4 /*yield*/, orderDetail268.save()];
            case 501:
                _a.sent();
                orderDetail269 = new OrderDetail({ order: order22._id, book: book29._id, quantity: 1 });
                return [4 /*yield*/, orderDetail269.save()];
            case 502:
                _a.sent();
                orderDetail270 = new OrderDetail({ order: order61._id, book: book50._id, quantity: 1 });
                return [4 /*yield*/, orderDetail270.save()];
            case 503:
                _a.sent();
                orderDetail271 = new OrderDetail({ order: order28._id, book: book19._id, quantity: 1 });
                return [4 /*yield*/, orderDetail271.save()];
            case 504:
                _a.sent();
                orderDetail272 = new OrderDetail({ order: order17._id, book: book38._id, quantity: 1 });
                return [4 /*yield*/, orderDetail272.save()];
            case 505:
                _a.sent();
                orderDetail273 = new OrderDetail({ order: order44._id, book: book5._id, quantity: 1 });
                return [4 /*yield*/, orderDetail273.save()];
            case 506:
                _a.sent();
                orderDetail274 = new OrderDetail({ order: order46._id, book: book47._id, quantity: 1 });
                return [4 /*yield*/, orderDetail274.save()];
            case 507:
                _a.sent();
                orderDetail275 = new OrderDetail({ order: order65._id, book: book42._id, quantity: 1 });
                return [4 /*yield*/, orderDetail275.save()];
            case 508:
                _a.sent();
                orderDetail276 = new OrderDetail({ order: order16._id, book: book14._id, quantity: 1 });
                return [4 /*yield*/, orderDetail276.save()];
            case 509:
                _a.sent();
                orderDetail277 = new OrderDetail({ order: order115._id, book: book41._id, quantity: 1 });
                return [4 /*yield*/, orderDetail277.save()];
            case 510:
                _a.sent();
                orderDetail278 = new OrderDetail({ order: order89._id, book: book4._id, quantity: 1 });
                return [4 /*yield*/, orderDetail278.save()];
            case 511:
                _a.sent();
                orderDetail279 = new OrderDetail({ order: order80._id, book: book43._id, quantity: 1 });
                return [4 /*yield*/, orderDetail279.save()];
            case 512:
                _a.sent();
                orderDetail280 = new OrderDetail({ order: order47._id, book: book32._id, quantity: 1 });
                return [4 /*yield*/, orderDetail280.save()];
            case 513:
                _a.sent();
                orderDetail281 = new OrderDetail({ order: order75._id, book: book32._id, quantity: 1 });
                return [4 /*yield*/, orderDetail281.save()];
            case 514:
                _a.sent();
                orderDetail282 = new OrderDetail({ order: order98._id, book: book26._id, quantity: 1 });
                return [4 /*yield*/, orderDetail282.save()];
            case 515:
                _a.sent();
                orderDetail283 = new OrderDetail({ order: order118._id, book: book20._id, quantity: 1 });
                return [4 /*yield*/, orderDetail283.save()];
            case 516:
                _a.sent();
                orderDetail284 = new OrderDetail({ order: order38._id, book: book25._id, quantity: 1 });
                return [4 /*yield*/, orderDetail284.save()];
            case 517:
                _a.sent();
                orderDetail285 = new OrderDetail({ order: order47._id, book: book3._id, quantity: 1 });
                return [4 /*yield*/, orderDetail285.save()];
            case 518:
                _a.sent();
                orderDetail286 = new OrderDetail({ order: order41._id, book: book49._id, quantity: 1 });
                return [4 /*yield*/, orderDetail286.save()];
            case 519:
                _a.sent();
                orderDetail287 = new OrderDetail({ order: order122._id, book: book22._id, quantity: 1 });
                return [4 /*yield*/, orderDetail287.save()];
            case 520:
                _a.sent();
                orderDetail288 = new OrderDetail({ order: order75._id, book: book10._id, quantity: 1 });
                return [4 /*yield*/, orderDetail288.save()];
            case 521:
                _a.sent();
                orderDetail289 = new OrderDetail({ order: order44._id, book: book32._id, quantity: 1 });
                return [4 /*yield*/, orderDetail289.save()];
            case 522:
                _a.sent();
                orderDetail290 = new OrderDetail({ order: order105._id, book: book4._id, quantity: 1 });
                return [4 /*yield*/, orderDetail290.save()];
            case 523:
                _a.sent();
                orderDetail291 = new OrderDetail({ order: order69._id, book: book7._id, quantity: 1 });
                return [4 /*yield*/, orderDetail291.save()];
            case 524:
                _a.sent();
                orderDetail292 = new OrderDetail({ order: order1._id, book: book2._id, quantity: 1 });
                return [4 /*yield*/, orderDetail292.save()];
            case 525:
                _a.sent();
                orderDetail293 = new OrderDetail({ order: order61._id, book: book37._id, quantity: 1 });
                return [4 /*yield*/, orderDetail293.save()];
            case 526:
                _a.sent();
                orderDetail294 = new OrderDetail({ order: order64._id, book: book4._id, quantity: 1 });
                return [4 /*yield*/, orderDetail294.save()];
            case 527:
                _a.sent();
                orderDetail295 = new OrderDetail({ order: order95._id, book: book13._id, quantity: 1 });
                return [4 /*yield*/, orderDetail295.save()];
            case 528:
                _a.sent();
                orderDetail296 = new OrderDetail({ order: order26._id, book: book7._id, quantity: 1 });
                return [4 /*yield*/, orderDetail296.save()];
            case 529:
                _a.sent();
                orderDetail297 = new OrderDetail({ order: order90._id, book: book7._id, quantity: 1 });
                return [4 /*yield*/, orderDetail297.save()];
            case 530:
                _a.sent();
                orderDetail298 = new OrderDetail({ order: order7._id, book: book31._id, quantity: 1 });
                return [4 /*yield*/, orderDetail298.save()];
            case 531:
                _a.sent();
                orderDetail299 = new OrderDetail({ order: order54._id, book: book6._id, quantity: 1 });
                return [4 /*yield*/, orderDetail299.save()];
            case 532:
                _a.sent();
                orderDetail300 = new OrderDetail({ order: order119._id, book: book39._id, quantity: 1 });
                return [4 /*yield*/, orderDetail300.save()];
            case 533:
                _a.sent();
                orderDetail301 = new OrderDetail({ order: order109._id, book: book43._id, quantity: 1 });
                return [4 /*yield*/, orderDetail301.save()];
            case 534:
                _a.sent();
                orderDetail302 = new OrderDetail({ order: order86._id, book: book20._id, quantity: 1 });
                return [4 /*yield*/, orderDetail302.save()];
            case 535:
                _a.sent();
                orderDetail303 = new OrderDetail({ order: order53._id, book: book14._id, quantity: 1 });
                return [4 /*yield*/, orderDetail303.save()];
            case 536:
                _a.sent();
                orderDetail304 = new OrderDetail({ order: order51._id, book: book12._id, quantity: 1 });
                return [4 /*yield*/, orderDetail304.save()];
            case 537:
                _a.sent();
                orderDetail305 = new OrderDetail({ order: order122._id, book: book45._id, quantity: 1 });
                return [4 /*yield*/, orderDetail305.save()];
            case 538:
                _a.sent();
                orderDetail306 = new OrderDetail({ order: order150._id, book: book41._id, quantity: 1 });
                return [4 /*yield*/, orderDetail306.save()];
            case 539:
                _a.sent();
                orderDetail307 = new OrderDetail({ order: order81._id, book: book45._id, quantity: 1 });
                return [4 /*yield*/, orderDetail307.save()];
            case 540:
                _a.sent();
                orderDetail308 = new OrderDetail({ order: order49._id, book: book37._id, quantity: 1 });
                return [4 /*yield*/, orderDetail308.save()];
            case 541:
                _a.sent();
                orderDetail309 = new OrderDetail({ order: order71._id, book: book34._id, quantity: 1 });
                return [4 /*yield*/, orderDetail309.save()];
            case 542:
                _a.sent();
                orderDetail310 = new OrderDetail({ order: order148._id, book: book29._id, quantity: 1 });
                return [4 /*yield*/, orderDetail310.save()];
            case 543:
                _a.sent();
                orderDetail311 = new OrderDetail({ order: order147._id, book: book24._id, quantity: 1 });
                return [4 /*yield*/, orderDetail311.save()];
            case 544:
                _a.sent();
                orderDetail312 = new OrderDetail({ order: order79._id, book: book24._id, quantity: 1 });
                return [4 /*yield*/, orderDetail312.save()];
            case 545:
                _a.sent();
                orderDetail313 = new OrderDetail({ order: order69._id, book: book36._id, quantity: 1 });
                return [4 /*yield*/, orderDetail313.save()];
            case 546:
                _a.sent();
                orderDetail314 = new OrderDetail({ order: order25._id, book: book24._id, quantity: 1 });
                return [4 /*yield*/, orderDetail314.save()];
            case 547:
                _a.sent();
                orderDetail315 = new OrderDetail({ order: order138._id, book: book27._id, quantity: 1 });
                return [4 /*yield*/, orderDetail315.save()];
            case 548:
                _a.sent();
                orderDetail316 = new OrderDetail({ order: order86._id, book: book1._id, quantity: 1 });
                return [4 /*yield*/, orderDetail316.save()];
            case 549:
                _a.sent();
                orderDetail317 = new OrderDetail({ order: order89._id, book: book37._id, quantity: 1 });
                return [4 /*yield*/, orderDetail317.save()];
            case 550:
                _a.sent();
                orderDetail318 = new OrderDetail({ order: order19._id, book: book30._id, quantity: 1 });
                return [4 /*yield*/, orderDetail318.save()];
            case 551:
                _a.sent();
                orderDetail319 = new OrderDetail({ order: order95._id, book: book5._id, quantity: 1 });
                return [4 /*yield*/, orderDetail319.save()];
            case 552:
                _a.sent();
                orderDetail320 = new OrderDetail({ order: order25._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail320.save()];
            case 553:
                _a.sent();
                orderDetail321 = new OrderDetail({ order: order109._id, book: book7._id, quantity: 1 });
                return [4 /*yield*/, orderDetail321.save()];
            case 554:
                _a.sent();
                orderDetail322 = new OrderDetail({ order: order108._id, book: book12._id, quantity: 1 });
                return [4 /*yield*/, orderDetail322.save()];
            case 555:
                _a.sent();
                orderDetail323 = new OrderDetail({ order: order27._id, book: book41._id, quantity: 1 });
                return [4 /*yield*/, orderDetail323.save()];
            case 556:
                _a.sent();
                orderDetail324 = new OrderDetail({ order: order21._id, book: book48._id, quantity: 1 });
                return [4 /*yield*/, orderDetail324.save()];
            case 557:
                _a.sent();
                orderDetail325 = new OrderDetail({ order: order81._id, book: book20._id, quantity: 1 });
                return [4 /*yield*/, orderDetail325.save()];
            case 558:
                _a.sent();
                orderDetail326 = new OrderDetail({ order: order7._id, book: book29._id, quantity: 1 });
                return [4 /*yield*/, orderDetail326.save()];
            case 559:
                _a.sent();
                orderDetail327 = new OrderDetail({ order: order33._id, book: book9._id, quantity: 1 });
                return [4 /*yield*/, orderDetail327.save()];
            case 560:
                _a.sent();
                orderDetail328 = new OrderDetail({ order: order63._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail328.save()];
            case 561:
                _a.sent();
                orderDetail329 = new OrderDetail({ order: order94._id, book: book12._id, quantity: 1 });
                return [4 /*yield*/, orderDetail329.save()];
            case 562:
                _a.sent();
                orderDetail330 = new OrderDetail({ order: order129._id, book: book4._id, quantity: 1 });
                return [4 /*yield*/, orderDetail330.save()];
            case 563:
                _a.sent();
                orderDetail331 = new OrderDetail({ order: order64._id, book: book8._id, quantity: 1 });
                return [4 /*yield*/, orderDetail331.save()];
            case 564:
                _a.sent();
                orderDetail332 = new OrderDetail({ order: order148._id, book: book32._id, quantity: 1 });
                return [4 /*yield*/, orderDetail332.save()];
            case 565:
                _a.sent();
                orderDetail333 = new OrderDetail({ order: order48._id, book: book37._id, quantity: 1 });
                return [4 /*yield*/, orderDetail333.save()];
            case 566:
                _a.sent();
                orderDetail334 = new OrderDetail({ order: order53._id, book: book49._id, quantity: 1 });
                return [4 /*yield*/, orderDetail334.save()];
            case 567:
                _a.sent();
                orderDetail335 = new OrderDetail({ order: order28._id, book: book37._id, quantity: 1 });
                return [4 /*yield*/, orderDetail335.save()];
            case 568:
                _a.sent();
                orderDetail336 = new OrderDetail({ order: order81._id, book: book23._id, quantity: 1 });
                return [4 /*yield*/, orderDetail336.save()];
            case 569:
                _a.sent();
                orderDetail337 = new OrderDetail({ order: order100._id, book: book32._id, quantity: 1 });
                return [4 /*yield*/, orderDetail337.save()];
            case 570:
                _a.sent();
                orderDetail338 = new OrderDetail({ order: order34._id, book: book18._id, quantity: 1 });
                return [4 /*yield*/, orderDetail338.save()];
            case 571:
                _a.sent();
                orderDetail339 = new OrderDetail({ order: order120._id, book: book4._id, quantity: 1 });
                return [4 /*yield*/, orderDetail339.save()];
            case 572:
                _a.sent();
                orderDetail340 = new OrderDetail({ order: order31._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail340.save()];
            case 573:
                _a.sent();
                orderDetail341 = new OrderDetail({ order: order122._id, book: book15._id, quantity: 1 });
                return [4 /*yield*/, orderDetail341.save()];
            case 574:
                _a.sent();
                orderDetail342 = new OrderDetail({ order: order103._id, book: book41._id, quantity: 1 });
                return [4 /*yield*/, orderDetail342.save()];
            case 575:
                _a.sent();
                orderDetail343 = new OrderDetail({ order: order74._id, book: book43._id, quantity: 1 });
                return [4 /*yield*/, orderDetail343.save()];
            case 576:
                _a.sent();
                orderDetail344 = new OrderDetail({ order: order96._id, book: book30._id, quantity: 1 });
                return [4 /*yield*/, orderDetail344.save()];
            case 577:
                _a.sent();
                orderDetail345 = new OrderDetail({ order: order31._id, book: book10._id, quantity: 1 });
                return [4 /*yield*/, orderDetail345.save()];
            case 578:
                _a.sent();
                orderDetail346 = new OrderDetail({ order: order85._id, book: book42._id, quantity: 1 });
                return [4 /*yield*/, orderDetail346.save()];
            case 579:
                _a.sent();
                orderDetail347 = new OrderDetail({ order: order28._id, book: book13._id, quantity: 1 });
                return [4 /*yield*/, orderDetail347.save()];
            case 580:
                _a.sent();
                orderDetail348 = new OrderDetail({ order: order53._id, book: book39._id, quantity: 1 });
                return [4 /*yield*/, orderDetail348.save()];
            case 581:
                _a.sent();
                orderDetail349 = new OrderDetail({ order: order125._id, book: book45._id, quantity: 1 });
                return [4 /*yield*/, orderDetail349.save()];
            case 582:
                _a.sent();
                orderDetail350 = new OrderDetail({ order: order11._id, book: book20._id, quantity: 1 });
                return [4 /*yield*/, orderDetail350.save()];
            case 583:
                _a.sent();
                orderDetail351 = new OrderDetail({ order: order26._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail351.save()];
            case 584:
                _a.sent();
                orderDetail352 = new OrderDetail({ order: order46._id, book: book4._id, quantity: 1 });
                return [4 /*yield*/, orderDetail352.save()];
            case 585:
                _a.sent();
                orderDetail353 = new OrderDetail({ order: order8._id, book: book19._id, quantity: 1 });
                return [4 /*yield*/, orderDetail353.save()];
            case 586:
                _a.sent();
                orderDetail354 = new OrderDetail({ order: order120._id, book: book15._id, quantity: 1 });
                return [4 /*yield*/, orderDetail354.save()];
            case 587:
                _a.sent();
                orderDetail355 = new OrderDetail({ order: order74._id, book: book3._id, quantity: 1 });
                return [4 /*yield*/, orderDetail355.save()];
            case 588:
                _a.sent();
                orderDetail356 = new OrderDetail({ order: order27._id, book: book18._id, quantity: 1 });
                return [4 /*yield*/, orderDetail356.save()];
            case 589:
                _a.sent();
                orderDetail357 = new OrderDetail({ order: order55._id, book: book33._id, quantity: 1 });
                return [4 /*yield*/, orderDetail357.save()];
            case 590:
                _a.sent();
                orderDetail358 = new OrderDetail({ order: order62._id, book: book26._id, quantity: 1 });
                return [4 /*yield*/, orderDetail358.save()];
            case 591:
                _a.sent();
                orderDetail359 = new OrderDetail({ order: order13._id, book: book13._id, quantity: 1 });
                return [4 /*yield*/, orderDetail359.save()];
            case 592:
                _a.sent();
                orderDetail360 = new OrderDetail({ order: order46._id, book: book8._id, quantity: 1 });
                return [4 /*yield*/, orderDetail360.save()];
            case 593:
                _a.sent();
                orderDetail361 = new OrderDetail({ order: order125._id, book: book16._id, quantity: 1 });
                return [4 /*yield*/, orderDetail361.save()];
            case 594:
                _a.sent();
                orderDetail362 = new OrderDetail({ order: order31._id, book: book8._id, quantity: 1 });
                return [4 /*yield*/, orderDetail362.save()];
            case 595:
                _a.sent();
                orderDetail363 = new OrderDetail({ order: order62._id, book: book21._id, quantity: 1 });
                return [4 /*yield*/, orderDetail363.save()];
            case 596:
                _a.sent();
                orderDetail364 = new OrderDetail({ order: order22._id, book: book35._id, quantity: 1 });
                return [4 /*yield*/, orderDetail364.save()];
            case 597:
                _a.sent();
                orderDetail365 = new OrderDetail({ order: order129._id, book: book48._id, quantity: 1 });
                return [4 /*yield*/, orderDetail365.save()];
            case 598:
                _a.sent();
                orderDetail366 = new OrderDetail({ order: order7._id, book: book18._id, quantity: 1 });
                return [4 /*yield*/, orderDetail366.save()];
            case 599:
                _a.sent();
                orderDetail367 = new OrderDetail({ order: order127._id, book: book33._id, quantity: 1 });
                return [4 /*yield*/, orderDetail367.save()];
            case 600:
                _a.sent();
                orderDetail368 = new OrderDetail({ order: order96._id, book: book32._id, quantity: 1 });
                return [4 /*yield*/, orderDetail368.save()];
            case 601:
                _a.sent();
                orderDetail369 = new OrderDetail({ order: order34._id, book: book2._id, quantity: 1 });
                return [4 /*yield*/, orderDetail369.save()];
            case 602:
                _a.sent();
                orderDetail370 = new OrderDetail({ order: order82._id, book: book8._id, quantity: 1 });
                return [4 /*yield*/, orderDetail370.save()];
            case 603:
                _a.sent();
                orderDetail371 = new OrderDetail({ order: order71._id, book: book25._id, quantity: 1 });
                return [4 /*yield*/, orderDetail371.save()];
            case 604:
                _a.sent();
                orderDetail372 = new OrderDetail({ order: order128._id, book: book33._id, quantity: 1 });
                return [4 /*yield*/, orderDetail372.save()];
            case 605:
                _a.sent();
                orderDetail373 = new OrderDetail({ order: order98._id, book: book47._id, quantity: 1 });
                return [4 /*yield*/, orderDetail373.save()];
            case 606:
                _a.sent();
                orderDetail374 = new OrderDetail({ order: order32._id, book: book32._id, quantity: 1 });
                return [4 /*yield*/, orderDetail374.save()];
            case 607:
                _a.sent();
                orderDetail375 = new OrderDetail({ order: order131._id, book: book40._id, quantity: 1 });
                return [4 /*yield*/, orderDetail375.save()];
            case 608:
                _a.sent();
                orderDetail376 = new OrderDetail({ order: order64._id, book: book40._id, quantity: 1 });
                return [4 /*yield*/, orderDetail376.save()];
            case 609:
                _a.sent();
                orderDetail377 = new OrderDetail({ order: order20._id, book: book43._id, quantity: 1 });
                return [4 /*yield*/, orderDetail377.save()];
            case 610:
                _a.sent();
                orderDetail378 = new OrderDetail({ order: order28._id, book: book36._id, quantity: 1 });
                return [4 /*yield*/, orderDetail378.save()];
            case 611:
                _a.sent();
                orderDetail379 = new OrderDetail({ order: order112._id, book: book14._id, quantity: 1 });
                return [4 /*yield*/, orderDetail379.save()];
            case 612:
                _a.sent();
                orderDetail380 = new OrderDetail({ order: order44._id, book: book11._id, quantity: 1 });
                return [4 /*yield*/, orderDetail380.save()];
            case 613:
                _a.sent();
                orderDetail381 = new OrderDetail({ order: order120._id, book: book30._id, quantity: 1 });
                return [4 /*yield*/, orderDetail381.save()];
            case 614:
                _a.sent();
                orderDetail382 = new OrderDetail({ order: order103._id, book: book26._id, quantity: 1 });
                return [4 /*yield*/, orderDetail382.save()];
            case 615:
                _a.sent();
                orderDetail383 = new OrderDetail({ order: order23._id, book: book32._id, quantity: 1 });
                return [4 /*yield*/, orderDetail383.save()];
            case 616:
                _a.sent();
                orderDetail384 = new OrderDetail({ order: order58._id, book: book24._id, quantity: 1 });
                return [4 /*yield*/, orderDetail384.save()];
            case 617:
                _a.sent();
                orderDetail385 = new OrderDetail({ order: order44._id, book: book33._id, quantity: 1 });
                return [4 /*yield*/, orderDetail385.save()];
            case 618:
                _a.sent();
                orderDetail386 = new OrderDetail({ order: order94._id, book: book46._id, quantity: 1 });
                return [4 /*yield*/, orderDetail386.save()];
            case 619:
                _a.sent();
                orderDetail387 = new OrderDetail({ order: order113._id, book: book9._id, quantity: 1 });
                return [4 /*yield*/, orderDetail387.save()];
            case 620:
                _a.sent();
                orderDetail388 = new OrderDetail({ order: order104._id, book: book43._id, quantity: 1 });
                return [4 /*yield*/, orderDetail388.save()];
            case 621:
                _a.sent();
                orderDetail389 = new OrderDetail({ order: order131._id, book: book49._id, quantity: 1 });
                return [4 /*yield*/, orderDetail389.save()];
            case 622:
                _a.sent();
                orderDetail390 = new OrderDetail({ order: order11._id, book: book16._id, quantity: 1 });
                return [4 /*yield*/, orderDetail390.save()];
            case 623:
                _a.sent();
                orderDetail391 = new OrderDetail({ order: order23._id, book: book6._id, quantity: 1 });
                return [4 /*yield*/, orderDetail391.save()];
            case 624:
                _a.sent();
                orderDetail392 = new OrderDetail({ order: order12._id, book: book14._id, quantity: 1 });
                return [4 /*yield*/, orderDetail392.save()];
            case 625:
                _a.sent();
                orderDetail393 = new OrderDetail({ order: order5._id, book: book28._id, quantity: 1 });
                return [4 /*yield*/, orderDetail393.save()];
            case 626:
                _a.sent();
                orderDetail394 = new OrderDetail({ order: order146._id, book: book49._id, quantity: 1 });
                return [4 /*yield*/, orderDetail394.save()];
            case 627:
                _a.sent();
                orderDetail395 = new OrderDetail({ order: order29._id, book: book17._id, quantity: 1 });
                return [4 /*yield*/, orderDetail395.save()];
            case 628:
                _a.sent();
                orderDetail396 = new OrderDetail({ order: order19._id, book: book5._id, quantity: 1 });
                return [4 /*yield*/, orderDetail396.save()];
            case 629:
                _a.sent();
                orderDetail397 = new OrderDetail({ order: order95._id, book: book32._id, quantity: 1 });
                return [4 /*yield*/, orderDetail397.save()];
            case 630:
                _a.sent();
                orderDetail398 = new OrderDetail({ order: order68._id, book: book8._id, quantity: 1 });
                return [4 /*yield*/, orderDetail398.save()];
            case 631:
                _a.sent();
                orderDetail399 = new OrderDetail({ order: order137._id, book: book36._id, quantity: 1 });
                return [4 /*yield*/, orderDetail399.save()];
            case 632:
                _a.sent();
                orderDetail400 = new OrderDetail({ order: order9._id, book: book2._id, quantity: 1 });
                return [4 /*yield*/, orderDetail400.save()];
            case 633:
                _a.sent();
                orderDetail401 = new OrderDetail({ order: order11._id, book: book4._id, quantity: 1 });
                return [4 /*yield*/, orderDetail401.save()];
            case 634:
                _a.sent();
                orderDetail402 = new OrderDetail({ order: order40._id, book: book40._id, quantity: 1 });
                return [4 /*yield*/, orderDetail402.save()];
            case 635:
                _a.sent();
                orderDetail403 = new OrderDetail({ order: order90._id, book: book49._id, quantity: 1 });
                return [4 /*yield*/, orderDetail403.save()];
            case 636:
                _a.sent();
                orderDetail404 = new OrderDetail({ order: order51._id, book: book9._id, quantity: 1 });
                return [4 /*yield*/, orderDetail404.save()];
            case 637:
                _a.sent();
                orderDetail405 = new OrderDetail({ order: order78._id, book: book24._id, quantity: 1 });
                return [4 /*yield*/, orderDetail405.save()];
            case 638:
                _a.sent();
                orderDetail406 = new OrderDetail({ order: order58._id, book: book4._id, quantity: 1 });
                return [4 /*yield*/, orderDetail406.save()];
            case 639:
                _a.sent();
                orderDetail407 = new OrderDetail({ order: order49._id, book: book30._id, quantity: 1 });
                return [4 /*yield*/, orderDetail407.save()];
            case 640:
                _a.sent();
                orderDetail408 = new OrderDetail({ order: order78._id, book: book19._id, quantity: 1 });
                return [4 /*yield*/, orderDetail408.save()];
            case 641:
                _a.sent();
                orderDetail409 = new OrderDetail({ order: order82._id, book: book12._id, quantity: 1 });
                return [4 /*yield*/, orderDetail409.save()];
            case 642:
                _a.sent();
                orderDetail410 = new OrderDetail({ order: order104._id, book: book35._id, quantity: 1 });
                return [4 /*yield*/, orderDetail410.save()];
            case 643:
                _a.sent();
                orderDetail411 = new OrderDetail({ order: order22._id, book: book14._id, quantity: 1 });
                return [4 /*yield*/, orderDetail411.save()];
            case 644:
                _a.sent();
                orderDetail412 = new OrderDetail({ order: order67._id, book: book46._id, quantity: 1 });
                return [4 /*yield*/, orderDetail412.save()];
            case 645:
                _a.sent();
                orderDetail413 = new OrderDetail({ order: order51._id, book: book43._id, quantity: 1 });
                return [4 /*yield*/, orderDetail413.save()];
            case 646:
                _a.sent();
                orderDetail414 = new OrderDetail({ order: order69._id, book: book11._id, quantity: 1 });
                return [4 /*yield*/, orderDetail414.save()];
            case 647:
                _a.sent();
                orderDetail415 = new OrderDetail({ order: order14._id, book: book23._id, quantity: 1 });
                return [4 /*yield*/, orderDetail415.save()];
            case 648:
                _a.sent();
                orderDetail416 = new OrderDetail({ order: order33._id, book: book30._id, quantity: 1 });
                return [4 /*yield*/, orderDetail416.save()];
            case 649:
                _a.sent();
                orderDetail417 = new OrderDetail({ order: order117._id, book: book25._id, quantity: 1 });
                return [4 /*yield*/, orderDetail417.save()];
            case 650:
                _a.sent();
                orderDetail418 = new OrderDetail({ order: order15._id, book: book40._id, quantity: 1 });
                return [4 /*yield*/, orderDetail418.save()];
            case 651:
                _a.sent();
                orderDetail419 = new OrderDetail({ order: order17._id, book: book22._id, quantity: 1 });
                return [4 /*yield*/, orderDetail419.save()];
            case 652:
                _a.sent();
                orderDetail420 = new OrderDetail({ order: order57._id, book: book6._id, quantity: 1 });
                return [4 /*yield*/, orderDetail420.save()];
            case 653:
                _a.sent();
                orderDetail421 = new OrderDetail({ order: order116._id, book: book7._id, quantity: 1 });
                return [4 /*yield*/, orderDetail421.save()];
            case 654:
                _a.sent();
                orderDetail422 = new OrderDetail({ order: order129._id, book: book2._id, quantity: 1 });
                return [4 /*yield*/, orderDetail422.save()];
            case 655:
                _a.sent();
                orderDetail423 = new OrderDetail({ order: order134._id, book: book6._id, quantity: 1 });
                return [4 /*yield*/, orderDetail423.save()];
            case 656:
                _a.sent();
                orderDetail424 = new OrderDetail({ order: order117._id, book: book23._id, quantity: 1 });
                return [4 /*yield*/, orderDetail424.save()];
            case 657:
                _a.sent();
                orderDetail425 = new OrderDetail({ order: order59._id, book: book50._id, quantity: 1 });
                return [4 /*yield*/, orderDetail425.save()];
            case 658:
                _a.sent();
                orderDetail426 = new OrderDetail({ order: order51._id, book: book22._id, quantity: 1 });
                return [4 /*yield*/, orderDetail426.save()];
            case 659:
                _a.sent();
                orderDetail427 = new OrderDetail({ order: order115._id, book: book2._id, quantity: 1 });
                return [4 /*yield*/, orderDetail427.save()];
            case 660:
                _a.sent();
                orderDetail428 = new OrderDetail({ order: order37._id, book: book25._id, quantity: 1 });
                return [4 /*yield*/, orderDetail428.save()];
            case 661:
                _a.sent();
                orderDetail429 = new OrderDetail({ order: order54._id, book: book31._id, quantity: 1 });
                return [4 /*yield*/, orderDetail429.save()];
            case 662:
                _a.sent();
                orderDetail430 = new OrderDetail({ order: order112._id, book: book43._id, quantity: 1 });
                return [4 /*yield*/, orderDetail430.save()];
            case 663:
                _a.sent();
                orderDetail431 = new OrderDetail({ order: order105._id, book: book40._id, quantity: 1 });
                return [4 /*yield*/, orderDetail431.save()];
            case 664:
                _a.sent();
                orderDetail432 = new OrderDetail({ order: order74._id, book: book38._id, quantity: 1 });
                return [4 /*yield*/, orderDetail432.save()];
            case 665:
                _a.sent();
                orderDetail433 = new OrderDetail({ order: order118._id, book: book38._id, quantity: 1 });
                return [4 /*yield*/, orderDetail433.save()];
            case 666:
                _a.sent();
                orderDetail434 = new OrderDetail({ order: order53._id, book: book30._id, quantity: 1 });
                return [4 /*yield*/, orderDetail434.save()];
            case 667:
                _a.sent();
                orderDetail435 = new OrderDetail({ order: order94._id, book: book34._id, quantity: 1 });
                return [4 /*yield*/, orderDetail435.save()];
            case 668:
                _a.sent();
                orderDetail436 = new OrderDetail({ order: order12._id, book: book9._id, quantity: 1 });
                return [4 /*yield*/, orderDetail436.save()];
            case 669:
                _a.sent();
                orderDetail437 = new OrderDetail({ order: order29._id, book: book2._id, quantity: 1 });
                return [4 /*yield*/, orderDetail437.save()];
            case 670:
                _a.sent();
                orderDetail438 = new OrderDetail({ order: order46._id, book: book44._id, quantity: 1 });
                return [4 /*yield*/, orderDetail438.save()];
            case 671:
                _a.sent();
                orderDetail439 = new OrderDetail({ order: order52._id, book: book30._id, quantity: 1 });
                return [4 /*yield*/, orderDetail439.save()];
            case 672:
                _a.sent();
                orderDetail440 = new OrderDetail({ order: order50._id, book: book12._id, quantity: 1 });
                return [4 /*yield*/, orderDetail440.save()];
            case 673:
                _a.sent();
                orderDetail441 = new OrderDetail({ order: order13._id, book: book43._id, quantity: 1 });
                return [4 /*yield*/, orderDetail441.save()];
            case 674:
                _a.sent();
                orderDetail442 = new OrderDetail({ order: order6._id, book: book7._id, quantity: 1 });
                return [4 /*yield*/, orderDetail442.save()];
            case 675:
                _a.sent();
                orderDetail443 = new OrderDetail({ order: order65._id, book: book28._id, quantity: 1 });
                return [4 /*yield*/, orderDetail443.save()];
            case 676:
                _a.sent();
                orderDetail444 = new OrderDetail({ order: order80._id, book: book1._id, quantity: 1 });
                return [4 /*yield*/, orderDetail444.save()];
            case 677:
                _a.sent();
                orderDetail445 = new OrderDetail({ order: order87._id, book: book11._id, quantity: 1 });
                return [4 /*yield*/, orderDetail445.save()];
            case 678:
                _a.sent();
                orderDetail446 = new OrderDetail({ order: order117._id, book: book45._id, quantity: 1 });
                return [4 /*yield*/, orderDetail446.save()];
            case 679:
                _a.sent();
                orderDetail447 = new OrderDetail({ order: order111._id, book: book33._id, quantity: 1 });
                return [4 /*yield*/, orderDetail447.save()];
            case 680:
                _a.sent();
                orderDetail448 = new OrderDetail({ order: order133._id, book: book37._id, quantity: 1 });
                return [4 /*yield*/, orderDetail448.save()];
            case 681:
                _a.sent();
                orderDetail449 = new OrderDetail({ order: order16._id, book: book25._id, quantity: 1 });
                return [4 /*yield*/, orderDetail449.save()];
            case 682:
                _a.sent();
                orderDetail450 = new OrderDetail({ order: order47._id, book: book30._id, quantity: 1 });
                return [4 /*yield*/, orderDetail450.save()];
            case 683:
                _a.sent();
                orderDetail451 = new OrderDetail({ order: order38._id, book: book40._id, quantity: 1 });
                return [4 /*yield*/, orderDetail451.save()];
            case 684:
                _a.sent();
                orderDetail452 = new OrderDetail({ order: order74._id, book: book5._id, quantity: 1 });
                return [4 /*yield*/, orderDetail452.save()];
            case 685:
                _a.sent();
                orderDetail453 = new OrderDetail({ order: order24._id, book: book44._id, quantity: 1 });
                return [4 /*yield*/, orderDetail453.save()];
            case 686:
                _a.sent();
                orderDetail454 = new OrderDetail({ order: order140._id, book: book47._id, quantity: 1 });
                return [4 /*yield*/, orderDetail454.save()];
            case 687:
                _a.sent();
                console.log('Done');
                return [2 /*return*/];
        }
    });
}); };
main();
