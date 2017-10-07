// テスト用乱数作成メソッド
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 1000);
    };

// ラベル表示カスタマイズ
    var japanese_locale = d3.locale(
        {
            "decimal": ".",
            "thousands": ",",
            "grouping": [3],
            "currency": ["", "円"],
            "dateTime": "%a %b %e %X %Y",
            "date": "%Y/%m/%d",
            "time": "%H:%M:%S",
            "periods": ["AM", "PM"],
            "days": ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
            "shortDays": ["日", "月", "火", "水", "木", "金", "土"],
            "months": ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"],
            "shortMonths": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        }
    );

// 現在の年・月、半年前の年・月を設定
    var nowDate = new Date();
    var tmpDate = new Date();
    // 半年前
    var pastDate = new Date(tmpDate.setMonth(tmpDate.getMonth() - 6));
    // 現在の年
    var nowYear = nowDate.getFullYear();
    // 現在の月
    var nowMonth = nowDate.getMonth() + 1;
    // 半年前の年
    var pastYear =  pastDate.getFullYear();
    // 半年前の月
    var pastMonth = pastDate.getMonth() + 1;

// localstrage用データ
    // bank1
    var bank1Data = {'bank':'bank1',
        2015 : [
            {'month':1,'y':randomScalingFactor()},
            {'month':2,'y':randomScalingFactor()},
            {'month':3,'y':randomScalingFactor()},
            {'month':4,'y':randomScalingFactor()},
            {'month':5,'y':randomScalingFactor()},
            {'month':6,'y':randomScalingFactor()},
            {'month':7,'y':randomScalingFactor()},
            {'month':8,'y':randomScalingFactor()},
            {'month':9,'y':randomScalingFactor()},
            {'month':10,'y':randomScalingFactor()},
            {'month':11,'y':randomScalingFactor()},
            {'month':12,'y':randomScalingFactor()}
        ],
        2016 : [
            {'month':1,'y':randomScalingFactor()},
            {'month':2,'y':randomScalingFactor()},
            {'month':3,'y':randomScalingFactor()},
            {'month':4,'y':randomScalingFactor()},
            {'month':5,'y':randomScalingFactor()},
            {'month':6,'y':randomScalingFactor()},
            {'month':7,'y':randomScalingFactor()},
            {'month':8,'y':randomScalingFactor()},
            {'month':9,'y':randomScalingFactor()},
            {'month':10,'y':randomScalingFactor()},
            {'month':11,'y':randomScalingFactor()},
            {'month':12,'y':randomScalingFactor()}
        ],
        2017 : [
            {'month':1,'y':randomScalingFactor()},
            {'month':2,'y':randomScalingFactor()},
            {'month':3,'y':randomScalingFactor()},
            {'month':4,'y':randomScalingFactor()},
            {'month':5,'y':randomScalingFactor()},
            {'month':6,'y':randomScalingFactor()},
            {'month':7,'y':randomScalingFactor()},
            {'month':8,'y':randomScalingFactor()},
            {'month':9,'y':randomScalingFactor()},
            {'month':10,'y':randomScalingFactor()},
            {'month':11,'y':randomScalingFactor()},
            {'month':12,'y':randomScalingFactor()}
        ] 
    }
    // bank2
    var bank2Data = {'bank':'bank2',
        2015 : [
            {'month':1,'y':randomScalingFactor()},
            {'month':2,'y':randomScalingFactor()},
            {'month':3,'y':randomScalingFactor()},
            {'month':4,'y':randomScalingFactor()},
            {'month':5,'y':randomScalingFactor()},
            {'month':6,'y':randomScalingFactor()},
            {'month':7,'y':randomScalingFactor()},
            {'month':8,'y':randomScalingFactor()},
            {'month':9,'y':randomScalingFactor()},
            {'month':10,'y':randomScalingFactor()},
            {'month':11,'y':randomScalingFactor()},
            {'month':12,'y':randomScalingFactor()}
        ],
        2016 : [
            {'month':1,'y':randomScalingFactor()},
            {'month':2,'y':randomScalingFactor()},
            {'month':3,'y':randomScalingFactor()},
            {'month':4,'y':randomScalingFactor()},
            {'month':5,'y':randomScalingFactor()},
            {'month':6,'y':randomScalingFactor()},
            {'month':7,'y':randomScalingFactor()},
            {'month':8,'y':randomScalingFactor()},
            {'month':9,'y':randomScalingFactor()},
            {'month':10,'y':randomScalingFactor()},
            {'month':11,'y':randomScalingFactor()},
            {'month':12,'y':randomScalingFactor()}
        ],
        2017 : [
            {'month':1,'y':randomScalingFactor()},
            {'month':2,'y':randomScalingFactor()},
            {'month':3,'y':randomScalingFactor()},
            {'month':4,'y':randomScalingFactor()},
            {'month':5,'y':randomScalingFactor()},
            {'month':6,'y':randomScalingFactor()},
            {'month':7,'y':randomScalingFactor()},
            {'month':8,'y':randomScalingFactor()},
            {'month':9,'y':randomScalingFactor()},
            {'month':10,'y':randomScalingFactor()},
            {'month':11,'y':randomScalingFactor()},
            {'month':12,'y':randomScalingFactor()}
        ] 
    }
    // bank3
    var bank3Data = {'bank':'bank3',
        2015 : [
            {'month':1,'y':randomScalingFactor()},
            {'month':2,'y':randomScalingFactor()},
            {'month':3,'y':randomScalingFactor()},
            {'month':4,'y':randomScalingFactor()},
            {'month':5,'y':randomScalingFactor()},
            {'month':6,'y':randomScalingFactor()},
            {'month':7,'y':randomScalingFactor()},
            {'month':8,'y':randomScalingFactor()},
            {'month':9,'y':randomScalingFactor()},
            {'month':10,'y':randomScalingFactor()},
            {'month':11,'y':randomScalingFactor()},
            {'month':12,'y':randomScalingFactor()}
        ],
        2016 : [
            {'month':1,'y':randomScalingFactor()},
            {'month':2,'y':randomScalingFactor()},
            {'month':3,'y':randomScalingFactor()},
            {'month':4,'y':randomScalingFactor()},
            {'month':5,'y':randomScalingFactor()},
            {'month':6,'y':randomScalingFactor()},
            {'month':7,'y':randomScalingFactor()},
            {'month':8,'y':randomScalingFactor()},
            {'month':9,'y':randomScalingFactor()},
            {'month':10,'y':randomScalingFactor()},
            {'month':11,'y':randomScalingFactor()},
            {'month':12,'y':randomScalingFactor()}
        ],
        2017 : [
            {'month':1,'y':randomScalingFactor()},
            {'month':2,'y':randomScalingFactor()},
            {'month':3,'y':randomScalingFactor()},
            {'month':4,'y':randomScalingFactor()},
            {'month':5,'y':randomScalingFactor()},
            {'month':6,'y':randomScalingFactor()},
            {'month':7,'y':randomScalingFactor()},
            {'month':8,'y':randomScalingFactor()},
            {'month':9,'y':randomScalingFactor()},
            {'month':10,'y':randomScalingFactor()},
            {'month':11,'y':randomScalingFactor()},
            {'month':12,'y':randomScalingFactor()}
        ] 
    }
    // bank4
    var bank4Data = {'bank':'bank4',
        2015 : [
            {'month':1,'y':randomScalingFactor()},
            {'month':2,'y':randomScalingFactor()},
            {'month':3,'y':randomScalingFactor()},
            {'month':4,'y':randomScalingFactor()},
            {'month':5,'y':randomScalingFactor()},
            {'month':6,'y':randomScalingFactor()},
            {'month':7,'y':randomScalingFactor()},
            {'month':8,'y':randomScalingFactor()},
            {'month':9,'y':randomScalingFactor()},
            {'month':10,'y':randomScalingFactor()},
            {'month':11,'y':randomScalingFactor()},
            {'month':12,'y':randomScalingFactor()}
        ],
        2016 : [
            {'month':1,'y':randomScalingFactor()},
            {'month':2,'y':randomScalingFactor()},
            {'month':3,'y':randomScalingFactor()},
            {'month':4,'y':randomScalingFactor()},
            {'month':5,'y':randomScalingFactor()},
            {'month':6,'y':randomScalingFactor()},
            {'month':7,'y':randomScalingFactor()},
            {'month':8,'y':randomScalingFactor()},
            {'month':9,'y':randomScalingFactor()},
            {'month':10,'y':randomScalingFactor()},
            {'month':11,'y':randomScalingFactor()},
            {'month':12,'y':randomScalingFactor()}
        ],
        2017 : [
            {'month':1,'y':randomScalingFactor()},
            {'month':2,'y':randomScalingFactor()},
            {'month':3,'y':randomScalingFactor()},
            {'month':4,'y':randomScalingFactor()},
            {'month':5,'y':randomScalingFactor()},
            {'month':6,'y':randomScalingFactor()},
            {'month':7,'y':randomScalingFactor()},
            {'month':8,'y':randomScalingFactor()},
            {'month':9,'y':randomScalingFactor()},
            {'month':10,'y':randomScalingFactor()},
            {'month':11,'y':randomScalingFactor()},
            {'month':12,'y':randomScalingFactor()}
        ] 
    }
  
