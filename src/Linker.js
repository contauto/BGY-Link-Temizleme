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
    let uygunLink = "";
    for (let i = 0; i < this.state.text.length; i++) {
      if (
        (
          this.state.text.charCodeAt(i) > 60 &&
          this.state.text.charCodeAt(i) < 91) ||
        (this.state.text.charCodeAt(i) > 96 &&
          this.state.text.charCodeAt(i) < 123) ||
        (this.state.text.charCodeAt(i) > 44 &&
          this.state.text.charCodeAt(i) < 59) ||
        (this.state.text.charCodeAt(i) === 95) ||
        (this.state.text.charCodeAt(i) === 35)
      ) {
        uygunLink += this.state.text[i];
      } else {
      }
    }

    if (uygunLink.startsWith("https://" || "http://")) {
    } else {
      uygunLink = "https://" + uygunLink;
    }

    this.setState({
      link: uygunLink,
      visible: true,
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar coloring">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 text-white">
              <a className="nav-linki" href="https://github.com/contauto/BGY-Link-Temizleme"> Link Temizleyici</a>
            </span>
          </div>
        </nav>
        <div className="form">
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
