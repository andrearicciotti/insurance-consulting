<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
<footer>
    <div class="footer-top">

    </div>

    <div class="footer-bottom">

    </div>
</footer>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;
    
footer {
    height: 600px;

    .footer-top {
        height: 540px;
        background-color: $shark-color;
    }

    .footer-bottom {
        height: 60px;
        background-color: $woodsmoke-color;
    }
}
</style>