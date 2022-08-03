<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="sidebar.collapse" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template #title>
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { computed } from "vue";
import { useSidebarStore } from "../stores/sidebar"
import { useRoute } from "vue-router";

export default {
    setup() {
        const route = useRoute();
        const sidebar = useSidebarStore();

        const items = [
            {
                icon: "",
                index: "/Dashboard",
                title: "首頁",
            },
            {
                icon: "",
                index: "/Menu1",
                title: "Menu1",
                subs: [
                    {
                        index: "/Menu1-1",
                        title: "Menu1-1",
                    },
                    {
                        index: "/Menu1-2",
                        title: "Menu1-2",
                        subs: [
                            {
                                index: "/Menu1-2-1",
                                title: "Menu1-2-1",
                            },
                            {
                                index: "/Menu1-2-2",
                                title: "Menu1-2-2",
                            },
                        ],
                    },
                ],
            },
            
        ];
        
        const onRoutes = computed(() => {
            return route.path;
        });

        return {
            items,
            onRoutes,
            sidebar,
        };
    },
};

</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>