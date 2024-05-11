// Sample data
var data = [
    {x: 10, y: 20},
    {x: 40, y: 90},
    {x: 30, y: 80},
    {x: 50, y: 70},
    {x: 20, y: 60}
];

// Set up the SVG
var svg = d3.select("#scatterPlot");

// Define the scales
var xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.x)])
    .range([0, 500]);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.y)])
    .range([300, 0]);

// Define the axes
var xAxis = d3.axisBottom(xScale)
    .ticks(5);

var yAxis = d3.axisLeft(yScale)
    .ticks(5);

// Append the axes to the SVG
svg.append("g")
    .attr("transform", "translate(0," + 300 + ")")
    .call(xAxis);

svg.append("g")
    .call(yAxis);

// Add the scatter plot
svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.x))
    .attr("cy", d => yScale(d.y))
    .attr("r", 5)
    .attr("fill", "steelblue");
