import axios from "axios"
import { useEffect, useState } from "react"

const Content = ({ resident }) => {

    const [residentInfo, setResidentInfo] = useState(null)

    const statusStyles = {
        "Alive": 'bg-green-500',
        "Dead": 'bg-red-500',
        "unknown": 'bg-gray-400'
    }

    useEffect(() => {
        axios
            .get(resident)
            .then(({ data }) => setResidentInfo(data))
            .catch((error) => console.log(error))
    }, [])

    return (

        
        <article className="h-[380px] w-[280px] border border-mygreenop bg-mydark mt-4 rounded-[10px] overflow-hidden">

            {/* Image of Content */}
            <div className="h-[65%] w-[100%] relative">
                <img className="w-full h-full object-cover" src={residentInfo?.image} alt="Image of resident" />

                {/* Status of resident */}
                <div className="absolute bg-[#062226] top-0 left-0 mt-[10px] flex items-center gap-3 p-2 pr-3 rounded-r-[20px]">
                    <div className={`rounded-full ${statusStyles[residentInfo?.status]} h-4 w-4`}></div>
                   <span className="">{residentInfo?.status}</span>
                </div>
            </div>

            {/* Content (Name, species, origin, times appear) */}
            <article className="h-[35%] w-[100%] border-t border-mygreenop pt-1">
                <div className="w-[80%] mx-auto border-b border-mygray text-center">
                    { residentInfo?.name}
                </div>

                <section className="pt-3 text-[14px]">
                    <article className="flex w-[90%] mx-auto">
                        <div className="w-[50%] px-2 text-mygray text-[12px]">Species</div>
                        <div className="w-[50%] px-4">{ residentInfo?.species}</div>
                    </article>
                    <article className="flex w-[90%] mx-auto">
                        <div className="w-[50%] px-2 text-mygray text-[12px]">Origin</div>
                        <div className="w-[50%] px-4">{ residentInfo?.origin.name}</div>
                    </article>
                    <article className="flex w-[90%] mx-auto">
                        <div className="w-[50%] px-2 text-mygray text-[12px]">Times appear</div>
                        <div className="w-[50%] px-4">{ residentInfo?.episode.length} time</div>
                    </article>
                </section>
            </article>
        </article>
    )
}
export default Content