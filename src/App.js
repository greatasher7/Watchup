import React, {Component, Fragment} from "react";
import GlobalStyles from "Components/GlobalStyles";
import GlobalFonts from "Components/GlobalFonts";
import Router from "Components/Router";

class App extends Component{
  render(){
    return(
      <Fragment>
        <GlobalStyles />
        <GlobalFonts />
        <Router />
      </Fragment>
    )
  }
}
export default App;