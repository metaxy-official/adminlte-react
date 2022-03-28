/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react'
import BoxComponent, { Info } from '@app/components/boxComponent'
import SearchBox from '@app/components/searchbox/SearchBox'
import { DataDetailNft, DataNftPlayer, DataPlayer } from '@app/utils/types';
import { getDataHeroes } from '@app/utils';
import TableCustom from '@app/components/table/Table';


interface DataInfoProps {
    dataInfo?: DataPlayer
}


const BoxInfoHero = (props: DataInfoProps) => {

    const { dataInfo } = props

    const [dataNft, setDataNft] = useState<DataNftPlayer[]>([]);
    console.log("🚀 ~ file: BoxInfoHero.tsx ~ line 20 ~ BoxInfoHero ~ dataNft", dataNft)

    const address = dataInfo?.address

    useEffect(() => {
        const getDataNft = async () => {
            const data = await getDataHeroes(address);
            setDataNft(data.docs);
        }
        getDataNft()
    }, [])

    const dataSource = dataNft

    const columns = [
        {
            title: 'Hero ID',
            dataIndex: 'metadata',
            key: 'rankInfoId',
            render: (metadata: DataDetailNft) => (
                <>
                    <p>{metadata?.rankInfoId}</p>
                </>
            )
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
            <BoxComponent title='Thông tin Hero của người dùng' listInfo={fakeDataInfoHero} />
            <div className="table-detail">
                <h3 className="table-title my-3">Danh sách hero của người chơi</h3>
                <div className="table-filter">
                    <div className="table-filter__search my-3">
                        <SearchBox placeholder="Nhập ID của hero " />
                    </div>
                    <div className="table-filter__select my-3">
                        <p>abc</p>
                    </div>
                    <div className="table-custom my-5">
                        <TableCustom data={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxInfoHero
