import { ExternalLink } from "react-external-link";
import { useState } from "react";

const Linker = () => {
  const [state, setState] = useState({
    text: null,
    link: null,
    visible: false,
  });

  const [darkMode, setDarkMode] = useState(false);

  const onChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      text: value,
    });
  };

  const onClick = (event) => {
    event.preventDefault();
    let wantedLink = "";
    let { text } = state;
    for (let i = 0; i < state.text.length; i++) {
      if (
        (text.charCodeAt(i) > 60 && text.charCodeAt(i) < 91) ||
        (text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123) ||
        (text.charCodeAt(i) > 44 && text.charCodeAt(i) < 59) ||
        text.charCodeAt(i) === 95 ||
        text.charCodeAt(i) === 35
      ) {
        wantedLink += text[i];
      } else {
      }
    }

    if (wantedLink.startsWith("https://" || "http://")) {
    } else {
      wantedLink = "https://" + wantedLink;
    }

    setState({
      ...state,
      link: wantedLink,
      visible: true,
    });
  };

  const handleCheckBox = (event) => {
    setDarkMode((current) => !current);
  };

  let mainDivClass, navClass, linkClass, btnClass;
  if (darkMode) {
    mainDivClass = "text-white";
    navClass = "navbar coloring";
    linkClass = "mt-5 d-flex justify-content-center text-white";
    btnClass = "btn btn-dark";
    document.body.style = "background: dark;";
  } else {
    mainDivClass = "text-primary";
    navClass = "navbar bg-primary";
    linkClass = "mt-5 d-flex justify-content-center text-primary";
    btnClass = "btn btn-primary";
    document.body.style = "background: white;";
  }

  return (
    <div className={mainDivClass}>
      <nav className={navClass}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <a
              className="nav-linki"
              href="https://github.com/contauto/BGY-Link-Temizleme"
            >
              {" "}
              Link Temizleyici
            </a>
          </span>

          <span>
            <div className="form-check form-switch">
              <input
                value={darkMode}
                className="form-check-input"
                type="checkbox"
                onChange={handleCheckBox}
              />
            </div>
          </span>
        </div>
      </nav>
      <div className="form">
        <div className="mt-5">
          <div>
            {!state.link ? (
              <label className="form-label d-flex justify-content-center mt-5">
                Linkinizi Giriniz
              </label>
            ) : (
              <label style={{cursor:"pointer",textDecoration:"underline"}} className="form-label d-flex justify-content-center mt-5"
                onClick={() => {
                  navigator.clipboard.writeText(state.link);
                }}
              >Kopyala</label>
            )}
            <input
              className="form-control mt-5"
              onChange={onChange}
              maxLength={300}
              type="text"
            ></input>
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <button className={btnClass} onClick={onClick}>
              Lütfen Tıklayınız
            </button>
          </div>
          <div>
            <ExternalLink
              className={linkClass}
              style={{
                visibility: state.visible ? "visible" : "hidden",
              }}
              href={state.link}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linker;
