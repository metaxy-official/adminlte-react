import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as PlusIcon} from "../../static/icon/plus.svg";

interface BtnCreateProps {
  onClick?: () => void;
  path?: string;
  content?: string;
}
function BtnCreate(props: BtnCreateProps) {
  const {path = "", content, onClick} = props;
  return (
    <Link onClick={onClick} to={path} className="btn-create">
      <PlusIcon fill="white" />
      <p>{content}</p>
    </Link>
  );
}

export default BtnCreate;
