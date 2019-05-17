// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var JSONItems = [];

$(function () {
    $('[data-toggle="tooltip"]').tooltip();


    /*var dataJson = [];
    function addData(data) {
        for (var i = 0; i < data.length; i++) {
            dataJson.push({
                title: data[i].title,
                calories: data[i].calories
            });
        }
    }
    $.getJSON("./data/Cookies_small.json", addData);*/


    $.getJSON( "./data/Cookies_small.json", function( data){
        JSONItems = data;


        for ( var i =0; i <data.length;i++){
            // Bar Chart 0,1,2
            var ctx = document.getElementById("myBarChart"+i);
            var myLineChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: JSONItems[i].ingredients,
                    datasets: [{
                        label: "Ingredient",
                        backgroundColor: "rgba(2,117,216,1)",
                        borderColor: "rgba(2,117,216,1)",
                        data: [2, 1, 1, 1, 6, 1, 0.5, 1],
                    }],
                },
                options: {
                    scales: {
                        xAxes: [{
                            time: {
                                unit: 'Kg'
                            },
                            gridLines: {
                                display: false
                            },
                            ticks: {
                                maxTicksLimit: 12
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                min: 0,
                                max: 10,
                                maxTicksLimit: 5
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                    },
                    legend: {
                        display: false
                    }
                }
            });
        }



    });
});