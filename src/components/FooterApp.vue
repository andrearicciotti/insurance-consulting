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
            <div class="ms_container">

                <div class="row row-cols-4">
    
                    <div class="col d-flex flex-column ms_footer-info">
                        <a href="#app"><span class="ms_logo">Nex</span>gen</a>
                        <h4>A Functional HTML Template for Corporate & Business.</h4>
                        <div class="ms_footer-contacts"><i class="fa-solid fa-phone"></i><span>+1 (303) 5554-3321</span>
                        </div>
                        <div class="ms_footer-contacts"><i class="fa-solid fa-envelope"></i><span>hello@example.com</span>
                        </div>
                        <div class="ms_footer-contacts"><i class="fa-solid fa-envelope"></i><span>hello@example.com</span>
                        </div>
                        <div><button class="ms_btn-transparent">Get in touch</button></div>
                    </div>
    
                    <div class="col ms_footer-links">
                        <ul>
                            <h4>About</h4>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">The Company</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Institutional</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Social & Events</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Innovation</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Environment</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Technology</a></li>
                        </ul>
                    </div>
    
                    <div class="col ms_footer-links">
                        <ul>
                            <h4>About</h4>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">The Company</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Institutional</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Social & Events</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Innovation</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Environment</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Technology</a></li>
                        </ul>
                    </div>
    
                    <div class="col ms_footer-links">
                        <ul>
                            <h4>About</h4>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">The Company</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Institutional</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Social & Events</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Innovation</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Environment</a></li>
                            <li><i class="fa-solid fa-angle-right"></i><a href="">Technology</a></li>
                        </ul>
                    </div>
    
                </div>

            </div>

        </div>

        <div class="footer-bottom">

        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

footer {
    color: $edward-color;

    .footer-top {
        background-color: $woodsmoke-color;

        .ms_container {
            padding: 5.5rem 0;

            .ms_footer-info {
                padding: .5rem 1rem 0 1rem;

                a {
                    text-decoration: none;
                    color: inherit;
                    text-transform: uppercase;
                    font-size: 1.6rem;
                    letter-spacing: .4rem;
                    font-weight: bold;
                    margin-bottom: 1.5rem;
                }

                h4 {
                    font-size: .9rem;
                    font-weight: 400;
                    margin-bottom: 1rem;
                }

                .ms_footer-contacts {
                    margin: .3rem 0;

                    i {
                        margin-right: .5rem;
                    }
                }

                .ms_btn-transparent {
                    color: $white-color;
                    margin-top: 1rem;
                }

            }
            .ms_footer-links {
                background-color: rgba($color: $courduroy-color, $alpha: 0.1);
                padding: 1.5rem .5rem;
                width: 22.5%;
                margin: 0 .6rem;
                border-radius: 10px;
                text-align: start;

                h4 {
                    color: $white-color;
                    margin-bottom: 1rem;
                }

                li {
                    list-style-type: none;

                    i {
                        margin-right: .5rem;
                    }

                    a {
                        text-decoration: none;
                        color: inherit;
                        font-size: .9rem;
                    }
                }
            }
        }
    }

    .footer-bottom {
        height: 60px;
        background-color: #09090c;
    }
}
</style>