import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorHandler from "../components/error/ErrorHandler";
import Layout from "../pages/Layout";
import ContactPage from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";
import BlogPage from "../pages/Blog";
import SingleBlog from "../pages/SingleBlog";
import SingleService from "../pages/SingleService";
import HomePage from "../pages";
import AboutPage from "../pages/About";
import Speech from "../pages/Speech";
import EducationStudents from "../pages/EducationStudents";
import Units from "../pages/Units";
import SectionLayout from "../pages/Sections/SectionLayout";
import Sections from "../pages/Sections";
import HeadDepartment from "../pages/Sections/HeadDepartment";
import Doctors from "../pages/Sections/Doctors";
import CoursesPage from "../pages/Sections/CoursesPage";
import Workshops from "../pages/Sections/Workshops";
import MasterDoctoral from "../pages/Sections/MasterDoctoral";
import SearchProject from "../pages/Sections/SearchProject";
import Rewords from "../pages/Sections/Rewords";
import ScientificTrips from "../pages/Sections/ScientificTrips";
import Decisions from "../pages/Sections/Decisions";
import PdfDepartment from "../pages/Sections/PdfDepartment";
import ResearchPlan from "../pages/Sections/ResearchPlan";
import Managers from "../pages/Managers";
import InstituteBoardDirectors from "../pages/InstituteBoardDirectors";
import OrganizationalChart from "../pages/OrganizationalChart";
import AdministrativeApparatus from "../pages/AdministrativeApparatus";
import EvidencePolicy from "../pages/EvidencePolicy";
import Doctor from "../pages/Doctor";
import UnitsLayout from "../pages/units/UnitsLayout";
import MainUnits from "../pages/units/MainUnits";
import ManagerDeputy from "../pages/units/ManagerDeputy";
import BoardStructure from "../pages/units/BoardStructure";
import InternalRegulationFile from "../pages/units/InternalRegulationFile";
import TrainingCourses from "../pages/units/TrainingCourses";
import EducationStudentsLayout from "../pages/EducationStudents/EducationStudentsLayout";
import StudentPdf from "../pages/EducationStudents/StudentPdf";
import ServicesLayout from "../pages/Services/ServicesLayout";
import MilitaryEducation from "../pages/Services/MilitaryEducation";
import Survey from "../pages/Services/Survey";
import ResearchTables from "../pages/ResearchTables";
import Suggestions_Complaints from "../components/Suggestions_Complaints";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      {/* ErrorHandler to error page  */}
      <Route path="/" element={<Layout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="units" element={<Units />} />
        <Route path="news/:catName" element={<BlogPage />} />
        <Route path="news/single/:blogName" element={<SingleBlog />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="SingleService" element={<SingleService />} />
        <Route path="speech" element={<Speech />} />
        <Route path="students" element={<EducationStudents />} />
        <Route path="doctor/:doctorName" element={<Doctor />} />
        {/*About Manager Drobdawn */}
        <Route path="manager/:manager" element={<Managers />} />
        {/* هيكل مجلس الاداره */}
        <Route
          path="InstituteBoardDirectors"
          element={<InstituteBoardDirectors />}
        />
        {/* الهيكل التنظيمي */}
        <Route path="OrganizationalChart" element={<OrganizationalChart />} />
        {/* الجهاز الاداري */}
        <Route
          path="AdministrativeApparatus"
          element={<AdministrativeApparatus />}
        />
        {/*  الوثائق السياسات والآليات */}
        <Route path="Evidence_and_policy" element={<EvidencePolicy />} />
        <Route path="research/:researchName" element={<ResearchTables />} />
      </Route>
      <Route path="department" element={<SectionLayout />}>
        {/* Department */}
        {/* if user go to route Department   */}
        <Route index element={<Navigate to="Basic-Sciences" replace />} />
        <Route path=":name" element={<Sections />} />
        <Route path=":name/head_Department" element={<HeadDepartment />} />
        <Route path=":name/doctors" element={<Doctors />} />
        <Route path=":name/AssistantDoctor" element={<Doctors />} />
        <Route path=":name/Courses" element={<CoursesPage />} />
        <Route path=":name/workshops" element={<Workshops />} />
        <Route path=":name/master_doctoral" element={<MasterDoctoral />} />
        <Route path=":name/search_project" element={<SearchProject />} />
        <Route path=":name/rewords" element={<Rewords />} />
        <Route path=":name/scientific_trips" element={<ScientificTrips />} />
        <Route path=":name/decisions" element={<Decisions />} />
        <Route path=":name/ResearchPlan" element={<ResearchPlan />} />
        <Route path=":name/Regulation" element={<PdfDepartment />} />
      </Route>
      {/* Units */}
      <Route path="units" element={<UnitsLayout />}>
        {/* Units */}
        <Route index path=":unitName" element={<MainUnits />} />
        <Route path=":unitName/ManagerDeputy" element={<ManagerDeputy />} />
        <Route path=":unitName/BoardStructure" element={<BoardStructure />} />
        <Route
          path=":unitName/InternalRegulationFile"
          element={<InternalRegulationFile />}
        />
        <Route
          path=":unitName/administrativeStructureFile"
          element={<InternalRegulationFile />}
        />
        <Route path=":unitName/TrainingCourses" element={<TrainingCourses />} />
      </Route>
      {/* Education and students  */}
      <Route path="student" element={<EducationStudentsLayout />}>
        {/* Units */}
        <Route index path=":pdfName" element={<StudentPdf />} />
      </Route>
      {/* Services */}
      <Route path="Services" element={<ServicesLayout />}>
        <Route
          index
          element={<Navigate to="/Services/MilitaryEducation" replace />}
        />
        <Route path="MilitaryEducation" element={<MilitaryEducation />} />
        <Route
          path="Suggestions_Complaints"
          element={<Suggestions_Complaints />}
        />
        <Route path="survey" element={<Survey />} />
      </Route>
      {/* Page Not Found */}
      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
export default router;
