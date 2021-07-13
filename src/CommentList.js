import React from "react";
import Comment from "./Comment";
import Proptypes from "prop-types";
class CommentList extends React.Component {
  static defaultProps = {
    comments: Proptypes.array,
    onDeleteComment: Proptypes.func,
  };

  handleDeleteComment(index) {
      if (this.props.onDeleteComment) {
          this.props.onDeleteComment(index);
      }
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => {
          return (
            <Comment
              key={i}
              comment={comment}
              index={i}
              onDeleteComment={this.handleDeleteComment.bind(this)}
            ></Comment>
          );
        })}
      </div>
    );
  }
}

export default CommentList;
