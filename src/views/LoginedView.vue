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
  width: var(--main-content-width);
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid black; */
}


.ad-header{
  width: 100%;
  background: rgb(255,255,255);
  background: linear-gradient(142deg, rgba(255,255,255,1) 0%, rgba(106,174,170,1) 26%, rgba(9,121,106,0.8) 46%, rgba(0,255,143,1) 68%, rgba(1,214,20,1) 100%); 
  height: 20vh;
  margin-top: var(--main-container-top-spacing);
  border-radius: 1rem;
}

</style>