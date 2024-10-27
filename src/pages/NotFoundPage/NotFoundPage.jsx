import { Link } from "react-router-dom";

import css from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <section className={css.section}>
      <div className={css.wrapp}>
        <Link to="/" className={css.link}>
          Go back to home page
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
