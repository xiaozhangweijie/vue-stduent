<template>
  <div class="wrap">
    <nav>重点关注学生考试成绩统计图</nav>
    <div class="title">
      <span>切换班级</span>
      <button>1703C</button>
      <button>1703E</button>
      <button>1703E</button>
      <button>创建班级+</button>
    </div>
    <div class="content">
      <span>添加学生：</span>
      <input type="text" placeholder="输入姓名">
      <input type="text" placeholder="末位次数">
      <input type="text" placeholder="结对子，帮扶对象">
      <button>添加</button>
    </div>
    <div class="paint">
      <div id="chart1"></div>
      <div class="btn">
        <div>
          <button>添加成绩+</button>
          <button>添加分析解决方案+</button>
        </div>
        <button>查看和编辑该生所有成绩</button>
      </div>
    </div>
    <div class="paint1">
      <div id="chart2"></div>
      <!-- <chart ref="chart2" :options="histogram" :auto-resize="true"></chart> -->
      <div class="btn">
        <div>
          <button>添加成绩+</button>
          <button>添加分析解决方案+</button>
        </div>
        <button>查看和编辑该生所有成绩</button>
      </div>
    </div>
    <div class="container">   
  <div class="left">
        <span>新天成绩--XX同学</span>
        <div>
        <input type="text" placeholder="默认当前日期"><button>昨天</button>
        </div>
        <div>
            <span>技能</span>
            <input type="text" placeholder="数字">
        </div>
        <div>
            <span>理论</span>
            <input type="text" placeholder="0-100之间数字">
        </div>
        <div>
        <button>取消</button><button>确定</button>

        </div>
    </div>
    <div class="right">
        <span>新添分析--XX同学</span>
        <div>
          <input type="text" placeholder="默认当前日期">
          <button>昨天</button>
        </div>
        <div>
          <span>分析</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <span>解决方案</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>取消</button>
          <button>确定</button>
        </div>
    </div>
    </div>
  
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      orgOptions: {},
      histogram: {}
    };
  },
  mounted() {
   let a=document.getElementById("chart1");
   let b=document.getElementById("chart2");
     var charts=echarts.init(a);
     var charts2=echarts.init(b);
    let orgOptions = {
      title: {
        text: "XX同学的日周考成绩统计图",
        subtext: "仅供参考"
      },
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      legend: {
        data: ["技能", "理论"]
      },
      xAxis: {
        type: "category",
        data: [
          "08-01",
          "08-02",
          "08-03",
          "08-04",
          "08-05",
          "08-06",
          "08-07",
          "08-09",
          "08-10",
          "08-11",
          "08-12",
          "08-13"
        ]
      },
      yAxis: {
        type: "value"
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: "技能",
          data: [25, 60, 85, 21, 22, 65, 68, 82.2, 49, 20, 60, 21],
          type: "line",
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
        },
        {
          name: "理论",
          type: "line",
          data: [21, 49, 65, 22, 23, 67, 38, 60.38, 20, 15, 10, 2],
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
        }
      ]
    };
    let histogram = {
      title: {
        text: "XX同学的日周考成绩统计图",
        subtext: "仅供参考"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["技能", "理论"]
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          data: [
            "08-01",
            "08-02",
            "08-03",
            "08-04",
            "08-05",
            "08-06",
            "08-07",
            "08-09",
            "08-10",
            "08-11",
            "08-12",
            "08-13"
          ]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "技能",
          type: "bar",
          data: [25, 44, 65, 23, 25, 76.7, 35, 61, 25, 20, 10, 3.3],
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
        },
        {
          name: "理论",
          type: "bar",
          data: [18, 58, 85, 25, 28, 75, 78, 82.2, 34, 19, 60, 23],
          markPoint: {
            data: [
              { name: "年最高", value: 182.2, xAxis: 7, yAxis: 183 },
              { name: "年最低", value: 2.3, xAxis: 11, yAxis: 3 }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
        }
      ]
    };
       charts.setOption(orgOptions);
       charts2.setOption(histogram);
  }
};
</script>

