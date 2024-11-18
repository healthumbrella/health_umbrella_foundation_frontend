import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Home2 from "./Components/Version_2/Home_v2/Home";
import Header from "./Components/Header/header";
import Header2 from "./Components/Version_2/Header_v2/Header_v2";
import Footer from "./Components/Footer/footer";
// import Ejournal from "./Components/ejournal/ejournal";
import Ejournal_v2 from "./Components/Version_2/ejournal_v2/ejournal";
import Books from "./Components/BooksPage/books";
import Diseases from "./Components/diseases/diseases";
//import Joinus from "./Components/JoinUs/Joinus";
import Suggestion from "./Components/Version_2/Suggestion_v2/suggestion"
// import Joinus from "./Components/JoinUs/Joinus";
import Joinus from "./Components/Version_2/JoinUs_v2/Joinus";

// import Suggestion from "./Components/Suggestion/suggestion";
//import DirectCases from "./Components/DirectCases/directcases";
//import ShareExp from "./Components/ShareExp/Share
//import Suggestion from "./Components/Suggestion/suggestion"
import DirectCases from "./Components/DirectCases/directcases"
import ShareExp from "./Components/Version_2/ShareExp_v2/ShareExp";

// import PathyPage from "./Components/PathyPage/PathyPage"
import PathyPage from "./Components/Version_2/PathyPage_v2/PathyPage_v2";
import OurTeam from "./Components/Version_2/OurTeam_v2/OurTeam_v2";
// import Feedback from "./Components/Feedback/Feedback";
import Feedback from "../src/Components/Version_2/Feedback_v2/Feedback";
// import Pathy from "./Components/Pathy/Pathy";
import Pathy from "./Components/Version_2/Pathy_v2/Pathy_v2";
// import Testimonials from "./Components/Testimonials/testimonials";
import Testimonials from "./Components/Version_2/Testimonials_v2/Testimonials_v2";
import Memberdetails from "./Components/Version_2/Memberdetails_v2/Memberdetails_v2";
import Clinics_v2 from "./Components/Version_2/Clinics_v2/Clinics_v2";
import Disease from "./Components/DiseaseNew/Disease";
import DiseaseInfo from "./Components/DiseaseNew/Content/DiseaseInfo/DiseaseInfo";
import PathyInfo from "./Components/DiseaseNew/Content/PathyInfo/PathyInfo";
import Donation_v2 from "./Components/Version_2/Donation_v2/Donation_v2";
import Books_v2 from "./Components/Version_2/Books_v2/Books_v2";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      <Header2 />
      <Routes>
        {/* //starting from here version 1 to is being commented */}
        {/* <Route path="/" exact element={<Home />}></Route>  */}

        <Route path="/about-us" exact element={<Home />}></Route>
        {/* //this was commented <Route path="/diseases" exact element={<Diseases/>}></Route>  */}
        <Route path="/disease/:disease" exact element={<Diseases />}></Route>
        {/* //this was commented <Route path="/disease/:disease" exact element={<Disease/>}></Route>  */}
        <Route
          path="/disease/:disease/:titles"
          exact
          element={<PathyPage />}
        ></Route>
        <Route
          path="/disease/:disease/:pathy/directCase/:caseId"
          exact
          element={<DirectCases />}
        ></Route>
        <Route
          path="/disease/:disease/:title1/:title2"
          exact
          element={<Testimonials />}
        ></Route>
        <Route path="/share-experience" exact element={<ShareExp />}></Route>
        <Route path="/ask-suggestion" exact element={<Suggestion />}></Route>
        <Route path="/pathy" exact element={<Pathy />}></Route>
        {/* <Route path="/ejournal" exact element={<Ejournal />}></Route> */}
        <Route path="/join-us" exact element={<Joinus />}></Route>

        <Route path="/our-team" exact element={<OurTeam />}></Route>
        <Route path="/our-team/:team" exact element={<Memberdetails />}></Route>

        <Route path="/feedback" exact element={<Feedback />}></Route>

        {/* //this was commented new disease section  */}
        <Route path="/diseases/:disease" element={<Disease />}>
          <Route index element={<DiseaseInfo />} />
          <Route path=":therapy" element={<PathyInfo />} />
        </Route>

        {/* version 2 routes */}
        <Route path="/" exact element={<Home2 />}></Route>
        <Route
          path="/disease/:disease/:title1/books"
          exact
          element={<Books_v2 />}
        ></Route>
        <Route path="/Donation" exact element={<Donation_v2 />}></Route>
        <Route path="/clinics/" exact element={<Clinics_v2 />}></Route>

        <Route path="/ejournal" exact element={<Ejournal_v2 />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
