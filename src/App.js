import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState('');
    const [remarksValue, setRemarksValue] = React.useState('');
    const [newsletterValue, setNewsletterValue] = React.useState(false);

    function handleSubmit(event) {
        console.log("Name: " + {})

        event.preventDefault();
    }

  return (
      <form onSubmit={handleSubmit}>
          <fieldset>
              <legend>Gegevens</legend>
              <label htmlFor="name">Naam: </label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
              />
              <label htmlFor="age">Leeftijd: </label>
              <input
                  type="number"
                  id="age"
                  name="age"
                  value={ageValue}
                  onChange={(e) => setAgeValue(e.target.value)}
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
                  value={remarksValue}
                  onChange={(e) => setRemarksValue(e.target.value)}
              ></textarea>
              <input
                  type="checkbox"
                  name="form-newsletter"
                  id="form-newsletter"
                  checked={newsletterValue}
                  onChange={(e) => setNewsletterValue(!newsletterValue)}
              />
              <label htmlFor="form-newsletter">Ik schrijf me in voor de nieuwsbrief</label>
              <button type="submit">Versturen</button>
          </fieldset>
      </form>
  );
}

export default App;
