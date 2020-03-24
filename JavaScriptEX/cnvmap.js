//封装ajax为promise对象
function bjax() {
    return new Promise((resolve, reject) => {
        let ajax = new XMLHttpRequest()
        ajax.open('GET', 'http://lovebridge.migu.cn:18188/api/map?url=http:%2F%2Fgarnetcdn.migu.cn%2Flovebridge.html', 'true')
        ajax.send()
        ajax.onreadystatechange = function (r) {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    // console.log(JSON.parse(ajax.response))
                    resolve(JSON.parse(ajax.response).data.country[0].province)
                }
            }
        }
    })
}
//右边table部分
async function aa() {
    let res = await bjax()
    $('.table').append(template('tpl', res))
}
aa()

//图表部分
var map = null;
$.getJSON('https://data.jianshukeji.com/jsonp?filename=geochina/china.json&callback=?', async function (mapdata) {
    let res = await bjax()
    let data = []
    res.forEach(item => {
        data.push({ name: item.na, value: parseInt(item.tn.split(',')[0]) })
    });
    map = new Highcharts.Map('container', {
        title: {
            text: '新型冠状病毒感染的肺炎疫情最新情况',
            y: 45,
            floating: true,
            style: {
                'fontWeight': 'bold',
                'font-size': '46px',
               
            }
        },
        legend: {
            itemStyle: {
                'fontSize': '20px',
            },
            align: 'left',
            verticalAlign: 'bottom',
            // floating: true,
            layout: 'vertical',
            valueDecimals: 0,//图例的小数点
            symbolRadius: 0,
            symbolWidth: 45,
            symbolHeight: 20,
            itemMarginTop: 10,
            y: -150,
            squareSymbol: false,
            symbolPadding: 30
        },
        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        colorAxis: {
            dataClasses: [{
                to: 1,
                color: '#d6d6d6',
            }, {
                from: 1,
                to: 9,
                color: '#f2ab9a',
            }, {
                from: 9,
                to: 99,
                color: '#f96c4e',
            }, {
                from: 99,
                to: 999,
                color: '#f13c10',
            }, {
                from: 999,
                color: '#500b00',
            }],

        },
        //滑过显示
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.name}</span><br/>',
            footerFormat: '<span style="font-size:10px"></span><br/>',
            pointFormat: '{point.name}<br/>确诊 {point.value} 例',
            backgroundColor:'rgba(0,0,0,.5)',
            borderColor:'null',
            borderRadius:'10',
            style:{
                'color':'#fff',
                'fontSize':'26px',
            }
        },
        series: [{
            data: data,
            borderColor: '#fff',
            borderWidth: 1.2,
            cursor: 'pointer',
            dataLabels: {
                overflow: 'none',
                crop: 'false',
                align: 'center',
                enabled: true,
                'font-size': '32px',
                color: '#000',
                format: '{point.name}<br/>{point.value}',
                // verticalAlign: 'top',
                style: {
                    'fontSize': '16px',
                    'text-align': 'center',
                    "textOutline": "0px 0px contrast"
                }
            },
            states: {
                hover: {
                    color: '#fce2db'
                }
            },
            mapData: mapdata,
            joinBy: 'name',
            name: '中国地图'
        }]
    });
});

