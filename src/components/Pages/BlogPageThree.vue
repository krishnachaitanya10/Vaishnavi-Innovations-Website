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
import PageBanner from '../BlogThree/PageBanner'
import BlogCard from '../BlogThree/BlogCard'
import Footer from '../Layout/Footer'

export default {
    name: 'BlogPageThree',
    components: {
        Navbar,
        PageBanner,
        BlogCard,
        Footer,
    }
}
</script>
