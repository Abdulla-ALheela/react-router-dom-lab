import { useParams } from 'react-router';

const MailboxDetails = (props) => {

    const { mailboxId } = useParams();

    const mailbox = props.mailboxes.find((mailboxe) => (
        mailboxe._id === Number(mailboxId)
      ));
  
    return (
      <>
        <h1>Mailbox {mailbox._id}</h1>
        <h2>Details</h2>
        <dl>
          <dt>Box owner: {mailbox.boxOwner}</dt>
          <dt>Box size: {mailbox.boxSize}</dt>
        </dl>
      </>
    );
  };
  
  export default MailboxDetails;