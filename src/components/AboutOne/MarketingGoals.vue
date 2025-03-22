<template>
    <div class="overview-area ptb-50" style="background-color: #fff5ee;">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="overview-content">
                        <h2 class="pt-30 pb-20">Marketing Goals Achieved with Develop</h2>
                        <div class="bar"></div>
                        <p class="pb-2">
                            At Develop, we specialize in transforming your marketing aspirations into measurable success. 
                            Our comprehensive approach ensures that your business not only meets but exceeds its marketing goals. 
                            We begin by understanding your unique needs and creating tailored strategies that align perfectly with your objectives.
                        </p>
                        <p>
                            Our team is dedicated to enhancing your brand's presence, making it stand out in the competitive market. 
                            We focus on delivering high-quality content that engages your audience and drives meaningful interactions. 
                            Utilizing the latest digital marketing tools and techniques, we boost your online visibility, attract targeted traffic, and convert leads into loyal customers.
                        </p>
                    </div>
                </div>

                <div class="col-lg-6">
                    <figure class="overview-image">
                        <img :src="getImageUrl('digital-experience-2.png')" alt="Marketing Goals Image" class="img-fluid">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MarketingGoals',
    methods: {
        getImageUrl(filename) {
            return new URL(`/img/${filename}`, import.meta.url).href;
        }
    }
};
</script>

<style scoped>
.img-fluid {
    max-width: 100%;
    height: auto;
}
</style>
