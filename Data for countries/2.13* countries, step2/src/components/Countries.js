import { useState } from "react";
import Note from "./Note";
import CountryData from "./Countrydata";

const Countries = (props) => {
  const [countri, setCountri] = useState([]);

  const displayLogic =
    props.searchFunc().length < props.countries.length
      ? props
          .searchFunc()
          .map((country) => (
            <Note key={country.name.common} country={country} />
          ))
      : null;

  // const clickButton =

  const checkOverTen =
    displayLogic?.length > 10 ? (
      <p>Too many matches, specify another filter</p>
    ) : (
      displayLogic
    );

  console.log(checkOverTen[0].props.country);

  const handleCountryClick = () => {
    setCountri();
  };

  return (
    <div>
      <div>
        {checkOverTen?.length === 1 ? (
          <CountryData country={checkOverTen[0].props.country} />
        ) : (
          checkOverTen
        )}
      </div>
    </div>
  );
};

export default Countries;

// One option could be to have a state for the selected country which
// the button will set. So then you display the country details if there
// is selected country or if filtering resulted only in a single country
