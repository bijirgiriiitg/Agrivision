import React, { Component } from "react";
import linkedInlogo from "./images/LinkedinLogo.png";
import mailLogo from "./images/mail.png";
import "./ReadMore.css";
import marked from "marked";

class ReadMore extends Component {
  state = {
    classChangerButtonParent: "read-more-button-parent",
    classChangerMatterBlock: "matter-block",
    buttonText: "Read More",
  };
  handleReadMore = () => {
    if (this.state.buttonText === "Read More") {
      this.setState({
        classChangerButtonParent: "read-more-button-parent-after-clicking",
        classChangerMatterBlock: "matter-block-after-clicking",
        buttonText: "Read Less",
      });
    } else {
      this.setState({
        classChangerButtonParent: "read-more-button-parent",
        classChangerMatterBlock: "matter-block",
        buttonText: "Read More",
      });
    }
  };

  render() {
    return (
      <div className="read-more-container">
        <div className="article-heading">
          <h1 className="article-heading-content">{this.props.article.heading}</h1>
        </div>

        <div className="article-description">
          <p className="article-description-matter">{this.props.article.description}</p>
        </div>
        <div className="article-sent-by">
          <img
            className="readMore_author-pic"
            src={this.props.article.author ? this.props.article.author.image : null}
            alt=""
          ></img>
          <p className="readMore_author-name">
            By{" "}
            {this.props.article.author
              ? this.props.article.author.name.join(" ")
              : "Anonymous"}{" "}
            - {this.props.article.createdAt.slice(0, 10)}
          </p>
          <img className="linked-in-logo" src={linkedInlogo} alt=""></img>
          <img className="mail-logo" src={mailLogo} alt=""></img>
        </div>
        {/* <img className="article-image" src="" alt=""></img> */}
        {/* <div className="highlights">
          <p className="highlights-heading">Lorem, ipsum dolor.</p>
          <p className="highlight-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquam sed
            officia? Minima commodi molestias veritatis aliquam maiores labore nostrum
            rerum eius. Corrupti expedita exercitationem possimus cum! Aperiam, saepe quod
            quas reprehenderit laboriosam vitae. Eligendi quidem soluta, eos accusantium
            culpa fugiat, ea est, mollitia iste tempora temporibus laborum fuga eius
            ratione placeat nulla in dolorum facere consectetur. Voluptate, excepturi.
          </p>
        </div> */}
        {/* <div className="img-container">
          <div className="image1-container">
            <img className="article-image" src="" alt="" />
          </div>
          <div className="image2-container">
            <img className="article-image" src="" alt="" />
          </div>
        </div> */}

        <div className={this.state.classChangerMatterBlock + " mainArticle"}>
          {/* {this.props.mainContent && <Markdown>{this.props.mainContent}</Markdown>} */}
          {this.props.mainContent && (
            <section className="matter">
              <article
                dangerouslySetInnerHTML={{ __html: marked(this.props.mainContent) }}
              ></article>
            </section>
          )}
          <div className={this.state.classChangerButtonParent}>
            <button className="read-more-button" onClick={this.handleReadMore}>
              {this.state.buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ReadMore;
