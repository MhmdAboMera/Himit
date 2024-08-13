import axios from 'axios';
import { useEffect, useState } from 'react'
import { useGlobalState } from '../Context';
import { Tree, TreeNode } from 'react-organizational-chart';
import UnitBoard from '../components/UnitBoard';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import React from "react";
const InstituteBoardDirectors = () => {
    const { apiUrl } = useGlobalState()
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const [mangers, setMangers] = useState();
    const [deputys, setDeputys] = useState();
    const [members, setMembers] = useState();

    useEffect(() => {
        UnitsData();
    }, []);
    const UnitsData = async () => {
        const mainDoctors = await axios.get(
            `${apiUrl}/api/website/InstituteBoardDirectors`
        );
        const mangers = mainDoctors.data.filter(
            (doc) => {
                return doc.kind == '0';
            }
        );
        setMangers(mangers)

        const Deputys = mainDoctors.data.filter(
            (doc) => {
                return doc.kind == '1';
            }
        );
        setDeputys(Deputys)
        const members = mainDoctors.data.filter(
            (doc) => {
                return doc.kind == '2';
            }
        );
        setMembers(members)
    };
    return (
        <>
            <div className="unit-board  mt-2">
                <div className="container">
                    <div className="row">
                        <div className="fs-3 fw-bold heed py-3 mb-3">
                            {t('Institute Board of Directors')}
                        </div>
                        <div className="unit-board mt-2">
                            <div className="container">
                                <Tree
                                    label={
                                        <>
                                            {mangers?.length != 0 ? <div className='fs-4 fw-bold'> {t('Managers')} </div> : null}
                                            {/* <div className='fs-4 fw-bold'> المديرين </div> */}
                                            <div className='row justify-content-center'>
                                                {
                                                    mangers?.map((doc, index) => {
                                                        return (
                                                            <UnitBoard nameAr={doc?.name_ar} nameEn={doc?.name_en} photo={doc?.photo} count={index += 1} key={index} />
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
                                                            <UnitBoard nameAr={doc?.name_ar} nameEn={doc?.name_en} photo={doc?.photo} count={index += 1} key={index} />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </>
                                    }
                                    >
                                        {
                                            members?.length != 0 ?
                                                <TreeNode label={
                                                    <>
                                                        {members?.length != 0 ? <div className='fs-4 fw-bold'> {t('Members')} </div> : null}
                                                        {/* <div className='fs-4 fw-bold'> الاعضاء </div> */}
                                                        <div className='row justify-content-center'>
                                                            {
                                                                members?.map((doc, index) => {
                                                                    return (
                                                                        <UnitBoard nameAr={doc?.name_ar} nameEn={doc?.name_en} photo={doc?.photo} count={index += 1} key={index} />
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </>
                                                } />
                                                : null

                                        }
                                    </TreeNode>
                                </Tree>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstituteBoardDirectors