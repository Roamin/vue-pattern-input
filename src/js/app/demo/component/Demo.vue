<template>
  <div class="container-fluid" id="demo">
    <div class="col-md-4 col-md-offset-4 mt20">
      <limited-input class="form-control" :placeholder="numberInput.placeholder"
                     v-model="numberInput.val"></limited-input>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import LimitedInput from '../../../../LimitedInput.vue';

  export default {
    components: {
      LimitedInput
    },
    data () {
      return {
        numberInput: {
          placeholder: 'Integer Only',
          val: ''
        }
      };
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
