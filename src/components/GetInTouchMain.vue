<script>
export default {

}
</script>

<template>
    <div class="ms_container">
        <div class="row">

            <div class="col-6">
                <h2 class="ms_title">newsletter</h2>
                <h3 class="ms_subtitle"><span class="ms_highligth">Know</span>First</h3>
                <p>Follow closely and receive content about our company and the news of the current market.</p>
            </div>

            <div class="col-6 ms_git-form">
                <div class="w-100 my-2"><input class="ms_input-field w-100" type="text" placeholder="Name"></div>
                <div class="w-100 my-3"><input class="ms_input-field w-100" type="email" placeholder="Email"></div>
                <div class="w-50"><button class="ms_btn-blue">Subscribe</button></div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

.ms_container {
    width: 60%;
    padding: 5.5rem 0;

    .ms_input-field {
        background-color: rgba($color: $edward-color, $alpha: 0.8);
        padding: .5rem .7rem;
        border-radius: 5px;
        border: none;
        color: $woodsmoke-color;
        outline: none !important;
    }

    .ms_btn-blue {

    &:hover {
        background-color: white;
    }
}
}
</style>