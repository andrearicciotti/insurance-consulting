<script>
export default {

}
</script>

<template>
    <div class="mid-line"></div>
    <div class="ms_process">

        <div class="row text-center">

            <h2 class="ms_title">How it works in practice</h2>
            <h3 class="ms_subtitle"><span class="ms_highligth">Process</span>Management</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eaque? Numquam nihil fugiat, in doloremque
                alias magnam ipsam.</p>

        </div>

    </div>

    <div class="ms_milestone">
        <div class="row row-cols-5">
            <div class="col text-center">
                <span class="d-inline-block">01</span>
                <h3>Collection of information</h3>
                <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </div>
            <div class="col text-center">
                <span class="d-inline-block">02</span>
                <h3>Strategic planning</h3>
                <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </div>
            <div class="col text-center">
                <span class="d-inline-block">03</span>
                <h3>Assignment of responsibilities</h3>
                <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </div>
            <div class="col text-center">
                <span class="d-inline-block">04</span>
                <h3>Formatting process</h3>
                <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </div>
            <div class="col text-center">
                <span class="d-inline-block">05</span>
                <h3>Continuity formalization</h3>
                <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;


.mid-line {
    height: 3px;
    width: 100%;
    background-color: $sea-nymph-color;
    position: absolute;
    bottom: 45%;
    left: 0;
}

.ms_process {
    width: 50%;
    margin: 5.5rem auto 0 auto;

    .ms_highligth {
        color: $blue-lagoon-color;
        margin-right: .3rem;
    }

    p {
        margin: 1rem 0;
    }
}

.ms_milestone {
    width: 80%;
    margin: 1.6rem auto 5.5rem auto;

    h3 {
        margin: 1.5rem 0;
        font-weight: bold;
        font-size: 1.6rem;
    }

    span {
        background-color: $sea-nymph-color;
        color: $fountain-blue-color;
        font-weight: bold;
        font-size: 1.1rem;
        width: 35px;
        height: 35px;
        line-height: 35px;
        vertical-align: middle;
        border-radius: 50%;
        position: relative;
        z-index: 2;
    }
}
</style>