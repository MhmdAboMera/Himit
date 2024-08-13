import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalState } from '../../Context';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Tree, TreeNode } from 'react-organizational-chart';
import UnitBoard from '../../components/UnitBoard';
import { t } from 'i18next';

const ManagerDeputy = () => {
    const { unitName } = useParams();
    const { apiUrl } = useGlobalState()
    const [mangers, setMangers] = useState();
    const [deputys, setDeputys] = useState();
    const { i18n } = useTranslation();
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
    };


    return (
        <>
            <div className="unit-board mt-2">
                <div className="container">
                    <Tree
                        label={
                            <>
                                {mangers?.length != 0 ? <div className='fs-4 fw-bold'> {t('Managers')} </div> : null}
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
                        </TreeNode>
                    </Tree>
                </div>
            </div>
        </>
    )
}

export default ManagerDeputy