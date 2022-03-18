/* eslint-disable react/jsx-no-bind */
import React from 'react'
import BoxComponent, { Info } from '@app/components/boxComponent'
import SearchBox from '@app/components/searchbox/SearchBox'
import { Table } from 'antd';

const dataSource = [
    {
        key: '1',
        heroId: '#1000',
        hero: 'Sabe',
        rank: 'BE+',
        level: '1,250',
        levelEvolve: '10',
        bp: '1,000,000',
        attack: '1,000,000',
        hp: '1,000,000',
        speed: '1,000,000',
        energy: '1,000,000',
        status: true,
    },
    {
        key: '2',
        heroId: '#1000',
        hero: 'Sabe',
        rank: 'BE+',
        level: '1,250',
        levelEvolve: '10',
        bp: '1,000,000',
        attack: '1,000,000',
        hp: '1,000,000',
        speed: '1,000,000',
        energy: '1,000,000',
        status: true,
    },
    {
        key: '3',
        heroId: '#1000',
        hero: 'Sabe',
        rank: 'BE+',
        level: '1,250',
        levelEvolve: '10',
        bp: '1,000,000',
        attack: '1,000,000',
        hp: '1,000,000',
        speed: '1,000,000',
        energy: '1,000,000',
        status: true,
    },
    {
        key: '4',
        heroId: '#1000',
        hero: 'Sabe',
        rank: 'BE+',
        level: '1,250',
        levelEvolve: '10',
        bp: '1,000,000',
        attack: '1,000,000',
        hp: '1,000,000',
        speed: '1,000,000',
        energy: '1,000,000',
        status: false,
    },
    {
        key: '5',
        heroId: '#1000',
        hero: 'Sabe',
        rank: 'BE+',
        level: '1,250',
        levelEvolve: '10',
        bp: '1,000,000',
        attack: '1,000,000',
        hp: '1,000,000',
        speed: '1,000,000',
        energy: '1,000,000',
        status: false,
    },
    {
        key: '6',
        heroId: '#1000',
        hero: 'Sabe',
        rank: 'BE+',
        level: '1,250',
        levelEvolve: '10',
        bp: '1,000,000',
        attack: '1,000,000',
        hp: '1,000,000',
        speed: '1,000,000',
        energy: '1,000,000',
        status: false,
    },
    {
        key: '7',
        heroId: '#1000',
        hero: 'Sabe',
        rank: 'BE+',
        level: '1,250',
        levelEvolve: '10',
        bp: '1,000,000',
        attack: '1,000,000',
        hp: '1,000,000',
        speed: '1,000,000',
        energy: '1,000,000',
        status: false,
    },
];

const columns = [
    {
        title: 'Hero ID',
        dataIndex: 'heroId',
        key: 'heroId',
    },
    {
        title: 'Hero',
        dataIndex: 'hero',
        key: 'hero',
    },
    {
        title: 'Rank',
        dataIndex: 'rank',
        key: 'rank',
    },
    {
        title: 'Level',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: 'Level Evolve',
        dataIndex: 'levelEvolve',
        key: 'LevelEvolve',
    },
    {
        title: 'BP',
        dataIndex: 'bp',
        key: 'bp',
    },
    {
        title: 'Attack',
        dataIndex: 'attack',
        key: 'attack',
    },
    {
        title: 'HP',
        dataIndex: 'hp',
        key: 'hp',
    },
    {
        title: 'Speed',
        dataIndex: 'speed',
        key: 'speed',
    },
    {
        title: 'Energy',
        dataIndex: 'energy',
        key: 'energy',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (status: boolean) => (
            <>
                {status ? (
                    <div className="status-actived">Đang chơi</div>
                ) : (
                    <div className="status-not-active">Đang bán</div>
                )}
            </>
        )
    },
];

const BoxInfoHero = () => {


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
                        <Table dataSource={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxInfoHero
