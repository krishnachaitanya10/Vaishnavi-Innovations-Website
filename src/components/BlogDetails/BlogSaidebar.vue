<template>
    <div class="widget-area">
        <div class="widget widget_search">
            <h3 class="widget-title">Search</h3>

            <form class="search-form">
                <label>
                    <span class="screen-reader-text">Search for:</span>
                    <input type="search" class="search-field" placeholder="Search...">
                </label>
                <button type="submit">
                    <i class="flaticon-loupe"></i>
                </button>
            </form>
        </div>

        <div class="widget widget_advity_posts_thumb">
            <h3 class="widget-title">Popular Posts</h3>

            <div class="item">
                <NuxtLink to="/blog-details" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </NuxtLink>
                <div class="info">
                    <span>June 10, 2022</span>
                    <h4 class="title usmall"><NuxtLink to="/blog-details">The Data Surrounding Higher Education</NuxtLink></h4>
                </div>
            </div>

            <div class="item">
                <NuxtLink to="/blog-details" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </NuxtLink>
                <div class="info">
                    <span>June 21, 2022</span>
                    <h4 class="title usmall"><NuxtLink to="/blog-details">Conversion Rate the Sales Funnel Optimization</NuxtLink></h4>
                </div>
            </div>

            <div class="item">
                <NuxtLink to="/blog-details" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </NuxtLink>
                <div class="info">
                    <span>June 30, 2022</span>
                    <h4 class="title usmall"><NuxtLink to="/blog-details">Business Data is changing the world’s Energy</NuxtLink></h4>
                </div>
            </div>

            <div class="item">
                <NuxtLink to="/blog-details" class="thumb">
                    <span class="fullimage cover bg4" role="img"></span>
                </NuxtLink>
                <div class="info">
                    <span>May 10, 2022</span>
                    <h4 class="title usmall"><NuxtLink to="/blog-details">The Billionaire Guide On Design That Will Get You Rich</NuxtLink></h4>
                </div>
            </div>

            <div class="item">
                <NuxtLink to="/blog-details" class="thumb">
                    <span class="fullimage cover bg5" role="img"></span>
                </NuxtLink>
                <div class="info">
                    <span>May 21, 2022</span>
                    <h4 class="title usmall"><NuxtLink to="/blog-details">The Data-Driven Approach To Understanding Your Users</NuxtLink></h4>
                </div>
            </div>

            <div class="item">
                <NuxtLink to="/blog-details" class="thumb">
                    <span class="fullimage cover bg6" role="img"></span>
                </NuxtLink>
                <div class="info">
                    <span>May 30, 2022</span>
                    <h4 class="title usmall"><NuxtLink to="/blog-details">7 Great Tips For Earn More Money From Digital Industry</NuxtLink></h4>
                </div>
            </div>
        </div>
        
        <div class="widget widget_tag_cloud">
            <h3 class="widget-title">Popular Tags</h3>

            <div class="tagcloud">
                <NuxtLink to="/blog-one">Business <span class="tag-link-count"> (3)</span></NuxtLink>
                <NuxtLink to="/blog-one">Design <span class="tag-link-count"> (3)</span></NuxtLink>
                <NuxtLink to="/blog-one">Braike <span class="tag-link-count"> (2)</span></NuxtLink>
                <NuxtLink to="/blog-one">Fashion <span class="tag-link-count"> (2)</span></NuxtLink>
                <NuxtLink to="/blog-one">Travel <span class="tag-link-count"> (1)</span></NuxtLink>
                <NuxtLink to="/blog-one">Smart <span class="tag-link-count"> (1)</span></NuxtLink>
                <NuxtLink to="/blog-one">Marketing <span class="tag-link-count"> (1)</span></NuxtLink>
                <NuxtLink to="/blog-one">Tips <span class="tag-link-count"> (2)</span></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BlogSaidebar',
}
</script>