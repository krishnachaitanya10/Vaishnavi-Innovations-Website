<template>
    <div class="digital-experience-area ptb-50 d-none d-lg-block" id="digital-experience-area" style="background-color: #fff5ee;">
        <div class="container">
            <div class="section-title">
                <span>Digital Experience</span>
                <h2>Outstanding Digital Experience</h2>
                <div class="bar"></div>
            </div>

            <div class="digital-experience-tab">
                <div class="tabs">
                    <ul class="tabs__header">
                        <li 
                            class="tabs__header-item" 
                            v-for="tab in tabs" 
                            @click="selectTab(tab.id)" 
                            :class="{ 'active': activeTab === tab.id }"
                            :key="tab.id"
                        >
                            {{ tab.title }}
                        </li>
                    </ul>
                </div>

                <div class="tabs__container">
                    <div class="tabs__list" ref="tabsList">
                        <div 
                            class="tabs__list-tab"
                            v-for="tab in tabs"
                            :class="{ 'active': activeTab === tab.id }"
                            :key="tab.id"
                        >
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="digital-experience-content">
                                        <h3>{{ tab.title }}</h3>
                                        <p>{{ tab.description }}</p>

                                        <div 
                                            class="experience-inner-content"
                                            v-for="experience in tab.experienceInner"
                                            :key="experience.id"
                                        >
                                            <div class="icon">
                                                <i :class="experience.icon"></i>
                                            </div>
                                            <h5>{{ experience.title }}</h5>
                                            <p>{{ experience.desc }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="digital-experience-image">
                                        <img :src="tab.image" alt="Digital Experience Image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { nextTick } from "vue";

// Import images properly
import digiImg from "@/assets/images/quote/digi-img.png";
import digitalExperience1 from "@/assets/images/digital-experience/digital-experience-1.png";
import digitalExperience2 from "@/assets/images/digital-experience/digital-experience-2.png";
import digitalExperience4 from "@/assets/images/digital-experience/digital-experience-4.png";
import digitalExperience5 from "@/assets/images/digital-experience/digital-experience-5.png";
import digitalExperience6 from "@/assets/images/digital-experience/digital-experience-6.png";

export default {
    name: 'OutstandingDigitalExperience',
    data() {
        return {
            activeTab: 1,
            tabs: [
                {
                    id: 1,
                    title: 'Digital Marketing',
                    description: 'Boost your online presence and connect with your audience through our comprehensive digital marketing services:',
                    experienceInner: [
                        { id: 1, icon: 'flaticon-check', title: 'Social Media Marketing', desc: 'Engage and grow your audience on all major platforms.' },
                        { id: 2, icon: 'flaticon-check', title: 'Search Engine Optimization (SEO)', desc: 'Improve your search rankings and drive organic traffic.' },
                        { id: 3, icon: 'flaticon-check', title: 'Pay-Per-Click (PPC) Campaigns', desc: 'Get immediate visibility and results with targeted ads.' },
                        { id: 4, icon: 'flaticon-check', title: 'Content Marketing', desc: 'Create compelling content that resonates with your audience.' },
                        { id: 5, icon: 'flaticon-check', title: 'Email Marketing', desc: 'Build and nurture customer relationships with effective email campaigns.' },
                    ],
                    image: digiImg
                },
                {
                    id: 2,
                    title: 'CRM Implementation',
                    description: 'Transform your customer relationships with our custom CRM solutions:',
                    experienceInner: [
                        { id: 1, icon: 'flaticon-check', title: 'Custom CRM Solutions', desc: 'Tailored systems to fit your business needs.' },
                        { id: 2, icon: 'flaticon-check', title: 'CRM Integration', desc: 'Seamlessly integrate CRM with your existing tools.' },
                        { id: 3, icon: 'flaticon-check', title: 'CRM Training & Support', desc: 'Empower your team with expert training and ongoing support.' },
                    ],
                    image: digitalExperience2
                },
                {
                    id: 3,
                    title: 'Automations',
                    description: 'Streamline your operations and save time with automation',
                    experienceInner: [
                        { id: 1, icon: 'flaticon-check', title: 'Workflow Automation', desc: 'Simplify and automate your business processes.' },
                        { id: 2, icon: 'flaticon-check', title: 'Marketing Automation', desc: 'Optimize your marketing efforts for better results.' },
                        { id: 3, icon: 'flaticon-check', title: 'Sales Automation', desc: 'Accelerate your sales cycle and close deals faster.' },
                    ],
                    image: digitalExperience1
                },
                {
                    id: 4,
                    title: 'Web & App Development',
                    description: 'Create a stunning online presence with our web and app development services',
                    experienceInner: [
                        { id: 1, icon: 'flaticon-check', title: 'Custom Website Development', desc: 'Design and build websites that captivate and convert.' },
                        { id: 2, icon: 'flaticon-check', title: 'Mobile App Development', desc: 'Develop apps that provide a seamless user experience.' },
                    ],
                    image: digitalExperience4
                },
                {
                    id: 5,
                    title: 'Landing Page Generation',
                    description: 'Capture leads and drive conversions with high-impact landing pages',
                    experienceInner: [
                        { id: 1, icon: 'flaticon-check', title: 'High-Converting Landing Pages', desc: 'Design landing pages that convert visitors into customers.' },
                    ],
                    image: digitalExperience5
                },
                {
                    id: 6,
                    title: 'Consultation & Customization',
                    description: 'Get expert advice and tailor-made solutions to meet your unique business needs',
                    experienceInner: [
                        { id: 1, icon: 'flaticon-check', title: 'IT Consulting', desc: 'Navigate the complexities of technology with expert guidance.' },
                    ],
                    image: digitalExperience6
                },
            ]
        };
    },
    methods: {
        selectTab(id) {
            this.activeTab = id;
        }
    },
    mounted() {
        nextTick(() => {
            if (this.$refs.tabsList) {
                this.$refs.tabsList.style.transform = `translateX(0px)`;
            }
        });
    }
};
</script>

<style scoped>
.tabs__header-item.active {
    font-weight: bold;
    color: #007bff;
}
</style>
