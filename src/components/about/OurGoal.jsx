import i18next from "i18next";
import { useGlobalState } from "../../Context";
import { useTranslation } from "react-i18next";
const OurGoal = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const { seeting } = useGlobalState();
    const AcademicStructure = seeting?.AcademicStructure.split('\r\n').map(goal => goal.trim());
    return (
        <div className="our-goal">
            <div className="container">
                <div className="row">
                    {/* <p className="fs-1 fw-bold text-center m-0 our-goal-heed">
                        {i18next.t("The administrative and academic structure of the institute")}
                    </p> */}
                    <h2 className="mt-2 fw-bold heed">
                        {currentLanguage == "ar" ? seeting?.name_ar : seeting?.name_en}
                    </h2>
                    <div className="row our-goal-box align-items-center py-3">
                        {
                            AcademicStructure?.map((Structure, index) => {
                                return (
                                    <div className="col-md-4" key={index}>
                                        <div className={`our-goal-contant d-flex flex-column justify-content-center p-3 ${index % 2 !== 0 ? "our-goal-contant-2" : ""}`}>
                                            <p className="des m-0">
                                                {Structure}
                                            </p>
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

export default OurGoal;