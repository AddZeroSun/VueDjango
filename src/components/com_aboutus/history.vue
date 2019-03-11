<template id="history">
  <div class="history">
    <div class="history_container">
      <div class="box_label">
        <span class="box_title">公司历史</span>
      </div>
      <div class="box_content">
        <p class="content_text">
          xx公司于 xxxx 年由 xxx 创立，当时公司只有他一个人，
          从事的是木工业务，后来逐渐发展为成功的木地板、木制产品公司，最终成为现在的地板清洁设备制造商。
          纵观其历史，xx通过竭力追求新技术并营造鼓励创新的公司文化，始终致力于推动行业发展。
          如今，xx是设计、制造和销售清洁解决方案的全球领先企业，帮助打造更清洁、更安全、更卫生的世界。
        </p>
        <p>1870 年,xxx在美国明尼苏达州明尼阿波利斯东北部创办他的小木工厂</p>
        <p>1947 年,xx工程师发明首个工业用真空电动扫地机</p>
        <p>1978 年,xx发明其首个手推自走式洗地机</p>
        <p>1990 年,xx凭借其非溶剂涂层生态线（在北美可用），荣获“世界七大奇迹” 大奖</p>
        <p>2002 年,xx发明适用于硬地面清洁的 FaST® 泡沫洗地技术</p>
        <p>2008 年,xx发明 ec-H2O™ 技术，将水电解成一种高效的清洁剂</p>
        <p>2008 年,xx发明 ec-H2O™ 技术，将水电解成一种高效的清洁剂</p>
        <p>2012 年,xx公司推出具有创新性的 Orbio® 500-Sc，以此来取代许多每天使用的传统化学清洁剂</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.history {
  width: 100%;
  padding-bottom: 50px;
}
.history_container {
  width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
}
.box_label {
  width: 100%;
  height: 50px;
}
.box_title {
  line-height: 50px;
  padding: 2px 6px;
  font-size: 28px;
  color: #fff;
  background-color: #40c3bd;
  border-radius: 5px;
}
.box_content {
  box-sizing: border-box;
  width: 100%;
}
.box_content p {
  color: #666;
  font-size: 20px;
  line-height: 30px;
  text-indent: 2em;
}
</style>
