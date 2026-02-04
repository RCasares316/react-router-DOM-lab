import { Link } from "react-router";

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      {mailboxes.map((mailbox) => (
        <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
          <div className="mail-box">Mailbox {mailbox.boxOwner}</div>
        </Link>
      ))}
    </div>
  );
};

export default MailboxList;
