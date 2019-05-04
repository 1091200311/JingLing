<template>
  <div>
    <div class="modal">
      <div style="text-align: left">
        <div class="left">
          <div class="icon">
            <div class="outside">
              <img style="width: 70px;height: 70px;" src="http://ailabs.alibabausercontent.com/images/26734/1556588950216.jpg">
            </div>
            <h3 class="name">立夏吃什么好</h3>
            <p class="desc">天猫精灵，立夏吃什么好？ 主人，立夏宜吃西瓜，忌操心。</p>
          </div>
        </div>
        <div class="right">
          <div style="font-size: 22px">你可以这样问</div>
          <div>立夏吃什么好</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SkillsDetail"
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
