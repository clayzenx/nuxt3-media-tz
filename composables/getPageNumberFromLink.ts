export const getPageNumberFromLink = (pageLink: string) => {
  return pageLink.split("?")[1].split("&").find(param => param.includes('page')).split("=")[1]
}

