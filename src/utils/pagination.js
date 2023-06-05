export const paginationLogic = (currentPage, location) => {

    if (!location) {
        return {
            pages: [1],
            residentInPage: []
        }
    }

    /* Cantidad de residentes por pagina */
    const TOTAL_RESIDENT_IN_PAGE = 15
    /* Cantidad total de paginas */
    const totalPages = Math.ceil(location?.residents.length / TOTAL_RESIDENT_IN_PAGE)

    /* Residentes que van a mostrar en la pagina actual */
    const sliceStart = (currentPage - 1) * TOTAL_RESIDENT_IN_PAGE
    const sliceEnd = sliceStart + TOTAL_RESIDENT_IN_PAGE
    const residentInPage = location?.residents.slice(sliceStart, sliceEnd)

    /* Generacion de arreglo de la pagina que va a mostrar */
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    return {
        residentInPage,
        pages
    }

}