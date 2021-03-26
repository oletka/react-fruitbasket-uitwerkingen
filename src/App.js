import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const [strawberries, setStrawberries] = useState(0);
  const [bananas, setBananas] = useState(0);
  const [apples, setApples] = useState(0);
  const [kiwis, setKiwis] = useState(0);

  const { handleSubmit, register, errors, watch } = useForm();
  const selectedDelivery = watch('delivery');

  function resetFruits() {
    setStrawberries(0);
    setBananas(0);
    setApples(0);
    setKiwis(0);
  }

  function onSubmit(data) {
    console.log(data);
    console.log(`Fruitmand bestelling - aardbeiden: ${strawberries}, bananen: ${bananas}, appels: ${apples}, kiwi's: ${kiwis}`)
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
          <button type="button"  disabled={apples === 0} onClick={() => setApples(apples - 1)}>
            -
          </button>
          <p>{apples}</p>
          <button type="button" onClick={() => setApples(apples + 1)}>
            +
          </button>
        </article>
        <article>
          <h2>🥝 Kiwi's</h2>
          <button type="button"  disabled={kiwis === 0} onClick={() => setKiwis(kiwis - 1)}>
            -
          </button>
          <p>{kiwis}</p>
          <button type="button" onClick={() => setKiwis(kiwis + 1)}>
            +
          </button>
        </article>
        <button type="button" onClick={() => resetFruits()}>Reset</button>
      </section>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="firstName">Voornaam</label>
          <input
            name="firstName"
            id="firstName"
            type="text"
            ref={register({ required: true })}
          />
          {errors.firstName && <p className="error">Voornaam is verplicht</p>}
        </section>
        <section>
          <label htmlFor="lastName">Achternaam</label>
          <input
            name="lastName"
            id="lastName"
            type="text"
            ref={register({ required: true })}
          />
          {errors.lastName && <p className="error">Achternaam is verplicht</p>}
        </section>
        <section>
          <label htmlFor="age">Leeftijd</label>
          <input
            name="age"
            id="age"
            type="number"
            ref={register({ required: true, min: 18 })}
          />
          {errors.age && <p className="error">Minimaal 18 jaar</p>}
        </section>
        <section>
          <label htmlFor="zipCode">Postcode</label>
          <input
            name="zipCode"
            id="zipCode"
            type="text"
            ref={register({ required: true, pattern: /^[0-9]{4}[a-zA-Z]{2}$/ })}
          />
          {errors.zipCode && <p className="error">Postcode klopt niet</p>}
        </section>
        <section>
          <label>Bezorgfrequentie</label>
        </section>
        <section>
          <input
            ref={register({ required: true })}
            type="radio"
            value="week"
            name="delivery"
            id="delivery-week"
          />
          <label htmlFor="delivery-week">Iedere week</label>
        </section>
        <section>
          <input
            ref={register({ required: true })}
            type="radio"
            value="two-week"
            name="delivery"
            id="delivery-two-week"
          />
          <label htmlFor="delivery-two-week">Om de week</label>
        </section>
        <section>
          <input
            ref={register({ required: true })}
            type="radio"
            value="month"
            name="delivery"
            id="delivery-month"
          />
          <label htmlFor="delivery-month">Iedere maand</label>
        </section>
        <section>
          <input
            ref={register({ required: true })}
            type="radio"
            value="other"
            name="delivery"
            id="delivery-other"
          />
          <label htmlFor="delivery-other">Anders</label>
        </section>
        {selectedDelivery === 'other' && (
          <section>
            <label htmlFor="delivery-other-field">Andere bezorgfrequentie, namelijk:</label>
            <input
              ref={register({ required: true })}
              name="other-delivery"
              type="text"
              id="delivery-other-field"
            />
          </section>
        )}
        <section>
          <label htmlFor="remark">Opmerking</label>
          <textarea
            name="remark"
            id="remark"
            ref={register}
            rows={6}
            cols={40}
          />
        </section>
        <section>
          <input
            type="checkbox"
            name="agree"
            id="agree"
            ref={register({ required: true })}
          />
          <label htmlFor="agree">Ik ga akkoord met de voorwaarden</label>
        </section>

        <button type="submit">Verzend</button>
      </form>
    </>
  );
}

export default App;
