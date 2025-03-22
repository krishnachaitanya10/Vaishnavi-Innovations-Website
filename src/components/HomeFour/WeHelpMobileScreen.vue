<template>
    <div class="about-area ptb-50 d-lg-none d-block">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="about-content">
                        <span>About Us</span>
                        <h2 class="title-wehelp">
                            We Help Companies to Generate Leads and Increase in Sales
                        </h2>
                        <div class="bar"></div>
                        <p>
                            <strong>Vaishnavi Consultancy</strong> is a leading provider of digital marketing and IT solutions, dedicated to helping businesses thrive in the ever-evolving digital landscape.
                            With a blend of innovative strategies, cutting-edge technology, and a customer-centric approach, we empower organizations to achieve their goals and maximize their potential.
                        </p>

                        <div class="about-btn">
                            <router-link to="/about-one" class="default-btn">
                                <b>Learn More</b>
                            </router-link>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <figure class="about-image">
                        <img :src="getImageUrl('digital-experience-1.png')" alt="Digital Experience">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WeHelpMobileScreen',
    methods: {
        getImageUrl(filename) {
            return new URL(`/img/${filename}`, import.meta.url).href;
        }
    }
}
</script>

<style scoped>
.about-image img {
    max-width: 100%;
    height: auto;
}
</style>
