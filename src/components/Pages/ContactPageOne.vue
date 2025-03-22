<template>
    <div>
        <Navbar />
        <PageBanner />
        <ContactContent />
        <!-- <GetOnlyNewUpdate /> -->
        <Footer />
    </div>
</template>

<script>
// import Navbar from '../Layout/nairiti-navbar'
// import PageBanner from '../ContactOne/PageBanner'
// import ContactContent from '../ContactOne/ContactContent'
import Navbar from '../Layout/nairiti-navbar.vue';
import PageBanner from '../ContactOne/PageBanner.vue';
import ContactContent from '../ContactOne/ContactContent.vue';
import Footer from '../Layout/Footer.vue'

export default {
    name: 'ContactPageOne',
    components: {
        Navbar,
        PageBanner,
        ContactContent,
        // GetOnlyNewUpdate,
        Footer,
    }
}
</script>
