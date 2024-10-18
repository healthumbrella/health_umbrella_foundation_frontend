import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Home2 from "./Components/Version_2/Home_v2/Home";
import Header from "./Components/Header/header";
import Header2 from "./Components/Version_2/Header_v2/Header_v2"
import Footer from "./Components/Footer/footer";
import Ejournal from "./Components/ejournal/ejournal";
import Books from "./Components/BooksPage/books";
import Diseases from "./Components/diseases/diseases";
import Joinus from "./Components/JoinUs/Joinus";
import Suggestion from "./Components/Suggestion/suggestion"
import DirectCases from "./Components/DirectCases/directcases"
import ShareExp from "./Components/ShareExp/ShareExp";
import PathyPage from "./Components/PathyPage/PathyPage"
import OurTeam from "./Components/OurTeam/OurTeam";
import Feedback from "./Components/Feedback/Feedback";
import Pathy from "./Components/Pathy/Pathy";
import Testimonials from "./Components/Testimonials/testimonials";
import Memberdetails from "./Components/Memberdetails/Memberdetails";
import Clinics from "./Components/Clinics/Clinics";
import Disease from "./Components/DiseaseNew/Disease";
import DiseaseInfo from "./Components/DiseaseNew/Content/DiseaseInfo/DiseaseInfo";
import PathyInfo from "./Components/DiseaseNew/Content/PathyInfo/PathyInfo";

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
        <Route path="/disease/:disease" exact element={<Diseases/>}></Route>
        {/* //this was commented <Route path="/disease/:disease" exact element={<Disease/>}></Route>  */}
        <Route path="/disease/:disease/:titles" exact element={<PathyPage/>}></Route>  
        <Route path="/disease/:disease/:pathy/directCase/:caseId" exact element={<DirectCases />}></Route> 
        <Route path="/disease/:disease/:title1/books" exact element={<Books />}></Route> 
        <Route path="/disease/:disease/:title1/:title2" exact element={<Testimonials />}></Route>    
        <Route path="/share-experience" exact element={<ShareExp/>}></Route>
        <Route path="/ask-suggestion" exact element={<Suggestion />}></Route>
        <Route path="/pathy" exact element={<Pathy/>}></Route>
         <Route path="/ejournal" exact element={<Ejournal />}></Route>
        <Route path="/join-us" exact element={<Joinus />}></Route> 
  
        <Route path="/our-team" exact element={<OurTeam />}></Route> 
        <Route path="/our-team/:team" exact element={<Memberdetails />}></Route> 

        <Route path="/clinics/" exact element={<Clinics />}></Route> 
        <Route path="/feedback" exact element = {<Feedback />}></Route>

        {/* //this was commented new disease section  */}
        <Route path="/diseases/:disease" element={<Disease/>}>
          <Route index element={<DiseaseInfo/>} />
          <Route path=":therapy" element={<PathyInfo/>} />

        </Route> 

        
        

      {/* version 2 routes */}
      <Route path="/" exact element={<Home2/>}></Route>

      
      </Routes>  
      <Footer />
    </div>
  );
}

export default App;
