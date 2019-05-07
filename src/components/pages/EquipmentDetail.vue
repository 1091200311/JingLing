<template>
    <div class="container">
      <div class="modal">
        <div class="content">
          <div class="icon">
            <img  style="width: 70px;height: 70px;margin: 5px 0 0 5px;" src="https://ai-genie-center.oss-cn-hangzhou.aliyuncs.com/app-data/iot-center/fridge800.png">
          </div>
          <div class="left">
            <div style="font-size: 22px;margin-top: 15px">你可以这样问</div>
            <div></div>
          </div>
          <div ckass="right"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "EquipmentDetail"
    }
</script>

<style scoped>
  .right{
    display: inline-block;
    vertical-align: top;
    width: 35%;
  }
  .desc{
    font-size: 14px;
    line-height: 1.5;
    width: 80%;
  }
  h3{
    display: block;
    font-size: 1.17em;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold;
  }
  .name{
    font-size: 30px;
    margin: 60px 0 20px 0;
  }
  .icon{
    position: relative;
    display: inline-block;
    width: 400px;
    height: 80px;
  }
  .modal{
    display: block;
    position: fixed;
    top: 50%;
    left: 10%;
    width: 80%;
    max-width: 900px;
    height: auto;
    z-index: 2000;
  }
  .outside{
    border: 2px solid rgba(0,130,255,.4);
    left: 0;
    top: 0;
    width: 76px;
    height: 76px;
  }
  .left{
    display: inline-block;
    vertical-align: top;
    width: 60%;
  }

</style>
