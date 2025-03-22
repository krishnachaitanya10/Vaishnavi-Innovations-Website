<template>
    <div>
        <Navbar />
        <PageBanner />
        <WeHelpCompanies />
        <OurExpertTeam />
        <TheBestSolutions />
        <ClientsReview />
        <FunFacts />
        <GetOnlyNewUpdate />
        <Partner class="pt-100" />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageBanner from '../AboutTwo/PageBanner'
import WeHelpCompanies from '../AboutTwo/WeHelpCompanies'
import OurExpertTeam from '../AboutTwo/OurExpertTeam'
import TheBestSolutions from '../Common/TheBestSolutions'
import ClientsReview from '../Common/ClientsReview'
import FunFacts from '../AboutOne/FunFacts'
import GetOnlyNewUpdate from '../Common/GetOnlyNewUpdate'
import Partner from '../Common/Partner'
import Footer from '../Layout/Footer'

export default {
    name: 'AboutPageTwo',
    components: {
        Navbar,
        PageBanner,
        WeHelpCompanies,
        OurExpertTeam,
        TheBestSolutions,
        ClientsReview,
        FunFacts,
        GetOnlyNewUpdate,
        Partner,
        Footer,
    }
}
</script>
