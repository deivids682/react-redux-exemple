import React from "react";
import { connect } from "react-redux";
import { selectSong } from "./../actions";

class SongList extends React.Component {
  renderList() {
    return (
      <ul className="list-group mt-4">
        {this.props.songs.map((song, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <button
                className="btn btn-primary"
                onClick={() => this.props.selectSong(song)}
              >
                Select
              </button>
              <div>{song.title}</div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateProps, { selectSong })(SongList);
