<template>
<div class="container">
  <div class="content">
    <div class="ad-header">
    </div>
    <CardsView />
  </div>
</div>
</template>
<script>
import CardsView from '@/components/LoginPage/CardsView.vue';
export default{
  components:{
    CardsView,
  }
}
</script>
<style scoped>
.container{
  width: 100vw;
}
.content{
  width: 1200;
  border: 1px solid black;
}


.ad-header{
  width: 100%;
  background-color: lightgray;
  height: 20vh;
  margin-top: 2vh;
  border-radius: 1rem;
}

</style>