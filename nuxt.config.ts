// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: "Nuxt-Cart",
            meta: [
                {name: 'description', content:'Learning Nuxt 3 and Tailwind"'}
            ],
                link: [
                    { rel:'', href:''}

                ]
        }
    }

})

