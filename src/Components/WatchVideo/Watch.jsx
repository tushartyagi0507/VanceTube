import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const [serachparam] = useSearchParams();
  console.log(serachparam.get("v"));

  return (
    <div className="p-1 m-1">
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/" + serachparam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
