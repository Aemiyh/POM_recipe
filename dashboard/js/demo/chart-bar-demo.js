// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart 1
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Oignons", "Tomates", "Pâte brisée", "Poivrons", "Cornichons", "Moutarde", "Fromage rapée"],
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

// Bar Chart 2
var ctx = document.getElementById("myBarChart2");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Tomates", "Pâte brisée", "Poivre", "Sel", "Jambons de parme", "Basilique", "Oeufs", "Pot de ricotta"],
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

// Bar Chart 3
var ctx = document.getElementById("myBarChart3");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Pâte brisée", "Boîte de thon naturel", "Ratatouille congelée", "Crème fraîche", "Olives", "Gruyère","Herbes de Provence", "Poivre", "Sel"],
    datasets: [{
      label: "Ingredient",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [1, 1, 1, 0.4, 1, 1, 1, 1, 1],
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
