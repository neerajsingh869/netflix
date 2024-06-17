/* eslint-disable react/prop-types */

const EntryPageTrailer = ({trailer}) => {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <iframe className="w-screen absolute -top-32" style={{height: "calc(100vh + 200px)"}} src={`https://www.youtube.com/embed/${trailer.key}?rel=0&controls=0&autoplay=1&mute=1&loop=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default EntryPageTrailer