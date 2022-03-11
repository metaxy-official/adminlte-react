/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useRef, useState} from "react";
import useOnClickOutside from "@app/hooks/useClickOutside";
import DeleteUserModal from "../modal/DeleteUser";
import threeDotIcon from "../../static/icon/threedot.svg";
import MoreAction from "../moreAction/MoreAction";

function ThreeDot() {
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsShowModal(false));
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  // state for modal detail
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);
  const handleOpenModalDelete = () => {
    setIsShowModalDelete(true);
  };
  const handleOk = () => {
    setIsShowModalDelete(false);
  };
  const handleCancel = () => {
    setIsShowModalDelete(false);
  };
  return (
    <>
      <div className="btn" onClick={() => setIsShowModal(true)}>
        <img src={threeDotIcon} alt="icon" />
        {isShowModal && (
          <MoreAction ref={ref} handleModal={handleOpenModalDelete} />
        )}
      </div>
      <DeleteUserModal
        isModalVisible={isShowModalDelete}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
}

export default ThreeDot;
