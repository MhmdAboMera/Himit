import { BsCalendar2Date } from "react-icons/bs";
const BasicInformation = ({ qulification, experience }) => {
    return (
        <div className="BasicInformation">
            <div className="container">
                <div className="row">
                    {
                        qulification?.map(item => {
                            return (
                                <div className="info-contant " key={item.id}>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-9">
                                            <div className="p-contant">
                                                <div className="nameof-info">
                                                    {
                                                        item.name
                                                    }
                                                </div>
                                                <div className="nameof-university">
                                                    {item.university}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3">
                                            <div className="date d-flex gap-2 align-items-center">
                                                <span> {item.yearName}</span>
                                                <BsCalendar2Date />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    {
                        experience?.map(item => {
                            return (
                                <div className="info-contant " key={item.id}>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-8">
                                            <div className="p-contant">
                                                <div className="nameof-info">
                                                    {
                                                        item.name
                                                    }
                                                </div>
                                                <div className="nameof-university">
                                                    {item.faculty}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex justify-content-end">
                                            <div className="date d-flex gap-2 align-items-center">
                                                <span> {item.worktime}</span>
                                                <BsCalendar2Date />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BasicInformation