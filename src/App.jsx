import { useState } from "react";
import "./App.css";

const LanguageProficiency = () => {
  const [proficiency, setProficiency] = useState("");

  const handleChangeEvent = (event) => {
    setProficiency(event.target.value);
  };

  return (
    <div>
      <form onChange={handleChangeEvent}>
        <label>Select your proficiency in a programming language: </label>
        <br />
        <input type="radio" value="Beginner" name="proficiency" />
        Beginner <br />
        <input type="radio" value="Intermediate" name="proficiency" />
        Intermediate
        <br />
        <input type="radio" value="Advanced" name="proficiency" />
        Advanced <br />
      </form>
      <p>Select proficiency level: {proficiency}</p>
    </div>
  );
};

const Destination = () => {
  const [destination, setDestination] = useState("");

  const handleChangeEvent = (event) => {
    setDestination(event.target.value);
  };
  return (
    <div>
      <form onChange={handleChangeEvent}>
        <label>Select your dream travel destination: </label>
        <br />
        <input type="radio" value="Beach" name="destination" />
        Beach
        <br />
        <input type="radio" value="Mountain" name="destination" />
        Mountain
        <br />
        <input type="radio" value="City" name="destination" />
        City
        <br />
      </form>
      <p>Selected travel destination: {destination}</p>
    </div>
  );
};

const Coffee = () => {
  const [preference, setPreference] = useState("");

  const handleChangeEvent = (event) => {
    setPreference(event.target.value);
  };

  return (
    <div>
      <form onChange={handleChangeEvent}>
        <label>Selecy your coffee preference: </label>
        <br />
        <input type="radio" value="Black Coffee" name="coffee" />
        Black Coffee
        <br />
        <input type="radio" value="Latte" name="coffee" />
        Latte
        <br />
        <input type="radio" value="Cappuccino" name="coffee" />
        Cappuccino
        <br />
      </form>
      <p>Selected coffee preference: {preference}</p>
    </div>
  );
};

const Pets = () => {
  const [selectedPet, setSelectedPet] = useState("");

  const handleChangeEvent = (event) => {
    setSelectedPet(event.target.value);
  };
  return (
    <div>
      <form onChange={handleChangeEvent}>
        <label>Select your preferred pet: </label>
        <br />
        <input type="radio" value="Dog" name="pets" />
        Dog
        <br />
        <input type="radio" value="Cat" name="pets" />
        Cat
        <br />
        <input type="radio" value="Fish" name="pets" />
        Fish
        <br />
      </form>
      <p>Selected pet: {selectedPet}</p>
    </div>
  );
};

const Sports = () => {
  const [currentSport, setCurrentSport] = useState("");

  const handleChangeEvent = (event) => {
    setCurrentSport(event.target.value);
  };
  return (
    <div>
      <form onChange={handleChangeEvent}>
        <label>Select your favrite sports: </label>
        <br />
        <input type="radio" value="Moto GP" name="sports" />
        Moto GP
        <br />
        <input type="radio" value="Cricket" name="sports" />
        Cricket
        <br />
        <input type="radio" value="Kabaddi" name="sports" />
        Kabaddi
        <br />
      </form>
      <p>Selected sport: {currentSport}</p>
    </div>
  );
};
export default function App() {
  return (
    <main>
      <LanguageProficiency />
      <br />
      <Destination />
      <br />
      <Coffee />
      <br />
      <Pets />
      <br />
      <Sports />
    </main>
  );
}
