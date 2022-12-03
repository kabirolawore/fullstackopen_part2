import Note from "./Note";
import CountryData from "./Countrydata";

const Countries = (props) => {
  // console.log(props.searchFunc());
  // console.log(props.countries);

  const displayLogic =
    props.searchFunc().length < props.countries.length
      ? props
          .searchFunc()
          .map((country) => (
            <Note key={country.name.common} country={country} />
          ))
      : null;

  // console.log(displayLogic);

  const checkOverTen =
    displayLogic?.length > 10 ? (
      <p>Too many matches, specify another filter</p>
    ) : (
      displayLogic
    );

  // console.log(checkOverTen[0].props.country);
  // console.log(checkOverTen?.length === 1);

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
