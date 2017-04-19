<template>
  <input :value="value"
         @input="updateValue($event.target.value)"
         v-model="val"
         ref="input">
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
      this.updateValue(this.value);
    },
    name: 'vue-attern-input',
    props: {
      value: {
        required: true,
        type: [Number, String]
      },
      // Using for: RegExp(pattern[, flags])
      pattern: {
        type: String,
        default: ''
      },
      // Using for: RegExp(pattern[, flags])
      flags: {
        type: String,
        default: 'g'
      },
      // Using for: String.prototype.replace(regexp, replacement)
      replacement: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
          val: ''
      };
    },
    computed: {
      // Using for: String.prototype.replace(regexp, newSubstr)
      regExp () {
        let regExp = '';

        if (this.pattern !== '') {
          regExp = new RegExp(this.pattern, this.flags);
        }

        return regExp;
      }
    },
    methods: {
      // format the value of input
      formatValue (val) {
        let formattedValue = val.toString().replace(this.regExp, this.replacement);

        return formattedValue;
      },
      // update the value of input
      updateValue (val) {
        let formattedValue = this.formatValue(val);

        this.val = formattedValue;
        this.$emit('input', formattedValue);
      }
    }
  }
</script>

<style>

</style>
