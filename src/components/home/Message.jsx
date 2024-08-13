import girl from '../../assets/images/girl.png'
import { useGlobalState } from '../../Context';
import React from "react";
const Message = () => {
    const { seeting, seetingError, isLoadingSeeting } = useGlobalState();

    if (isLoadingSeeting) {
        return <p>Loading...</p>;
    }

    if (seetingError) {
        return <p>Error loading data</p>;
    }
    return (
        <div className="message py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-8">
                        <div className="text-message-contant">
                            <p className="fs-1 mb-3 fw-bold title">
                                الرؤية والرسالة
                            </p>
                            <p className="fs-5 mb-3">
                                {seeting?.vision}
                                {/* يلتزم المعهد بإعداد خريجين متخصصين ومكتسبين للمهارات والجدارات طبقا للمعايير القومية الأكاديمية المرجعية لـتلبية إحتياجات سوق العمل المحلى والإقليمي */}
                            </p>
                            <p className="fs-5">
                                {seeting?.mission}
                                {/* يلتزم المعهد بإعداد خريجين متخصصين ومكتسبين للمهارات والجدارات طبقا للمعايير القومية الأكاديمية المرجعية لـتلبية إحتياجات سوق العمل المحلى والإقليمي */}
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="box-message-img">
                            <img src={girl} width={"100%"} height={"100%"} alt="girl" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;