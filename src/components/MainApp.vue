<script>
import HomeMain from './HomeMain.vue';
import AboutMain from './AboutMain.vue';
import ServicesMain from './ServicesMain.vue';
import ProcessMain from './ProcessMain.vue';
import TeamMain from './TeamMain.vue';
import BlogMain from './BlogMain.vue';
import GetInTouchMain from './GetInTouchMain.vue';

export default {
    components: {
        HomeMain,
        AboutMain,
        ServicesMain,
        ProcessMain,
        TeamMain,
        BlogMain,
        GetInTouchMain,
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

        <section id="process">
            <ProcessMain />
        </section>

        <section id="team">
            <TeamMain />
        </section>

        <section id="blog">
            <BlogMain />
        </section>
        
        <section id="get-in-touch">
            <GetInTouchMain />
        </section>

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
    background-color: $woodsmoke-color;
    color: $white-color;
}

#services {
    background-color: $black-haze-color;
}

#process {
    background-color: $white-color;
    position: relative;
}

#team {
    background-color: $woodsmoke-color;
    color: $white-color;
}

#blog {
    background-color: $black-haze-color;
}

#get-in-touch {
    background-image: url(../assets/img/bg-1.jpg);
    background-size: cover;
    background-position: center;
    color: $white-color;
}
</style>