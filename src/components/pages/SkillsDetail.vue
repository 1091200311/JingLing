<template>
  <div>
    <div class="modal">
      <div style="text-align: left">
        <div class="left">
          <div class="icon">
            <div class="outside">
              <img style="width: 70px;height: 70px;" :src="entertainment.pic">
            </div>
            <h3 class="name">{{entertainment.name}}</h3>
            <p class="desc">{{entertainment.desc}}</p>
          </div>
        </div>
        <div class="right">
          <div style="font-size: 22px">你可以这样问</div>
          <div>{{entertainment.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SkillsDetail",
      data(){
          return{
            id:this.$route.query.id,
            entertainment:[]
          }
      },
      created() {
          this.$http
            .get('http://localhost:8080/entertainment/'+this.id)
            .then(function (response) {
              this.entertainment = response.data.entertainment;
            })
      }
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
