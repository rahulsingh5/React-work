import React from 'react';
import VideoListItem from './video_list_item';

/**
 *  In functional Component - props are available as an arguments
 * In class based component -- props are available inside any method with this.props
 */

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video}
			/>
		);
	});

	return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
