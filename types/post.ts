import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface PostContent extends ParsedContent {
    description: string
    cover: string
    image: string
}