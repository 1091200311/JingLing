<template>
    <div>
      <b-row style="margin: 40px auto;clear: both;min-height: 320px;">
        <b-col cols="3" v-for="brands in brandsList" :key="brands.id">
          <router-link :to="'/e/'+brands.id">
            <div class="list" :id="brands.BrandsName">
              <img class="tip" :src="brands.url">
              <p class="name">{{brands.name}}</p>
            </div>
          </router-link>
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
              "BrandsName":"fridge"
            },
            {
              "id": 2,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/outlet800.png",
              "name": "插座",
              "BrandsName":"Socket"
            },
            {
              "id": 3,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/scale_800.png",
              "name": "秤",
              "BrandsName":"balance"
            },
            {
              "id": 4,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/kitchenventilator800.png",
              "name": "抽油烟机",
              "BrandsName":"Smoke lampblack machine"
            },
            {
              "id": 5,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/dehumidifier800.png",
              "name": "除湿机",
              "BrandsName":"Dehumidifier"
            },
            {
              "id": 6,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/sensor800.png",
              "name": "传感器",
              "BrandsName":"sensor"
            },
            {
              "id": 7,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/window800.png",
              "name": "窗",
              "BrandsName":"window"
            },
            {
              "id": 8,
              "url": "https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/curtain800.png",
              "name": "窗帘",
              "BrandsName":"Window curtains"
            },
          ],
        }
      }
    }
</script>

<style scoped>
  /*.right{*/
  /*  display: inline-block;*/
  /*  vertical-align: top;*/
  /*  width: 35%;*/
  /*}*/
  /*.desc{*/
  /*  font-size: 14px;*/
  /*  line-height: 1.5;*/
  /*  width: 80%;*/
  /*}*/
  /*h3{*/
  /*  display: block;*/
  /*  font-size: 1.17em;*/
  /*  -webkit-margin-before: 1em;*/
  /*  -webkit-margin-after: 1em;*/
  /*  -webkit-margin-start: 0;*/
  /*  -webkit-margin-end: 0;*/
  /*  font-weight: bold;*/
  /*}*/
  /*.name{*/
  /*  font-size: 30px;*/
  /*  margin: 60px 0 20px 0;*/
  /*}*/
  /*.icon{*/
  /*  position: relative;*/
  /*  display: inline-block;*/
  /*  width: 400px;*/
  /*  height: 80px;*/
  /*}*/
  /*.modal{*/
  /*  display: block;*/
  /*  position: fixed;*/
  /*  top: 50%;*/
  /*  left: 10%;*/
  /*  width: 80%;*/
  /*  max-width: 900px;*/
  /*  height: auto;*/
  /*  z-index: 2000;*/
  /*}*/
  /*.outside{*/
  /*  border: 2px solid rgba(0,130,255,.4);*/
  /*  left: 0;*/
  /*  top: 0;*/
  /*  width: 76px;*/
  /*  height: 76px;*/
  /*}*/
  /*.left{*/
  /*  display: inline-block;*/
  /*  vertical-align: top;*/
  /*  width: 60%;*/
  /*}*/
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
