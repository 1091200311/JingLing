<template>
    <div class="content">
      <div class="icon">
        <img class="pic" src="https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/fridge800.png">
      </div>
      <div style="padding-top:20px">
        <div class="left">
        </div>
        <div class="right">
          <div class="title">你可以这样问</div>
          <el-cascader
            :options="options"
            v-model="selectedOptions"
            @change="handleChange">
          </el-cascader>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          options: [{
            value: 'Media',
            label: 'Media 美的',
            children: [{
              value:'BCD-319WTPZM',
              label:'BCD-319WTPZM',
              children:[{
                value:'open',
                label:'“天猫精灵，打开冰箱”'
              },
                {
                  value:'close',
                  label:"“精灵，关闭冰箱”"
                }],
            },{
              value:'BCD-505WTPZM',
              label:'BCD-505WTPZM',
            }]
          },{
            value: 'Media',
            label: 'Media 美的',
            children: [{
              value:'BCD-319WTPZM',
              label:'BCD-319WTPZM',
              children:[{
                value:'open',
                label:'“天猫精灵，打开冰箱”'
              },
                {
                  value:'close',
                  label:"“精灵，关闭冰箱”"
                }],
            },{
              value:'BCD-505WTPZM',
              label:'BCD-505WTPZM',
            }]
          }
          ],
          selectedOptions: [],
        }
      },
      methods: {
        handleChange(value) {
          console.log(value);
        }
      }
    }
</script>

<style scoped>
  li{
    list-style-type: none;
    line-height: 32px;
    font-size: 14px;
    font-weight: 200;
    color: #000;
    cursor: pointer;
  }
  .content{
    color: #000;
    background: #fff;
    position: relative;
    margin: 0 auto;
    padding: 60px;
    text-align: left;
  }
  div{
    display: block;
  }
  .left{
    display: inline-block;
    vertical-align: top;
    width: 45%;
  }
  .title{
    font-size: 22px;
    margin-top: 15px;
  }
  .right{
    display: inline-block;
    width: 52%;
    padding-left: 50px;
    box-sizing: border-box;
  }
  .pic{
    width: 70px;
    height: 70px;
    margin: 5px 0 0 5px;

  }
  .icon{
    position: relative;
    display: inline-block;
    width: 80px;
    height: 80px;
    left: 4px;
    top: 0;
  }

</style>
