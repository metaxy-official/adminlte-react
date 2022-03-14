import React from "react";
import {Link} from "react-router-dom";
// import PlusIcon from "../../static/icon/plus.svg";

interface BtnCreateProps {
  path: string;
  content: string;
}
function BtnCreate(props: BtnCreateProps) {
  const {path, content} = props;
  return (
    <Link to={path} className="btn-create">
      {/* <img src={PlusIcon} alt="icon" /> */}
      <p>{content}</p>
    </Link>
  );
}

export default BtnCreate;
