<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },

    props: {
        article: Object,
        index: Number,
    },

    methods: {
        getImagePath(oldPath) {
            return new URL(oldPath, import.meta.url).href;
        },
    },

    emits: ['hoverArticle', 'leaveArticle'],
}
</script>

<template>
    <div @click="$emit('hoverArticle')" class="col-4 ms_article" :class="store.activeArticle === index ? 'active' : ''">
        <img :src="getImagePath(article.imgPath)" :class="store.activeArticle === index ? 'active' : ''"
            :alt="article.title">
        <a :class="store.activeArticle === index ? 'active' : ''">{{ article.title }}</a>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

.ms_article {
    position: relative;
    display: inline-block;
    width: 30%;
    margin: 0 .6rem;
    text-align: center;
    cursor: pointer;
    transition: all .8s ease-in;

    &.active {
        width: 35%;
        transition: all .8s ease-in;
    }

    img {
        filter: brightness(0.5);
        border-radius: 10px;
        transition: all .8s ease-in;

        &.active {
            filter: brightness(1);
            transition: all .8s ease-in;
        }
    }

    a {
        text-decoration: none;
        color: rgba($color: $black-haze-color, $alpha: 0.3);
        font-size: 1.2rem;
        font-weight: bold;
        position: absolute;
        bottom: 10%;
        left: 2.5%;
        margin: 1rem;
        transition: all .8s ease-in;

        &.active {
            bottom: 8%;
            color: $black-haze-color;
            padding: .3rem .7rem;
            background-color: rgba($color: $woodsmoke-color, $alpha: 0.6);
            border-radius: 10px;
            transition: all .8s ease-in;
        }
    }
}
</style>