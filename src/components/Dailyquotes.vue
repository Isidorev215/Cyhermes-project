<template>
    <div class="quote">
      <fieldset>
          <legend><span>"</span></legend>
          <p>Success is not final; failure is not fatal: it is the courage to contine that counts. <span>-Winston Churchil</span></p>
      </fieldset>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* the quote side */
.quote{
    color: lightgray;
}
fieldset{
    border: 1px solid gray;
    border-radius: 15px;
    font-size: 10px;
    padding: 25px 40px 0;
    position: relative;
}
fieldset legend{
    width: 50px;
    height: 50px;
    text-align: center;
    transform: scale(1, -1 );
    margin: 0;
    position: absolute;
    background: black;
    left: -20px;
    bottom: 20px;
}
fieldset legend span{
    display: block;
    width: 100%;
    height: 100%;
    font-size: 150px;
    margin-top: -50px;
}

fieldset p span{
    display: block;
}

</style>