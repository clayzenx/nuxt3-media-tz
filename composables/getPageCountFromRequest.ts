export const getPageCountFromRequest = async (url: string) => {
  const lastPageLink: string = (await getPaginationLinks(url)).last;
  return +getPageNumberFromLink(lastPageLink);
}
