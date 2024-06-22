/* eslint-disable react/prop-types */

const EntryPageTrailer = ({trailer}) => {
  return (
    <div className="w-screen overflow-hidden relative" style={{height: "100vh"}}>
      <iframe className="w-screen aspect-video absolute -top-12" src={`https://www.youtube.com/embed/${trailer.key}?rel=0&controls=0&autoplay=1&mute=1&loop=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default EntryPageTrailer