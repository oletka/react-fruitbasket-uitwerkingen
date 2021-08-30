import React, { useState } from 'react';
import './App.css';

function App() {
  const [strawberries, setStrawberries] = useState(0);
  const [bananas, setBananas] = useState(0);
  const [apples, setApples] = useState(0);
  const [kiwis, setKiwis] = useState(0);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(0);
  const [zipcode, setZipcode] = useState('');
  const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
  const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
  const [remark, setRemark] = useState('');
  const [agreeTerms, toggleAgreeTerms] = useState(false);

  function resetFruits() {
    setStrawberries(0);
    setBananas(0);
    setApples(0);
    setKiwis(0);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`
    Voornaam: ${firstname}, 
    Achternaam: ${lastname}, 
    Leeftijd: ${age}, 
    Postcode: ${zipcode}, 
    Bezorgfrequentie: ${deliveryFrequency},
    Opmerkingen: ${remark},
    Algemene voorwaarden: ${agreeTerms}
    `);
    console.log(`Fruitmand bestelling - aardbeiden: ${strawberries}, bananen: ${bananas}, appels: ${apples}, kiwi's: ${kiwis}`);
  }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <section className="fruit-counters">
        <article>
          <h2>🍓 Aardbeien</h2>
          <button type="button" disabled={strawberries === 0} onClick={() => setStrawberries(strawberries - 1)}>
            -
          </button>
          <p>{strawberries}</p>
          <button type="button" onClick={() => setStrawberries(strawberries + 1)}>
            +
          </button>
        </article>
        <article>
          <h2>🍌 Bananen</h2>
          <button type="button" disabled={bananas === 0} onClick={() => setBananas(bananas - 1)}>
            -
          </button>
          <p>{bananas}</p>
          <button type="button" onClick={() => setBananas(bananas + 1)}>
            +
          </button>
        </article>
        <article>
          <h2>🍏 Appels</h2>
          <button type="button" disabled={apples === 0} onClick={() => setApples(apples - 1)}>
            -
          </button>
          <p>{apples}</p>
          <button type="button" onClick={() => setApples(apples + 1)}>
            +
          </button>
        </article>
        <article>
          <h2>🥝 Kiwi's</h2>
          <button type="button" disabled={kiwis === 0} onClick={() => setKiwis(kiwis - 1)}>
            -
          </button>
          <p>{kiwis}</p>
          <button type="button" onClick={() => setKiwis(kiwis + 1)}>
            +
          </button>
        </article>
        <button type="button" onClick={() => resetFruits()}>Reset</button>
      </section>

      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="firstname-field">Voornaam</label>
          <input
            name="firstname"
            id="firstname-field"
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="lastname-field">Achternaam</label>
          <input
            name="lastname"
            id="lastname-field"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="age-field">Leeftijd</label>
          <input
            name="age"
            id="age-field"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="zipcode-field">Postcode</label>
          <input
            name="zipcode"
            id="zipcode-field"
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="delivery-field">Bezorgfrequentie</label>
        </section>
        <section>
          <select
            name="delivery"
            id="delivery-field"
            value={deliveryFrequency}
            onChange={(e) => toggleDeliveryFrequency(e.target.value)}
          >
            <option value="week">Iedere week</option>
            <option value="two-week">Om de week</option>
            <option value="month">Iedere maand</option>
          </select>
        </section>
        <section>
        <input
          type="radio"
          value="daytime"
          name="timeslot"
          id="timeslot-field-daytime"
          checked={deliveryTimeslot === 'daytime'}
          onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
        />
        <label htmlFor="timeslot-field-daytime">Overdag</label>
          <input
            type="radio"
            value="evening"
            checked={deliveryTimeslot === 'evening'}
            onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
            name="timeslot"
            id="timeslot-field-evening"
          />
          <label htmlFor="timeslot-field-evening">'s Avonds</label>
        </section>
        <section>
          <label htmlFor="remark-field">Opmerking</label>
          <textarea
            name="remark"
            id="remark-field"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            rows={6}
            cols={40}
          />
        </section>
        <section>
          <input
            type="checkbox"
            name="agree"
            id="agree-field"
            value={agreeTerms}
            onChange={(e) => toggleAgreeTerms(e.target.checked)}
          />
          <label htmlFor="agree-field">Ik ga akkoord met de voorwaarden</label>
        </section>

        <button type="submit">Verzend</button>
      </form>
    </>
  );
}

export default App;
