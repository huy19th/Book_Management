const reveneuByYear = () => {
    axios.get('/admin/reveneu/thisyear')
        .then(res => {
            let data = res.data;
            document.getElementById('totalReveneu').innerHTML = (data.length === 0) ? 0 : data.dataCurrent;
            document.getElementById('reveneuChange').innerHTML = (data.number) ? `${data.number}%` : ''
            document.getElementById('reveneu').innerHTML = '| This Year';
            document.getElementById('messageReveneu').innerHTML = `${data.message}`
        })
}

const reveneuByMonth = () => {
    axios.get('/admin/reveneu/thismonth')
        .then(res => {
            let data = res.data;
            document.getElementById('totalReveneu').innerHTML = (data.length === 0) ? 0 : data.dataCurrent;
            document.getElementById('reveneuChange').innerHTML = (data.number) ? `${data.number}%` : ''
            document.getElementById('reveneu').innerHTML = '| This Month';
            document.getElementById('messageReveneu').innerHTML = `${data.message}`
        })
}

const todayReveneu = () => {
    axios.get('/admin/reveneu/today')
        .then(res => {
            let data = res.data;
            document.getElementById('totalReveneu').innerHTML = (data.length === 0) ? 0 : data.dataCurrent;
            document.getElementById('reveneuChange').innerHTML = (data.number) ? `${data.number}%` : ''
            document.getElementById('reveneu').innerHTML = '| Today';
            document.getElementById('messageReveneu').innerHTML = `${data.message}`
        })
}