// localstrageに口座残高データがない場合は作成
    // // bank1
    // if(!localStorage.getItem("balanceList1")){
    //     localStorage.setItem("balanceList1", JSON.stringify(bank1Data));   
    // }
    // // bank2
    // if(!localStorage.getItem("balanceList2")){
    //     localStorage.setItem("balanceList2", JSON.stringify(bank2Data));   
    // }
    // // bank3
    // if(!localStorage.getItem("balanceList3")){
    //     localStorage.setItem("balanceList3", JSON.stringify(bank3Data));   
    // }
    // // bank4
    // if(!localStorage.getItem("balanceList4")){
    //     localStorage.setItem("balanceList4", JSON.stringify(bank4Data));   
    // }
// テスト用（毎回テストデータ読み込み）
    // bank1
        localStorage.setItem("balanceList1", JSON.stringify(bank1Data));   
    // bank2
        localStorage.setItem("balanceList2", JSON.stringify(bank2Data));   
    // bank3
        localStorage.setItem("balanceList3", JSON.stringify(bank3Data));   
    // bank4
        localStorage.setItem("balanceList4", JSON.stringify(bank4Data));   

// 口座残高データを取得
    //  bank1
    var balances1 = JSON.parse(localStorage.getItem("balanceList1"));
    for(var i = 0; i < balances1[nowYear].length ; i++){
        balances1[nowYear][i]['x'] = new Date(nowYear, i, 0);
    }
    //  bank2
    var balances2 = JSON.parse(localStorage.getItem("balanceList2"));
    for(var i = 0; i < balances2[nowYear].length ; i++){
        balances2[nowYear][i]['x'] = new Date(nowYear, i, 0);
    }
    //  bank3
    var balances3 = JSON.parse(localStorage.getItem("balanceList3"));
    for(var i = 0; i < balances3[nowYear].length ; i++){
        balances3[nowYear][i]['x'] = new Date(nowYear, i, 0);
    }
    //  bank4
    var balances4 = JSON.parse(localStorage.getItem("balanceList4"));
    for(var i = 0; i < balances4[nowYear].length ; i++){
        balances4[nowYear][i]['x'] = new Date(nowYear, i, 0);
    }

    var localAData = balances1;
    var localBData = balances2;
    var localCData = balances3;
    var localDData = balances4;




