import React from 'react'
import BoxComponent, { Info } from '@app/components/boxComponent'




const BoxDetectError = () => {
    const fakeDataInfoHero: Info[] =
        [
            { name: 'Trạng thái hoạt động:', value: true },
            { name: 'Tổng số nghi vấn vị phạm:', value: 100 },
            { name: 'Nghi vấn phát hiện nhiều nhất:', value: 'Claim quá nhiều MXY, Chi tiêu lớn trong game' },
            { name: 'Lần phát hiện gần nhất:', value: '13:00 - 01/01/2022' },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Thông tin nghi vấn vi phạm' listInfo={fakeDataInfoHero} />
        </div>
    )
}

export default BoxDetectError
