import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../shared/VideoLength";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.videoId}`} className="group">
      <div className="flex flex-col mb-8">
        {/* Thumbnail */}
        <div className="relative h-48 md:h-[15rem] md:rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <img
            src={video?.thumbnails[0]?.url}
            alt="thumbnails"
            className="h-full w-full object-cover"
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>

        {/* Video Info */}
        <div className="flex mt-3">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src={video?.author?.avatar[0]?.url}
              alt="Avatar"
              className="h-9 w-9 rounded-full object-cover"
            />
          </div>

          {/* Video Details */}
          <div className="flex flex-col ml-3 overflow-hidden">
            {/* Video Title */}
            <span className="tracking-normal text-[17px] font-semibold text-black dark:text-white line-clamp-2 group-hover:text-black dark:group-hover:text-white transition-all">
              {video?.title}
            </span>

            {/* Channel Name and Verified Badge */}
            <span className="text-[14px] font-semibold mt-1 mb-1 text-black/[0.8] dark:text-white/[0.8] flex items-center">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-blue-500 text-[14px] ml-1" />
              )}
            </span>

            {/* Views and Published Time */}
            <div className="text-[13px] font-normal text-black/[0.7] dark:text-white/[0.7] truncate ">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="mx-1">•</span>
              <span>{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
