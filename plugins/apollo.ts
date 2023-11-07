export default defineNuxtPlugin((nuxtApp) => {
    const {githubToken} = useRuntimeConfig();

    // access cookie for auth
    // const cookie = useCookie('<cookie_name>')

    nuxtApp.hook('apollo:auth', ({client, token}) => {
        // `client` can be used to differentiate logic on a per client basis.
        // apply apollo client token
        token.value = githubToken;
    })
})