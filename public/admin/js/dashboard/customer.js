const customersByYear = () => {
    axios.get('/admin/customers/thisyear')
        .then(res => {
            let data = res.data;
            document.getElementById('totalCustomers').innerHTML = (data.length === 0) ? 0 : data.dataCurrent;
            document.getElementById('customersChange').innerHTML = (data.number) ? `${data.number}%` : ''
            document.getElementById('customers').innerHTML = '| This Year';
            document.getElementById('messageCustomers').innerHTML = `${data.message}`
        })
}

const customersByMonth = () => {
    axios.get('/admin/customers/thismonth')
        .then(res => {
            let data = res.data;
            document.getElementById('totalCustomers').innerHTML = (data.length === 0) ? 0 : data.dataCurrent;
            document.getElementById('customersChange').innerHTML = (data.number) ? `${data.number}%` : ''
            document.getElementById('customers').innerHTML = '| This Month';
            document.getElementById('messageCustomers').innerHTML = `${data.message}`
        })
}

const todayCustomers = () => {
    axios.get('/admin/customers/today')
        .then(res => {
            let data = res.data;
            document.getElementById('totalCustomers').innerHTML = (data.length === 0) ? 0 : data.dataCurrent;
            document.getElementById('customersChange').innerHTML = (data.number) ? `${data.number}%` : ''
            document.getElementById('customers').innerHTML = '| Today';
            document.getElementById('messageCustomers').innerHTML = `${data.message}`
        })
}