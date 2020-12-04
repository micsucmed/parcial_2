import React from "react";
import ReactDOM from "react-dom";
import Series from "./components/Series.js";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "bootstrap/dist/css/bootstrap.min.css";
import { IntlProvider } from "react-intl";

import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

function getBrowserLang() {
  return navigator.language || navigator.userLanguage;
}

function getLocale() {
  const lang = getBrowserLang();
  return lang === "en" ? localeEnMessages : localeEsMessages;
}

ReactDOM.render(
  <IntlProvider locale={getBrowserLang()} messages={getLocale()}>
    <Series url={getLocale().URL} />
  </IntlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
