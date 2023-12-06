<script>
import { store } from '../store';
import MemberTeam from './MemberTeam.vue';

export default {
    data() {
        return {
            store,
        }
    }, 

    components: {
        MemberTeam,
    }
}

</script>

<template>
    <div class="ms_container">

        <div class="row justify-content-between">

            <div class="col-8">
                <h2 class="ms_title">We like what we do</h2>
                <h3 class="ms_subtitle"><span class="ms_highligth">Team</span>of Experts</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eaque? Numquam nihil fugiat, in doloremque
                    alias magnam ipsam.</p>

                <div class="row row-cols-2 ms_team justify-content-between g-4 my-2">
                    <MemberTeam v-for="person in store.team" :member="person" />
                </div>
            </div>

            <div class="col-4 mt-5 mb-3 p-4 ms_caption">

                <h3>President Speech</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nam nihil suscipit </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nam nihil suscipit sit, ipsam modi
                    provident dicta possimus quam explicabo </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nam nihil suscipit </p>
                <span>T. Johnson</span>

                <i class="fa-solid fa-quote-right"></i>
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

.ms_container {
    padding: 5.5rem 0;

    .ms_team {
        overflow-y: auto;
        max-height: 270px;
    }
    .ms_caption {
        background-color: $elm-color;
        border-radius: 5px;
        position: relative;
        width: 28%;

        h3 {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
        }

        p {
            font-size: .8rem;
            color: $black-haze-color;
        }

        span {
            font-weight: bold;
            font-size: .9rem;
        }

        i {
            position: absolute;
            bottom: 6%;
            right: 14%;
            font-size: 1.6rem;
            color: $courduroy-color;
        }
    }
}
</style>