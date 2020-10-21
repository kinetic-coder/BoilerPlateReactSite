import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ButtonAppBar from "./components/ButtonAppBar";

class Page extends Component {
  render() {
    // If the page has got children then display them, otherwise don't.
    return (
      <>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography
            component="div"
            style={{ backgroundColor: "white", height: "100vh" }}
          >
            <ButtonAppBar />
            {this.props.children != null ? this.props.children : null}
          </Typography>
        </Container>
      </>
    );
  }
}

export default Page;
