<template id="main">
  <div class="main">
    <Carousel></Carousel>
    <NewProduct></NewProduct>
    <Cooperation></Cooperation>
  </div>
</template>

<script>
import Carousel from '@/components/com_home/carousel'
import NewProduct from '@/components/com_home/newProduct'
import Cooperation from '@/components/com_home/cooperation'

export default {
  components: {
    Carousel,
    NewProduct,
    Cooperation
  },
  data () {
    return {
      a: 1
    }
  },
  watch: {},
  computed: {},
  methods: {},
  mounted () {}
}
</script>

<style scoped>
.main {
  width: 100%;
  height: auto;
}
</style>
