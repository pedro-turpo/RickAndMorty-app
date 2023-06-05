const Infoadd = ({ location }) => {
  return (
      <>
          {/* Info aditional */}
          <div className="text-center text-2xl font-bold mb-4 md:text-4xl">
            <span>{ location?.name}</span>
          </div>
          <article className="flex flex-wrap justify-around gap-x-[60px] text-center mx-3 gap-y-3">
              <div className="flex flex-col">
                  <div className="text-mygray pb-1"> Type </div>
                  <div> { location?.type} </div>
              </div>
              
              <div className="flex flex-col">
                  <div className="text-mygray pb-1"> Dimension </div>
          <div> { location?.dimension}</div>
              </div>
              
              <div className="flex flex-col">
                  <div className="text-mygray pb-1"> Population </div>
          <div> {location?.residents.length}</div>
            </div>
          </article>
      </>
  )
}
export default Infoadd