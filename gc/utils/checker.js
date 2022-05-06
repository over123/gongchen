var zone = {
    "0": {
        "x": {"lt": "", "rb": ""},
    },
    "1": {
        "a": {"lt": "0.4864864864864865, 0.3207990599294947", "rb": "0.5734430082256169, 0.4007050528789659"},
    },
    "2": {
        "a": {"lt": "0.11510416666666666, 0.17552083333333332", "rb": " 0.20989583333333334, 0.2708333333333333"},
    },
};
var checker = {
    init: function () {
        // this.cH = $(window).height();//浏览器当前窗口可视区域高度
        this.cW =  document.body.clientWidth;//浏览器当前窗口文档的高度
        this.zone = zone['1'];
    },
    changePage: function (page) {
        this.zone = zone[page];
    },
    checkChoose: function (e) {
        var pos = this.checkPosition(e);
        for(var idx in this.zone){
            var val = this.zone[idx];
            var lt = val.lt.split(',');
            var rb = val.rb.split(',');
            if(pos.x>=lt[0] && pos.y>lt[1] && pos.x<=rb[0] && pos.y<=rb[1]){
                return idx;
            }
        }
        return '';
    },
    checkPosition: function (e) {
        var x = e.clientX;
        var y = e.clientY;
        var perX = x / this.cW;
        var perY = y / this.cW;
        return {x: perX, y: perY};
    }
};