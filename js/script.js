/*!
* JS for new dashboard - v1.0.0
*
* Made by Devesh Ukalkar (https://github.com/iamcoderdevesh)
*/

//Endorsement Chart
const endorsementChart = () => {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    var options = {
        series: [{
            name: 'Addition',
            data: [21, 16, 30, 25, 42, 48, 42, 41, 30, 35, 55, 70],
        }, {
            name: 'Updation',
            data: [1, 22, 15, 20, 25, 18, 26, 28, 30, 28, 35, 20],
        },
        {
            name: 'Deletion',
            data: [2, 6, 3, 5, 4, 7, 8, 5, 10, 15, 12, 10],
        }],
        chart: {
            type: 'area',
            height: 260,
            width: 400,
            stacked: false
        },
        colors: ['#3C9FFF', '#74BBFF', '#A8D4FF'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false, // Hide lines
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 1.5, // Decrease opacity
                opacityTo: 1, // Decrease opacity
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        xaxis: {
            categories: labels
        }
    };

    var chart = new ApexCharts(document.getElementById("endorsementChart"), options);
    chart.render();
}

//Client Performance
const clientPerfomanceChart = () => {
    var colorPalette = ['#5B9BD5', '#8D63FF', '#9B9B9B', '#FFC000', '#ED7D31']
    var optionDonut = {
        chart: {
            type: 'donut',
            width: 380,
            height: 400
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                customScale: 0.8,
                donut: {
                    size: '75%',
                },
                offsetY: 20,
            },
            stroke: {
                colors: undefined
            }
        },
        stroke: {
            lineCap: 'round'
        },
        colors: colorPalette,
        series: [40, 5, 15, 10, 30],
        labels: ['Affinity', 'Affinity Demo', 'Test Demo', 'Priti Test', 'Other'],
        legend: {
            position: 'right',
            offsetY: 80
        }
    }

    var donut = new ApexCharts(
        document.querySelector("#clientPerformanceChart"),
        optionDonut
    )
    donut.render();

}

//All Cliams
const allCliamsChart = () => {
    var optionsCircle4 = {
        chart: {
            type: 'radialBar',
            height: 350,
            width: 380,
        },
        plotOptions: {
            radialBar: {
                size: undefined,
                inverseOrder: true,
                hollow: {
                    margin: 5,
                    size: '48%',
                    background: 'transparent',

                },
                track: {
                    show: false,
                },
            },
        },
        stroke: {
            lineCap: 'round'
        },
        series: [71, 63, 77],
        labels: ['June', 'May', 'April'],
        legend: {
            show: true,
            position: 'right',
            containerMargin: {
                right: 0
            }
        },
    }

    var chartCircle4 = new ApexCharts(document.querySelector('#allCliamsChart'), optionsCircle4);
    chartCircle4.render();
}

//Discrepancy Perfomance
const discrepancyCircleChart = (pecentage = 50, value = 100, id) => {
    var options = {
        series: [pecentage],
        chart: {
            height: 140,
            width: 120,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: `50%`,
                },
                trackedOn: 'value', // center the text vertically
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        formatter: function () {
                            return value; // add the % symbol to the text
                        },
                        offsetY: 5, // adjust the horizontal position of the text
                        color: '#333', // set the text color
                    },
                },
            },
        },
        labels: [''],
    };

    var chart = new ApexCharts(document.getElementById(id), options);
    chart.render();
}

//Dashboard Slider using Swiper JS
const slider = () => {
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-next-button",
            prevEl: ".swiper-prev-button",
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
    });
}

//Implementing Google Translate 
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

$(document).ready(function () {
    slider();
    endorsementChart();
    clientPerfomanceChart();
    allCliamsChart();
    discrepancyCircleChart(60, 426, "discrepancyCircleChart1");
    discrepancyCircleChart(50, 385, "discrepancyCircleChart2");
    discrepancyCircleChart(25, 152, "discrepancyCircleChart3");
    discrepancyCircleChart(35, 261, "discrepancyCircleChart4");
});