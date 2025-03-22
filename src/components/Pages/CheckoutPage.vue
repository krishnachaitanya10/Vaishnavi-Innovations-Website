<template>
    <div>
        <Navbar />
        <PageBanner />
        <CheckoutContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageBanner from '../Checkout/PageBanner'
import CheckoutContent from '../Checkout/CheckoutContent'
import Footer from '../Layout/Footer'

export default {
    name: 'CheckoutPage',
    components: {
        Navbar,
        PageBanner,
        CheckoutContent,
        Footer,
    }
}
</script>
