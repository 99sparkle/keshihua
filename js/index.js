// 立即执行函数，防止变量污染 (function() {})();

// 左一
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.指定配置项和数据
  var option = {
    title: {
     
    },
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLabel: {
        color: "#4c9bfd"
      },

    },
    yAxis: {
      type: 'category',
      data: ['少年','青年','中年','老年'],
      axisLabel: {
        color: "#4c9bfd"
      },
    },
    series: [
      {
        name: '2000',
        type: 'bar',
        data: [98939208,105609039, 50850185,25722232]
      },
      {
        name: '1900',
        type: 'bar',
        data: [41146112, 24973589,8326513,1816607]
      }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 右一
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));

  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474"];
  // 2.指定配置项和数据
  var option = {
    grid: {
      top: "10%",
      left: '15%',
      bottom: '10%',
      // containLabel: true
    },
    xAxis: {
      // 不显示x轴相关信息
      show: false
    },
    yAxis: [{
      type: 'category',
      // y轴数据反转，与数组的顺序一致
      inverse: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "#fff"
      },
      data: ["1900", "2000"]
    }, {
      // y轴数据反转，与数组的顺序一致
      inverse: true,
      show: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "#fff"
      },
      data: [76,281]
    }],
    series: [{
        // 第一组柱子（条状）
        name: '条',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 30,
        // 柱子的宽度
        barWidth: 10,
        // 层级 相当于z-index
        yAxisIndex: 0,
        // 柱子更改样式
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子的对象
            // dataIndex 是当前柱子的索引号
            // console.log(params);
            return myColor[params.dataIndex];
          }
        },
        data: [21, 79],
        // 显示柱子内的百分比文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动解析为数据（data内的数据）
          formatter: "{c}%"
        }
      },
      {
        // 第二组柱子（框状 border）
        name: '框',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 14,
        // 层级 相当于z-index
        yAxisIndex: 1,
        // 柱子修改样式
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 2,
          barBorderRadius: 15,
        },
        data: [100, 100, 100, 100, 100]
      }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 左二
(function () {
  // 年份对应数据
  var yearData = [{
      year: "1900", // 年份
      data: [
        // 两个数组是因为有两条线
        [4619544,4465783,4057669,3774846,3694038,3389280,2918964,2633883,2261070,1868413,1571038,1161908,916571,672663,454747,268211,127435,44008,15164],
        [4589196,4390483,4001749,3801743,3751061,3236056,2665174,2347737,2004987,1648025,1411981,1064632,887508,640212,440007,265879,132449,48614,20093]
      ]
    },
    {
      year: "2000", // 年份
      data: [
        // 两个数组是因为有两条线
        [9735380,10552146,10563233,10237419,9731315,9659493,10205879,11475182,11320252,9925006,8507934,6459082,5123399,4453623,3792145,2912655,1902638,970357,336303],
        [9310714,10069564,10022524,9692669,9324244,9518507,10119296,11635647,11488578,10261253,8911133,6921268,5668961,4804784,5184855,4355644,3221898,1981156,1064581]
      ]
    }
  ];

  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '男',
        data: yearData[0].data[0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '女',
        data: yearData[0].data[1]
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  // 5.点击切换2020 和 2021 的数据
  $('.line h2 a').on('click', function () {
    // console.log($(this).index());
    // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 选中年份高亮
    $('.line h2 a').removeClass('a-active');
    $(this).addClass('a-active');

    // 需要重新渲染
    myChart.setOption(option);
  })
})();

// 右二
(function () {
  var myChart = echarts.init(document.querySelector('.pie3 .chart'));
  var option = {
    title: {
   
    },
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      bottom: 0,
      left: 10,
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 38915235, name: '1900-男' },
          { value: 37347586, name:'1900-女'},
          { value: 137863387, name: '2000-男'},
          { value: 143557276, name: '2000-女' },
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
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 左三
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      // 垂直居中,默认水平居中
      // orient: 'vertical',

      bottom: 0,
      left: 10,
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    series: [{
      name: '1900年-年龄分布',
      type: 'pie',
      // 设置饼形图在容器中的位置
      center: ["50%", "42%"],
      // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      // 图形上的文字
      label: {
        show: false,
        position: 'center'
      },
      // 链接文字和图形的线
      labelLine: {
        show: false
      },
      data: [{
          value: 33701013,
          name: "0岁以上"
        },
        {
          value: 24636193,
          name: "20-39岁"
        },
        {
          value: 12992054,
          name: "40-59岁"
        },
        {
          value: 4545789,
          name: "60-79岁"
        },
        {
          value: 387763,
          name: "80岁以上"
        }
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 右三
(function () {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      // 垂直居中,默认水平居中
      // orient: 'vertical',

      bottom: 0,
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    series: [{
      name: '2000年-年龄分布',
      type: 'pie',
      // 设置饼形图在容器中的位置
      center: ["50%", "42%"],
      // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      // 图形上的文字
      label: {
        show: false,
        position: 'center'
      },
      // 链接文字和图形的线
      labelLine: {
        show: false
      },
      data: [{
          value: 80183649,
          name: "0岁以上"
        },
        {
          value: 81669563,
          name: "20-39岁"
        },
        {
          value: 73794506,
          name: "40-59岁"
        },
        {
          value: 36296066,
          name: "60-79岁"
        },
        {
          value: 9476933,
          name: "80岁以上"
        }
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();