<style scoped lang="scss">
@media screen and (min-width: 375px) {
  .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    nav {
      width: 100%;
      height: 44px;
      line-height: 44px;
      background: rgb(0, 118, 255) 100%;
      color: #fff;
      text-align: center;
    }
    .title {
      width: 90%;
      height: 100px;
      border: 1px solid #bbbbbb;
      margin-top: 5%;
      margin-left: 5%;
      display: flex;
      align-items: center;
      justify-content: center;
      justify-content: space-around;
      // button{
      //     margin-left:1%;
      // }
      button:nth-child(2) {
        width: 60px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        background-color: rgba(24, 144, 255, 1);
        text-align: center;
        border: none;
      }
      button:nth-child(3) {
        width: 60px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(230, 241, 252, 1);
        text-align: center;
        border: 1px solid rgba(163, 208, 253, 1);
      }
      button:nth-child(4) {
        width: 60px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(230, 241, 252, 1);
        text-align: center;
        border: 1px solid rgba(163, 208, 253, 1);
      }
      button:nth-child(5) {
        width: 70px;
        height: 40px;
        border-radius: 4px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        font-family: Microsoft Yahei;
        border: 1px solid rgba(187, 187, 187, 1);
      }
    }
    .content {
      width: 90%;
      height: 100px;
      margin-left: 5%;
      display: flex;
      justify-content: center;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      input {
        width: 150px;
        height: 40px;
        line-height: 40px;
      }
      button {
        width: 95px;
        height: 40px;
        line-height: 20px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(230, 241, 252, 1);
        text-align: center;
        border: 1px solid rgba(163, 208, 253, 1);
      }
    }
   .paint {
      width: 90%;
      margin-left: 5%;
      >#chart1{
        width:100%;
        height:300px;
      }
      > .echarts {
        width: 100%;
      }
      .btn {
        width: 100%;
        height: 50px;
        display: flex;
        background: #f2f1f1 100%;
        justify-content: space-between;
        div {
          width: 50%;
          line-height: 50px;
          button {
            margin-left: 5%;
            width: 150px;
            height: 35px;
            line-height: 35px;
            background: #fff;
            border: none;
          }
        }
        button {
          line-height: 35px;
          margin-right: 5%;
          width: 150px;
          height: 35px;
          background: #fff;
          border: none;
          margin-top: 0.5%;
        }
      }
    }
    .paint1 {
      width: 90%;
      margin-left: 5%;
      margin-top: 5%;
      > #chart2 {
        width: 100%;
        height:300px;
      }
      .btn {
        width: 100%;
        height: 50px;
        display: flex;
        background: #f2f1f1 100%;
        justify-content: space-between;
        div {
          width: 50%;
          line-height: 50px;
          button {
            margin-left: 5%;
            width: 150px;
            height: 35px;
            line-height: 35px;
            background: #fff;
            border: none;
          }
        }
        button {
          line-height: 35px;
          margin-right: 5%;
          width: 150px;
          height: 35px;
          background: #fff;
          border: none;
          margin-top: 0.5%;
        }
      }
    }
    .left{
        margin-top:10%;
        width:300px;
        display:flex;
        flex-direction: column;
        height:210px;
        margin-left:10%;
        line-height: 20px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(255, 255, 255, 1);
        text-align: center;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
        >div:nth-child(2){
            margin-top:5%;
            button{
        width: 95px;
        height: 30px;
        line-height: 20px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(230, 241, 252, 1);
        text-align: center;
        border: 1px solid rgba(163, 208, 253, 1);
        border:none;
            }
        }
        >div{
            margin-top:3%;
        }
        >div{
            input{
                width:50%;
                height:30px;
                line-height:30px;
            }
            button{
                width:50px;
                height:30px;
            }
        }
        div:nth-child(3){
            display:flex;
            justify-content: space-around;
        }
         div:nth-child(4){
            display:flex;
            justify-content: space-around;
        }
          div:nth-child(5){
              button:nth-child(1){
            width: 60px;
            height: 36px;
            line-height: 20px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 1);
            text-align: center;
            border: 1px solid rgba(217, 217, 217, 1);
              }
              button:nth-child(2){
            width: 60px;
            height: 36px;
            line-height: 20px;
            border-radius: 4px;
            background-color: rgba(24, 144, 255, 1);
            text-align: center;
            border:none;
              }
              text-align: right;
        }
    }
    .container{
        width:100%;
        display:flex;
        justify-content: space-around;
    }
    .right{
        width: 400px;
        height: 400px;
        line-height: 20px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(255, 255, 255, 1);
        text-align: center;
        margin-top:5%;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
          >div:nth-child(2){
            margin-top:5%;
            input{
                width:50%;
                height:30px;
                line-height:30px;
            }
            button{
        width: 95px;
        height: 30px;
        line-height: 20px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(230, 241, 252, 1);
        text-align: center;
        border: 1px solid rgba(163, 208, 253, 1);
        border:none;
            }
        }
        >div{
            margin-top:3%;
        }
        >div{
            >textarea{
                width:50%;
                height:100px;
                line-height:30px;
            }
            button{
                width:50px;
                height:30px;
            }
        }
        div:nth-child(3){
            display:flex;
            justify-content: space-around;
        }
         div:nth-child(4){
            display:flex;
            justify-content: space-around;
        }
          div:nth-child(5){
              button:nth-child(1){
            width: 60px;
            height: 36px;
            line-height: 20px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 1);
            text-align: center;
            border: 1px solid rgba(217, 217, 217, 1);
              }
              button:nth-child(2){
            width: 60px;
            height: 36px;
            line-height: 20px;
            border-radius: 4px;
            background-color: rgba(24, 144, 255, 1);
            text-align: center;
            border:none;
              }
              text-align: right;
        }
    }
  }
}
@media screen and (min-width: 1121px) {
  .wrap {
    width: 100%;
    height: 1700px;
    display: flex;
    flex-direction: column;
    nav {
      width: 100%;
      height: 44px;
      line-height: 44px;
      background: rgb(0, 118, 255) 100%;
      color: #fff;
      text-align: center;
    }
    .title {
      width: 90%;
      height: 100px;
      border: 1px solid #bbbbbb;
      margin-top: 5%;
      margin-left: 5%;
      display: flex;
      align-items: center;
      justify-content: center;
      justify-content: space-around;
      // button{
      //     margin-left:1%;
      // }
      button:nth-child(2) {
        width: 60px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        background-color: rgba(24, 144, 255, 1);
        text-align: center;
        border: none;
      }
      button:nth-child(3) {
        width: 60px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(230, 241, 252, 1);
        text-align: center;
        border: 1px solid rgba(163, 208, 253, 1);
      }
      button:nth-child(4) {
        width: 60px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(230, 241, 252, 1);
        text-align: center;
        border: 1px solid rgba(163, 208, 253, 1);
      }
      button:nth-child(5) {
        width: 70px;
        height: 40px;
        border-radius: 4px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        font-family: Microsoft Yahei;
        border: 1px solid rgba(187, 187, 187, 1);
      }
    }
    .content {
      width: 90%;
      height: 100px;
      margin-left: 5%;
      display: flex;
      justify-content: center;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      input {
        width: 150px;
        height: 40px;
        line-height: 40px;
      }
      button {
        width: 95px;
        height: 40px;
        line-height: 20px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(230, 241, 252, 1);
        text-align: center;
        border: 1px solid rgba(163, 208, 253, 1);
      }
    }
    .paint {
      width: 90%;
      margin-left: 5%;
      > .echarts {
        width: 100%;
      }
      .btn {
        width: 100%;
        height: 50px;
        display: flex;
        background: #f2f1f1 100%;
        justify-content: space-between;
        div {
          width: 50%;
          line-height: 50px;
          button {
            margin-left: 5%;
            width: 150px;
            height: 35px;
            line-height: 35px;
            background: #fff;
            border: none;
          }
        }
        button {
          line-height: 35px;
          margin-right: 5%;
          width: 150px;
          height: 35px;
          background: #fff;
          border: none;
          margin-top: 0.5%;
        }
      }
    }
    .paint1 {
      width: 90%;
      margin-left: 5%;
      margin-top: 5%;
      > .echarts {
        width: 100%;
      }
      .btn {
        width: 100%;
        height: 50px;
        display: flex;
        background: #f2f1f1 100%;
        justify-content: space-between;
        div {
          width: 50%;
          line-height: 50px;
          button {
            margin-left: 5%;
            width: 150px;
            height: 35px;
            line-height: 35px;
            background: #fff;
            border: none;
          }
        }
        button {
          line-height: 35px;
          margin-right: 5%;
          width: 150px;
          height: 35px;
          background: #fff;
          border: none;
          margin-top: 0.5%;
        }
      }
    }
    .left{
        margin-top:10%;
        width:300px;
        display:flex;
        flex-direction: column;
        height:210px;
        margin-left:10%;
        line-height: 20px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(255, 255, 255, 1);
        text-align: center;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
        >div:nth-child(2){
            margin-top:5%;
            button{
        width: 95px;
        height: 30px;
        line-height: 20px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(230, 241, 252, 1);
        text-align: center;
        border: 1px solid rgba(163, 208, 253, 1);
        border:none;
            }
        }
        >div{
            margin-top:3%;
        }
        >div{
            input{
                width:50%;
                height:30px;
                line-height:30px;
            }
            button{
                width:50px;
                height:30px;
            }
        }
        div:nth-child(3){
            display:flex;
            justify-content: space-around;
        }
         div:nth-child(4){
            display:flex;
            justify-content: space-around;
        }
          div:nth-child(5){
              button:nth-child(1){
            width: 60px;
            height: 36px;
            line-height: 20px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 1);
            text-align: center;
            border: 1px solid rgba(217, 217, 217, 1);
              }
              button:nth-child(2){
            width: 60px;
            height: 36px;
            line-height: 20px;
            border-radius: 4px;
            background-color: rgba(24, 144, 255, 1);
            text-align: center;
            border:none;
              }
              text-align: right;
        }
    }
    .container{
        width:100%;
        display:flex;
        justify-content: space-around;
    }
    .right{
        width: 400px;
        height: 400px;
        line-height: 20px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(255, 255, 255, 1);
        text-align: center;
        margin-top:5%;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
          >div:nth-child(2){
            margin-top:5%;
            input{
                width:50%;
                height:30px;
                line-height:30px;
            }
            button{
        width: 95px;
        height: 30px;
        line-height: 20px;
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(230, 241, 252, 1);
        text-align: center;
        border: 1px solid rgba(163, 208, 253, 1);
        border:none;
            }
        }
        >div{
            margin-top:3%;
        }
        >div{
            >textarea{
                width:50%;
                height:100px;
                line-height:30px;
            }
            button{
                width:50px;
                height:30px;
            }
        }
        div:nth-child(3){
            display:flex;
            justify-content: space-around;
        }
         div:nth-child(4){
            display:flex;
            justify-content: space-around;
        }
          div:nth-child(5){
              button:nth-child(1){
            width: 60px;
            height: 36px;
            line-height: 20px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 1);
            text-align: center;
            border: 1px solid rgba(217, 217, 217, 1);
              }
              button:nth-child(2){
            width: 60px;
            height: 36px;
            line-height: 20px;
            border-radius: 4px;
            background-color: rgba(24, 144, 255, 1);
            text-align: center;
            border:none;
              }
              text-align: right;
        }
    }
  }
}
</style>