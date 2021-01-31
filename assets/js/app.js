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
d3.csv('/../data/data.csv').then(function(data) {
	// create chart
	var svg = d3.select('#scatter').append('svg').attr('width', svgWidth).attr('height', svgHeight);
	var chart = svg.append('g').attr('transform', `translate(${margins.left}, ${margins.top})`);

	
});