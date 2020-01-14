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
  padding: 15px;
  border-radius: 15px;
`;

export default function MessageForm({ firstName, lastName }) {
  const [message, setMessage] = React.useState("");
  function handleClick() {
    const mailAdress = "manzkeholger@gmail.com";
    const subject = `Julia Musterfrau möchte Sie kennenlernen`;
    const mailText = message;

    const mailData = { mailAdress, subject, mailText };
    return fetch(`/api/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mailData)
    });
  }

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
          onChange={event => setMessage(event.target.value)}
          placeholder="Schreiben Sie dem Kandidaten eine Nachricht"
        />

        <Button to="/search" onClick={() => handleClick()}>
          Nachricht senden
        </Button>
      </Form>
    </Container>
  );
}
