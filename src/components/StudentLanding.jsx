import React from 'react'

const StudentLanding = ({ man, name, des }) => {
    return (
        <div className="land-student">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-md-5">
                        <p className="fs-1 fw-bold mb-sm-1  mb-md-5 heed text-center">
                            {/* التعليم والطلاب */}
                            {name}
                        </p>
                        <p className="fs-5">
                            {des}
                            {/* يضم الجهاز الأكاديمي للمعهد نخبه من الأساتذة وأعضاء هيئه التدريس ذوي خبره عالية في مجالات التخصص والإدارة منهم المعينين بالمعهد وأخرين من جامعات حكومية -كما يتولى انجاز الاعمال الإدارية بالمعهد مجموعة متميزة تضم افراد ذوى مؤهلات علمية - دورات تخصصية تخدم المجالات المختلفة. */}
                        </p>
                    </div>
                    <div className="col-md-6 position-relative">
                        <div className="img-box">
                            <img src={man} alt="img land" className='img-landing' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentLanding;