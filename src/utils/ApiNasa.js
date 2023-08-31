import React from "react";
import handlerRes from "./handlerRes";
import { API_KEY } from "../config/nasa";

class Api extends React.Component {
  constructor(address, headers) {
    super();
    this.headers = headers;
    this.address = address;
  }

  getItems() {
    return fetch(
      `${this.address}/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${API_KEY}`,
      {
        headers: this.headers,
      }
    )(handlerRes);
  }
}

const api = new Api("https://api.nasa.gov", {
  "Content-Type": "application/json",
});

export default api;
