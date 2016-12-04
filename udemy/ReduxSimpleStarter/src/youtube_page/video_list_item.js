import React from 'react';

const VideoListItem = ({video}) => {
    const snippet = video.snippet,
        imageUrl = snippet.thumbnails.default.url,
        title = snippet.title;
    return (
        <li className='list-group-item'>
	        <div className='video-list media'>
	        	<div className='media-left'>
	        		<img className='media-object' src={imageUrl}/>
	        	</div>
	        </div>
	        <div className='media-body media-right'>
	        	<div className='media-heading'>{title}</div>
	        </div>
        </li>
        );
};

export default VideoListItem;