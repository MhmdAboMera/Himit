import React from 'react'
import { TbFileCheck } from 'react-icons/tb';
import { useGlobalState } from '../../Context';
import i18next from 'i18next';

const Features = () => {
    const { seeting } = useGlobalState();
    const goals = seeting?.goals.split('\r\n').map(goal => goal.trim());

    return (
        <div className="about-features pt-2 ">
            <div className="container">
                <div className="row">
                    <p className="fs-1 fw-bold text-center m-0 features-heed">
                        {i18next.t("Objectives")}
                    </p>
                    <p className="text-center mb-sm-0 pb-sm-0 mb-md-5  pb-md-5">
                        {
                            seeting?.vision
                        }
                    </p>
                    <div className="row pt-5 justify-content-center">
                        {
                            goals?.map((goal, index) => {
                                return (
                                    <div className="col-md-4 col-lg-3 mb-3" key={index}>
                                        <div className={`contant p-3 text-center ${index % 2 !== 0 ? 'contant-active' : ""} `}>
                                            <TbFileCheck className='fs-5 shadow' />
                                            <p className="fs-5 m-0 mt-3">{goal}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Features;