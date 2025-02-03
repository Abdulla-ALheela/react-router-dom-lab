import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import { Route, Routes } from 'react-router';
import { useState } from 'react';

const initialState = [
  { _id: 1, boxOwner: 'Alex', boxSize: 'Small' },
];

const App = () => {

  const [mailboxes, setMailboxes] = useState(initialState);

  const addMailboxe = (newMailboxe) => {
    newMailboxe._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxe]);
  };

  return (
    <>
     <NavBar />
      
      <Routes>
      <Route path="/" element={<h1>Post Office</h1>} />
      <Route path="/mailboxes" element={ <MailboxList mailboxes={mailboxes} />} />
      <Route path="/new-mailbox" element={<MailboxForm addMailboxe={addMailboxe} />} />
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />}/>
      <Route path="*" element={<h2>Mailbox Not Found!</h2>} />
      </Routes>
    </>
  )
};

export default App;

