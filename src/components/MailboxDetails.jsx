import { useParams } from "react-router";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId),
  );
  return (
    <div>
      <h1>Mailbox {selectedBox.boxOwner}</h1>
      <h3>Details</h3>
      <dt>Boxholder:</dt>
      <dd>{selectedBox.boxOwner}</dd>
      <dt>Boxsize:</dt>
      <dd>{selectedBox.boxSize}</dd>
    </div>
  );
};

export default MailboxDetails;
