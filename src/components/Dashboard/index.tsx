import React from "react";
import { Container } from "../Dashboard/style";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionTable";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable/>
    </Container>
  );
}
