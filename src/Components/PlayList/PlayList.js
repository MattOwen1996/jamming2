import React from 'react';
import './PlayList.css';

class PlayList extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <!-- Add a  component -->
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;  
