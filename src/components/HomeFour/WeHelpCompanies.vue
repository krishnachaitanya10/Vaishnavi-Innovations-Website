<template>
    <div class="about-area ptb-50 d-lg-block d-none">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <img :src="getImageUrl('digital-experience-1.png')" alt="About Us Image">
                </div>

                <div class="col-lg-6">
                    <div class="about-content">
                        <span>About Us</span>
                        <h2 class="title-wehelp">We Help Companies to Generate Leads and Increase Sales</h2>
                        <div class="bar"></div>
                        <p>
                            <strong>Vaishnavi Consultancy</strong> is a leading provider of digital marketing and IT solutions, 
                            dedicated to helping businesses thrive in the ever-evolving digital landscape. 
                            With a blend of innovative strategies, cutting-edge technology, and a customer-centric approach, 
                            we empower organizations to achieve their goals and maximize their potential.
                        </p>

                        <div class="about-btn">
                            <router-link to="/about-one" class="default-btn">
                                <b>Learn More</b>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WeHelpCompanies',
    methods: {
        getImageUrl(filename) {
            return new URL(`/img/${filename}`, import.meta.url).href;
        }
    }
}
</script>

<style scoped>
img {
    max-width: 100%;
    height: auto;
}
</style>
