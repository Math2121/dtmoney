import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import incomeImg from "../../assets/entradas.svg";
import outCme from "../../assets/saidas.svg";
import CloseSvg from "../../assets/close.svg";
interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseSvg} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>Cadastrar informações</h2>

        <input type="text" name="titulo" id="titulo" placeholder="Título" />

        <input type="number" name="valor" id="valor" placeholder="Valor" />
        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button type="button">
            <img src={outCme} alt="Entrada" />
            <span>Entrada</span>
          </button>
        </TransactionTypeContainer>
        <input
          type="text"
          name="categoria"
          id="categoria"
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
