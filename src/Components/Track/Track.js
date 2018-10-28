import React from 'react';
import './Track.css';

class Track extends React.Component {

  constructor(props) {
      super(props);
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {

    renderAction() {
      if (isRemoval === true) {
        return (<a className='Track-action'>-</a>);
      } else {
        return (<a className='Track-action'>+</a>);
      }
    }

    return (
      <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | {this.props.track.album}</p>
        </div>
        {this.props.shouldAdd && <a className="Track-action" onClick={this.addTrack}>+</a>}
        {!this.props.shouldAdd && <a className="Track-action" onClick={this.removeTrack}>-</a>}
      </div>
    );
  }
}

export default Track;
