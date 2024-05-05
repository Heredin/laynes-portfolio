export default defineEventHandler(async () => {
    const config = useRuntimeConfig()
    try {
        const data = await $fetch(
            `${config.apiBaseUrl}projects?populate=*`,
            {
                method: "GET",
                headers: {
                    Authorization:
                        `Bearer ${config.apiKey}`,
                },
            }
        )
        console.log(data)
        return data
    } catch (error) {
        console.error(error);
        return null;
    }
    /*  const { query, page } = getQuery(event);
      const config = useRuntimeConfig();
      //?filters[name][$contains]=John
      return $fetch(`${config.apiBaseUrl}/projects${query}`, {
          method: "GET",
          headers: {
              "Authorization": `Bearer ${config.apiKey}`
          }
      })*/
})