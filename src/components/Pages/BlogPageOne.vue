<template>
    <div>
        <Navbar />
        <PageBanner />
        <BlogCard />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layout/Navbar'
import PageBanner from '../BlogOne/PageBanner'
import BlogCard from '../BlogOne/BlogCard'
import Footer from '../Layout/Footer'

export default {
    name: 'BlogPageOne',
    components: {
        Navbar,
        PageBanner,
        BlogCard,
        Footer,
    }
}
</script>
