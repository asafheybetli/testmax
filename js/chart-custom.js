(function ($) {
  "use strict";

  // ============================================
  // Chart
  // ============================================

  var chart = document.getElementById("chart").getContext("2d"),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

  gradient.addColorStop(0, "rgba(123, 94, 234, 0.5)");
  gradient.addColorStop(0.5, "rgba(123, 94, 234, 0.25)");
  gradient.addColorStop(1, "rgba(123, 94, 234, 0)");

  var data = {
    labels: ["Aug, 2020", "Oct, 2020", "Nov, 2020", "Dec, 2021", "Jan, 2022"],
    datasets: [
      {
        backgroundColor: gradient,
        pointBackgroundColor: "#7b5eea",
        pointBorderWidth: 10,
        pointHoverBorderWidth: 20,
        borderWidth: 2,
        borderColor: "#7b5eea",
        data: [0.2, 0.4, 0.6, 0.8, 1],
      },
    ],
  };

  var options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      easing: "easeInOutQuad",
      duration: 520,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(255, 255, 255, 0.08)",
            lineWidth: 1,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(255, 255, 255, 0.04)",
            lineWidth: 1,
          },
          ticks: {
            beginAtZero: true,
            userCallback: function (value, index, values) {
              // Convert the number to a string and splite the string every 3 charaters from the end
              value = value.toString();
              value = value.split(/(?=(?:...)*$)/);

              // Convert the array to a string and format the output
              value = value.join(".");
              //   return "$" + value;
              return "";
            },
          },
        },
      ],
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    legend: {
      display: false,
    },
    point: {
      backgroundColor: "white",
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var product = "Presale 1";
          if (tooltipItem.yLabel == 0.2) {
            product = "Investment Fund";
          } else if (tooltipItem.yLabel == 0.4) {
            product = "Next Product";
          }
          return "Product: " + product;
          // Number(tooltipItem.yLabel)
          //   .toFixed(0)
          //   .replace(/./g, function (c, i, a) {
          //     return i > 0 && c !== "." && (a.length - i) % 3 === 0
          //       ? "," + c
          //       : c;
          //   })
        },
      },
      titleFontFamily: "'Work Sans', sans-serif",
      bodyFontFamily: "'Poppins', sans-serif",
      titleFontColor: "#7b5eea",
      caretSize: 7,
      cornerRadius: 4,
      backgroundColor: "rgba(0,0,0,0.85)",
      titleFontSize: 17,
      bodyFontSize: 13,
      titleFontStyle: "600",
      bodyFontStyle: "300",
      titleSpacing: 1,
      titleMarginBottom: 10,
      displayColors: false,
      xPadding: 20,
      yPadding: 20,
    },
  };

  var chartInstance = new Chart(chart, {
    type: "line",
    data: data,
    options: options,
  });
})(jQuery);
