import React, { useState } from 'react';
import './App.css';

function App() {
  const [strawberries, setStrawberries] = useState(0);
  const [bananas, setBananas] = useState(0);
  const [apples, setApples] = useState(0);
  const [kiwis, setKiwis] = useState(0);

  function resetFruits() {
    setStrawberries(0);
    setBananas(0);
    setApples(0);
    setKiwis(0);
  }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <article>
        <h2>🍓 Aarbeien</h2>
        <button type="button" onClick={() => setStrawberries(strawberries - 1)}>
          -
        </button>
        <p>{strawberries}</p>
        <button type="button" onClick={() => setStrawberries(strawberries + 1)}>
          +
        </button>
      </article>
      <article>
        <h2>🍌 Bananen</h2>
        <button type="button" onClick={() => setBananas(bananas - 1)}>
          -
        </button>
        <p>{bananas}</p>
        <button type="button" onClick={() => setBananas(bananas + 1)}>
          +
        </button>
      </article>
      <article>
        <h2>🍏 Appels</h2>
        <button type="button" onClick={() => setApples(apples - 1)}>
          -
        </button>
        <p>{apples}</p>
        <button type="button" onClick={() => setApples(apples + 1)}>
          +
        </button>
      </article>
      <article>
        <h2>🥝 Kiwi's</h2>
        <button type="button" onClick={() => setKiwis(kiwis - 1)}>
          -
        </button>
        <p>{kiwis}</p>
        <button type="button" onClick={() => setKiwis(kiwis + 1)}>
          +
        </button>
      </article>
      <button type="button" onClick={() => resetFruits()}>Reset</button>
    </>
  );
}

export default App;
