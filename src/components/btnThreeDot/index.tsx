/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useRef, useState} from "react";
import useOnClickOutside from "@app/hooks/useClickOutside";
import threeDotIcon from "../../static/icon/threedot.svg";

export interface ItemMoreOption {
  key?: string;
  icon: string;
  name: string;
  onClick: (value?: string) => void;
}
interface Props {
listItem : ItemMoreOption[]
}

function ThreeDot(props: Props) {
  const {listItem} = props

  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsShowModal(false));
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="btn" onClick={() => setIsShowModal(true)}>
        <img src={threeDotIcon} alt="icon" />
        {isShowModal && (
          <div ref={ref} className="more-action">
          {listItem.map((item) =>
          <div onClick={() => item.onClick(item.key)} key={item.key}>
            <img src={item.icon} alt="icon" />
            <p>{item.name}</p>
          </div>)}
        </div>
        )}
      </div>
    </>
  );
}

export default ThreeDot;
