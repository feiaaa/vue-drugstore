export const companyList = {
    "000000": "总公司",
    '202004':'香港公司',
    // "110000": "北京分公司",
    // "120000": "天津分公司",
    // "130000": "河北分公司",
    // "140000": "山西分公司",
    // "150000": "内蒙古分公司",
    // "210000": "辽宁分公司",
    // "210200": "大连分公司",
    // "220000": "吉林分公司",
    // "230000": "黑龙江分公司",
    // "310000": "上海分公司",
    // "320000": "江苏分公司",
    // "330000": "浙江分公司",
    // "330200": "宁波分公司",
    // "340000": "安徽分公司",
    // "350000": "福建分公司",
    // "350200": "厦门分公司",
    // "360000": "江西分公司",
    // "370000": "山东分公司",
    // "370200": "青岛分公司",
    // "410000": "河南分公司",
    // "420000": "湖北分公司",
    // "430000": "湖南分公司",
    // "440000": "广东分公司",
    // "440200": "深圳分公司",
    // "450000": "广西分公司",
    // "460000": "海南分公司",
    // "510000": "四川分公司",
    // "520000": "贵州分公司",
    // "530000": "云南分公司",
    // "610000": "陕西分公司",
    // "620000": "甘肃分公司",
    // "630000": "青海分公司",
    // "640000": "宁夏分公司",
    // "650000": "新疆分公司",
    // "660000": "重庆分公司",
    // "850000": "西藏分公司"
  }


export const buildOptionBar=(dataSource=[])=>{
    return ({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: dataSource.map(el=>el.month||el.key)
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: dataSource.map(el=>el.companyclaimPay||el.value)
        }]
    })
};

export const optionPie= {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};