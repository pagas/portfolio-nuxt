import type { PostContent } from "./../types/post"

export const getPosts = async ({ limit = 0 }) => {
    let { data: posts } = await useAsyncData('latest-posts', () =>
        queryContent<PostContent>('/blog')
            .sort({ date: 1 })
            .limit(limit)
            .find()
    )

    if (posts.value) {
        posts.value = posts.value.map(post => {
            post.image = `/images/blog/${post.cover}`;
            return post;
        });
    }
    return posts;
}