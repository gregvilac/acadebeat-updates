import { useTts } from "tts-react";
import volumeIcon from "../assets/icons/volume.svg";

const ReadThisCard = ({ children, code, targetQuoteMarks }) => {
  const fetchAudioData = () => {
    const details = {
      audio: import.meta.env.VITE_CLOUDFRONT_DOMAIN + "/" + code + "Target.mp3",
      marks: targetQuoteMarks,
    };
    return details;
  };

  const { ttsChildren, play } = useTts({
    children,
    markTextAsSpoken: true,
    fetchAudioData: fetchAudioData,
  });

  return (
    <div>
      <button
        onClick={(e) => {
          // e.stopPropagation();
          play;
        }}
      >
        <img src={volumeIcon} alt="click to play audio" />
      </button>
      {ttsChildren}
    </div>
  );
};

export default ReadThisCard;
