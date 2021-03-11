<template>
  <!-- The check box for the sidenav  -->
  <input type="checkbox" id="check">
  <div class="sidenav">
    <Sidenav />
  </div>
  <div class="router-view px-5 py-4"> <!--Added bootstrap padding here becuase the sidenav if position fixed --> 
    <router-view/>
  </div>
</template>

<script>
import Sidenav from './components/Sidenav'
export default {
  components: { Sidenav }
}
</script>

<style>
.sidenav{
  background: black;
  padding: 20px 50px 50px 0;
  position: fixed;
  left: 0;
  width: 300px;
  height: 100%; 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: 0.5s;
  transition-property: left; 
}
#check:checked ~ .sidenav{
  left: -250px;
  padding-right: 15px;
}
#check:checked ~ .sidenav .logo label #menu{
  display: inline;
}
#check:checked ~ .sidenav .logo label #close{
  display: none;
}
#check:checked ~ .sidenav .the-quote{
  visibility: hidden;
}
#check:checked ~.sidenav .nav a.router-link-exact-active span.material-icons{
  visibility: hidden;
}


#check{
  display: none;
}

/* the router-view part */
.router-view{
  margin-left: 300px;
  height: 100vh;
  transition: 0.5s;
}
#check:checked ~ .router-view{
  margin-left: 50px;

}
</style>
