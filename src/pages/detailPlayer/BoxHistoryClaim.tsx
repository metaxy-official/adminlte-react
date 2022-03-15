import React from 'react'
import BoxComponent, { Info } from '@app/components/boxComponent'




const BoxHistoryClaim = () => {
    const fakeDataInfoHero: Info[] =
        [
            { name: 'Tổng giao dịch thực hiện:', value: '506 lần' },
            { name: 'Khối lượng giao dịch:', value: '1000 MXY' },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Lịch sử giao dịch' listInfo={fakeDataInfoHero} />
        </div>
    )
}

export default BoxHistoryClaim
