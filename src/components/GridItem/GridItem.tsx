import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css'

import imageUp from '../../assets/imc/up.png';
import imageDown from '../../assets/imc/down.png';
import baixoPeso from '../../assets/imc/imc-001.png';
import pesoNormal from '../../assets/imc/imc-002.png';
import sobrePeso from '../../assets/imc/imc-003.png';
import obesidadeGrau1 from '../../assets/imc/imc-004.png';
import obesidadeGrau2 from '../../assets/imc/imc-005.png';
import obesidadeGrau3 from '../../assets/imc/imc-006.png';
import previous from '../../assets/imc/previous.png';

type Props = {
    item: Level,
}

export const GridItem = ({item }: Props)=> {

    function refreshPage(){ 
        window.location.reload(); 
    }
    
    return (
        <div>
            <div className={styles.main} style={{backgroundColor: item.color}}>
                <div className={styles.gridIcon}>
                    <img src={item.icon === 'up' ? imageUp : imageDown} alt="" />
                </div>
                <div className={styles.gridTitle}>{item.title}</div>
                {item.yourImc &&
                    <>
                        <div className={styles.yourImc}>Seu IMC é: {item.yourImc.toFixed(2)} kg/m2</div>
                        <div className={styles.btnprevious}>
                            <img
                                src={previous}
                                alt="Voltar"
                                onClick={refreshPage}
                            />
                        </div>

                    </>
                }
                
                <div className={styles.gridInfo}>
                    <p>IMC está entre: <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong></p>
                </div>
            </div>
        </div>
    )
}
