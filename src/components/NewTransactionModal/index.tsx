import Modal from "react-modal";
interface ModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}
export function NewTransactionModal({isOpen,onRequestClose}:ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar informações</h2>
    </Modal>
  );
}
