import axios from "axios"

const Header = ({ setLocation }) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const newLocation = e.target.newLocation.value
        const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

        axios
            .get(URL)
            .then(({ data }) => setLocation(data))
            .catch((error) => console.log(error))
    }

    return (
        <>
            <div className="relative flex justify-center h-[80%]">
                <img className="absolute max-w-[90%] max-h-[100%] px-5" src="/images/portal.png" alt="" />
                <img className="absolute max-w-[85%] max-h-[60%] pt-[20px] px-5" src="/images/logo.png" alt="" />
            </div>
            <form onSubmit={handleSubmit} className="flex justify-center h-[20%] mx-2 md:max-w-[720px] md:mx-auto">
                <input id="newLocation" className="w-[80%] h-[80%] my-auto border-[1px] border-mygreenop bg-transparent px-2 text-center focus:outline-none" type="text" placeholder="Type a location Id..." autoComplete="off"/>
                <button className="w-[20%] h-[80%] my-auto border-[1px] bg-mygreendark border-mygreenop"><i className='bx bx-search '></i> </button>
            </form>
        </>
    )
}
export default Header