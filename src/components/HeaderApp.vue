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

            <div class="ms_container">

                <div class="row align-content-center">

                    <div class="col-6 justify-content-start">
                        <i class="fa-solid fa-clock"></i>
                        <span> Open Hours: Mon - Sat - 9:00 - 18:00</span>
                    </div>

                    <div class="col-6">

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
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div class="col-4">
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                    <div class="col-4">
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div class="header-bottom">

            <div class="ms_container">

            </div>

        </div>

    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

header {
    height: $header-heigth;

    .header-top {
        width: 100%;
        height: calc($header-heigth / 3);
        background-color: $shark-color;
        color: $white-color;
        font-size: .8rem;

        .ms_container {
            width: 70%;
            height: 100%;
            margin: 0 auto;

            .row {
                height: 100%;

                i {
                    margin: 0 .2rem;
                }
            }
        }
    }

    .header-bottom {
        height: calc($header-heigth / 3 * 2);
        width: 100%;
        background-color: $black-haze-color;

        .ms_container {
            width: 70%;
            height: 100%;
            margin: 0 auto;
        

        }
    }

}
</style>