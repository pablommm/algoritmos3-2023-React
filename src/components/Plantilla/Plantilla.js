import React from "react"
import template from "./Plantilla.jsx"

class Plantilla extends React.Component {
  render() {
    return template.call(this)
  }
}

export default Plantilla
