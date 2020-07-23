import React, { useState } from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState(["USA", "UK", "INDIA"
  ]);

  // STATE = How to write a variable in REACT 

  return (
    <div className="App">
      <div className="app__header">
        <h1> COVID-19 TRACKER </h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* Loop through all the countries and show a drop down list of the options*/}

            {
              countries.map(country => (
                <MenuItem value={country}>{country}</MenuItem>
              ))

            }

            {/*<MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option two</MenuItem>
            <MenuItem value="worldwide">Option Three</MenuItem>
  <MenuItem value="worldwide">Option four</MenuItem>*/}
          </Select>

        </FormControl>

      </div>

      {/* Header */}
      {/* Title + Select input dropdown field*/}

      {/* InfoBoxs*/}
      {/* InfoBoxs*/}
      {/* InfoBoxs*/}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
