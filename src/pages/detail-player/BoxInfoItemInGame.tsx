import BoxComponent, { Info } from '@app/components/boxComponent'
import React from 'react'




const BoxInfoItemIngame = () => {
    const fakeDataBoxInfoStory: Info[] =
        [
            { name: 'Số MXY trong game:', value: '10000 MXY' },
            { name: 'Số Gold trong game:', value: '1000000 Gold' },
            { name: 'Số Soul trong game:', value: '100 Soul' },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Thông tin vật phẩm trong game' listInfo={fakeDataBoxInfoStory} />
        </div>
    )
}

export default BoxInfoItemIngame
