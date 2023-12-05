<script>
import HomeMain from './HomeMain.vue';
import AboutMain from './AboutMain.vue';
import ServicesMain from './ServicesMain.vue';
export default {
    components: {
        HomeMain,
        AboutMain,
        ServicesMain,
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

        <section id="about">
            <AboutMain />
        </section>

        <section id="services">
            <ServicesMain />
        </section>

        <section id="process">Process</section>
        <section id="team">Team</section>
        <section id="blog">Blog</section>
        <section id="get-in-touch">Get in Touch</section>

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
    background-color: $shark-color;
    color: $white-color;
}

#services {
    background-color: $black-haze-color;
}

#process {
    height: 650px;
    background-color: $white-color;
}

#team {
    height: 700px;
    background-color: $shark-color;
    color: $white-color;
}

#blog {
    height: 750px;
    background-color: $black-haze-color;
}

#get-in-touch {
    height: 500px;
    background-image: url(../assets/img/bg-1.jpg);
    background-size: cover;
    color: $white-color;
}
</style>