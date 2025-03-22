<template>
    <div>
        <Navbar />
        <PageBanner />
        <BlogDetailsContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageBanner from '../BlogDetails/PageBanner'
import BlogDetailsContent from '../BlogDetails/BlogDetailsContent'
import Footer from '../Layout/Footer'

export default {
    name: 'BlogDetailsPage',
    components: {
        Navbar,
        PageBanner,
        BlogDetailsContent,
        Footer,
    }
}
</script>
