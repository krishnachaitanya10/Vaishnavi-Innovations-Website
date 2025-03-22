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
import PageBanner from '../BlogTwo/PageBanner'
import BlogCard from '../BlogTwo/BlogCard'
import Footer from '../Layout/Footer'

export default {
    name: 'BlogPageTwo',
    components: {
        Navbar,
        PageBanner,
        BlogCard,
        Footer,
    }
}
</script>
