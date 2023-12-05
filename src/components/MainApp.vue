<script>
import HomeMain from './HomeMain.vue';
import AboutMain from './AboutMain.vue';
export default {
    components: {
        HomeMain,
        AboutMain,
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
            <AboutMain />
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

#about{
    height: 520px;
    background-color: $shark-color;
}

#services {
    height: 950px;
    background-color: $black-haze-color;
}

#process {
    height: 650px;
    background-color: $white-color;
}

#team {
    height: 700px;
    background-color: $shark-color;
}

#blog {
    height: 750px;
    background-color: $black-haze-color;
}

#get-in-touch {
    height: 450px;
    background-image: url(../assets/img/bg-1.jpg);
    background-size: cover;
}
</style>