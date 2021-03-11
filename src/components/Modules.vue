<template>
  <div class="col-12 main-col">
      <div class="straight-line"></div>
      <p class="module-head">ALL MODULES</p>
  </div>
  <div class="col-12 second-col pt-3 pb-1">
      <div class="row">
          <div class="col-4 " :class="{active: modOne}">
              <div class="col-overlay"></div>
              <div class="image"><img src="../assets/modules/module1.png" alt=""></div>
              <div class="col-text">Gorvernance Portal</div>
              <div class="col-icon"><span class="material-icons">info</span></div>
          </div>
          <div class="col-4" :class="{active: modTwo}">
              <div class="col-overlay"></div>
              <div class="image"><img src="../assets/modules/module2.png" alt=""></div>
              <div class="col-text">Corporate Universe</div>
              <div class="col-icon"><span class="material-icons">info</span></div>
          </div>
          <div class="col-4" :class="{active: modThree}">
              <div class="col-overlay"></div>
              <div class="image"><img src="../assets/modules/module3.png" alt=""></div>
              <div class="col-text">Contract Domain</div>
              <div class="col-icon"><span class="material-icons">info</span></div>
          </div>
          <div class="col-4" :class="{active: modFour}">
              <div class="col-overlay"></div>
              <div class="image"><img src="../assets/modules/module4.png" alt=""></div>
              <div class="col-text">Investors Relations</div>
              <div class="col-icon"><span class="material-icons">info</span></div>
          </div>
          <div class="col-4" :class="{active: modFive}">
              <div class="col-overlay"></div>
              <div class="image"><img src="../assets/modules/module5.png" alt=""></div>
              <div class="col-text">Dispute Portfolio</div>
              <div class="col-icon"><span class="material-icons">info</span></div>
          </div>
          <div class="col-4" :class="{active: modSix}">
              <div class="col-overlay"></div>
              <div class="image"><img src="../assets/modules/module6.png" alt=""></div>
              <div class="col-text">Minute Book</div>
              <div class="col-icon"><span class="material-icons">info</span></div>
          </div>
          <div class="col-4" :class="{active: modSeven}">
              <div class="col-overlay"></div>
              <div class="image"><img src="../assets/modules/module7.png" alt=""></div>
              <div class="col-text">Reporting Tool</div>
              <div class="col-icon"><span class="material-icons">info</span></div>
          </div>
          <div class="col-4" :class="{active: modEight}">
              <div class="col-overlay"></div>
              <div class="image"><img src="../assets/modules/module8.png" alt=""></div>
              <div class="col-text">Attendance Register</div>
              <div class="col-icon"><span class="material-icons">info</span></div>
          </div>
      </div>
  </div>
  <div class="col-12 last-col"></div>
</template>

<script>
export default {
    data(){
        return { 
            modOne: true,
            modTwo: false,
            modThree: false,
            modFour: false,
            modFive: false,
            modSix: false,
            modSeven: false,
            modEight: false,
        }
    }

}
</script>

<style scoped>
.main-col{
    position: relative;
}
.straight-line{
    width: 100%;
    height: 1px;
    background: lightgrey;
}
.module-head{
    color: grey;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    margin-bottom: 0;
    left: 60px;
    top: -8px;
    background: white;
    padding: 0 10px;
}

.second-col > .row .col-4{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 5px;
    position: relative;
} 
.col-overlay{
    position: absolute;
}
.active .col-overlay{
    position: absolute;
    left: 5%;
    background: #ffea9e;
    opacity: 0.4;
    padding: 5px 20px;
    width: 90%;
    height: 100%;
    border-radius: 5px;
}
.second-col .col-icon{
    width: 15%;
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
} 

.second-col .active .col-icon{
    visibility: visible;
    color: #fdbe00;
}
.image{
    width: 15%;
    height: 100%;
}
.image > img{
    width: 100%;
    height: 100%;
}
.col-text{
    font-size: 10px;
    font-weight: bolder;
    width: 40%;
    padding-left: 5%;
    margin: auto 0;
}


.last-col{
    width: 100%;
    border: 1px dashed rgb(174, 174, 255);
}



</style>
