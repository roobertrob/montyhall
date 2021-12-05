import Link from "next/link";
import { useState } from "react";
import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";
import styles from "../styles/Form.module.css"
export default function Form() {

  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade de portas?" value={qtdePortas} onChange={novaQtd => setQtdePortas(novaQtd)} />
        </Cartao>
      </div>
      <div>

        <Cartao>
          <EntradaNumerica text="Qual a porta com presente?" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Cartao>

        <Cartao bgcolor="green">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2 className={styles.link} >Iniciar</h2>
          </Link>
        </Cartao>
      </div>

    </div>

  )



}

