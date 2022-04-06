import BoxComponent, { Info } from '@app/components/boxComponent'
import TableCustom from '@app/components/table/Table'
import { getDataItemIngame } from '@app/utils'
import { DataItemInGame, DataPlayer } from '@app/utils/types'
// import { Select } from 'antd'
import React, { useEffect, useState } from 'react'

interface DataInfoProps {
    dataInfo?: DataPlayer
}

const BoxInfoItemIngame = (props: DataInfoProps) => {

    const { dataInfo } = props
    // const { Option } = Select;
    const [dataItemInGame, setDataItemInGame] = useState<DataItemInGame[]>([]);
    const [totalDocs, setTotalDocs] = useState<number>()
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const address = dataInfo?.address

    useEffect(() => {
        const getDataItemInGame = async () => {
            const data = await getDataItemIngame(address, currentPage, pageSize,);
            setDataItemInGame(data.docs);
            setPageSize(10)
            setTotalDocs(data?.totalDocs)
        }
        getDataItemInGame()
    }, [])

    const dataSource = dataItemInGame

    const columns = [
        {
            title: 'Vật Phẩm',
            dataIndex: 'itemName',
            key: 'itemName',
        },
        {
            title: 'Level',
            dataIndex: 'level',
            key: 'level',
        },
        {
            title: 'Số lượng',
            dataIndex: 'amount',
            key: 'amount',
        },
    ];

    const fakeDataBoxInfoStory: Info[] =
        [
            { name: 'Số MXY trong game:', value: '10000 MXY' },
            { name: 'Số Gold trong game:', value: '1000000 Gold' },
            { name: 'Số Soul trong game:', value: '100 Soul' },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Thông tin vật phẩm trong game' listInfo={fakeDataBoxInfoStory} />
            <div className="table-detail">
                <h3 className="table-title my-3">Danh sách hero của người chơi</h3>
                <div className="table-filter">
                    <div className="table-filter__select my-3">
                        {/* <div className="select__item multi-item">
                            <Select
                                allowClear
                                mode="multiple"
                                placeholder="Loại vật phẩm"
                                style={{ width: 180 }}
                                onChange={handleSelectCharacter}
                            >
                                {dataNftCharacter.map((item) => (
                                    <Option key={item?.characterId} value={item?.characterId} >
                                        {item?.characterName}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                        <div className="select__item multi-item">
                            <Select
                                allowClear
                                mode="multiple"
                                placeholder="Level"
                                style={{ width: 180 }}
                                onChange={handleSelectRank}
                            >
                                {dataRankNft.map((item, index) => (
                                    <Option key={index} value={item.rankId} >
                                        {item.rankName}
                                    </Option>
                                ))}
                            </Select>
                        </div> */}
                    </div>
                    <div className="table-custom my-5">
                        <TableCustom
                            data={dataSource}
                            columns={columns}
                            totalData={totalDocs}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BoxInfoItemIngame