//************************************************************
// Data notice the structure
//************************************************************
// グラフに渡すデータを作成
    // グラフ用データを作成
    var AData = localAData[nowYear];
    var BData = localBData[nowYear];
    var CData = localCData[nowYear];
    var DData = localDData[nowYear];    
    var data = [
        AData,
        BData,
        CData,
        DData
    ];
    
    // 折れ線描画色を作成
    var colors = [
    	'#ff9f40',
    	'#ffcd56',
    	'#4bc0c0',
    	'#36a2eb'
    ]
 

//************************************************************
// Create Margins and Axis and hook our zoom function
//************************************************************
// グラフのスタイルを作成
    // サイズを作成
    var margin = {top: 20, right: 30, bottom: 30, left: 50},
        width = window.innerWidth - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
    	
    // var x = d3.scale.linear()
    //     .domain([0, 12])
    //     .range([0, width]);
    
    
    // var data =     [
    //     [{'x':1701,'y':randomScalingFactor()},{'x':1702,'y':randomScalingFactor()},{'x':1703,'y':randomScalingFactor()},{'x':1704,'y':randomScalingFactor()}]
    // ];
    
    // 時間のフォーマット
    //var parseDate = d3.time.format("%y/%m").parse;
    
    // x軸のスケールを作成
    var x = d3.time.scale()
      .domain([
        new Date(pastYear, pastMonth, 0), // 開始日時
        new Date(nowYear, nowMonth, 0)
        
        //pastDate, // 開始日時
        //new Date()  // 終了日時
      ])
      .range([0, width]); // 実際の出力サイズ
    var xAxis = d3.svg.axis()
        .scale(x)
        //.tickSize(-height)
    	//.tickPadding(10)	
    	//.tickSubdivide(true)	
        .orient("bottom")
        .ticks(d3.time.months, 1)
        //.tickFormat(japanese_locale.timeFormat("%b"));
        .tickFormat(d3.time.format("%y/%m"));
        
    // var xAxis = d3.svg.axis()
    //     .scale(x)
    //     .tickSize(-height)
    // 	.tickPadding(10)	
    // 	.tickSubdivide(true)	
    //     .orient("bottom");
    
    // var x = d3.scale.linear()
    //     .domain([1701, 1704])
    //     .range([0, width]);

    // y軸のスケールを作成
    var y = d3.scale.linear()
        .domain([-1, 1000])
        .range([height, 0]);
    var yAxis = d3.svg.axis()
        .scale(y)
        .tickPadding(10)
    	.tickSize(-width)
    	.tickSubdivide(true)	
        .orient("left");
    	
	// ズームの振る舞い作成    	
    var zoom = d3.behavior.zoom()
        .x(x)
        .y(y)
        //.scaleExtent([1, 10])
        .scaleExtent([1 / 4, 8])
        .on("zoom", zoomed);	
    	
    	
 

	
