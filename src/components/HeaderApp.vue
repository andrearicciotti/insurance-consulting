<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <header>

        <div class="header-top">

            <div class="ms_container h-100">

                <div class="row align-content-center justify-content-between">

                    <div class="col-auto">
                        <i class="fa-solid fa-clock"></i>
                        <span> Open Hours: Mon - Sat - 9:00 - 18:00</span>
                    </div>

                    <div class="col-auto">

                        <div class="row align-content-center">
                            <div class="col-9">
                                <div class="row align-content-center">
                                    <div class="col-6"><i class="fa-solid fa-phone"></i><span>+1 (303) 5554-3321</span>
                                    </div>
                                    <div class="col-6"><i class="fa-solid fa-envelope"></i><span>hello@example.com</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-3">
                                <div class="row align-content-center">
                                    <div class="col-4">
                                        <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                                    </div>
                                    <div class="col-4">
                                        <a href=""><i class="fa-brands fa-twitter"></i></a>
                                    </div>
                                    <div class="col-4">
                                        <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div class="header-bottom  fw-semibold">

            <div class="ms_container">

                <div class="row align-content-center">

                    <div class="col-1">
                        <a class="ms_header-logo" href="#app"><span class="ms_logo">Nex</span>gen</a>
                    </div>

                    <div class="col-11 ms_navigation">
                        <div class="row align-content-center justify-content-end">
                            <div class="col-auto"><a href="#home">Home</a></div>
                            <div class="col-auto"><a href="#about">About</a></div>
                            <div class="col-auto"><a href="#services">Services</a></div>
                            <div class="col-auto"><a href="#process">Process</a></div>
                            <div class="col-auto"><a href="#team">Team</a></div>
                            <div class="col-auto"><a href="#blog">Blog</a></div>
                            <div class="col-auto"><a href="#get-in-touch">Get in touch</a></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

header {
    height: $header-heigth;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;

    .header-top {
        width: 100%;
        height: calc($header-heigth / 3);
        background-color: $shark-color;
        color: $white-color;
        font-size: .7rem;

        .row {
            height: 100%;

            a {
                color: inherit;
            }

            i {
                margin-right: .2rem;
            }

        }
    }

    .header-bottom {
        height: calc($header-heigth / 3 * 1.5);
        width: 100%;
        background-color: $black-haze-color;
        font-size: .9rem;

        .ms_container {
            width: 70%;
            height: 100%;
            margin: 0 auto;

            .ms_header-logo {
                font-weight: bold;
                letter-spacing: .4rem;
                text-decoration: none;
                text-transform: uppercase;
                font-size: 1.2rem;

                .ms_logo {
                    color: $fountain-blue-color;
                    padding: .5rem .1rem .5rem 1.3rem;
                    background-color: rgba($color: $elm-color, $alpha: 0.15);
                    margin-right: .3rem;
                }
            }

            .col-auto:hover {
                background-color: $blue-lagoon-color;
                border-radius: 5px;
            }

            .col-auto:hover>a {
                color: $white-color;
            }

            &>* {
                height: 100%;
            }

            a {
                text-decoration: none;
                color: $shark-color;
                text-transform: uppercase;
                line-height: 30px;
                border-radius: 10px;
            }
        }
    }

}
</style>