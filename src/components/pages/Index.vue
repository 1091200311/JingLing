<template>
  <div>
    <div class="container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="音乐" name="first">
          <div class="container">
          <el-tabs v-model="activeName1" @tab-click="handleClick">
            <el-tab-pane label="推荐" name="first">
              <b-carousel id="carousel1"
                          controls
                          indicators
                          background="#ababab"
                          :interval="1000"
                          img-width="1024"
                          img-height="670"
                          v-model="slide"
                          @sliding-start="onSlideStart"
                          @sliding-end="onSlideEnd">
                <b-carousel-slide v-for="image in imageList" :key="image.id" :img-src="image.url">
                </b-carousel-slide>
              </b-carousel>
            </el-tab-pane>
            <el-tab-pane label="排行" name="second">
              <div class="container">
                <b-row>
                  <b-col  class="box" cols="2" v-for="music in musicList" :key="music.id" style="margin: 40px auto;clear: both;min-height: 320px;">
                    <div style="box-shadow: 0 0 10px 0 rgba(0,0,0,0.1)">
                      <h3 class="title">{{music.album}}</h3>
                      <ul style="font-size: 14px">
                      <li class="song">{{music.first}}</li>
                      <li class="song">{{music.second}}</li>
                      <li class="song">{{music.third}}</li>
                      </ul>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </el-tab-pane>
          </el-tabs>
          </div>
        </el-tab-pane>
        <el-tab-pane label="节目" name="second"></el-tab-pane>
        <el-tab-pane label="儿童" name="third"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
      data() {
        return {
          slide:0,
          sliding:null,
          activeName: 'first',
          activeName1:'first',
          imageList:[
            {
              "id":1,
              "url":"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1254898.jpg?max_age=2592000"
            },
            {
              "id":2,
              "url":"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1252236.jpg?max_age=2592000"
            },
            {
              "id":3,
              "url":"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1254976.jpg?max_age=2592000"
            },
            {
              "id":4,
              "url":"http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1254976.jpg?max_age=2592000"
            }
            ],
            musicList:[
            {
              "id":1,
              "album":"热门榜单",
              "first":"歌颂者",
              "second":"Me",
              "third":"心如止水"
            },
            {
              "id":2,
              "album":"新歌推荐",
              "first":"Hard to Get",
              "second":"免费",
              "third":"绿色"
            },
            {
              "id":3,
              "album":"欧美",
              "first":"SOS",
              "second":"On My Way",
              "third":"Hurt 2B Human"
            },
            {
              "id":4,
              "album":"内地",
              "first":"Super Talk",
              "second":"皎皎",
              "third":"不了了之"
            },
          ]
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>
  .song{
    position: relative;
    /*padding-left: 15px;*/
    margin-bottom: 27px;
    list-style: none;
    text-align: center;
  }
  .title{
    position: relative;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    text-align: center;
  }
  .box{
    position: relative;
    height: 500px;
    overflow: hidden;
  }

</style>
