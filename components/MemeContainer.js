 export default function MemeContainer({meme}) {
    if (meme.endsWith("mp4")) {
        return (
            <div className="my-4">
                <video autoPlay loop className="h-100 w-auto">
                    <source src={`${meme}`} type="video/mp4"></source>
                </video>
            </div>
        )
    }
    return (
        <div className="my-4">
            <img src={`${meme}`} alt="" className="h-100 w-auto object-cover" />
        </div>
    )
}