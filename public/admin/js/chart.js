const myChart = new Chart(
    document.getElementById('canvas'),
    {
        type: 'line',
        data: {}
    }
);

const getChart = (value) => {
    axios.get('/admin/reports/chart', {
        params: {
            year: value
        }
    }).then(res => {
        let data = res.data;
        let ordersData = [];
        let reveneuData = [];
        let cusotmersData = [];
        data.ordersData.forEach((orderByMonth) => {
                ordersData.push(orderByMonth.total)
            }
        )
        data.reveneuData.forEach((reveneuByMonth) => {
                reveneuData.push((+reveneuByMonth.total/1000000))
            }
        )
        data.customersData.forEach((customersByMonth) => {
                cusotmersData.push(customersByMonth.total)
            }
        )
        myChart.data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    data: ordersData,
                    label: "Orders",
                    borderColor: "#3e95cd",
                    fill: false
                },
                {
                    data: reveneuData,
                    label: "Reveneu",
                    borderColor: "#8e5ea2",
                    fill: false
                },
                {
                    data: cusotmersData,
                    label: "Customers",
                    borderColor: "#c45850",
                    fill: false
                }
            ], options: [{
                title: {
                    display: true,
                    text: "Detailed Report by year",
                    position: "top"
                },
                legend: {
                    display: true,
                    position: "top"
                }
            }]
        }
        myChart.update()
    })
}

