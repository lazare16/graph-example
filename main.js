const ctx =  document.getElementById("myChart").getContext("2d");
let delayed;
const labels = [
  "2020" ,
  "2021",
  "2040",
  "2070",
  "2080"
];

const data = {
    labels,
    datasets: [
        {
        data: [211, 326, 165 , 350, 420 , 370 ],
        label: 'covid-19',
        fill: true,
        backgroundColor: 'rgb(182, 6, 108)',
        pointBackgroundColor: "#fff",
        tension: 0.5
    },
],
};

const config = {
    type: "line",
    data: data,
    options: {
        radius: 5,
        responsive: true,
        animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
        scales: {
            y:{
            ticks: {
                callback: function(value){
                     return value + "m";
                },
            },
            },
        },
    },
    };


const myChart = new Chart(ctx, config);