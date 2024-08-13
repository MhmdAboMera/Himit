
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ImageFun } from './ImageFun';
import { CiFileOn } from 'react-icons/ci';
import { t } from 'i18next';
const ResearchPagination = ({ data }) => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const totalPages = Math.ceil(data?.length / rowsPerPage);

    const displayTableData = () => {
        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedData = data?.slice(start, end);

        return paginatedData?.map((item, index) => (
            <tr key={item.id}>
                <td>{index += 1}</td>
                <td>
                    {
                        currentLanguage == "ar" ? item?.notes_ar : item?.notes_en
                    }
                </td>
                <td className='td-imgs'>
                    {
                        item.photos?.map((photo) => {
                            return (
                                <img key={photo?.id} src={item.photos ? ImageFun(photo.photo) : "https://placehold.co/40x40"} alt={`img`} width={`40px`} height={`40px`} />
                            )
                        })
                    }
                </td>
                <td>
                    <Link to={ImageFun(item?.file)} target='_blank' className='text-decoration-none text-white'>
                        {/* 🔗 */}
                        <CiFileOn />
                    </Link>
                </td>
            </tr>
        ));
    };

    const displayPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <span
                    key={i}
                    className={i === currentPage ? 'active' : ''}
                    onClick={() => setCurrentPage(i)}
                >
                    {i}
                </span>
            );
        }

        return pageNumbers;
    };

    return (
        <div className='container'>
            <table className='table table-dark table-hover mb-0 table-responsive-sm'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>{t('Name')}</th>
                        <th>{t('the pictures')}</th>
                        <th>{t('Links')}</th>
                    </tr>
                </thead>
                <tbody>
                    {displayTableData()}
                </tbody>
            </table>
            <div className="pagination">
                <button
                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                >
                    &laquo;
                </button>
                <span id="page-numbers">
                    {displayPageNumbers()}
                </span>
                <button
                    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                >
                    &raquo;
                </button>
            </div>
        </div>
    );
};
export default ResearchPagination;
