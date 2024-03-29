import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video; === {video}
    const imgUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <li className='list-group-item' onClick={() => onVideoSelect(video)}>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imgUrl} />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        <h5>{title}</h5>
                    </div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;