<template>
    <div class="space-x-4">
        <pin-button v-for="(text,type) in types" :key="type" :type="type">{{ text }}</pin-button>
    </div>
</template>

<script>
import PinButton from "../../../src/components/button/PinButton";

export default {
    name: "Type",
    components: {PinButton},
    data() {
        return {
            types: {
                default: '默认',
                primary: '主要',
                secondary: '次要',
                success: '成功',
                danger: '危险',
                warning: '警告',
                strong: '重要',
                info: '信息',
            }
        }
    },
}
</script>

<style scoped>

</style>
