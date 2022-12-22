const searchProduct = async (value) => {
    console.log(1)
    await axios.get('/user/search', {
        params: {
            keyword: value
        }
    }).then(res => {
        let products = res.data;
        let html = '';
        products.forEach((item, index) => {
            html += '<div class="col-sm-4">';
            html += `<div class="product-image-wrapper">`;
            html += `<div class="single-products">`;
            html += `<div class="productinfo text-center">`;
            // html += `<img src="/user/images/shop/${ item.image }" alt="" width="241" height="224" style="object-fit: contain"/>`
            html += `<h2>${item.price}</h2>`;
            html += `<p>${item.name}</p>`;
            html += `<p><a href="/user/productDetail/:id">Click for more detail</a></p>`;
            html += `<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>`;
            html += ` </div>`
            html += ` </div>`
            html += ` </div>`
            html += ` </div>`
        })
        document.getElementById('list-products').innerHTML = html;
    })
}