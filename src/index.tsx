import React from "react"
import ReactDOM from "react-dom"
import { App } from "./components/App"
import "firebase/firestore"
import Firebase from "./config"
import "./index.css"
import * as serviceWorker from "./serviceWorker"

new Firebase()

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
