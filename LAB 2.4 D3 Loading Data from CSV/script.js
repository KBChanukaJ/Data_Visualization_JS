// Function to create the bar chart
function createBarChart(data) {
    var svgWidth = 500;
    var svgHeight = 300;
    var barPadding = 5;
  
    var svg = d3.select("#chart")
                .append("svg")
                .attr("width", svgWidth)
                .attr("height", svgHeight);
  
    var bars = svg.selectAll("rect")
                  .data(data)
                  .enter()
                  .append("rect")
                  .attr("x", function(d, i) {
                    return i * (svgWidth / data.length);
                  })
                  .attr("y", function(d) {
                    return svgHeight - d.Value;
                  })
                  .attr("width", svgWidth / data.length - barPadding)
                  .attr("height", function(d) {
                    return d.Value;
                  })
                  .attr("fill", function(d) {
                    // Customize fill color based on data value
                    if (d.Value > 40) {
                      return "steelblue";
                    } else {
                      return "orange";
                    }
                  });
  
    // Add labels
    svg.selectAll("text")
       .data(data)
       .enter()
       .append("text")
       .text(function(d) {
         return d.Value;
       })
       .attr("x", function(d, i) {
         return i * (svgWidth / data.length) + (svgWidth / data.length - barPadding) / 2;
       })
       .attr("y", function(d) {
         return svgHeight - d.Value + 15;
       })
       .attr("font-family", "sans-serif")
       .attr("font-size", "12px")
       .attr("fill", "white")
       .attr("text-anchor", "middle");
  }
  
  // Load data from CSV file
  d3.csv("data.csv").then(function(data) {
    data.forEach(function(d) {
      d.Value = +d.Value;
    });
  
    // Call function to create bar chart
    createBarChart(data);
  });
  