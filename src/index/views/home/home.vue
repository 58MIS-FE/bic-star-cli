<template>
  <div class="home-index">
    <el-container>
       <!-- 顶部 -->
         <el-header>
           <Headers/>
         </el-header>
        <el-container>
           <!-- 侧边栏部分 -->
          <el-aside width>
            <Menu :navOpen="false"/>
          </el-aside>
           <!-- 渲染主要区域 -->
           <el-main>
            <router-view/>
          </el-main>
        </el-container>
          <el-footer><Footer/></el-footer>
      </el-container>
  </div>
</template>

<script>
import { getMethods, postMethods } from "./server.js";
// 引入左侧菜单导航组件
import Menu from "../../common/menu.vue";
// 引入顶部组件
import Headers from "../../common/header.vue";
// 引入底部组件
import Footer from "../../common/footer.vue";

export default {
  components: {
    Menu,
    Headers,
    Footer
  },
  data() {
    return {
      isShowArrow: true, //判断用户名下拉栏上三角和下三角展示的变量
      isCollapse: false, //控制左侧导航栏展开或者收起的变量
    };
  },
  mounted() {
    // 初始化函数
    this.init();
  },
  methods: {
    /**
     *  [init 初始化获取数据]
     *  @param  {[type]} e   [事件源]
     *
     */
    async init() {
      let res = await postMethods({
        des: "发送post请求"
      });
      console.log(res, "请求回来的结果");
    },

    /**
     *  [isShowArrow 头像旁三角号 展开与收起]
     *  @param  {[type]} e   [事件源]
     *
     */
    isShowArrowMethods(e) {
      this.isShowArrow = !e;
    },
    /**
     * 点击消息图标触发的弹框的事件
     *
     */
    open2() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "查看消息",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    
  }
};
</script>
<style scoped>
.el-header, .el-footer{
  color: #fff;
  line-height: 60px;
}

.home-index .el-aside {
  min-width: 65px;
  text-align: left;
  height: auto;
  overflow: hidden;
}

.el-main {
  color: #fff;
}

.el-container {
  overflow: hidden;
  height: 100%;
}
.home-index {
  height: 100%;
}
.el-footer{
  width: 100%;
}

</style>