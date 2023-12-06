<script>
export default {
    props: {
        article: Object,
    },

    methods: {
        getImagePath(oldPath) {
            return new URL(oldPath, import.meta.url).href;
        },
    }
}
</script>

<template>
    <div class="col-4 ms_article">
        <img :src="getImagePath(article.imgPath)" alt="">
        <a @mouseover="$emit()" href="">{{ article.title }}</a>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

.ms_article {
    position: relative;
    display: inline-block;
    width: 31%;
    margin: 0 .6rem;
    text-align: center;


    img {
        filter: brightness(0.5);
        border-radius: 10px;
    }

    a {
        text-decoration: none;
        color: $black-haze-color;
        font-size: 1.2rem;
        font-weight: bold;
        position: absolute;
        bottom: 10%;
        left: 2.5%;
    }
}
</style>