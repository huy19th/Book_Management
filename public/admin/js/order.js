const ordersByYear = () => {
    axios.get('/admin/orders/thisyear')
        .then(res => {
            let data = res.data;
            document.getElementById('totalOrders').innerHTML = (data.length === 0) ? 0 : data[0].total;
        })
}

const ordersByMonth = () => {
    axios.get('/admin/orders/thismonth')
        .then(res => {
            let data = res.data;
            document.getElementById('totalOrders').innerHTML = (data.length === 0) ? 0 : data[0].total;
        })
}

const todayOrders = () => {
    axios.get('/admin/orders/today')
        .then(res => {
            let data = res.data;
            document.getElementById('totalOrders').innerHTML = (data.length === 0) ? 0 : data[0].total;
        })
}