const reveneuByYear = () => {
    axios.get('/admin/reveneu/thisyear')
        .then(res => {
            let data = res.data;
            document.getElementById('totalReveneu').innerHTML = (data.length === 0) ? 0 : data[0].total;
            document.getElementById('reveneu').innerHTML = '| This Year'
        })
}

const reveneuByMonth = () => {
    axios.get('/admin/reveneu/thismonth')
        .then(res => {
            let data = res.data;
            document.getElementById('totalReveneu').innerHTML = (data.length === 0) ? 0 : data[0].total;
            document.getElementById('reveneu').innerHTML = '| This Month'
        })
}

const todayReveneu = () => {
    axios.get('/admin/reveneu/today')
        .then(res => {
            let data = res.data;
            document.getElementById('totalReveneu').innerHTML = (data.length === 0) ? 0 : data[0].total;
            document.getElementById('reveneu').innerHTML = '| Today'
        })
}