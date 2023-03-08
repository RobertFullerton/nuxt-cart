export default defineEventHandler(async (event) =>{

    // //handle query params. useQuery replaved with getQuery. Also use "back ticks" not signal quotes
    // const { name } = getQuery(event)

    // //handle post data. readBody returns a promise must be used with async
    // const { age } = await readBody(event)

    //using currancyapi.com to get api call with private key from server

    const {data} = await $fetch(`https://api.currencyapi.com/v3/latest?${someKey}')

    return {
        data
    }
})