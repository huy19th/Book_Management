const customersByYear = () => {
    axios.get('/admin/customers/thisyear')
        .then(res => {
            let data = res.data;
            document.getElementById('totalCustomers').innerHTML = (data.length === 0) ? 0 : data[0].total;
            document.getElementById('customers').innerHTML = '| This Year'
        })
}

const customersByMonth = () => {
    axios.get('/admin/customers/thismonth')
        .then(res => {
            let data = res.data;
            document.getElementById('totalCustomers').innerHTML = (data.length === 0) ? 0 : data[0].total;
            document.getElementById('customers').innerHTML = '| This Month'
        })
}

const todayCustomers = () => {
    axios.get('/admin/customers/today')
        .then(res => {
            let data = res.data;
            document.getElementById('totalCustomers').innerHTML = (data.length === 0) ? 0 : data[0].total;
            document.getElementById('customers').innerHTML = '| Today'
        })
}