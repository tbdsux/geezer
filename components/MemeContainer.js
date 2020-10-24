export default function MemeContainer({ meme }) {
  // for video gifs
  if (meme.src.endsWith('mp4')) {
    return (
      <div className="my-4">
        <h3 className="text-center py-1 text-white font-light tracking-wide">
          {meme.title}
        </h3>
        <video autoPlay loop className="h-100 w-auto">
          <source src={`${meme.src}`} type="video/mp4"></source>
        </video>
      </div>
    )
  }

  // just for imgs
  return (
    <div className="my-4">
      <h3 className="text-center py-1 text-white font-light tracking-wide">
        {meme.title}
      </h3>
      <img src={`${meme.src}`} alt="" className="h-100 w-auto object-cover" />
    </div>
  )
}
