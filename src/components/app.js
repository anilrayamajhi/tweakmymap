import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Button from "./Button";
// import GridListExampleComplex from "./GridListExampleComplex"

const App = () => (
  <MuiThemeProvider>
    <div>
      {/* <GridListExampleComplex /> */}
      
      <Button />
    </div>
  </MuiThemeProvider>
);

export default App;
