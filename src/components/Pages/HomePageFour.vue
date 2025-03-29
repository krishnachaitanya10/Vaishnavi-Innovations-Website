<template>
    <div>
        <!-- latest -->
        <Navbar />
        <MainBanner />
        <WeHelpCompanies />
        <WeHelpMobileScreen />
        <!-- <Features /> -->
        <!-- <OurDigitalMarketing /> -->
        <!-- <HelpingBusinesses /> -->
        <!-- <LatestNews /> -->
        <!-- <GetOnlyNewUpdate /> -->
        <OutstandingDigitalExperience />
        <FaqHome />
        <OurImpressivePortfolio />
        <!-- <ClientsReview /> -->
        <!-- <Partner class="pt-100" /> -->
        <GetFreeAdvity />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/nairiti-navbar.vue'
import MainBanner from '../HomeFour/MainBanner.vue'
import WeHelpCompanies from '../HomeFour/WeHelpCompanies.vue'
import WeHelpMobileScreen from '../HomeFour/WeHelpMobileScreen.vue'
// import Features from '../Common/Features'
// import OurDigitalMarketing from '../HomeFour/OurDigitalMarketing'
// import HelpingBusinesses from '../Common/HelpingBusinesses'
// import LatestNews from '../Common/LatestNews'
// import GetOnlyNewUpdate from '../Common/GetOnlyNewUpdate'
import OutstandingDigitalExperience from '../Common/OutstandingDigitalExperience.vue'
import FaqHome from '../HomeFour/FaqHome.vue'
import OurImpressivePortfolio from '../HomeFour/OurImpressivePortfolio.vue'
// import ClientsReview from '../Common/ClientsReview'
// import Partner from '../Common/Partner'
import GetFreeAdvity from '../HomeFour/GetFreeAdvity.vue'
import Footer from '../Layout/Footer.vue'

export default {
    name: 'HomePageFour',
    components: {
        Navbar,
        MainBanner,
        WeHelpCompanies,
        WeHelpMobileScreen,
        // Features,
        // OurDigitalMarketing,
        // HelpingBusinesses,
        // LatestNews,
        // GetOnlyNewUpdate,
        OutstandingDigitalExperience,
        FaqHome, 
        OurImpressivePortfolio,
        // ClientsReview,
        // Partner,
        GetFreeAdvity,
        Footer,
    }
}
</script>
