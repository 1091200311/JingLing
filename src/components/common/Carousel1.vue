<template>
    <div>
      <b-row style="margin: 40px auto;clear: both;min-height: 320px;">
        <b-col cols="3" v-for="brands in brandsList" :key="brands.id">
            <div class="list">
              <img class="tip" :src="brands.url">
              <p class="name">{{brands.name}}</p>
            </div>
        </b-col>
      </b-row>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          brandsList: [
            {
              "id": 1,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/fridge800.png",
              "name":"冰箱",
            },
            {
              "id": 2,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/outlet800.png",
              "name": "插座",
            },
            {
              "id": 3,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/scale_800.png",
              "name": "秤",
            },
            {
              "id": 4,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/kitchenventilator800.png",
              "name": "抽油烟机",
            },
            {
              "id": 5,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/dehumidifier800.png",
              "name": "除湿机",
            },
            {
              "id": 6,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/sensor800.png",
              "name": "传感器",
            },
            {
              "id": 7,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/window800.png",
              "name": "窗",
            },
            {
              "id": 8,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/curtain800.png",
              "name": "窗帘",
            },
          ],
        }
      }
    }
</script>

<style scoped>
  .list{
    clear: both;
    min-height: 320px;
    position: relative;
    display: inline-block;
    width: 215px;
    height: 265px;
    margin: 0 10px 20px 10px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
    transition: 1s box-shadow;
    cursor: pointer;
  }
  .name{
    position: absolute;
    text-align: center;
    width: 100%;
    bottom:24px;
  }
  .tip{
    position: relative;
    width: 180px;
    height: 180px;
    top: 22px;
    margin: auto;
  }

</style>
