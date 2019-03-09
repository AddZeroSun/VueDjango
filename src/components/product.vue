<template>
  <div class="product">
    <Banner></Banner>
    <ProductShow></ProductShow>
  </div>
</template>

<script>
import Banner from '@/components/banner'
import ProductShow from '@/components/com_product/productShow'
export default {
  components: {
    Banner,
    ProductShow
  },
  data () {
    return {
      a: 1
    }
  },
  watch: {
  },
  computed: {
  },
  methods: {
    click () {}
  },
  mounted () {

  }
}
</script>
<style scoped>
.product{
  margin-top: 80px;
}
</style>
