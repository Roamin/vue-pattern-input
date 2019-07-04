<template>
  <input v-on="listeners"
         v-model="val"
         ref="input">
</template>

<script type="text/ecmascript-6">
export default {
  name: 'vue-pattern-input',
  props: {
    value: {
      required: true,
      type: [Number, String]
    },
    // Using for: String.prototype.replace(regexp, replacement)
    regExp: {
      type: RegExp,
      default: null
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
    }
  },
  computed: {
    listeners () {
      const listeners = {}

      Object.keys(this.$listeners).forEach(fnName => {
        listeners[fnName] = (e) => {
          this.$listeners[fnName](e.target.value)
        }
      })

      listeners.input = (e) => {
        this.updateValue(e.target.value)
      }

      return listeners
    }
  },
  methods: {
    // format the value of input
    formatValue (val) {
      const formattedValue = val.toString().replace(this.regExp, this.replacement)

      return formattedValue
    },

    // update the value of input
    updateValue (val) {
      const formattedValue = this.formatValue(val)

      this.val = formattedValue
      this.emitInput(formattedValue)
    },

    // emit input event
    emitInput (val) {
      this.$emit('input', val)
    }
  },
  watch: {
    // watch value prop
    value: {
      handler (val) {
        console.log(val)
        if (val !== this.val) {
          this.updateValue(val)
        }
      },
      immediate: true
    }
  }
}
</script>

<style>
</style>
