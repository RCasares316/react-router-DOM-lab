import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
  _id: 0,
  boxSize: "Small",
  boxOwner: "",
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value}))
  };

  return (
    <main>
      <h2>New Mailbox</h2>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Enter a Boxholder:</label>
        <input type="text" id="name" name="boxOwner" onChange={handleChange} />

        <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>

        <button type="submit">Submit</button>

      </form>
    </main>
  );
};

export default MailboxForm;
