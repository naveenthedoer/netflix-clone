import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ id, title }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  useTrailerVideo({ id });

  return (
    <div className="h-full overflow-x-hidden">
      {trailer && trailer.site === "YouTube" && (
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailer.key +
            "?autoplay=1&mute=1&controls=0&showinfo=0"
          }
          title={title}
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
