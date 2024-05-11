// Define the dataset
var dataset = [
    [5, 20],
    [480, 90],
    [250, 50],
    [100, 33],
    [330, 95],
    [410, 12],
    [475, 44],
    [25, 67],
    [85, 21],
    [220, 88]
  ];
  
  // Set up SVG dimensions
  var svgWidth = 500;
  var svgHeight = 300;
  var padding = 30;
  
  // Create scales for x and y values
  var xScale = d3.scaleLinear()
                 .domain([0, d3.max(dataset, function(d) { return d[0]; })])
                 .range([padding, svgWidth - padding]);
  
  var yScale = d3.scaleLinear()
                 .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                 .range([svgHeight - padding, padding]);
  
  // Create SVG element
  var svg = d3.select("#chart")
              .append("svg")
              .attr("width", svgWidth)
              .attr("height", svgHeight);
  
  // Create circles
  svg.selectAll("circle")
     .data(dataset)
     .enter()
     .append("circle")
     .attr("cx", function(d) {
       return xScale(d[0]);
     })
     .attr("cy", function(d) {
       return yScale(d[1]);
     })
     .attr("r", 5);
  
  // Add labels
  svg.selectAll("text")
     .data(dataset)
     .enter()
     .append("text")
     .text(function(d) {
       return d[0] + "," + d[1];
     })
     .attr("x", function(d) {
       return xScale(d[0]) + 5;
     })
     .attr("y", function(d) {
       return yScale(d[1]);
     })
     .attr("font-family", "sans-serif")
     .attr("font-size", "11px")
     .attr("fill", "red");
  