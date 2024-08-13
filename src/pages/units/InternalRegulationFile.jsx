import React, { useEffect, useState } from 'react'
import { ImageFun } from '../../components/ImageFun'
import { useLocation, useParams } from 'react-router-dom';
import { useGlobalState } from '../../Context';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const InternalRegulationFile = () => {
    const location = useLocation();
    const { unitName } = useParams();
    const { apiUrl } = useGlobalState()
    const [units, setUnits] = useState();
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
        const mainUnit = await axios.get(
            `${apiUrl}/api/website/unit/${unitId}`
        );
        setUnits(mainUnit.data);
    };
    return (
        <>
            {
                location.pathname.includes('InternalRegulationFile') ?
                    units && <iframe width="100%" height="800px" className='mt-2 rounded' src={currentLang == "ar" ? ImageFun(units?.InternalRegulationFile_ar) : ImageFun(units?.InternalRegulationFile_en)} />
                    :
                    units && <iframe width="100%" height="800px" className='mt-2 rounded' src={currentLang == "ar" ? ImageFun(units?.administrativeStructureFile_ar) : ImageFun(units?.administrativeStructureFile_en)} />

            }
        </>
    )
}

export default InternalRegulationFile