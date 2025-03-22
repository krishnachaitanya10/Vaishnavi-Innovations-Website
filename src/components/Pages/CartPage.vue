<template>
    <div>
        <Navbar />
        <PageBanner />
        <CartContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageBanner from '../Cart/PageBanner'
import CartContent from '../Cart/CartContent'
import Footer from '../Layout/Footer'

export default {
    name: 'CartPage',
    components: {
        Navbar,
        PageBanner,
        CartContent,
        Footer,
    }
}
</script>
