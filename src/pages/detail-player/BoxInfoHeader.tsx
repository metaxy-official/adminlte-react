import BoxComponent, { Info } from '@app/components/boxComponent'
import ChangePlayerModal from '@app/components/modal/ChangePlayerModal';
import React, { useState } from 'react'



const BoxInfoHeader = () => {


    const dataInfo: Info[] = [
        {
            name: 'Địa chỉ ví:',
            value: '0x7ef6c419ecabcmdksc9ee'
        },
        {
            name: 'Quốc gia:',
            value: 'Việt Nam'
        },
        {
            name: 'Vai trò:',
            value: 'Người chơi'
        },

    ]

    // status modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <div className="container-fuild">
            <BoxComponent title="Ltrannnn" handleEdit={showModal} listInfo={dataInfo} />
            <ChangePlayerModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
        </div>
    )
}

export default BoxInfoHeader
