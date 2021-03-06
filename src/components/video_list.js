import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

	const videoItems = props.videos.map( video => {
		return (
			<VideoListItem
				onVideoSelection = {props.onVideoSelection}
				key={ video.etag }
				video = { video } />
		);
	})

	return(
		<ul  className="col-md-4 group-list">
		{ videoItems }
		</ul>
		)
}

export default VideoList;