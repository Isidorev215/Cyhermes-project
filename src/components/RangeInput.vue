<template>
  <div class="col-12">
      <h6>Add more users</h6>
      <h6 class="mb-3"><span>NGN99,99</span> per user</h6>
      <div class="rangeDiv">
        <div class="minValue">100</div>
        <div class="maxValue">>1000</div>
        <input type="range" min="0" max="1000" value="100" ref="slider" id="slider" @input="handleInput">
        <div ref="selector" id="selector" :style="{left: left}">
            <div class="selectBtn"></div>
            <div id="selectValue">{{slider.value}}</div>
        </div>
        <div id="progressBar" :style="{width: left}" ></div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        
        const slider = ref('')
        const selector = ref('')
        const left = ref(10 + '%')


        const handleInput = () => {
            // console.log(slider.value, slider.value.value)
            left.value = `${slider.value.value/10}%`
        }


        

        return { slider, selector, left, handleInput }
    }
}
</script>

<style scoped>
h6:nth-child(1){
    font-size: 17px;
    font-weight: bold;
    color: grey;
    margin-bottom: 3px;
}
h6:nth-child(2){
    font-size: 12px;
    color: grey;
}
h6:nth-child(2) span{
    font-weight: bold;
}
.rangeDiv{
    width: 100%;
    position: relative;
}
#slider{
    -webkit-appearance: none;
    width: 100%;
    height: 5px; /*Check later*/
    outline: none;
    background: lightblue;
    border-radius: 3px;
}
#slider::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    cursor: pointer;
    z-index: 3;
    position: relative;
}
#selector{
    height: 40px;
    width: 20px;
    position: absolute;
    bottom: 0;
    /* left: 50%; */
    transform: translateX(-50%);
    z-index: 2;
}
.selectBtn{
    height: 20px;
    width: 20px;
    background-image: url('../assets/slideIcon.png');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
}
#selectValue{
    width: 20px;
    height: 40px;
    position: absolute;
    top: 0;
    color: rgb(78, 78, 255);
    text-align: center;
    line-height: 15px;
    font-size: 11px;
    font-weight: bolder;
}
#progressBar{
    width: 50%;
    height: 5px;
    border-radius: 3px;
    background: rgb(112, 112, 221);
    position: absolute;
    top: 50%;
    left: 0;
}
.minValue, .maxValue{
    position: absolute;
    font-size: 9px;
    line-height: 1px;
    font-weight: bold;
}
.minValue{
    left: 0;
}
.maxValue{
    right: 0;
}
</style>