<template id="aboutus">
  <div class="aboutus">
    <Banner></Banner>
    <Company></Company>
    <History></History>
    <Joinus></Joinus>
  </div>
</template>

<script>
import Banner from '@/components/banner'
import Company from '@/components/com_aboutus/company'
import History from '@/components/com_aboutus/history'
import Joinus from '@/components/com_aboutus/joinus'
export default {
  components: {
    Banner,
    Company,
    History,
    Joinus
  }
}
</script>

<style scoped>
</style>
