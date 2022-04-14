const parseLinkHeader = (linkHeader: string) => {
  const linkHeadersArray = linkHeader.split(", ").map((header: string) => header.split("; "));
  const linkHeadersMap = linkHeadersArray.map(header => {
    const thisHeaderRel = header[1].replace(/"/g, "").replace("rel=", "");
    const thisHeaderUrl = header[0].slice(1, -1);
    return [thisHeaderRel, thisHeaderUrl]
  });
  return Object.fromEntries(linkHeadersMap);
}

export const getPaginationLinks = async (currentPage: number, pageLimit: number) => {
  const config = useRuntimeConfig();
  const response = await $fetch.raw(config.API_URL + `posts?_page=${currentPage}&_limit=${pageLimit}`);
  return parseLinkHeader(response.headers.get('Link'))
}

