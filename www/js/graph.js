var randomScalingFactor = function() {
    return Math.round(Math.random() * 1000);
};


//************************************************************
// Data notice the structure
//************************************************************
var data =     [
	[{'x':1,'y':randomScalingFactor()},{'x':2,'y':randomScalingFactor()},{'x':3,'y':randomScalingFactor()},{'x':4,'y':randomScalingFactor()},{'x':5,'y':randomScalingFactor()},{'x':6,'y':randomScalingFactor()},{'x':7,'y':randomScalingFactor()},{'x':8,'y':randomScalingFactor()},{'x':9,'y':randomScalingFactor()},{'x':10,'y':randomScalingFactor()}],
    [{'x':1,'y':randomScalingFactor()},{'x':2,'y':randomScalingFactor()},{'x':3,'y':randomScalingFactor()},{'x':4,'y':randomScalingFactor()},{'x':5,'y':randomScalingFactor()},{'x':6,'y':randomScalingFactor()},{'x':7,'y':randomScalingFactor()},{'x':8,'y':randomScalingFactor()},{'x':9,'y':randomScalingFactor()},{'x':10,'y':randomScalingFactor()}],
    [{'x':1,'y':randomScalingFactor()},{'x':2,'y':randomScalingFactor()},{'x':3,'y':randomScalingFactor()},{'x':4,'y':randomScalingFactor()},{'x':5,'y':randomScalingFactor()},{'x':6,'y':randomScalingFactor()},{'x':7,'y':randomScalingFactor()},{'x':8,'y':randomScalingFactor()},{'x':9,'y':randomScalingFactor()},{'x':10,'y':randomScalingFactor()}],
    [{'x':1,'y':randomScalingFactor()},{'x':2,'y':randomScalingFactor()},{'x':3,'y':randomScalingFactor()},{'x':4,'y':randomScalingFactor()},{'x':5,'y':randomScalingFactor()},{'x':6,'y':randomScalingFactor()},{'x':7,'y':randomScalingFactor()},{'x':8,'y':randomScalingFactor()},{'x':9,'y':randomScalingFactor()},{'x':10,'y':randomScalingFactor()}]
];
 
var colors = [
	'#25a4b7',
	'#e4aa01',
	'#b71232',
	'#6aa43e'
]
 
 
//************************************************************
// Create Margins and Axis and hook our zoom function
//************************************************************
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = window.innerWidth - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
	
var x = d3.scale.linear()
    .domain([0, 12])
    .range([0, width]);
 
var y = d3.scale.linear()
    .domain([-1, 1000])
    .range([height, 0]);
	
var xAxis = d3.svg.axis()
    .scale(x)
	.tickSize(-height)
	.tickPadding(10)	
	.tickSubdivide(true)	
    .orient("bottom");	
	
var yAxis = d3.svg.axis()
    .scale(y)
	.tickPadding(10)
	.tickSize(-width)
	.tickSubdivide(true)	
    .orient("left");
	
var zoom = d3.behavior.zoom()
    .x(x)
    .y(y)
    .scaleExtent([1, 10])
    .on("zoom", zoomed);	
	
	
 
	
	
//************************************************************
// Generate our SVG object
//************************************************************	
var svg = d3.select("#chart")
	.call(zoom)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
 
svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
 
// svg.append("g")
// 	.attr("class", "y axis")
// 	.append("text")
// 	.attr("class", "axis-label")
// 	.attr("transform", "rotate(-90)")
// 	.attr("y", (-margin.left) + 10)
// 	.attr("x", -height/2)
// 	.text('Axis Label');	
 
svg.append("clipPath")
	.attr("id", "clip")
	.append("rect")
	.attr("width", width)
	.attr("height", height);
	
	
	
	
	
//************************************************************
// Create D3 line object and draw data on our SVG object
//************************************************************
var line = d3.svg.line()
    .interpolate("linear")	
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); });		
	
svg.selectAll('.line')
	.data(data)
	.enter()
	.append("path")
    .attr("class", "line")
	.attr("clip-path", "url(#clip)")
	.attr('stroke', function(d,i){ 			
		return colors[i%colors.length];
	})
    .attr("d", line);		
	
	
	
	
//************************************************************
// Draw points on SVG object based on the data given
//************************************************************
var points = svg.selectAll('.dots')
	.data(data)
	.enter()
	.append("g")
    .attr("class", "dots")
	.attr("clip-path", "url(#clip)");	
 
points.selectAll('.dot')
	.data(function(d, index){ 		
		var a = [];
		d.forEach(function(point,i){
			a.push({'index': index, 'point': point});
		});		
		return a;
	})
	.enter()
	.append('circle')
	.attr('class','dot')
	.attr("r", 2.5)
	.attr('fill', function(d,i){ 	
		return colors[d.index%colors.length];
	})	
	.attr("transform", function(d) { 
		return "translate(" + x(d.point.x) + "," + y(d.point.y) + ")"; }
	);
	
 
	
	
	
	
//************************************************************
// Zoom specific updates
//************************************************************
function zoomed() {
	svg.select(".x.axis").call(xAxis);
	svg.select(".y.axis").call(yAxis);   
	svg.selectAll('path.line').attr('d', line);  
 
	points.selectAll('circle').attr("transform", function(d) { 
		return "translate(" + x(d.point.x) + "," + y(d.point.y) + ")"; }
	);  
}