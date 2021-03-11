<template>
<div class="container">
  <div class="row">
    <div class="col-md-8 title-column">
      <h6>HEY, TERRY</h6>
      <h3>Start your <span>30 days</span> Trial</h3>
      <p>Select your preferred package below</p>
    </div>
    <div class="col-md-4 total-column">
      <h6 class="mb-0 mt-3">NGN</h6>
      <h3 class="mb-0">1,999,999</h3>
      <p>Total<small>(EXCLUDES VAT)</small></p>
    </div>
  </div>

  <div class="row justify-content-between mt-1 px-3 second-row">
   <SelectPackage />
  </div>

  <div class="row mt-3">
    <RangeInput />
  </div>

  <div class="row mt-2">
    <Modules />
  </div>

  <div class="row final-row mt-2">
    <div class="col-12">
      <router-link :to="{ name: 'GetStarted'}">Go back</router-link>
      <router-link :to="{name: 'PaymentMethod'}" class="btn">Continue</router-link>
    </div>
  </div>
</div>
</template>

<script>
import SelectPackage from '../components/SelectPackage.vue'
import RangeInput from '../components/RangeInput.vue'
import Modules from '../components/Modules.vue'
export default {
  components: { SelectPackage, RangeInput, Modules }
}
</script>

<style scoped>
.title-column h6{
  color: gray;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 700;
}
.title-column h3{
  font-weight: 600;
}
.title-column h3 span{
  color: #ffc107;
  font-style: italic;
}
.title-column p{
  font-size: 12px;
  color: gray;
}
.total-column h6{
  color: rgb(78, 78, 255);
  font-size: 14px;
}
.total-column h3{
  color: rgb(78, 78, 255);
  font-weight: 600;
}
.total-column p{
  color: grey;
  font-weight: 600;
}
.total-column p small{
  font-size: 10px;
  font-weight: bold;
}
.final-row .col-12{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.final-row .col-12 a{
    color: red;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.final-row .col-12 a:first-child:hover{
  text-decoration: none;
  color: #ffc107;
}
.final-row .col-12 a:nth-child(2):hover{
  color: white;
  background: rgb(78, 78, 255);
}
.final-row .col-12 .btn{
  border-radius: 5px;
  outline: none;
  color: black;
  border: none;
  background: #ffc107;
  font-size: 12px;
  font-weight: bold;
  padding: 7px 20px;
}

</style>
