<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="row ms_row">
        <div class="col-6"></div>

        <div class="col-6 d-flex flex-column justify-content-center align-items-start ms_form">

            <h2 class="fw-bold ms_title">fusions & acquisition</h2>
            <h3 class="fw-bold">Insurance Consulting</h3>
            <form action="">

                <div class="row row-cols-2 w-75 g-3 my-3 justify-content-start align-items-center">

                    <div class="col"><input class="ms_input-field w-100" type="text" placeholder="name"></div>
                    <div class="col"><input class="ms_input-field w-100" type="email" placeholder="email"></div>
                    <div class="col"><input class="ms_input-field w-100" type="tel" placeholder="phone"></div>
                    <div class="col"><select class="ms_input-field w-100" name="more-info" id="more-info">
                            <option value="more-info">More Info</option>
                        </select></div>

                </div>


                <div class="row">

                    <div class="col-3"><button class="ms_btn-transparent">Get In Touch</button></div>
                    <div class="col-3"><button class="ms_btn-transparent">Read More</button></div>


                </div>

            </form>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

.ms_row {
    height: 100%;

    &>* {
        height: 100%;
    }

    .ms_form {

        h3 {
            font-size: 4rem;
            line-height: 65px;
        }

        [placeholder] {
            color: $cloudy-color;
        }

    }
}
</style>