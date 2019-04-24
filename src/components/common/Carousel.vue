<template>
  <div>
    <b-carousel id="carousel1"
                controls
                indicators
                background="#ababab"
                :interval="2000"
                img-width="1024"
                img-height="670"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
      <b-carousel-slide v-for="image in imageList" :key="image.id" :img-src="image.url">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        slide:0,
        sliding:null,
        imageList:[
          {
            "id":1,
            "url":"https://img.alicdn.com/tfs/TB1RQWwsgHqK1RjSZFPXXcwapXa-1200-450.png"
          },
          {
            "id":2,
            "url":"https://img.alicdn.com/tfs/TB1JB5vsirpK1RjSZFhXXXSdXXa-1200-450.png"
          },
          {
            "id":3,
            "url":"'https://img.alicdn.com/tfs/TB1JB5vsirpK1RjSZFhXXXSdXXa-1200-450.png"
          }
        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>

</style>
