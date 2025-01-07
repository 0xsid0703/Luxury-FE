import React from 'react'

type Props = {
    video: string;
    onClose: () => void;
}

const VideoModal = ({video, onClose}: Props) => {

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
         onClick={handleOutsideClick}>
      <div className="bg-white p-2 rounded-xl shadow-lg w-3/4 max-w-7xl relative">        
        {/* YouTube Video */}
        <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={`${video}?autoplay=1`}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal