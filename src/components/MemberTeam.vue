<script>
export default {
    props: {
        member: Object,
    },

    data() {
        return {
        }
    },

    methods: {
        getImagePath(oldPath) {
            return new URL(oldPath, import.meta.url).href;
        },
    }
}
</script>

<template >
    <div class="col">
        <div class="row">
            <div class="col-5">
                <img :src="getImagePath(member.imgPath)" alt="">
            </div>
            <div class="col-7">
                <h3 class="name">{{ member.name }}</h3>
                <span class="role">{{ member.role }}</span>
                <div class="d-flex socials">
                    <span><i class="fa-brands fa-facebook-f"></i></span>
                    <span><i class="fa-brands fa-twitter"></i></span>
                    <span><i class="fa-brands fa-linkedin-in"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

.col {
    width: 45%;

    .name {
        font-size: 1.1rem;
        font-weight: bold;
    }

    .role {
        text-transform: uppercase;
        font-size: .7rem;
    }

    .socials {
        gap: .5rem;
        margin: .7rem 0;

        span {
            background-color: rgba($color: $blue-lagoon-color, $alpha: 0.2);
            height: 25px;
            width: 25px;
            line-height: 25px;
            border-radius: 50%;
            color: $fountain-blue-color;
            text-align: center;
            cursor: pointer;

        }
    }
}

</style>