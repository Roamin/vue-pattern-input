<template>
  <input :value="value"
         :placeholder="placeholder"
         v-model="val">
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
      this.val = this.value;
    },
    name: 'vue-limited-input',
    props: {
      placeholder: {
        type: String,
        required: false
      },
      value: {
        required: true,
        type: [Number, String]
      }
    },
    data () {
      return {
        val: ''
      }
    }
  }
</script>

<style>

</style>
