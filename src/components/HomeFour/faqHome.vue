<template>
    <div class="faq-area home ptb-50 d-block d-lg-none" style="background-color: #fff5ee;">
        <div class="container">
            <div class="section-title">
                <h2>Outstanding Digital Experience</h2>
                <div class="bar"></div>
            </div>

            <div class="faq-accordion">
                <Accordion>
                    <AccordionItem v-for="(faq, index) in faqs" :key="index">
                        <template v-slot:accordion-trigger>
                            <button class="accordion-title">
                                <h5 style="font-size: 21px;">{{ faq.title }}</h5>
                                <i class='bx bx-plus'></i>
                            </button>
                        </template>
                        <template v-slot:accordion-content>
                            <div v-for="(item, idx) in faq.items" :key="idx">
                                <div style="display: flex; align-items: center;">
                                    <i class="flaticon-check home"></i>
                                    <h4 style="margin: 0; line-height: 1; font-size: 19px;">{{ item.heading }}</h4>
                                </div>
                                <p>{{ item.description }}</p>
                                <hr v-if="idx < faq.items.length - 1" />
                            </div>
                        </template>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from "../Common/Accordion.vue";
import AccordionItem from "../Common/AccordionItem.vue";

export default {
    name: 'faqHome',
    components: {
        Accordion,
        AccordionItem
    },
    data() {
        return {
            faqs: [
                {
                    title: "Digital Marketing",
                    items: [
                        { heading: "Social Media Marketing", description: "Engage and grow your audience on all major platforms." },
                        { heading: "Search Engine Optimization (SEO)", description: "Improve your search rankings and drive organic traffic." },
                        { heading: "Pay-Per-Click (PPC) Campaigns", description: "Get immediate visibility and results with targeted ads." },
                        { heading: "Content Marketing", description: "Create compelling content that resonates with your audience." },
                        { heading: "Email Marketing", description: "Build and nurture customer relationships with effective email campaigns." }
                    ]
                },
                {
                    title: "CRM Implementation",
                    items: [
                        { heading: "Custom CRM Solutions", description: "Tailored systems to fit your business needs." },
                        { heading: "CRM Integration", description: "Seamlessly integrate CRM with your existing tools." },
                        { heading: "CRM Training & Support", description: "Empower your team with expert training and ongoing support." }
                    ]
                },
                {
                    title: "Automations",
                    items: [
                        { heading: "Workflow Automation", description: "Simplify and automate your business processes." },
                        { heading: "Marketing Automation", description: "Optimize your marketing efforts for better results." },
                        { heading: "Sales Automation", description: "Accelerate your sales cycle and close deals faster." }
                    ]
                },
                {
                    title: "Web & App Development",
                    items: [
                        { heading: "Custom Website Development", description: "Design and build websites that captivate and convert." },
                        { heading: "Mobile App Development", description: "Develop apps that provide a seamless user experience." },
                        { heading: "E-Commerce Solutions", description: "Launch your online store and grow your sales." }
                    ]
                }
            ]
        };
    }
}
</script>

<style scoped>
.faq-area {
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #fff5ee;
}
.accordion-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: none;
    background: none;
    cursor: pointer;
    padding: 10px 15px;
    font-size: 21px;
    font-weight: bold;
}
</style>
