import React from 'react'

export interface Info {
    name: string;
    value: string | number | boolean;
}

interface BoxComponentProps {
    title: string;
    listInfo: Info[];
}

const BoxComponent = (props: BoxComponentProps) => {
    const { title, listInfo } = props
    return (
        <div className="box-information">
            <div className="infor-header">
                <p>{title}</p>
            </div>
            <div className="infor-body">
                {listInfo.map((item) => {
                    return (
                        <div className="infor-body-box">
                            <p className="infor-body-box__title">{item.name}</p>
                            <p className="infor-body-box__des">{item.value}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default BoxComponent
