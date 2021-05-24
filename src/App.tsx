import React, { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import {  TransactionsProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/global";
Modal.setAppElement("#root");
export default function App() {


  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransationModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransationModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
  <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransationModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransationModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
