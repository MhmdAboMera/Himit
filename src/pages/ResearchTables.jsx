import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useGlobalState } from '../Context';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ResearchPagination from '../components/ResearchPagination';
import Pagination from '../components/Pagination';
import React from "react";
const ResearchTables = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const { apiUrl } = useGlobalState()
    const { researchName } = useParams()
    const [data, setdata] = useState(null)
    useEffect(() => {
        getFile()
    }, [researchName])
    const getFile = async () => {
        const file = await axios.get(
            `${apiUrl}/api/website/${researchName}`
        );
        setdata(file.data);
    }
    return (
        <div className="container mt-2">
            <div className="row">
                {

                    researchName == "importantSites" ? <Pagination data={data} /> : <ResearchPagination data={data} />

                }
            </div>
        </div>
    )
}

export default ResearchTables