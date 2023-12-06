<script>
import ArticleBlog from './ArticleBlog.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },

    components: {
        ArticleBlog,
    }
}
</script>

<template>
    <div class="ms_container">
        <h2 class="ms_title">our editorial content</h2>
        <h3 class="ms_subtitle">Latest <span class="ms_highligth">News</span></h3>
        <div class="d-flex flex-wrap justify-content-between align-content-end">
            <p class="d-inline-block w-75 my-2">Every week we publish content about what is best in the business world.</p>
            <button class="ms_btn-blue h-50 align-items-end">see all</button>
        </div>

        <div class="ms_blog my-5">
            <ArticleBlog v-for="article in store.articles" :article="article" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

.ms_container {
    padding: 5.5rem 0;

    .ms_highligth {
        color: $blue-lagoon-color;
    }

    .ms_blog {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: start;
        overflow-x: auto;
        overflow-y: hidden;
        height: 330px;
        width: 100%;
        scroll-behavior: smooth;
    }
}
</style>