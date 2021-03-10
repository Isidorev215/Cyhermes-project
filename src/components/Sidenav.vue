<template>
    <div class="logo">
      <div>
        <img alt="Cyhermes' logo" src="../assets/logo.png" class="logo-image">
        <label for="check"><span id="menu" class="material-icons">menu</span><span id="close" class="material-icons">close</span></label>
      </div>
    </div>
    <div class="nav">
        <div class="wrap-links"><router-link :to="{ name: 'TrialPricing'}"><span class="link-text">Trial & Pricing</span> <span class="material-icons">arrow_forward</span></router-link></div> 
        <div class="wrap-links"><router-link :to="{ name: 'PaymentMethod'}"><span class="link-text">Payment Method</span> <span class="material-icons">arrow_forward</span></router-link></div> 
        <div class="wrap-links"><span class="dashed-line">---------</span></div>
        <div class="wrap-links"><router-link class="small-font" :to="{ name: 'GetStarted'}"><span class="link-text">Get started...</span> <span class="material-icons">arrow_forward</span></router-link></div>
    </div>
    <div class="the-quote">
        <Dailyquotes />
    </div>
</template>

<script>
import Dailyquotes from './Dailyquotes.vue'
export default {
  components: { Dailyquotes }
}
</script>

<style scoped>
/* the logo side */
.logo{
  display: block;
}
.logo > div{
  display: flex;
  justify-content: space-between;
}
.logo > div > label{
  margin-bottom: 0;
  color: white;
  cursor: pointer;
}
.logo > div > label #menu{
  display: none;
}
.logo > div > label:hover{
  color: #ffc107;
}
.logo .logo-image{
  width: 30px;
  margin-left: 50px;
}


/* Inside nav */
.nav{
  height: 20%;
}
.nav div.wrap-links{
  display: block;
  width: 100%;
}

.nav a{
  font-weight: bold;
  color: grey;
  text-decoration: none;
  font-size: 13px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.nav a::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1%;
  height: 100%;
  background: #ffc107;
  visibility: hidden;
}
.nav span.link-text{
  margin-left: 50px;
}
.nav a:hover{
  text-decoration: none;
  color: white;
}
.nav a.small-font{
  font-size: 12px; 
}
.nav span.dashed-line{
  color: #ffc107;
  margin-left: 50px;
}
.nav a.router-link-exact-active{
  color: white;
}
.nav span.material-icons{
  visibility: hidden;
}
.nav a.router-link-exact-active span.material-icons {
   visibility: visible;
}
.nav a.router-link-exact-active::before{
  visibility: visible;
}

/* the quote side */
 .the-quote{
   color: grey;
   display: block;
   margin-left: 50px;
   height: 20%;
   width: 80%;
   position: relative;
 }
</style>