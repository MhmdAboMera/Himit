import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useGlobalState } from "../Context";
import { Link } from "react-router-dom";
import { ImageFun } from "./ImageFun";
import i18next from "i18next";

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [importantLinks, setimportantLinks] = useState([]);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { apiUrl } = useGlobalState();
  useEffect(() => {
    fetchEvents();
  }, [currentLanguage]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/website/events`);
      const responseLinks = await axios.get(
        `${apiUrl}/api/website/importantLinks`
      );
      const LinksDiv = responseLinks.data.map((item, index) => (
        <div key={index}>
          <div className="d-flex align-items-center" >
            <Link target="_blank" to={item.link} className="text-decoration-none d-flex align-items-center">
              <img width={"50px"} className="mx-2" src={ImageFun(item.logo)} alt="" />
              {currentLanguage === "ar" ? item.name_ar : item.name_en}
            </Link>
          </div>
        </div>
      ));
      setimportantLinks(LinksDiv);
      const transformedEvents = response.data.map((event) => ({
        title: currentLanguage === "ar" ? event.name_ar : event.name_en,
        start: event.date,
        end: event.link || event.date,
        allDay: true,
        extendedProps: {
          nameAr: event.name_ar,
          nameEn: event.name_en,
        },
      }));
      setEvents(transformedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const renderEventContent = (eventInfo) => {

    return (
      <>
        {/* <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i> */}
        <div>
          {currentLanguage === "ar"
            ? eventInfo.event.extendedProps.nameAr
            : eventInfo.event.extendedProps.nameEn}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container py-3 position-relative z-3">
        <div className="row">
          <div className="col-12 col-md-6 Calendar">
            <h2 className="text-center heed fs-1 fw-bold">{i18next.t('Events')}</h2>
            <FullCalendar
              initialView="dayGridMonth"
              plugins={[dayGridPlugin, listPlugin]}
              events={events}
              eventContent={renderEventContent}
              locale={currentLanguage}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth",
              }}
            />
          </div>
          <div className="col-12 col-md-6 importantLinks-div ">
            <h2 className="text-center mb-4 heed fs-1 fw-bold pt-3 pt-md-0">{i18next.t('Important links')} </h2>
            <div className="importantLinks ">
              {importantLinks}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCalendar;
