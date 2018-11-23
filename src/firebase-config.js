const Rebase = require('re-base')
const firebase = require('firebase')

// Initialize Firebase
const configDB = {
  apiKey: "AIzaSyDFNDezRjze8EEljXWmTYbUXwaEuZDTu1I",
  authDomain: "company-portfolio-8f856.firebaseapp.com",
  databaseURL: "https://company-portfolio-8f856.firebaseio.com",
  projectId: "company-portfolio-8f856",
  storageBucket: "company-portfolio-8f856.appspot.com",
  messagingSenderId: "298717554325"
}

  const app = firebase.initializeApp(configDB)
  const config = Rebase.createClass(app.database())

  export const storage = app.storage()
  export const auth = app.auth()

  export default config