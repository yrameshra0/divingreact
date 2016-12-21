import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const snippet = video.snippet,
        imageUrl = snippet.thumbnails.default.url,
        title = snippet.title;
    return (
        <li onClick={() => onVideoSelect(video)} className='video-item list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl}/>
                </div>
                <div className='media-body media-right'>
                    <div className='media-heading'>{title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;