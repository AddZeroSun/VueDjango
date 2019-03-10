<template id="productShow">
  <div class="productShow">
    <div class="show_container">
      <div class="show_box">
        <div class="box_img">
          <a href="javascript:void(0)">
            <img src="../../assets/img/Product_img1.jpg"
                 alt="产品展示">
          </a>
        </div>
        <div class="box_model">
          <p class="model_title">layuiAdmin</p>
          <p class="model_detail">完全基于 layui 实现而成的通用型后台管理模板，供单页版和 iframe 版两种选择。 其中 layuiAdmin pro （单页版）是完全基于 layui 架构而成的后台管理模板系统，可以更轻松地实现前后端分离，它是 mvc 的简化版，全面接管 视图 和 页面路由，并可自主完成数据渲染，服务端通常只负责数据接口，而前端只需专注视图和事件交互，所有的页面动作都是在一个宿主页面中完成，因此这赋予了 layuiAdmin 单页面应用开发的能力。layuiAdmin.std（iframe 版） 是完全基于 layui 架构而成的通用型后台管理模板系统，采用传统的 iframe 多页面开发模式，可更快速直接地开发网页后台应用程序，无需过多地学习成本，简单高效，撸起袖子直接干。</p>
          <div class="model_link">
            <a href="javascript:void(0)">产品详情></a>
          </div>
        </div>
      </div>
      <div class="show_box">
        <div class="box_img">
          <a href="javascript:void(0)">
            <img src="../../assets/img/Product_img1.jpg"
                 alt="产品展示">
          </a>
        </div>
        <div class="box_model">
          <p class="model_title">layuiAdmin</p>
          <p class="model_detail">完全基于 layui 实现而成的通用型后台管理模板，供单页版和 iframe 版两种选择。 其中 layuiAdmin pro （单页版）是完全基于 layui 架构而成的后台管理模板系统，可以更轻松地实现前后端分离，它是 mvc 的简化版，全面接管 视图 和 页面路由，并可自主完成数据渲染，服务端通常只负责数据接口，而前端只需专注视图和事件交互，所有的页面动作都是在一个宿主页面中完成，因此这赋予了 layuiAdmin 单页面应用开发的能力。layuiAdmin.std（iframe 版） 是完全基于 layui 架构而成的通用型后台管理模板系统，采用传统的 iframe 多页面开发模式，可更快速直接地开发网页后台应用程序，无需过多地学习成本，简单高效，撸起袖子直接干。</p>
          <div class="model_link">
            <a href="javascript:void(0)">产品详情></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.productShow {
  width: 100%;
  padding-bottom: 50px;
}
.show_container {
  width: 1000px;
  margin: 0 auto;
}
.show_box {
  /* float: left; */
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding-bottom: 50px;
  border-bottom: 1px solid #e8e8e8;
}
.box_img {
  float: left;
  width: 50%;
  padding-top: 10px;
  box-sizing: border-box;
}
.box_img img {
  max-width: 80%;
  height: auto;
}
.box_model {
  float: left;
  width: 50%;
  box-sizing: border-box;
}
.model_title {
  color: #666;
  font-size: 30px;
  line-height: 80px;
}
.model_detail {
  color: #999;
  font-size: 16px;
  line-height: 28px;
  padding-bottom: 30px;
}
.model_link {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.model_link a {
  color: #40c3bd;
  text-decoration: none;
  padding: 6px 10px;
  border: 1px solid #40c3bd;
  border-radius: 3px;
}
</style>
