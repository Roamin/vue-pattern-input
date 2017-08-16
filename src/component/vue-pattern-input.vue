<template>
    <input :value="value"
           @input="updateValue($event.target.value)"
           @change="emitChange"
           v-model="val"
           ref="input">
</template>

<script type="text/ecmascript-6">
    export default {
        mounted() {
            this.updateValue(this.value);
        },
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
        data() {
            return {
                val: ''
            };
        },
        methods: {
            // format the value of input
            formatValue(val) {
                const formattedValue = val.toString().replace(this.regExp, this.replacement);

                return formattedValue;
            },

            // update the value of input
            updateValue(val) {
                const formattedValue = this.formatValue(val);

                this.val = formattedValue;
                this.emitInput(formattedValue);
            },

            // emit input event
            emitInput(val) {
                this.$emit('input', val);
            },

            // emit change event
            emitChange() {
                this.$emit('change', this.val);
            }
        },
        watch: {
            // watch value prop
            value(val) {
                this.updateValue(val);
            }
        }
    }
</script>

<style>
</style>