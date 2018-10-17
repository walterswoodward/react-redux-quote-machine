import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { nextQuoteAction } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

export const ButtonsContainer = connect(
  mapStateToProps,
  // Object Literal short-hand for binding actions with connect
  // With this there is no need for mapDispatchToProps(dispatch)
 {nextQuoteAction}
)(
  class extends Component {
    render() {
      console.log("this.props: ", this.props)
      return (
        <div className="buttons">
          <span id="buttons_tweet" className="button">
            <a id= "tweet-quote" href="twitter.com/intent/tweet" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </span>
          <span
            onClick={() => this.props.nextQuoteAction(this.props.quotes)}
            id="new-quote" // was 'button_text' but changed for FCC CDN test
            className="button"
          >
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </span>
        </div>
      );
    }
  }
);

function mapStateToProps(state) {
  return {
    quotes: state.quotes
  };
}

// #3 Use bindActionCreators Method
// If you use this, make sure to remember to pass mapDispatchToProps into connect

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       nextQuote: nextQuoteAction
//     },
//     dispatch
//   );
// }

