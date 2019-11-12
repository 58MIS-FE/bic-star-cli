<template>
    <el-menu
      class="el-menu-vertical-demo"
      :unique-opened="true"
      :router="true"
      text-color="#fff"
      :collapse="isCollapse"
      :collapse-transition="false"
      :default-active="nowPage"
    >
      <div class="tit">
        <i class="el-icon-rank" @click="isOpenCloseF"></i>
      </div>
      <el-menu-item :index="item.path" v-for="item in routes" :key="item.name">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
      
      
    </el-menu>
</template>

<script>
import  routeItem  from '../router/router'
export default {
     data() {
    return {
      isShowArrow: true, //判断用户名下拉栏上三角和下三角展示的变量
      isCollapse: false, //控制左侧导航栏展开或者收起的变量
      nowPage:'/homepage', //进行菜单高亮设置的变量,
      routes:''
    };
  },
    mounted(){
      this.routes = routeItem
    },
    props:{navOpen:''},
    methods:{
      isOpenCloseF(){
        
        if(!this.navOpen) return
        this.isCollapse = !this.isCollapse
      }
    }

};
</script>

<style>
.tit {
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  color: #fff;
  text-align: center;
}
.tit > i{
  cursor: pointer;
}
.leftSideOpen {
  height: 100%;
}
.leftSideClose {
  height: 100%;
  width: 65px;
}
.el-menu {
  border: 0 none;
  transition: all .5s;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>

