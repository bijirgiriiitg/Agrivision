import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses/Courses";
import CourseDashboard from "./components/Course/Course Dashboard/CourseDashboard";
import Login from "./pages/Login";
import AboutUs from "./components/global/Footer Writeup/AboutUs";
import Learning from "./pages/Courses/Course";
import PageNotFound from "./pages/Error";
import Coursenames from "./components/Course/Exam Specific/Coursenames";
import Chapter from "./pages/Courses/Chapter";
import WhyChoose from "./components/global/Footer Writeup/WhyChoose";
import Privacy from "./components/global/Footer Writeup/Privacy";
import Quiz from "./pages/Quiz";
import Payment from "./pages/payment";
import OrderCheckpoint from "./pages/OrderCheckpoint";
import Dashboard from "./pages/Dashboard";
import JobUpdate from "./pages/JobUpdate";
import Topicnames from "./components/Course/Subject Specific/Topicnames";
import Reset from "./pages/Reset";
import QuizAnalysis from "./pages/QuizAnalysis";
import ProtectedRoute from "./pages/Protected";
import UserProfile from "./pages/UserProfile";
import Academics from "./pages/Academics/Academics";
import TopColleges from "./pages/Academics/TopCollegePage";
import CollegeDetailPage from "./pages/Academics/CollegeDetailPage";
import MagzineDisplay from "./pages/Magazine";
import TandC from "./components/global/Footer Writeup/TandC";
import Policies from "./components/global/Footer Writeup/Policies";
import Article from "./pages/Article";
import Magazine from "./pages/ArticleDisplay.jsx";
import Global from "./pages/Global";
import Testseries from "./pages/Testseries/Testseries";
import Examnames from "./components/Testseries/TestseriesExam";
import Subjectnames from "./components/Testseries/TestseriesSubject";
import TestseriesSpecific from "./pages/Testseries/TestseriesSpecific";
import TrialTestseriesSpecific from "./pages/Testseries/TrialTestseriesSpecific";
import Package from "./pages/Courses/package";
import Register from "./pages/Registerquiz";
import TrialPackage from "./pages/Courses/TrialPackage";
import TrialCourse from "./pages/Courses/TrialCourse";
import TrialChapter from "./pages/Courses/TrialChapter";
import ExamSpecificPapers from "./components/Testseries/ExamSpecificPapers";
import Apkk from "./pages/prd6/unlock";
import Appk from "./pages/prd6/food";
import Activity from "./pages/prd6/Activity";
import Home1 from "./components/prd6/Topic/Topic";

function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/food-technology" exact component={Appk}/>
        <Route  path="/unlock" exact component={Apkk}/>
        <Route path="/notes3" element={<Home1/>} /> 
        <Route path="/activity" element={<Activity />} />
        <Route path="/" exact component={Home} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route path="/whychooseus" exact component={WhyChoose} />
        <Route path="/terms" exact component={TandC} />
        <Route path="/privacypolicy" exact component={Privacy} />
        <Route path="/policies" exact component={Policies} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/course/dashboard" exact component={CourseDashboard} />
        <Route path="/courses/exam=:name" exact component={Coursenames} />
        <Route path="/courses/subject=:name" exact component={Topicnames} />
        <ProtectedRoute path="/course/:id" exact component={Learning} />
        <ProtectedRoute path="/course/:id1/:id2" exact component={Chapter} />
        <ProtectedRoute path="/package/:id" exact component={Package} />
        <ProtectedRoute path="/register/:id" exact component={Register} />

        <ProtectedRoute path="/free-trial/package/:id" exact component={TrialPackage} />
        <ProtectedRoute path="/free-trial/course/:id" exact component={TrialCourse} />
        <ProtectedRoute path="/free-trial/course/:id1/:id2" exact component={TrialChapter} />
        <ProtectedRoute path="/free-trial/testseries/:id" exact component={TrialTestseriesSpecific} />

        <Route path="/login" exact component={Login} />
        <Route path="/reset" exact component={Reset} />
        <Route path="/testseries" exact component={Testseries} />
        <Route path="/testseries/exam=:name" exact component={Examnames} />
        <Route path="/testseries/subject=:name" exact component={Subjectnames} />
        <ProtectedRoute path="/testseries/:id" exact component={TestseriesSpecific} />
        <ProtectedRoute path="/prevpapers/exam=:name" exact component={ExamSpecificPapers}/>
        <ProtectedRoute path="/quiz/:id" exact component={Quiz} />
        <Route path="/jobUpdates" exact component={JobUpdate} />
        <ProtectedRoute path="/payment" exact component={Payment} />
        <ProtectedRoute path="/cart" exact component={OrderCheckpoint} />
        <ProtectedRoute path="/dashboard" exact component={Dashboard} />
        <ProtectedRoute path="/analysis/:id" exact component={QuizAnalysis} />
        <Route path="/ordercheckpoint" exact component={OrderCheckpoint} />
        <ProtectedRoute path="/profile" exact component={UserProfile} />
        <Route path="/academics" exact component={Academics} />
        <Route path="/academics/:domain" exact component={TopColleges} />
        <ProtectedRoute path="/articles" component={Article} />
        <Route path="/global" component={Global} />
        <ProtectedRoute path="/academics/colleges/:id" exact component={CollegeDetailPage}/>
        <Route path="/magazines" exact component={MagzineDisplay} />
        <Route path="/magazine/:id" exact component={Magazine} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;

