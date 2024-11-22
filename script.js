const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animations: {
            tension: {
                duration: 1000,
                easing: 'easeInOutQuad',
                from: 1,
                to: 0,
                loop: true
            }
        }
    },



    // options: {
    //     plugins: {
    //         tooltip: {
    //             enabled: true,
    //             callbacks: {
    //                 label: function(tooltipItem) {
    //                     return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
    //                 }
    //             }
    //         }
    //     },
    //     onClick: (event) => {
    //         const activePoints = myChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);
    //         if (activePoints.length) {
    //             const { index } = activePoints[0];
    //             alert(`You clicked on ${myChart.data.labels[index]} with value ${myChart.data.datasets[0].data[index]}`);
    //         }
    //     }
    // }
});



// anime({
//     targets: '#myChart',
//     opacity: [0, 1],
//     duration: 2000,
//     easing: 'easeInOutExpo'
// });