//************************************************************
// Generate our SVG object
//************************************************************
// グラフエリアの描画
    var svg = d3.select("#chart")
    	.call(zoom)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    	.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
     
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
// 折れ線グラフの描画
    // var line = d3.svg.line()
    //     .interpolate("linear")    
    //     .x(function(d) { return x(d.x); })
    //     .y(function(d) { return y(d.y); });    
        
    // 描画
    // data.forEach(function(d){
    //   d.x = parseDate(d.x);
    //   d.y = +d.y;
    // });
    
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
// var points = svg.selectAll('.dots')
// 	.data(data)
// 	.enter()
// 	.append("g")
//     .attr("class", "dots")
// 	.attr("clip-path", "url(#clip)");	
//  
// points.selectAll('.dot')
// 	.data(function(d, index){ 		
// 		var a = [];
// 		d.forEach(function(point,i){
// 			a.push({'index': index, 'point': point});
// 		});		
// 		return a;
// 	})
// 	.enter()
// 	.append('circle')
// 	.attr('class','dot')
// 	.attr("r", 2.5)
// 	.attr('fill', function(d,i){ 	
// 		return colors[d.index%colors.length];
// 	})	
// 	.attr("transform", function(d) { 
// 		return "translate(" + x(d.point.x) + "," + y(d.point.y) + ")"; }
// 	);
// 	
 
	

	
	
