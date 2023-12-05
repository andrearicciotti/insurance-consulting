<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<template>
<div class="ms_container">
    <h2 class="ms_title">our business areas</h2>
    <h3 class="ms_subtitle">Excellence in <span class="ms_highligth">Services</span></h3>
    <div class="d-flex flex-wrap justify-content-between align-content-end">
        <p class="d-inline-block w-75 h-50 my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quos explicabo aperiam harum tempore iure? Aperiam at voluptas.</p>
        <button class="ms_btn-blue h-50 align-items-end my-4">see all</button>
    </div>

    <div class="row row-cols-3 flex-wrap gy-4 ms_services my-3 justify-content-between">
        <div class="col">
            <i class="fa-solid fa-network-wired"></i>
            <h3>Audit & Assurance</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div class="col">
            <i class="fa-solid fa-briefcase"></i>
            <h3>Financial Advisory</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div class="col">
            <i class="fa-solid fa-chart-simple"></i>
            <h3>Analytics & M&A</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div class="col">
            <i class="fa-solid fa-plane-departure"></i>
            <h3>Middle Marketing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div class="col">
            <i class="fa-solid fa-globe"></i>
            <h3>Legal Consulting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div class="col">
            <i class="fa-solid fa-box"></i>
            <h3>Regulatory Rysk</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

.ms_container {
    padding: 5.5rem 0;

    .ms_highligth {
        color: $blue-lagoon-color;
    }

    .ms_services {

        .col {
            width: 32%;
            background-color: $white-color;
            border-radius: 5px;
            padding: 1.8rem;

            i {
                color: $blue-lagoon-color;
                font-size: 2.5rem;
            }

            h3 {
                margin: 1.5rem 0;
                font-weight: bold;
            }
        }
    }
}
</style>