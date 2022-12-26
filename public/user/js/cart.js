const addToCart = async (bookID) => {
    await axios.post('/user/addToCart', {
            bookID: bookID
    }).finally(res => {
        window.location.href = '/user/getCart';
        }
    )
}


const minusFromCart = async (bookID,quantity) => {
    await axios.post('/user/addToCart', {
        bookID: bookID,
        quantity: quantity || -1
    }).finally(res => {
            window.location.href = '/user/getCart';
        }
    )
}