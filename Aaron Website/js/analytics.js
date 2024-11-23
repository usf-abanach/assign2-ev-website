

const ctx = document.getElementById('myChart1');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Tesla', 'Ford', 'Chevrolet','Hyundai','Rivian','BMW', 'VW',],
    datasets: [{
      label: '# EVs Sold',
      data: [654888, 72608, 62988, 57561, 50189, 45417, 37789 ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins:{
      title:{
        display: false,
        text: 'EV Sales by Year'
      }
    }
  }
});





const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020','2021','2022','2023'],
    datasets: [
      {
      label: 'Pure EV',
      data: [54179, 70466, 94626, 206365, 225741, 233330,389410,713145,1077138],
      borderColor: '#36A2EB',
      borderWidth: 3
      },
      {
      label: 'Hybrid',
      data: [318878, 346816, 369729, 430421, 590445, 577803,757433,754772,1242608],
      borderColor: '#9966ff',
      borderWidth: 3
      },
      {
      label: 'Plug-in hybrid',
      data: [12530, 16984, 38595, 54519, 56482, 38658,78883,113743,177081],
      borderColor: '#4BC0C0',
      borderWidth: 3
      }
  ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
