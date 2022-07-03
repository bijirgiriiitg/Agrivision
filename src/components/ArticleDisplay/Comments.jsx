import React, { Component } from "react";
import commentLogo from "./images/comment.png";
import "../ArticleDisplay/Comments.css";
import { baseURL } from "../../Apis";

class Comments extends Component {
  postComment = (e) => {
    e.preventDefault();
    fetch(`${baseURL}/article/${this.props.articleId}/addComment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ comment: document.getElementById("fname").value }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            document.getElementById("fname").value = "";
          }
        },
        (error) => {}
      );
  };

  render() {
    return (
      <div className="comments-container">
        <div className="comment-logo-container">
          <img src={commentLogo} className="comment-pic" alt="" />
          <p className="comments-heading">Comments ({this.props.comments.length})</p>
        </div>
        <div className="post-comments-block">
          <form>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Type your comments here"
            ></input>
            <label className="post-button" htmlFor="fname">
              <button onClick={this.postComment}>POST</button>
            </label>
          </form>
        </div>
        <ul className="comments-list">
          {this.props.comments.map((comment) => (
            <li>
              <div className="comments-list-title">
                <img className="author-pic" alt=""></img>
                <p className="author-name">{comment.author}</p>
                <p className="author-date">Oct 13,2021</p>
              </div>
              <p className="comments-list-content">{comment.content}</p>
            </li>
          ))}
          {/* <li>
            <div className="comments-list-title">
              <img className="author-pic" alt=""></img>
              <p className="author-name">Paul Olyslager</p>
              <p className="author-date">Oct 13,2021</p>
            </div>
            <p className="comments-list-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in accusamus
              quos nisi voluptate praesentium maiores dolores. Quos, cupiditate
              culpa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
              dolores!
            </p>
          </li>

          <li>
            <div className="comments-list-title">
              <img className="author-pic" alt=""></img>
              <p className="author-name">Paul Olyslager</p>
              <p className="author-date">Oct 13,2021</p>
            </div>
            <p className="comments-list-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in accusamus
              quos nisi voluptate praesentium maiores dolores. Quos, cupiditate
              culpa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
              dolores!
            </p>
          </li>
          <li>
            <div className="comments-list-title">
              <img className="author-pic" alt=""></img>
              <p className="author-name">Paul Olyslager</p>
              <p className="author-date">Oct 13,2021</p>
            </div>
            <p className="comments-list-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in accusamus
              quos nisi voluptate praesentium maiores dolores. Quos, cupiditate
              culpa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
              dolores!
            </p>
          </li> */}
        </ul>
      </div>
    );
  }
}
export default Comments;
