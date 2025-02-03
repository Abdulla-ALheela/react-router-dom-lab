import { Link } from 'react-router';


const MailboxList = (props) => {
    return (
      <>
        <h2>Mail boxes</h2>
        <ul>
          {props.mailboxes.map((mailboxe) => (
            <li key={mailboxe._id}>
             <Link to={`/mailboxes/${mailboxe._id}`}>
            Mailbox {mailboxe._id}
            </Link>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default MailboxList;