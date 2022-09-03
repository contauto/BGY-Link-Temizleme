import React, { Component } from "react";
import { ExternalLink } from "react-external-link";

export default class Linker extends Component {
  state = {
    text: null,
    link: null,
    visible: false,
  };

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      text: value,
    });
  };

  onClick = (event) => {
    event.preventDefault();
    let k = "";
    for (let i = 0; i < this.state.text.length; i++) {
      if (
        (this.state.text.charCodeAt(i) > 64 &&
          this.state.text.charCodeAt(i) < 91) ||
        (this.state.text.charCodeAt(i) > 96 &&
          this.state.text.charCodeAt(i) < 123) ||
        (this.state.text.charCodeAt(i) > 45 &&
          this.state.text.charCodeAt(i) < 59)
      ) {
        k = k + this.state.text[i];
      } else {
      }
    }

    if (k.startsWith("https://" || "http://")) {
    } else {
      k = "https://" + k;
    }

    this.setState({
      link: k,
      visible: true,
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar coloring">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 text-white">
              Link Düzeltici
            </span>
          </div>
        </nav>
        <div className="">
          <div className="mt-5">
            <div>
              <label className="form-label d-flex justify-content-center mt-5 text-white">
                Linkinizi Giriniz
              </label>
              <input
                className="form-control mt-5"
                onChange={this.onChange}
                maxLength={300}
                type="text"
              ></input>
            </div>
            <div className="mt-5 d-flex justify-content-center">
              <button className="btn  btn-dark" onClick={this.onClick}>
                Lütfen Tıklayınız
              </button>
            </div>
            <div>
              <ExternalLink
                className="mt-5 d-flex justify-content-center"
                style={{
                  visibility: this.state.visible ? "visible" : "hidden",
                }}
                href={this.state.link}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
