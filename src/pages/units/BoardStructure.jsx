import { useParams } from "react-router-dom";
import { useGlobalState } from "../../Context";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import UnitBoard from "../../components/UnitBoard";
import { Tree, TreeNode } from "react-organizational-chart";
import { t } from "i18next";
const BoardStructure = () => {
    const { unitName } = useParams();
    const { apiUrl } = useGlobalState()
    const [unit, setUnit] = useState();
    const { i18n } = useTranslation();
    const [mangers, setMangers] = useState();
    const [deputys, setDeputys] = useState();
    const [members, setMembers] = useState();
    const currentLang = i18n.language;
    useEffect(() => {
        UnitsData();
    }, [unitName]);
    const UnitsData = async () => {
        const response = await axios.get(
            `${apiUrl}/api/website/units`
        );
        const info = response.data.find(
            (unit) => {
                const name = unit.name_en.split('-').join(" ");
                return name === unitName.split('-').join(" ")
            }
        );
        const unitId = info.id;
        const mainDoctors = await axios.get(
            `${apiUrl}/api/website/unitDoctors/${unitId}`
        );
        const mainUnit = await axios.get(
            `${apiUrl}/api/website/unit/${unitId}`
        );
        setUnit(mainUnit.data);
        const mangers = mainDoctors.data.filter(
            (unit) => {
                return unit.kind == '0';
            }
        );
        setMangers(mangers)
        const Deputys = mainDoctors.data.filter(
            (unit) => {
                return unit.kind == '1';
            }
        );
        setDeputys(Deputys)
        const Members = mainDoctors.data.filter(
            (unit) => {
                return unit.kind == '2';
            }
        );
        setMembers(Members)
    };
    return (
        <div className="unit-board  mt-2">
            <div className="container">
                <div className="row">
                    <div className="fs-3 fw-bold heed py-3 mb-3">
                        {t('Unit Board of Directors')} : {currentLang == "ar" ? unit?.name_ar : unit?.name_en}
                    </div>
                    {/* {
                        doctors?.map((doc, index) => {
                            return (
                                <UnitBoard nameAr={doc.doctors?.name_ar} nameEn={doc.doctors?.name_en} photo={doc.doctors?.photo} count={index += 1} key={index} />
                            )
                        })
                    } */}
                    <div className="unit-board mt-2">
                        <div className="container">
                            <Tree
                                label={
                                    <>
                                        {mangers?.length != 0 ? <div className='fs-4 fw-bold '> {t('Managers')} </div> : null}
                                        {/* <div className='fs-4 fw-bold'> المديرين </div> */}
                                        <div className='row justify-content-center'>
                                            {
                                                mangers?.map((doc, index) => {
                                                    return (
                                                        <UnitBoard nameAr={doc.doctors?.name_ar} nameEn={doc.doctors?.name_en} photo={doc.doctors?.photo} count={index += 1} key={index} />
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                }
                            >
                                <TreeNode label={
                                    <>
                                        {deputys?.length != 0 ? <div className='fs-4 fw-bold'> {t('deputy')} </div> : null}

                                        <div className='row justify-content-center'>
                                            {
                                                deputys?.map((doc, index) => {
                                                    return (
                                                        <UnitBoard nameAr={doc.doctors?.name_ar} nameEn={doc.doctors?.name_en} photo={doc.doctors?.photo} count={index += 1} key={index} />
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                }
                                >
                                    <TreeNode label={
                                        <>
                                            {members?.length != 0 ? <div className='fs-4 fw-bold'> {t('Members')} </div> : null}
                                            {/* <div className='fs-4 fw-bold'> {t('Members')} </div> */}
                                            <div className='row justify-content-center'>
                                                {
                                                    members?.map((doc, index) => {
                                                        return (
                                                            <UnitBoard nameAr={doc.doctors?.name_ar} nameEn={doc.doctors?.name_en} photo={doc.doctors?.photo} count={index += 1} key={index} />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </>
                                    } />
                                </TreeNode>
                            </Tree>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardStructure