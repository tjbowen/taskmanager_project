import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: this.props.tags.find((tag) => { return tag.id === props.id })
    }
  }
  render() {
    return (
      <div style={{ display: "inline-block" }} className="px-1">
        <FontAwesomeIcon icon={faBookmark} color={this.state.tag.color} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    tags: state.tags
  };
};

export default connect(mapStateToProps)(Tag);