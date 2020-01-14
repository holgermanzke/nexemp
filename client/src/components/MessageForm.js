import React from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;

const Recipient = styled.div`
  font-size: 1.2rem;
  margin-top: 15px;
`;

const Sender = styled.div`
  font-size: 1.2rem;
  margin-top: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

const Message = styled.textarea`
  align-self: center;
  outline: none;
  border: 2px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.background};
  font-size: 1rem;
  letter-spacing: 1px;
`;

export default function MessageForm({ firstName, lastName }) {
  return (
    <Container>
      <Recipient>
        Empfänger: {firstName} {lastName}
      </Recipient>
      <Sender>Absender: Julia Musterfrau</Sender>
      <Form>
        <Message
          rows="15"
          cols="100"
          placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          blanditiis deserunt voluptatum nemo, beatae iste reprehenderit
          adipisci nulla accusamus harum?"
        />

        <Button>Nachricht senden</Button>
      </Form>
    </Container>
  );
}