//************************************************************
// Zoom specific updates
//************************************************************
// ズームによる更新
    function zoomed() {
        svg.select(".x.axis").call(xAxis);
    	svg.select(".y.axis").call(yAxis);   
    	svg.selectAll('path.line').attr('d', line);  
     
    	// points.selectAll('circle').attr("transform", function(d) { 
    	// 	return "translate(" + x(d.point.x) + "," + y(d.point.y) + ")"; }
    	// );  
    }

// グラフ更新メソッド
function graphReload(){
    // 口座残高データを再取得
        // bank1
        var balances1_after = JSON.parse(localStorage.getItem("balanceList1"));
        // bank2
        var balances2_after = JSON.parse(localStorage.getItem("balanceList2"));
        // bank3
        var balances3_after = JSON.parse(localStorage.getItem("balanceList3"));
        // bank4
        var balances4_after = JSON.parse(localStorage.getItem("balanceList4"));
        
    // 年月部分を作成
        // bank1
        for(var i = 0; i < balances1_after[nowYear].length ; i++){
            balances1_after[nowYear][i]['x'] = new Date(nowYear, i, 0);
        }        
        var localAData_after = balances1_after;
        // bank2
        for(var i = 0; i < balances2_after[nowYear].length ; i++){
            balances2_after[nowYear][i]['x'] = new Date(nowYear, i, 0);
        }        
        var localBData_after = balances2_after;
        // bank3
        for(var i = 0; i < balances3_after[nowYear].length ; i++){
            balances3_after[nowYear][i]['x'] = new Date(nowYear, i, 0);
        }        
        var localCData_after = balances3_after;
        // bank4
        for(var i = 0; i < balances4_after[nowYear].length ; i++){
            balances4_after[nowYear][i]['x'] = new Date(nowYear, i, 0);
        }        
        var localDData_after = balances4_after;
    
    // 当年データを取得
        // bank1
        var AData_after = localAData_after[nowYear];
        // bank2
        var BData_after = localBData_after[nowYear];
        // bank3
        var CData_after = localCData_after[nowYear];
        // bank4
        var DData_after = localDData_after[nowYear];

    // 当年の全データ
    var data_after = [
        AData_after,
        BData_after,
        CData_after,
        DData_after
    ];
    
    // 現グラフを削除
    svg.selectAll('.line').remove();
    //svg.selectAll('.dots').remove();
    
    // グラフ更新
    svg.selectAll('.line')
        .data(data_after)
    	.enter()
    	.append("path")
        .attr("class", "line")
    	.attr("clip-path", "url(#clip)")
    	.attr('stroke', function(d,i){ 			
    		return colors[i%colors.length];
    	})
        .attr("d", line);
        
    // var points_after = svg.selectAll('.dots')
    //     .data(data_after)
    // 	.enter()
    // 	.append("g")
    //     .attr("class", "dots")
    // 	.attr("clip-path", "url(#clip)");	
    //  
    // points_after.selectAll('.dot')
    // 	.data(function(d, index){ 		
    // 		var a_after = [];
    // 		d.forEach(function(point,i){
    // 			a_after.push({'index': index, 'point': point});
    // 		});		
    // 		return a;
    // 	})
    // 	.enter()
    // 	.append('circle')
    // 	.attr('class','dot')
    // 	.attr("r", 2.5)
    // 	.attr('fill', function(d,i){ 	
    // 		return colors[d.index%colors.length];
    // 	})	
    // 	.attr("transform", function(d) { 
    // 		return "translate(" + x(d.point.x) + "," + y(d.point.y) + ")"; }
    // 	);
	
}

