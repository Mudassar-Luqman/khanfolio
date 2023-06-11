import React from "react";

const ResumeVideo = () => {
  return (
    <div id="video" data-aos="fade-up">
      <h1 className=" font-bold text-5xl text-white">
        Resume <span className="text-primary-yellow">Video</span>
        <div className="p-5 card-shadow mt-10">
          <video
            className="rounded-md"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>
      </h1>
    </div>
  );
};

export default ResumeVideo;
