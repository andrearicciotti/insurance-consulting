<script>
import HomeMain from './HomeMain.vue';
export default {
    components: {
        HomeMain,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <main>

        <section id="home">
            <HomeMain />
        </section>
        <section id="about"></section>
        <section id="services"></section>
        <section id="process"></section>
        <section id="team"></section>
        <section id="blog"></section>
        <section id="get-in-touch"></section>

    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

#home {
    height: 700px;
    background-image: url(../assets/img/bg-6.jpg);
    background-size: cover;
    background-position: bottom;
}
</style>