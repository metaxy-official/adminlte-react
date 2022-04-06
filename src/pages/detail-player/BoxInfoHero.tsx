/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react'
import BoxComponent, { Info } from '@app/components/boxComponent'
import SearchBox from '@app/components/searchbox/SearchBox'
import { DataDetailNft, DataNftCharacter, DataNftPlayer, DataPlayer, DataRankNft } from '@app/utils/types';
import { getDataHeroes, getNftCharacter, getNftRRank } from '@app/utils';
import TableCustom from '@app/components/table/Table';
import { Select } from 'antd';

interface DataInfoProps {
    dataInfo?: DataPlayer
}

const BoxInfoHero = (props: DataInfoProps) => {

    const { dataInfo } = props
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [dataNft, setDataNft] = useState<DataNftPlayer[]>([]);
    const [setSearchItems, setSetSearchItems] = useState<string>('')
    const [totalDocs, setTotalDocs] = useState<number>()
    const { Option } = Select;
    const [dataNftCharacter, setDataNftCharacter] = useState<DataNftCharacter[]>([]);
    const [dataRankNft, setDataRankNft] = useState<DataRankNft[]>([]);
    const [isSelling, setIsSelling] = useState<boolean>()
    const [characterSelected, setCharacterSelected] = useState<number[]>([])
    const [rankSelected, setRankSelected] = useState<number[]>([])

    const onSearch = (value: string) => {
        setSetSearchItems(value.trim())
        setCurrentPage(1)
    }

    function handleSelectCharacter(value: any) {
        setCharacterSelected(value)
    }

    function handleSelectRank(value: any) {
        setRankSelected(value)
    }

    const handleChangeStatus = (value: boolean) => {
        setIsSelling(value)
    }



    const address = dataInfo?.address

    useEffect(() => {
        const getDataNft = async () => {
            const data = await getDataHeroes(address, currentPage, pageSize, isSelling, characterSelected, rankSelected, setSearchItems);
            setDataNft(data?.docs)
            setPageSize(10)
            setTotalDocs(data?.totalDocs)
        }
        getDataNft()
    }, [isSelling, characterSelected, rankSelected, setSearchItems])

    useEffect(() => {
        const getCharacterNft = async () => {
            const data = await getNftCharacter();
            setDataNftCharacter(data)
        }
        getCharacterNft()
    }, [])

    useEffect(() => {
        const getRankNft = async () => {
            const data = await getNftRRank();
            setDataRankNft(data)
        }
        getRankNft()
    }, [])

    const dataSource = dataNft

    const columns = [
        {
            title: 'Hero ID',
            dataIndex: 'tokenId',
            key: 'tokenId',
        },
        {
            title: 'Hero',
            dataIndex: 'metadata',
            key: 'characterName',
            render: (metadata: DataDetailNft) => (
                <>
                    <p>{metadata?.characterName}</p>
                </>
            )
        },
        {
            title: 'Rank',
            dataIndex: 'metadata',
            key: 'rankName',
            render: (metadata: DataDetailNft) => (
                <>
                    <p>{metadata?.rankName}</p>
                </>
            )
        },
        {
            title: 'Level',
            dataIndex: 'metadata',
            key: 'level',
            render: (metadata: DataDetailNft) => (
                <>
                    <p>{metadata?.level}</p>
                </>
            )
        },
        {
            title: 'Level Evolve',
            dataIndex: 'metadata',
            key: 'evolveLevel',
            render: (metadata: DataDetailNft) => (
                <>
                    <p>{metadata?.evolveLevel}</p>
                </>
            )
        },
        {
            title: 'BP',
            dataIndex: 'metadata',
            key: 'battlePower',
            render: (metadata: DataDetailNft) => (
                <>
                    <p>{metadata?.battlePower}</p>
                </>
            )
        },
        {
            title: 'Attack',
            dataIndex: 'metadata',
            key: 'attack',
            render: (metadata: DataDetailNft) => (
                <>
                    <p>{metadata?.attack}</p>
                </>
            )
        },
        {
            title: 'HP',
            dataIndex: 'metadata',
            key: 'hp',
            render: (metadata: DataDetailNft) => (
                <>
                    <p>{metadata?.hp}</p>
                </>
            )
        },
        {
            title: 'Speed',
            dataIndex: 'metadata',
            key: 'speed',
            render: (metadata: DataDetailNft) => (
                <>
                    <p>{metadata?.speed}</p>
                </>
            )
        },
        {
            title: 'Energy',
            dataIndex: 'metadata',
            key: 'energy',
            render: (metadata: DataDetailNft) => (
                <>
                    <p>{metadata?.energy}</p>
                </>
            )
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'isFree',
            render: (status: boolean) => (
                <>
                    {status ? (
                        <div className="status-not-active">Đang bán</div>
                    ) : (
                        <div className="status-actived">Đang chơi</div>
                    )}
                </>
            )
        },
    ];




    const fakeDataInfoHero: Info[] =
        [
            { name: 'Số lượng hero:', value: 100 },
            { name: 'Hero có rank cao nhất:', value: 'BE+' },
            { name: 'Giới hạn reward kiếm được 1 ngày:', value: '10000 MXY, 100000 Golds' },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Thông tin Hero của người dùng (BE chua co)' listInfo={fakeDataInfoHero} />
            <div className="table-detail">
                <h3 className="table-title my-3">Danh sách hero của người chơi</h3>
                <div className="table-filter">
                    <div className="table-filter__search my-3">
                        <SearchBox placeholder="Nhập ID của hero " onSearch={onSearch} />
                    </div>
                    <div className="table-filter__select my-3">
                        <div className="select__item multi-item">
                            <Select
                                allowClear
                                mode="multiple"
                                placeholder="Chọn nhân vật"
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
                                placeholder="Chọn Rank nhân vật"
                                style={{ width: 180 }}
                                onChange={handleSelectRank}
                            >
                                {dataRankNft.map((item, index) => (
                                    <Option key={index} value={item.rankId} >
                                        {item.rankName}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                        <div className="select__item">
                            <Select
                                placeholder="Chọn trạng thái"
                                style={{ width: 180 }}
                                onChange={handleChangeStatus}
                            >

                                <Option value>Đang chơi</Option>
                                <Option value={false}>Đang bán</Option>

                            </Select>
                        </div>
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

export default BoxInfoHero
