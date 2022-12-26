const ordersByYear = () => {
    axios.get('/admin/orders/thisyear')
        .then(res => {
            let data = res.data;
            document.getElementById('totalOrders').innerHTML = (data.length === 0) ? 0 : data.dataCurrent;
            document.getElementById('numberChange').innerHTML = (data.number) ? `${data.number}%` : ''
            document.getElementById('orders').innerHTML = '| This Year';
            document.getElementById('message').innerHTML = `${data.message}`
        })
}

const ordersByMonth = () => {
    axios.get('/admin/orders/thismonth')
        .then(res => {
            let data = res.data;
            document.getElementById('totalOrders').innerHTML = (data.length === 0) ? 0 : data.dataCurrent;
            document.getElementById('numberChange').innerHTML = (data.number) ? `${data.number}%` : ''
            document.getElementById('orders').innerHTML = '| This Year';
            document.getElementById('message').innerHTML = `${data.message}`
        })
}

const todayOrders = () => {
    axios.get('/admin/orders/today')
        .then(res => {
            let data = res.data;
            document.getElementById('totalOrders').innerHTML = (data.length === 0) ? 0 : data[0].total;
            document.getElementById('orders').innerHTML = '| Today'
        })
}