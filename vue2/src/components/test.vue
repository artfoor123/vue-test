<template>
  <div class="text-center">
    <h5>test</h5>
    <input type="number" v-model="num1" />
    <input type="number" v-model="num2" />
    <p>{{ sum }}</p>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  name: "test",
  data() {
    return {
      msg: "",
      num1: 0,
      num2: 0,
    };
  },
 computed : {
   sum() {
     return Number(this.num1) + Number(this.num2)
   }
 },
 watch : {
    sum(){
        if(this.sum > 10) {
            this.msg = "Sum is greater than 10"
        } else {
            this.msg = "Sum is less than 10"
        }
    }
 }
};
</script>
