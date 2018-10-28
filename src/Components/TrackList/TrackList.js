import React from 'react';
import 'Track' from '../Track/Track.js';
import './TrackList.css';

class Tracklist extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track =>
          <Track key={track.id} track={track} onRemove={this.props.onRemove} onAdd={this.props.onAdd} shouldAdd={this.props.shouldAdd} isRemoval={true} />)}
      </div>
    );
  }
}

export default TrackList;
