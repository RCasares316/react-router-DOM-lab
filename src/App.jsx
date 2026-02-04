import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";

function App() {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBoxData) => {
    const newBox = {
      ...newBoxData,
      _id: mailboxes.length + 1,
    };
    setMailboxes([...mailboxes, newBox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Mailbox List</h1>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  );
}

export default App;
