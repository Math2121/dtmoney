import { Container } from "./style";
import IconImg from "../../assets/entradas.svg";
import Minus from "../../assets/saidas.svg";
import Total from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary() {
  const transactions = useContext(TransactionsContext);
  console.log(transactions);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>

          <img src={IconImg} alt="" />
        </header>

        <strong>R$1.000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>

          <img src={Minus} alt="" />
        </header>

        <strong> - R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>

          <img src={Total} alt="" />
        </header>

        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
