<template>
  <main>
    <div class="about">
        <v-header />
        <v-sidebar />
        <div class="content-box" :class="{ 'content-collapse': sidebar.collapse }">
            <v-tags></v-tags>
            <div class="content">
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tags.nameList">
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
import { useSidebarStore } from "../stores/sidebar"
import { useTagsStore } from "../stores/tags"
import vHeader from "../components/Header.vue"
import vSidebar from "../components/Sidebar.vue"
import vTags from "../components/Tags.vue"

export default {
  components: {
    vHeader,
    vSidebar,
    vTags,
  },
  setup() {
    const sidebar = useSidebarStore();
    const tags = useTagsStore();

    return {
      sidebar,
      tags
    }
  }
};
</script>



<style scoped>
</style>