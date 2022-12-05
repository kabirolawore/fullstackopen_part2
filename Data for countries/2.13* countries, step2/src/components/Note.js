import Button from "./Button";
import CountryData from "./Countrydata";

const Note = ({ country }) => {
  // console.log(country);

  const countryClick = () => {
    // console.log(country);
    // return <CountryData country={country} />;
  };

  return (
    <p>
      {country.name.common} <Button handleClick={countryClick} text="show" />
    </p>
  );
};

export default Note;
