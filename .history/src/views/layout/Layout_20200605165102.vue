<template>
 <div>
<nav-header></nav-header>
<nav-righter></nav-righter>
<nav-below></nav-below>
<router-view></router-view>
 </div>
</template>

<script>
import NavHeader from '../../components/navHeader/NavHeader';
import NavRighter from '../../components/navHeader/NavRighter';
import NavBelow from '../../components/navHeader/NavBelow';
 export default {
   name: 'Layout',
   props: {
   },
   components: {
     NavHeader,
     NavRighter,
     NavBelow
   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>