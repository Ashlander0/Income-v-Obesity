// @TODO: YOUR CODE HERE!

// set dimentions of svg object
var svgWidth = 800;
var svgHeight = 500;
var margins = {
	top: 50,
	right: 50,
	left: 50,
	bottom: 50
};

// set dimentions of chart
var width = svgWidth - margins.left - margins.right;
var height = svgHeight - margins.top - margins.bottom;

// import data
d3.csv('assets/data/data.csv').then(function(data) {
	// create chart
	var svg = d3.select('#scatter').append('svg').attr('width', svgWidth).attr('height', svgHeight);
	var chart = svg.append('g').attr('transform', `translate(${margins.left}, ${margins.top})`);

	var xaxis = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.poverty)])
		.range([0, width]);
	var yaxis = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.healthcare)])
		.range([height, 0]);
	
	var bottomAxis = d3.axisBottom(xaxis);
	var leftAxis = d3.axisLeft(yaxis);

	// setup axis ticks
	chart.append("g")
	.attr("transform", `translate(0, ${height})`)
	.call(bottomAxis);

  	chart.append("g")
	.call(leftAxis);

	// circle group
	chart.selectAll('circle')
		.data(data)
		.enter()
		.append('circle')
		.attr('cx', d => xaxis(d.poverty))
		.attr('cy', d => yaxis(d.healthcare))
		.attr('r', 20)
		.attr('fill', 'blue');


});