<template>
  <tab-bar>
      <tabbar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </tabbar-item>
    
      <tabbar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>      
      </tabbar-item>

      <tabbar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      
      <tabbar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
        <div slot="item-text">个人</div>
      </tabbar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabbarItem from 'components/common/tabbar/TabBarItem'

export default {
    name: 'MainTabBar',
    components:{TabBar, TabbarItem}
}
</script>

<style scoped>

</style>