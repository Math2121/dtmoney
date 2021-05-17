import { useState } from "react";
import Modal from "react-modal";
import Logo from "../../assets/logo.svg";
import { Container } from "./style";
import { Content } from "./style";
interface HeaderProps{
  onOpenNewTransactionModal:()=>void;
}
export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money" />
        <button type="submit" onClick={onOpenNewTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  );
}
