const searchBook = (value) => {
    let keyword = document.getElementById('searchByKeyword').value;
    let category = document.getElementById('searchByCategory').value;
    let price = document.getElementById('searchByPrice').value;
    let page = (!value) ? 1 : value
    axios.get('/admin/book/search/filter', {
        params: {
            keyword: keyword,
            category: category,
            price: price,
            page: page
        }
    }).then(res => {
        let data = res.data;
        console.log(data.sum)
        if (data.sum !== 0) {
            let html = '';
            let pag = ''
            data.books.forEach((book, index) => {
                html += '<tr>'
                html += `<td>${index+1}</td>`
                html += `<td>${book.name}</td>`
                html += `<td>${book.author.name}</td>`
                html += `<td>${book.publisher.name}</td>`
                html += `<td>${book.price}</td>`
                html += `<td></td>`
                html += '</tr>'
            })
            pag += '<nav aria-label="Page navigation example">';
            pag += '<ul class="pagination">';
            pag += `<li class='${+data.page-1===0 ? "page-item disabled" : "page-item"}'><button class="page-link" type="button"
                                                                                              onclick="searchBook(${+data.page}-1)">Previous</button>
        </li>`
            data.way.forEach(i => {
                pag += `<li class='${i === +data.page ? "page-item active" : "page-item"}'
            ><button class="page-link" type="button" onclick="searchBook(${i})">
                ${i}</button></li>`
            })
            pag += `<li class='${+data.page === data.end ? "page-item disabled" : "page-item"}'><button class="page-link" type="button" onclick="searchBook(${+data.page}+1)">Next</button>
        </li>`
            pag += '</ul>';
            pag += '</nav>';
            document.getElementById('tableBody').innerHTML = html;
            document.getElementById('pagination').innerHTML = pag
        } else {
            document.getElementById('tableBody').innerHTML = '';
            document.getElementById('pagination').innerHTML = '';
        }
    })
}

// <a className="page-link"
//    href="/admin/book/search/filter/${+data.page-1}">Previous</a>

// <a className="page-link" href="/admin/book/search/filter/${i}">
//     ${i}</a>

// <a className="page-link"
//    href="/admin/book/search/filter/${+data.page+1}">Next</a>