import { defineStore } from 'pinia'

export const useTagsStore = defineStore('tags', {
    state: () => {
        return {
            tagsList: []
        }
    },
    getters: {
        show: (state) => {
            return state.tagsList.length > 0;
        },
        nametagsList: (state) => {
            return state.tagsList.map(item => item.name);
        }
    },
    actions: {
        delTagsItem(index) {
            this.tagsList.splice(index, 1);
        },
        setTagsItem(data) {
            this.tagsList.push(data)
        },
        clearTags() {
            this.tagsList = []
        },
        closeTagsOther(data) {
            this.tagsList = data;
        },
        closeCurrentTag(data) {
            console.log(data)
            for (let i = 0, len = this.tagsList.length; i < len; i++) {
                const item = this.tagsList[i];
                if (item.path === data.$route.fullPath) {
                    if (i < len - 1) {
                        data.$router.push(this.tagsList[i + 1].path);
                    } else if (i > 0) {
                        data.$router.push(this.tagsList[i - 1].path);
                    } else {
                        data.$router.push("/");
                    }
                    this.tagsList.splice(i, 1);
                    break;
                }
            }
        },
    }
})