<script>
export default {

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

                    <div class="col">
                        <div class="row">
                            <div class="col-5">
                                <img src="../assets/img/team-1.jpg" alt="">
                            </div>
                            <div class="col-7">
                                <h3 class="name">David Cooper</h3>
                                <span class="role">cto & co-founder</span>
                                <div class="d-flex socials">
                                    <span><i class="fa-brands fa-facebook-f"></i></span>
                                    <span><i class="fa-brands fa-twitter"></i></span>
                                    <span><i class="fa-brands fa-linkedin-in"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="row">

                            <div class="col-5">
                                <img src="../assets/img/team-2.jpg" alt="">
                            </div>

                            <div class="col-7">
                                <h3 class="name">David Cooper</h3>
                                <span class="role">cto & co-founder</span>
                                <div class="d-flex socials">
                                    <span><i class="fa-brands fa-facebook-f"></i></span>
                                    <span><i class="fa-brands fa-twitter"></i></span>
                                    <span><i class="fa-brands fa-linkedin-in"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="row">

                            <div class="col-5">
                                <img src="../assets/img/team-3.jpg" alt="">
                            </div>

                            <div class="col-7">
                                <h3 class="name">David Cooper</h3>
                                <span class="role">cto & co-founder</span>
                                <div class="d-flex socials">
                                    <span><i class="fa-brands fa-facebook-f"></i></span>
                                    <span><i class="fa-brands fa-twitter"></i></span>
                                    <span><i class="fa-brands fa-linkedin-in"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="row">

                            <div class="col-5">
                                <img src="../assets/img/team-4.jpg" alt="">
                            </div>

                            <div class="col-7">
                                <h3 class="name">David Cooper</h3>
                                <span class="role">cto & co-founder</span>
                                <div class="d-flex socials">
                                    <span><i class="fa-brands fa-facebook-f"></i></span>
                                    <span><i class="fa-brands fa-twitter"></i></span>
                                    <span><i class="fa-brands fa-linkedin-in"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-4 mt-5 mb-3 p-4 ms_caption">

                <h3>President Speech</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nam nihil suscipit  </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nam nihil suscipit sit, ipsam modi provident dicta possimus quam explicabo </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nam nihil suscipit  </p>
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
        .col {
            width: 45%;

            .name {
                font-size: 1.2rem;
                font-weight: bold;
            }

            .role {
                text-transform: uppercase;
                font-size: .8rem;
            }

            .socials {
                gap: .5rem;
                margin: .7rem 0;

                span {
                    background-color: rgba($color: $blue-lagoon-color, $alpha: 0.2);
                    height: 30px;
                    width: 30px;
                    line-height: 30px;
                    border-radius: 50%;
                    color: $fountain-blue-color;
                    text-align: center;
                }
            }
        }
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