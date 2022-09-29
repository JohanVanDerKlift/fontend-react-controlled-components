import React from 'react';
import './App.css';

function App() {
    // const [nameValue, setNameValue] = React.useState('');
    // const [ageValue, setAgeValue] = React.useState('');
    // const [remarksValue, setRemarksValue] = React.useState('');
    // const [newsletterValue, setNewsletterValue] = React.useState(false);

    const [ state, setState ] = React.useState({
        fullName: "",
        age: "",
        remarks: "",
        formNewsletter: false
    })

    function handleInput(e) {
        setState(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Name: " + e.target.valueOf().fullName.value);
        console.log("Age: " + e.target.valueOf().age.value);
        console.log("Remarks: " + e.target.valueOf().remarks.value);
        console.log("News Letter: " + e.target.valueOf().formNewsletter.value);
    }

  return (
      // <form onSubmit={handleSubmit.bind(state.fullName, state.age, state.remarks, state.formNewsletter)}>
      <form onSubmit={handleSubmit.bind(state)}>
          <fieldset>
              <legend>Gegevens</legend>
              <label htmlFor="fullname">Naam: </label>
              <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={state.fullName}
                  onChange={handleInput}
              />
              <label htmlFor="age">Leeftijd: </label>
              <input
                  type="number"
                  id="age"
                  name="age"
                  value={state.age}
                  onChange={handleInput}
              />
          </fieldset>
          <fieldset>
              <legend>Jouw review</legend>
              <label htmlFor="remarks">Opmerkingen: </label>
              <textarea
                  name="remarks"
                  id="remarks"
                  cols="30"
                  rows="10"
                  placeholder="Wat vond je van het recept?"
                  value={state.remarks}
                  onChange={handleInput}
              ></textarea>
              <input
                  type="checkbox"
                  name="formNewsletter"
                  id="formNewsletter"
                  checked={state.formNewsletter}
                  onChange={handleInput}
              />
              <label htmlFor="form-newsletter">Ik schrijf me in voor de nieuwsbrief</label>
              <button type="submit">Versturen</button>
          </fieldset>
      </form>
  );
}

export default App;
