<template xmlns:b-col="http://www.w3.org/1999/html">
    <div>
      <v-carousel></v-carousel>
      <div style="padding-top: 50px">
        <div class="content">
          <div style="text-align: center;font-size: 30px">
            <div>云端服务功能</div>
            <p>小小的精灵在云端有大大的知识图谱，她的能力超乎你想象</p>
          </div>
          <div>
            <b-card no-body>
              <b-tabs pills card style="text-align: center;">
                <b-tab title="娱乐">
                  <b-card-text>
                  <b-row>
                    <b-col cols="3" v-for="entertainment in entertainmentList" :key="entertainment.id">
                      <router-link :to="'/s/'+entertainment.id">
                      <div style="position: relative;padding: 20px;box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);">
                        <img class="tip" :src="entertainment.url">
                        <div class="name">{{entertainment.name}}</div>
                        <p class="desc">{{entertainment.desc}}</p>
                      </div>
                      </router-link>
                    </b-col>
                  </b-row>
                </b-card-text>
                </b-tab>
                <b-tab title="生活"><b-card-text>
                  <b-row>
                    <b-col cols="3" v-for="life in lifeList" :key="life.id">
                      <router-link :to="'s'/+life.id">
                      <div style="position: relative;padding: 20px;box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);">
                        <img class="tip" :src="life.url">
                        <div class="name">{{life.name}}</div>
                        <p class="desc">{{life.desc}}</p>
                      </div>
                      </router-link>
                    </b-col>
                  </b-row>
                </b-card-text>
                </b-tab>
                <b-tab title="教育"><b-card-text>
                  <b-row>
                    <b-col cols="3" v-for="education in educationList" :key="education.id">
                      <router-link :to="'s'/+education.id">
                      <div style="position: relative;padding: 20px;box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);">
                        <img class="tip" :src="education.url">
                        <div class="name">{{education.name}}</div>
                        <p class="desc">{{education.desc}}</p>
                      </div>
                      </router-link>
                    </b-col>
                  </b-row>
                </b-card-text></b-tab>
                <b-tab title="游戏"><b-card-text>
                  <b-row>
                    <b-col cols="3" v-for="games in gameList" :key="games.id">
                      <el-button type="text" @click="open">
                      <div style="position: relative;padding: 20px;box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);">
                        <img class="tip" :src="games.url">
                        <div class="name">{{games.name}}</div>
                        <p class="desc">{{games.desc}}</p>
                      </div>
                      </el-button >
                    </b-col>
                  </b-row>
                </b-card-text></b-tab>
                <b-tab title="工具"><b-card-text>
                  <b-row>
                    <b-col cols="3" v-for="tools in toolList" :key="tools.id">
                      <b-buttton v-b-modal.modal-1>
                      <div style="position: relative;padding: 20px;box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);">
                        <img class="tip" :src="tools.url">
                        <div class="name">{{tools.name}}</div>
                        <p class="desc">{{tools.desc}}</p>
                      </div>
                      </b-buttton>
                    </b-col>
                    <b-modal id="modal-1">
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
                    </b-modal>
                  </b-row>
                </b-card-text></b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import vCarousel from '../common/Carousel';
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
      components: {
        vCarousel,
      },
      data() {
        return {
          entertainmentList: [
            {
              "id": 1,
              "url": "http://ailabs.alibabausercontent.com/images/36062/1551065148969.png",
              "name": "精灵点歌台",
              "desc": "“点歌台”",
            },
            {
              "id": 2,
              "url": "http://ailabs.alibabausercontent.com/images/22370/1550564970673.png",
              "name": "超级方言",
              "desc": "“超级语言，来句河南话”"
            },
            {
              "id": 3,
              "url": "http://ailabs.alibabausercontent.com/images/25434/1545989125974.png",
              "name": "记忆王者",
              "desc": "“打开记忆王者”"
            },
            {
              "id": 4,
              "url": "http://ailabs.alibabausercontent.com/images/23361/1543895935384.png",
              "name": "幸运数字",
              "desc": "“打开幸运数字”"
            },
            {
              "id": 5,
              "url": "http://ailabs.alibabausercontent.com/images/20636/1543591040749.png",
              "name": "每周热歌榜",
              "desc": "“每周热歌榜”"
            },
            {
              "id": 6,
              "url": "http://ailabs.alibabausercontent.com/images/20636/1543591010903.png",
              "name": "每周新歌榜",
              "desc": "“每周新歌榜”"
            },
            {
              "id": 7,
              "url": "http://ailabs.alibabausercontent.com/images/1987/1541502657847.png",
              "name": "单身签到",
              "desc": "“打开单身签到”"
            },
            {
              "id": 8,
              "url": "http://ailabs.alibabausercontent.com/images/20636/1543590930639.png",
              "name": "来首好歌",
              "desc": "“来首好歌”"
            },
          ],
          lifeList: [
            {
              "id": 1,
              "url": "http://ailabs.alibabausercontent.com/images/26734/1552900535439.jpg",
              "name": "二里 微光",
              "desc": "“微光再讲”"
            },
            {
              "id": 2,
              "url": "http://ailabs.alibabausercontent.com/images/26734/1552900535439.jpg",
              "name": "八段锦 口令版",
              "desc": "“八段锦”"
            },
            {
              "id": 3,
              "url": "http://ailabs.alibabausercontent.com/images/26745/1551972238238.jpeg",
              "name": "女王节栏目",
              "desc": "“女王节栏目”"
            },
            {
              "id": 4,
              "url": "http://ailabs.alibabausercontent.com/images/26732/1551925942443.jpg",
              "name": "张德芬访谈",
              "desc": "“张德芬访谈”"
            },
          ],
          educationList: [
            {
              "id": 1,
              "url": "http://ailabs.alibabausercontent.com/images/42954/1554092991849.png",
              "name": "汉源语文",
              "desc": "“汉源语文”"
            },
            {
              "id": 2,
              "url": "http://ailabs.alibabausercontent.com/images/1147/1553504365134.png",
              "name": "义方小学英语",
              "desc": "“义方小学英语”"
            },
            {
              "id": 3,
              "url": "http://ailabs.alibabausercontent.com/images/44222/1555491683550.png",
              "name": "高考倒计时",
              "desc": "“高考倒计时”"
            },
            {
              "id": 4,
              "url": "http://ailabs.alibabausercontent.com/images/1147/1551341169625.png",
              "name": "义方幼儿阅读",
              "desc": "“义方幼儿阅读”",
            }
          ],
          gameList: [
            {
              "id": 1,
              "url": "http://ailabs.alibabausercontent.com/images/7660/1550200120211.png",
              "name": "脑筋急转弯",
              "desc": "“脑筋急转弯 开始游戏”"
            },
            {
              "id": 2,
              "url": "http://ailabs.alibabausercontent.com/images/7660/1550200120211.png",
              "name": "脑筋急转弯",
              "desc": "“脑筋急转弯 开始游戏”"
            },
            {
              "id": 3,
              "url": "http://ailabs.alibabausercontent.com/images/7660/1550200120211.png",
              "name": "脑筋急转弯",
              "desc": "“脑筋急转弯 开始游戏”"
            },
            {
              "id": 4,
              "url": "http://ailabs.alibabausercontent.com/images/7660/1550200120211.png",
              "name": "脑筋急转弯",
              "desc": "“脑筋急转弯 开始游戏”"
            }
          ],
          toolList: [
            {
              "id": 1,
              "url": "http://ailabs.alibabausercontent.com/images/38577/1552706662423.png",
              "name": "好型",
              "desc": "“天猫精灵，好身材{我的体重是多少}”"
            },
            {
              "id": 2,
              "url": "http://ailabs.alibabausercontent.com/images/26734/1556588950216.jpg",
              "name": "好型",
              "desc": "“天猫精灵，好身材{我的体重是多少}”"
            },
            {
              "id": 3,
              "url": "http://ailabs.alibabausercontent.com/images/38577/1552706662423.png",
              "name": "立夏吃什么",
              "desc": "“立夏吃什么”"
            },
            {
              "id": 4,
              "url": "http://ailabs.alibabausercontent.com/images/38577/1552706662423.png",
              "name": "好型",
              "desc": "“天猫精灵，好身材{我的体重是多少}”"
            },
          ]
        }
      },
      methods:{
        open(){
          this.$alert('<div>\n' +
            '                        <div style="text-align: left">\n' +
            '                          <div class="left">\n' +
            '                            <div class="icon">\n' +
            '                              <div class="outside">\n' +
            '                                <img style="width: 70px;height: 70px;" src="http://ailabs.alibabausercontent.com/images/26734/1556588950216.jpg">\n' +
            '                              </div>\n' +
            '                              <h3 class="name">立夏吃什么好</h3>\n' +
            '                              <p class="desc">天猫精灵，立夏吃什么好？ 主人，立夏宜吃西瓜，忌操心。</p>\n' +
            '                            </div>\n' +
            '                          </div>\n' +
            '                          <div class="right">\n' +
            '                            <div style="font-size: 22px">你可以这样问</div>\n' +
            '                            <div>立夏吃什么好</div>\n' +
            '                          </div>\n' +
            '                        </div>\n' +
            '                      </div>', {
            dangerouslyUseHTMLString: true
          });
        }
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
  }
  .icon{
    position: relative;
    display: inline-block;
    width: 400px;
    height: 80px;
  }
  .modal{
    display: block;
    position: relative;
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
  .desc{
    margin-top: 10px;
    font-size: 14px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .name{
    margin-top: 68px;
    font-size: 20px;
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .tip{
    position: absolute;
    right: 20px;
    top: 20px;
    width: 44px;
    height: 44px;
    border: 4px solid rgba(0,130,255,.2);
    border-radius: 100%;
  }
  p{
    margin: 18px 0 28px 0;
    font-size: 14px;
    color: #b0b0b0;
  }
  .content{
    max-width: 1200px;
    margin: auto;
    padding: 0 30px 0;
  }
</style>
