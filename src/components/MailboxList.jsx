import { Link } from "react-router";

const MailboxList = (props) => {
  return (
    <div>
      {props.mailboxes.map((mailbox) => (
        <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
          <div className="mail-box">{mailbox._id}</div>
        </Link>
      ))}
    </div>
  );
};

export default MailboxList;
