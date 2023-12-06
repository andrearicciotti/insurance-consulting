<script>
import { store } from '../store';

export default {
    data () {
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
    <div @mouseover="$emit('hoverArticle')" @mouseleave="$emit('leaveArticle')" class="col-4 ms_article" :class="store.activeArticle === index ? 'active' : ''">
        <img :src="getImagePath(article.imgPath)" :class="store.activeArticle === index ? 'active' : ''" :alt="article.title">
        <a :class="store.activeArticle === index ? 'active' : ''" href="">{{ article.title }}</a>
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
    transition: all .5s ease-in;

    &.active {
        width: 33%;
        transition: all .5s ease-in;
    }

    img {
        filter: brightness(0.5);
        border-radius: 10px;
        transition: all .5s ease-in;

        &.active {
            filter: brightness(1);
            transition: all .5s ease-in;
        }
    }

    a {
        text-decoration: none;
        color: $black-haze-color;
        font-size: 1.2rem;
        font-weight: bold;
        position: absolute;
        bottom: 10%;
        left: 2.5%;
        margin: 1rem;transition: all .5s ease-in;

        &.active {
            bottom: 8%;
            background-color: rgba($color: $woodsmoke-color, $alpha: 0.8);
            border-radius: 10px;
            transition: all .5s ease-in;
        }
    }
}
</style>