<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="ms_container">

        <div class="row justify-content-between">

            <div class="col-5 ms_about-title">
                <h2 class="ms_title">About the network</h2>
                <h3 class="ms_subtitle"><span class="ms_highligth">The</span>Company</h3>
                <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe animi, repudiandae
                    repellendus illum.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam a labore provident facere enim.</p>
            </div>

            <div class="col-7 px-5 py-4 ms_about-skills">
                <div class="row row-cols-2 h-100">

                    <div class="col-auto p-0 w-50">
                        <i class="fa-solid fa-award"></i>
                        <h3 class="d-inline-block mx-3 fw-semibold">Tradition</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>

                    <div class="col-auto w-50 p-0">
                        <i class="fa-solid fa-lock"></i>
                        <h3 class="d-inline-block mx-3 fw-semibold">Security</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>

                    <div class="col-auto w-50 p-0">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <h3 class="d-inline-block mx-3 fw-semibold">Certificate</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>

                    <div class="col-auto w-50 p-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <h3 class="d-inline-block mx-3 fw-semibold">Expertise</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

.ms_container {
    padding: 5.5rem 0;
}
.row {
    .ms_about-title {

        p {
            color: $black-haze-color;
            font-size: .9rem;
        }
    }

    .ms_about-skills {

        i {
            color: $fountain-blue-color;
            font-size: 1.5rem;
        }

        p {
            font-size: .9rem;
            margin: 1rem 0;
        }
    }
}
</style>