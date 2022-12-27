const showOrdersFunction = (value) => {
    let email = document.getElementById('searchByUser').value;
    let date = document.getElementById('searchByDate').value;
    let page = (!value) ? 1 : value
    axios.get('/admin/order/search/filter', {
        params: {
            email: email,
            date: date,
            page: page
        }
    }).then(res => {
        let data = res.data;
        if (data.sum !== 0) {
            let html = '';
            let pag = ''
            data.orders.forEach((order) => {
                html += '<tr>'
                html += `<td>${order._id}</td>`
                html += `<td>${order.email}</td>`
                html += `<td>${order.order_Date}</td>`
                html += `<td>${order.deliver_Date}</td>`
                html += `<td>${order.totalMoney}</td>`
                html += `<td></td>`
                html += '</tr>'
            })
            pag += '<nav aria-label="Page navigation example">';
            pag += '<ul class="pagination">';
            pag += `<li class='${+data.page-1===0 ? "page-item disabled" : "page-item"}'><button class="page-link" type="button"
                                                                                              onclick="showOrdersFunction(${+data.page}-1)">Previous</button>
        </li>`
            data.way.forEach(i => {
                pag += `<li class='${i === +data.page ? "page-item active" : "page-item"}'
            ><button class="page-link" type="button" onclick="showOrdersFunction(${i})">
                ${i}</button></li>`
            })
            pag += `<li class='${+data.page === data.end ? "page-item disabled" : "page-item"}'><button class="page-link" type="button" onclick="showOrdersFunction(${+data.page}+1)">Next</button>
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