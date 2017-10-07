// 銀行名ラベルオブジェクト格納用
var BANK_OBJ = "";

// データ入力ダイアログ表示・非表示
function show(dlg, obj) {
  ons.createDialog(dlg).then(function(dialog) {
    dialog.show();
    if(obj.id == "label01"){
        document.getElementById("bank").value = document.getElementById("bank1").innerHTML;
        BANK_OBJ = document.getElementById("bank1");
    } else if(obj.id == "label02"){
        document.getElementById("bank").value = document.getElementById("bank2").innerHTML;
        BANK_OBJ = document.getElementById("bank2");
    } else if(obj.id == "label03"){
        document.getElementById("bank").value = document.getElementById("bank3").innerHTML;
        BANK_OBJ = document.getElementById("bank3");
    } else if(obj.id == "label04"){
        document.getElementById("bank").value = document.getElementById("bank4").innerHTML;
        BANK_OBJ = document.getElementById("bank4");
    }
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    document.getElementById("year").value = year;
    document.getElementById("month").value = month;
  });
}

// データ入力ダイアログCancel押下時
function hideCancel(id) {
    document.getElementById(id).remove();
};

// データ入力ダイアログOK押下時
function hideOK(id) {
    var str = document.getElementById("bank").value;
    BANK_OBJ.innerHTML = str;
    var banks = JSON.parse(localStorage.getItem("bankList"));
    if(BANK_OBJ.id == "bank1"){
        banks.bank1 = str;
        // グラフ用データを更新
        var balanceList = JSON.parse(localStorage.getItem("balanceList1"));
        var year = document.getElementById("year").value;
        var month = document.getElementById("month").value;
        var balance = document.getElementById("balance").value;
        balanceList[year][month]['y'] = balance;        
        localStorage.setItem("balanceList1", JSON.stringify(balanceList));        
        
    } else if(BANK_OBJ.id == "bank2"){
        banks.bank2 = str;
        // グラフ用データを更新
        var balanceList = JSON.parse(localStorage.getItem("balanceList2"));
        var year = document.getElementById("year").value;
        var month = document.getElementById("month").value;
        var balance = document.getElementById("balance").value;
        balanceList[year][month]['y'] = balance;        
        localStorage.setItem("balanceList2", JSON.stringify(balanceList)); 
    } else if(BANK_OBJ.id == "bank3"){
        banks.bank3 = str;
        // グラフ用データを更新
        var balanceList = JSON.parse(localStorage.getItem("balanceList3"));
        var year = document.getElementById("year").value;
        var month = document.getElementById("month").value;
        var balance = document.getElementById("balance").value;
        balanceList[year][month]['y'] = balance;        
        localStorage.setItem("balanceList3", JSON.stringify(balanceList)); 
    } else if(BANK_OBJ.id == "bank4"){
        banks.bank4 = str;
        // グラフ用データを更新
        var balanceList = JSON.parse(localStorage.getItem("balanceList4"));
        var year = document.getElementById("year").value;
        var month = document.getElementById("month").value;
        var balance = document.getElementById("balance").value;
        balanceList[year][month]['y'] = balance;        
        localStorage.setItem("balanceList4", JSON.stringify(balanceList)); 
    }
    
    // localstorageの銀行名を更新
    localStorage.setItem("bankList", JSON.stringify(banks));
    // グラフ更新
    graphReload();
    
    document.getElementById(id).remove();
    
};

// 円グラフデータ選択ダイアログ表示・非表示
function pieShow(dlg, obj) {
  ons.createDialog(dlg).then(function(dialog) {
    dialog.show();
    var pieDate = new Date();
    var pieYear = pieDate.getFullYear();
    var pieMonth = pieDate.getMonth();
    document.getElementById("pie_year").value = pieYear;
    document.getElementById("pie_month").value = pieMonth;
  });
}

// 円グラフデータ選択ダイアログCancel押下時
function pieHideCancel(id) {
    document.getElementById(id).remove();
};

// 円グラフデータ選択ダイアログOK押下時
function pieHideOK(id) {
    // 銀行名データを取得
    var pieBanks = JSON.parse(localStorage.getItem("bankList"));
    // グラフ用データを更新
        // 選択年
        var pieSelectYear = document.getElementById("pie_year").value;
        // 選択月
        var pieSelectMonth = document.getElementById("pie_month").value;
        //  bank1
        var pieSelectBalances1 = JSON.parse(localStorage.getItem("balanceList1"));
        var pieSelectBalances1Data = pieSelectBalances1[pieSelectYear][pieSelectMonth]['y'];
        //  bank2
        var pieSelectBalances2 = JSON.parse(localStorage.getItem("balanceList2"));
        var pieSelectBalances2Data = pieSelectBalances2[pieSelectYear][pieSelectMonth]['y'];
        //  bank3
        var pieSelectBalances3 = JSON.parse(localStorage.getItem("balanceList3"));
        var pieSelectBalances3Data = pieSelectBalances3[pieSelectYear][pieSelectMonth]['y'];
        //  bank4
        var pieSelectBalances4 = JSON.parse(localStorage.getItem("balanceList4"));
        var pieSelectBalances4Data = pieSelectBalances4[pieSelectYear][pieSelectMonth]['y'];
        
        var pieSelectTotal = pieSelectBalances1Data + pieSelectBalances2Data + pieSelectBalances3Data + pieSelectBalances4Data;
        
    // 当月分データを作成
    var pieSelectData = [
        [pieBanks.bank1, pieSelectBalances1Data], 
        [pieBanks.bank2, pieSelectBalances2Data],
        [pieBanks.bank3, pieSelectBalances3Data],
        [pieBanks.bank4, pieSelectBalances4Data]
    ];
    // グラフ更新
    rePlot2 = jQuery.jqplot('chart2', 
    [pieSelectData], 
    {
        seriesColors:['#ff9f40','#ffcd56','#4bc0c0','#36a2eb'],
        title: '', 
        seriesDefaults: {
            shadow: false, 
            renderer: jQuery.jqplot.PieRenderer, 
            rendererOptions: { 
            startAngle: 180, 
            sliceMargin: 4, 
            showDataLabels: true } 
        }, 
        legend: { show:true, location: 'se' },
        // グラフ全体を囲むグリッドの設定        													
        grid: {														
            // グラフを囲む枠線の太さ、0で消える														
            borderWidth: 0,														
            // 背景色を透明に														
            background: 'transparent',														
            // 影もいらない														
            shadow: false,														
        }
    }
    );    
    rePlot2.replot();
    // 円グラフタイトルを設定
    document.getElementById("chart2_title").innerHTML = pieSelectYear + '/' + pieSelectMonth + '　total : ' + pieSelectTotal;
    
    document.getElementById(id).remove();
    
};
