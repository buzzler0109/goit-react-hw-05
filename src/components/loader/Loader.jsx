import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.scss";

export const Loader = ({ status }) => {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={status}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
