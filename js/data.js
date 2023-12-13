const ctx = document.getElementById("VoteChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 2, 23, 5, 7, 10],
        borderWith: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
