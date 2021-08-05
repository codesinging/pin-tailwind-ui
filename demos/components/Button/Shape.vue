<template>
    <div class="space-y-4">
        <div v-for="shape in shapes" :key="shape" class="space-x-4">
            <pin-button v-for="(text,type) in types" :key="type" :type="type" :shape="shape">{{ text }}</pin-button>
        </div>
    </div>
</template>

<script>
import PinButton from "../../../src/components/button/PinButton";

export default {
    name: "Shape",
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
            },
            shapes: [
                'default',
                'rounded',
                'square',
                'pill',
                'circle',
            ],
        }
    },
}
</script>

<style scoped>

</style>
