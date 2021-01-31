// @TODO: YOUR CODE HERE!

// set dimentions of svg object
var svgWidth = 800;
var svgHeight = 500;
var margins = {
	top: 50,
	right: 50,
	left: 75,
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

	data.forEach(function(d) {
		d.obesity = +d.obesity;
		d.income = +d.income;
	});

	var xaxis = d3.scaleLinear()
		.domain([20, d3.max(data, d => d.obesity)])
		.range([0, width]);
	var yaxis = d3.scaleLinear()
		.domain([30000, d3.max(data, d => d.income)])
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
		.attr('cx', d => xaxis(d.obesity))
		.attr('cy', d => yaxis(d.income))
		.attr('r', 10)
		.attr('fill', 'grey')
		.attr('opacity', .5);

	chart.select('g')
        .selectAll('circle')
        .data(data)
        .enter()
        .append('text')
        .text(d => d.abbr)
        .attr('x', d => xaxis(d.obesity))
		.attr('y', d => yaxis(d.income))
		.attr('dy',-395)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
		.attr('fill', 'black');

	// axis labels
	chart.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('y', -70)
		.attr('x', -250)
		.attr('dy', '1em')
		.attr('class', 'axisText')
		.text('Average Income');

	chart.append('text')
		.attr('transform', `translate(${width/2}, ${height + margins.top - 10})`)
		//.attr('y', 440)
		//.attr('x', 325)
		.attr('class', 'axisText')
		.text('Obesity (%)');

});