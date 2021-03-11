<template>
   <div class="col px-4 pt-5 pb-4 mr-2 first-col" :class="{activeCol: firstCol}" @click="handleClick">
      <h6>Starts From</h6>
      <h6>NGN</h6>
      <h5>5,999,999.99</h5>
      <h6>per annum</h6>
      <h4>Premium</h4>
      <h6>100 Users <div class="dot"></div> All Modules</h6>
      <div class="the-tick"><span class="material-icons">check</span></div>
    </div>
    <div class="col px-4 pt-3 pb-4 ml-2 second-col" :class="{activeCol: secondCol}" @click="handleClick"> <!-- we have to dynamically apply a class(active-col) here to indicate which one has been selected-->
      <h4>Basic</h4>
      <h6 class="mb-4"><span>30 days trails</span> on our premium app features and features</h6>
      <h6>INCLUDES <span>- - - - - - - - - - </span></h6>
      <h6>- 25 Users</h6>
      <h6>- All modules & features</h6>
      <h6>- Unlimited commitees</h6>
      <h6>- Unlimited roles creation</h6>
      <div class="the-tick"><span class="material-icons">check</span></div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){

        const firstCol = ref(false)
        const secondCol = ref(true)

        const handleClick = () => {
            firstCol.value = !firstCol.value 
            secondCol.value = !secondCol.value
        }
        return { firstCol, secondCol, handleClick }
    }

}
</script>

<style scoped>
.first-col{
    box-shadow: -14px 15px 38px -2px rgba(12,133,233,0.3);
    -webkit-box-shadow: -14px 15px 38px -2px rgba(12,133,233,0.3);
    -moz-box-shadow: -14px 15px 38px -2px rgba(12,133,233,0.3);
    border-radius: 7px;
    cursor: pointer;
    position: relative;
}
.second-col{
    box-shadow: 0px 15px 38px -2px rgba(12,133,233,0.2);
    -webkit-box-shadow: 0px 15px 38px -2px rgba(12,133,233,0.2);
    -moz-box-shadow: 0px 15px 38px -2px rgba(12,133,233,0.2);
    border-radius: 7px;
    cursor: pointer;
    position: relative;
}
.first-col h6:first-child{
    font-size: 12px;
    color: #ffc107;
    font-weight: 600;
}
.first-col h6:nth-child(2){
    margin-bottom: 0;
    font-size: 12px;
    font-weight: bold;
    color: lightgrey;
}
.first-col h5{
    font-weight: bolder;
    font-size: 25px;
    margin-bottom: 5px;
}
.first-col h6:nth-child(4){
    font-size: 13px;
    color: grey;
    margin-bottom: 25px;
}
.first-col h4{
    font-weight: bolder;
    font-size: 21px;
    margin-bottom: 0;
}
.first-col h6:nth-child(6){
    margin-bottom: 0;
    font-size: 15px;
    font-weight: bold;
    color: grey;
}
.first-col h6:nth-child(6) div.dot{
    display: inline-block;
    margin: 0 5px;
    border-radius: 50%;
    height: 5px;
    width: 5px;
    background: #ffc107;
}

/* For the second col */
.second-col h4{
    font-weight: bolder;
    font-size: 21px;
    margin-bottom: 5px;
    color: rgb(78, 78, 255);
}
.second-col h6{
    font-size: 13px;
    color: grey;
}
.second-col h6:nth-child(2) span{
    font-weight: 800;
}
.second-col h6:nth-child(3){
    font-weight: 700;
}
.second-col h6:nth-child(3) span{
    color: rgb(78, 78, 255);
}
/* for the active col */
.activeCol{
    border: 1px solid rgb(78, 78, 255);
}
.the-tick{
    position: absolute;
    top: -15px;
    right: -15px;
    border-radius: 50%;
    background: rgb(92, 214, 178);
    display: flex;
    padding: 5px;
    visibility: hidden;
}
.the-tick span{
    font-size: 20px;
    color: white;
}
div.activeCol .the-tick{
    visibility: visible;
}
</style>