import { useState } from 'react';

import { GridItem } from './components/GridItem';
import styles from './App.module.css'
import { levels, calculeteImc, Level } from './helpers/imc';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weitghtField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculeButton = () => {
    if (heightField && weitghtField) {
      setToShow(calculeteImc(heightField, weitghtField))
    } else {
      alert("Digite Todos os campos")
    }
  }
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
        <h1>IMC</h1>
          <nav>
            <ul>
              <li><a href="#">Calculadora Criada by Cosme Alves</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>IMC significa Índice de Massa Corporal. É uma medida que utiliza a altura e o peso de uma pessoa para calcular o seu nível de gordura corporal e, consequentemente, o seu grau de obesidade.</p>

          <input type="number" placeholder='Digite sua Altura, Ex: 1.88 (metros) '
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input type="number" placeholder='Digite seu Peso, Ex: 75.4 (kg) '
            value={weitghtField > 0 ? weitghtField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalculeButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
          <div className={styles.grid}>
            {levels.map((item, key)=>(
              <GridItem key={key} item={item}/>
            ))}
          </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow}></div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
