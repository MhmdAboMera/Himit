

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
const SingleService = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const [langClass, setLangClass] = useState("en");
    useEffect(() => {
        setLangClass(currentLanguage);
    }, []);
    return (
        <>
            <SEO
                title="service - Himit"
                description="lorem lorem lorem lorem lorem"
        name="Himit"
        keywords="Himit"
        ogImage={window.location.href + "src/assets/images/himit-logo.png"}

            />
        </>
    )
}

export default SingleService