import Pagination from '../components/Pagination'
import { useGlobalState } from '../Context';
import axios from 'axios';
import { useQuery } from 'react-query';
import React from "react";
const EvidencePolicy = () => {
    const { apiUrl } = useGlobalState()
    const getEvidencePolicy = async () => {
        const response = await axios.get(`${apiUrl}/api/website/MechanismsPolicie`);
        return response.data;
    };
    const { data: evidencePolicy, error: evidencePolicyError, isLoading: isLoadingEvidencePolicy } = useQuery('evidencePolicy', getEvidencePolicy);
    if (isLoadingEvidencePolicy) {
        return <p>Loading...</p>;
    }

    if (evidencePolicyError) {
        return <p>Error loading data</p>;
    }
    return (
        <>
            <div className="evidence-policy mt-2">
                <div className="container">
                    <div className="fs-1 fw-bold heed mb-3">
                        الوثائق السياسات والآليات
                    </div>
                </div>
                <Pagination data={evidencePolicy} />
            </div>
        </>
    )
}

export default EvidencePolicy