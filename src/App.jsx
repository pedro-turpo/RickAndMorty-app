import { useEffect, useState } from "react"
import Body from "./components/Body"
import Header from "./components/Header"
import axios from "axios"
import { randomLocation } from "./utils/randomLocation"

function App() {

  const [location, setLocation] = useState(null)

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocation()}`)
      .then(({ data }) => setLocation(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <main className="text-mywhite font-custom text-[16px] lg:text-[18px] min-h-screen flex flex-col">
      {/* header (logo and search) */}
      <section className="bg-[url('/images/bgh.png')] bg-cover bg-center h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
        <Header setLocation={setLocation} />
      </section>

      {/* Container of background img */}
      <div className="bg-[url('/images/bgp.png')] bg-cover flex-grow ">
        {/* Main (Earth-type-Dimension-Population) && (main of section)*/}
        {/* Infomation Earth-type-Dimension-and-Population */}
        
        <section className="pt-4">
          <Body location={location} />
          </section>

      </div>
    </main>

  )
}

export default App
