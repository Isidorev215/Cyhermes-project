<template>
  <div class="col-12 main-col">
      <div class="straight-line"></div>
      <p class="module-head">ALL MODULES</p>
  </div>
  <div class="col-12 second-col py-2">
      <div class="row">
          <div class="col-4 active">
              <div class="image"><img src="../assets/modules/module1.png" alt=""></div>
              <div class="col-text">Gorvernance Portal</div>
              <div class="col-icon"><span class="material-icons">error</span></div>
          </div>
          <div class="col-4">
              <div class="image"><img src="../assets/modules/module2.png" alt=""></div>
              <div class="col-text">Gorvernance Portal</div>
              <div class="col-icon"><span class="material-icons">error</span></div>
          </div>
          <div class="col-4">
              <div class="image"><img src="../assets/modules/module3.png" alt=""></div>
              <div class="col-text">Gorvernance Portal</div>
              <div class="col-icon"><span class="material-icons">error</span></div>
          </div>
          <div class="col-4">
              <div class="image"><img src="../assets/modules/module4.png" alt=""></div>
              <div class="col-text">Gorvernance Portal</div>
              <div class="col-icon"><span class="material-icons">error</span></div>
          </div>
          <div class="col-4">
              <div class="image"><img src="../assets/modules/module5.png" alt=""></div>
              <div class="col-text">Gorvernance Portal</div>
              <div class="col-icon"><span class="material-icons">error</span></div>
          </div>
          <div class="col-4">
              <div class="image"><img src="../assets/modules/module6.png" alt=""></div>
              <div class="col-text">Gorvernance Portal</div>
              <div class="col-icon"><span class="material-icons">error</span></div>
          </div>
          <div class="col-4">
              <div class="image"><img src="../assets/modules/module7.png" alt=""></div>
              <div class="col-text">Gorvernance Portal</div>
              <div class="col-icon"><span class="material-icons">error</span></div>
          </div>
          <div class="col-4">
              <div class="image"><img src="../assets/modules/module8.png" alt=""></div>
              <div class="col-text">Gorvernance Portal</div>
              <div class="col-icon"><span class="material-icons">error</span></div>
          </div>
      </div>
  </div>
  <div class="col-12 last-col"></div>
</template>

<script>
export default {

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
    justify-content: space-between;
    align-items: center;
    padding: 5px;
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
    width: 50%;
    padding-left: 5%;
    margin: auto 0;
}
.second-col .active{
    background: #f2dea4;
    border-radius: 5px;
}
.second-col .col-icon{
    width: 15%;
    visibility: hidden;
} 
.second-col .active .col-icon{
    visibility: visible;
    color: #ffc107;
}

.last-col{
    width: 100%;
    border: 1px dashed rgb(174, 174, 255);
}



</style>
