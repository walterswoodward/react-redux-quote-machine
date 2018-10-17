import React, { Component } from "react";
import { connect } from "react-redux";

// Integrates connect with wrapper with component code.  Much cleaner.
export const Quote = connect(mapStateToProps)(
  class extends Component {
    injectContent() {
      return (
        <div className="quotes" key={this.props.quote.key}>
          <div id = "text" className="quotes_text">{this.props.quote.content}</div>
          <div id = "author" className="quotes_author">- {this.props.quote.author} -</div>
        </div>
      );
    }
    render() {
      return <div className="quotes_container">{this.injectContent()}</div>;
    }
  }
);

function mapStateToProps(state) {
  return {
    quote: state.currentQuote
  };
}
