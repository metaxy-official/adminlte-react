import BoxComponent, { Info } from '@app/components/boxComponent'
import React from 'react'




const BoxInfoHistory = () => {
    const fakeDataInfoHero: Info[] =
        [
            { name: 'Tổng giao dịch thực hiện::', value: '506 lần' },
            { name: 'Khối lượng giao dịch:', value: '10000 BUSD, 1000 MXY' },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Lịch sử giao dịch' listInfo={fakeDataInfoHero} />
        </div>
    )
}

export default BoxInfoHistory
