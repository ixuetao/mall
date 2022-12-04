<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banner" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeData} from 'network/home'

import HomeSwiper from './childComps/HomeSwiper'

export default {
    name: "Home",
    components: { 
      NavBar,
      HomeSwiper
    },
    data(){
      return{
        banner: []
      }
    },
    created(){
      getHomeData().then(res=>{
        this.banner = res.data.banner.list
      })

    }
}
</script>

<style scoped>
.home-nav{
  /* 引用变量 */
  background-color: var(--color-tint);
}
</style>