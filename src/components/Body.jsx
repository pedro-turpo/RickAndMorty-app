import { useEffect, useState } from "react"
import Content from "./Content"
import Infoadd from "./Infoadd"
import { paginationLogic } from "../utils/pagination"
const PAGE_DEFAULT = 1

const Body = ({ location }) => {
    const [currentPage, setCurrentPage] = useState(PAGE_DEFAULT)

    const { pages, residentInPage } = paginationLogic(currentPage, location)

    useEffect(() => {
        setCurrentPage(PAGE_DEFAULT)
    }, [location])
    

    return (
        <>
            {/* Information aditional */}
            <article className="flex flex-col max-w-[720px] mx-auto border  border-mygreenop p-2 mb-5">
                <Infoadd location={location} />
            </article>

            {/* Content of API */}
            <section className="flex flex-wrap mx-auto justify-center gap-x-6 gap-y-4 max-w-[1024px]">
                {
                    residentInPage?.map((resident) => <Content key={resident} resident={resident} />)
                }
            </section>

            {/* Paginacion */}
            <section className="flex flex-wrap justify-center gap-1 pt-8 pb-4 ">
                {pages.map(page => <button
                    className={`p-5 rounded-lg ${currentPage === page && "bg-[#062226]"}`}
                    key={page}
                    onClick={() => { setCurrentPage(page) }}>{page}</button>)}
            </section>
        </>
    )
}
export default Body