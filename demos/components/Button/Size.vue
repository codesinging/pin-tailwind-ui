<template>
    <div class="space-y-4">
        <div v-for="size in sizes" :key="size" class="space-x-4">
            <pin-button v-for="(text,type) in types" :key="type" :type="type" :size="size">{{ text }}</pin-button>
        </div>
    </div>
</template>

<script>
import PinButton from "../../../src/components/button/PinButton";

export default {
    name: "Size",
    components: {PinButton},
    data() {
        return {
            types: {
                default: '默认',
                primary: '主要',
                secondary: '次要',
                success: '成功',
                danger: '危险',
            },
            sizes: [
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
            ],
        }
    },
}
</script>

<style scoped>

</style>
