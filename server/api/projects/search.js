export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const { searchInput } = getQuery(event)
    try {
        const data = await $fetch(
            `${config.apiBaseUrl}projects?filters[name][$contains]=${searchInput}`,
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