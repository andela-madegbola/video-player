import React from 'react';

const VideoListItem = (props) => {
  let video = props.video;
  const ImageURL = video.snippet.thumbnails.default.url
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src = {ImageURL} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;