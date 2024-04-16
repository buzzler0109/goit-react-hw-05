import { FaUser, FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.scss";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div className={css.container}>
      <p>
        <FaUser />
        &nbsp;
        {name}
      </p>
      <p>
        <FaPhoneAlt />
        &nbsp;
        {number}
      </p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
