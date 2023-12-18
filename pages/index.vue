<script setup lang="ts">

import { getPosts } from "./../api/post";

const posts = await getPosts({limit: 3});

const recentProjects = [
    {
        title: 'Responsive Portfolio',
        description: 'Responsive Portfolio website',
        image: '/images/recent-projects/portfolio-site.png',
        _path: 'https://responsive-portfolio-next.netlify.app/'
    },
    {
        title: 'Responsive Furniture',
        description: 'Responsive Furniture website',
        image: '/images/recent-projects/furniture-site.png',
        _path: 'https://responsive-furniture.netlify.app/'
    },
]
</script>

<template>
    <section>
        <h1 class="text-5xl font-bold mt-20">&#9889; Hello, I'm Paulius!</h1>
        <!--          👋🏻  -->
        <p class="text-base text-gray-900 p-2 italic">Passionate and Driven Web developer</p>
    </section>
    <section class="flex flex-col md:flex-row">
        <div class="md:w-3/4">
            <h2 class="text-3xl font-bold mt-8">My Story</h2>
            <p class="text-lg py-2">
                I am an experienced developer skilled in writing clean well-structured code using numerous frontend and
                backend technologies. My main passion is front-end as I enjoy working with designers to produce attractive
                interfaces that delight users.
            </p>
            <p class="text-lg py-2">
                I have been writing software for over 10+ years.
            </p>
            <p class="text-lg py-2">
                In my personal life I am a husband to my loving wife and a father of two, a girl and little boy. I enjoy
                new tech, running and lifting weights to get me through the week.
            </p>
        </div>
        <img src="~/assets/images/web-development.png" class="w-1/2 md:max-w-sm p-8 mx-auto" />
    </section>


    <section>
        <h2 class="text-3xl font-bold mt-8">Recent Projects</h2>
        <div class="grid md:grid-cols-3 pt-8 gap-10">
            <Post :posts="recentProjects" />
        </div>
    </section>

    <section>
        <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
        <div class="grid md:grid-cols-3 pt-8 gap-10">
            <Post :posts="posts" />
        </div>
    </section>
</template>

<style scoped></style>