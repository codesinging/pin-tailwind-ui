<template>
    <div>
        <div class="fixed top-0 inset-x-0 h-header-nav z-10 bg-white border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 h-full flex items-center justify-between relative">
                <div class="flex items-center space-x-4 h-full">
                    <nuxt-link to="/" class="flex items-center space-x-2 text-2xl">
                        PinTailwindUI
                    </nuxt-link>
                    <span>V1.0.0</span>
                </div>
                <div class="flex items-center space-x-2">
                    <nuxt-link to="/guide">指南</nuxt-link>
                    <nuxt-link to="/components">组件</nuxt-link>
                </div>
            </div>
        </div>
        <div class="mt-header max-w-7xl mx-auto px-4 flex">
            <div class="w-64">
                <div class="sidebar fixed w-64 overflow-y-auto h-(screen-header) border-r py-2">
                    <template v-for="(menu,index) in menus">
                        <div v-if="menu.children" :key="index" class="">
                            <div class="text-gray-400 text-sm flex items-center h-8">{{ menu.name }}</div>
                            <div>
                                <div v-for="(item, ind) in menu.children" :key="ind" class="pl-4 h-8">
                                    <nuxt-link :to="item.to" class="flex items-center w-full h-full border-r-2 border-white hover:border-green-300">{{ item.name }}</nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div v-else :key="index" class="h-8">
                            <nuxt-link :to="menu.to" class="flex items-center w-full h-full border-r-2 border-white hover:border-green-300">{{ menu.name }}</nuxt-link>
                        </div>
                    </template>
                </div>
            </div>
            <div class="flex-1 ml-8 py-6 overflow-hidden">
                <nuxt class="markdown-body"/>
                <page-nav/>
            </div>
        </div>
    </div>
</template>

<script>
import menus from "../configs/menus";
export default {
    name: "default",
    data() {
        return {
            menus,
        }
    },
}
</script>

<style scoped>
    .sidebar .nuxt-link-exact-active{
        @apply border-r-2 border-green-500;
    }
</style>
