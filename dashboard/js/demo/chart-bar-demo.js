// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var JSONItems = [];

window.onload = function() {

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
            function createAndModifyDivs() {
                var text = "<div class=\"container-fluid\">"
                var progress1 = "<div class=\"card-footer small text-muted\"><div class=\"progress\">";
                var progress2 = "<div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 15%\"  title=\"Temps de préparation\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\" data-toggle=\"tooltip\" data-placement=\"top\">";
                var progress3 = "<span class=\"progress-type\">15 min</span></div>";
                var progress4 = "<div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 45%\" title=\"Temps de cuisson\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" data-toggle=\"tooltip\" data-placement=\"top\">";
                var progress5 = "<span class=\"progress-type\">45 min</span></div></div></div>";
                var progress = progress1+progress2+progress3+progress4+progress5;


                var tangle1 = "<p id=\"pruneaux\"> Pour <span data-var=\"person\" class=\"TKAdjustableNumber\" data-min=\"2\" data-max=`\"100\"> personnes</span>, il faut <span data-var=\"pruneaux\"></span> g de pruneaux</p><div id=\"categories\"></div>"
                for (var i =0; i < data.length; i ++) {
                    text += "<div class=\"card mb-3\"><div class=\"card-header\"><i class=\"fas fa-chart-bar\"></i>"+" "+data[i].title+"</div><div class=\"card-body\"><canvas id=\"myBarChart"+i+"\" width=\"100%\" height=\"30\"></canvas></div>";
                    text+=progress;
                    text+="<p id=\"pruneaux"+i+"\"> Pour <span data-var=\"person\" class=\"TKAdjustableNumber\" data-min=\"2\" data-max=\"100\"> personnes</span>, il y a  <span data-var=\"pruneaux"+i+"\"></span> calories</p><div id=\"categories\"></div>";
                    text+="</div>";
                }
                text += "</div>"
                document.getElementById("content-wrapper").innerHTML = text;

            }

            createAndModifyDivs();

            //Tangle
            for ( var i =0; i <data.length;i++){
                var element = document.getElementById("pruneaux"+i);
                var tangle = new Tangle(element, {
                    initialize: function () {
                        this.person = 4;
                        this.quantitePerPerson = data[i].calories;
                    },
                    update: function () {
                        //A REVOIR POUR AUTOMATISER
                        this.pruneaux0 = this.person * this.quantitePerPerson;
                        this.pruneaux1 = this.person * this.quantitePerPerson;
                        this.pruneaux2 = this.person * this.quantitePerPerson;
                        this.pruneaux3 = this.person * this.quantitePerPerson;
                        this.pruneaux4 = this.person * this.quantitePerPerson;
                    }
                });
            }


            //Charts
            JSONItems = data;
            for ( var i =0; i <data.length;i++){
                // Bar Chart 0,1,2
                var ctx = document.getElementById("myBarChart"+i);
                var myLineChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ["calories", "fat", "protein", "sodium"],
                        datasets: [{
                            label: "Value",
                            backgroundColor: "rgba(2,117,216,1)",
                            borderColor: "rgba(2,117,216,1)",
                            data: [JSONItems[i].calories, JSONItems[i].fat, JSONItems[i].protein, JSONItems[i].sodium],
                        }],
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                time: {
                                    unit: 'Unit'
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
                                    max: 150,
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
}