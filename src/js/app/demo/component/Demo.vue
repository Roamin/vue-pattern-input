<template>
    <div class="container-fluid" id="demo">
        <div class="col-md-6 col-md-offset-3 mt20">

            <div class="form-horizontal">

                <div class="form-group">
                    <div class="col-sm-12">
                        <div class="alert alert-info"><i class="glyphicon glyphicon-cog mr5"></i>Click the flow buttons to custom quickly
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12 setting-group">
                        <button type="button" class="btn btn-sm btn-default"
                                :class="{ 'btn-success': setting.selected }"
                                v-for="(setting, index) in quickSettings"
                                @click="set(setting, index)">{{ setting.name }}
                        </button>
                    </div>
                </div>

                <hr class="dashed mt-30 mb-30">

                <div class="form-group">
                    <div class="col-sm-12">
                        <div class="alert alert-info"><i class="glyphicon glyphicon-pencil mr5"></i>Custom Settings (Just as RegExp)
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-6">
                        <div class="input-group">
                            <span class="input-group-addon">RegExp Pattern</span>
                            <input type="text" class="form-control"
                                   v-model="setting.pattern">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-6">
                        <div class="input-group">
                            <span class="input-group-addon">RegExp Flags</span>
                            <input type="text" class="form-control"
                                   v-model="setting.flags">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-6">
                        <div class="input-group">
                            <span class="input-group-addon">Replacement</span>
                            <input type="text" class="form-control"
                                   :disabled="setting.pattern === ''"
                                   v-model="setting.replacement">
                        </div>
                    </div>
                </div>

                <hr class="dashed mt-30 mb-30">

                <div class="form-group">
                    <div class="col-sm-12">
                        <div class="alert alert-success"><i class="glyphicon glyphicon-arrow-down mr5"></i>Come on, try your custom input now !
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <pattern-input class="form-control" maxlength="10" placeholder="maxlength 10"
                                       :pattern="setting.pattern"
                                       :flags="setting.flags"
                                       :replacement="setting.replacement"
                                       @input="handleInput"
                                       @change="handleChange"
                                       v-model="setting.val"></pattern-input>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <button type="button" class="btn btn-danger" @click="clearInput">clear input</button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import PatternInput from '../../../../component/vue-pattern-input.vue';

    export default {
        components: {
            PatternInput
        },
        data () {
            return {
                setting: {
                    pattern: '^[0\\D]*|\\D*',
                    flags: 'g',
                    replacement: '',
                    val: 'awdawd123'
                },
                quickSettings: [
                    {
                        name: 'Noting',
                        pattern: '',
                        flags: '',
                        replacement: '',
                        selected: false
                    },
                    {
                        name: 'Positive Integer',
                        pattern: '^[0\\D]*|\\D*',
                        flags: 'g',
                        replacement: '',
                        selected: true
                    },
                    {
                        name: 'Lowercase',
                        pattern: '[^a-z]',
                        flags: 'g',
                        replacement: '',
                        selected: false
                    }
                ]
            };
        },
        methods: {
            set (oSetting, nIndex) {
                this.setting.pattern = oSetting.pattern;
                this.setting.flags = oSetting.flags;
                this.setting.replacement = oSetting.replacement;

                this.setSelectedStatus(nIndex);
                this.clearInput();
            },
            setSelectedStatus (nIndex) {
                this.quickSettings.map((setting, index) => {
                    if (nIndex === index) {
                        setting.selected = true;
                    } else {
                        setting.selected = false;
                    }

                    return true;
                });
            },
            clearInput() {
                this.setting.val = '';
            },
            handleInput(val) {
                console.log(`input: ${ val }`);
            },
            handleChange(val) {
                console.log(`change: ${ val }`);
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .setting-group {
        .btn + .btn {
            margin-left: 5px;
        }
    }

    .dashed {
        border-style: dashed;
    }

    .mt-30 {
        margin-top: 30px;
    }

    .mb-30 {
        margin-bottom: 30px;
    }
</style>