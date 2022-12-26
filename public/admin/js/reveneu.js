const reveneuByYear = () => {
    axios.get('/admin/reveneu/thisyear')
        .then(res => {
            let data = res.data;
            document.getElementById('totalReveneu').innerHTML = (data.length === 0) ? 0 : data[0].total;
        })
}

const reveneuByMonth = () => {
    axios.get('/admin/reveneu/thismonth')
        .then(res => {
            let data = res.data;
            document.getElementById('totalReveneu').innerHTML = (data.length === 0) ? 0 : data[0].total;
        })
}

const todayReveneu = () => {
    axios.get('/admin/reveneu/today')
        .then(res => {
            let data = res.data;
            document.getElementById('totalReveneu').innerHTML = (data.length === 0) ? 0 : data[0].total;
        })
}