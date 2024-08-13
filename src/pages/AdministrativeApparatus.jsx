import Professors from '../components/home/Professors';
import { ImageFun } from '../components/ImageFun'
import { useGlobalState } from '../Context'
import React from "react";
const AdministrativeApparatus = () => {
    const { seeting } = useGlobalState();
    return (
        <>
            <div className="pdf-org my-3">
                <div className="container">
                    <div className="row">
                        {seeting && <iframe width="100%" height="800px" src={ImageFun(seeting?.AdministrativeApparatus)} />}
                    </div>
                </div>
            </div>
            <Professors />
        </>
    )
}

export default AdministrativeApparatus