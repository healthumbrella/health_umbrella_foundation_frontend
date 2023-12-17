import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import ArticlesOld from './Components/Articles/articles';
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

function App() {
  
  return (
    <div className="App">  
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route> 
        <Route path="/articles" exact element={<ArticlesOld />}></Route> 
        <Route path="/about-us" exact element={<Home />}></Route>
        <Route path="/diseases" exact element={<Diseases/>}></Route>
        <Route path="/share-experience" exact element={<ShareExp/>}></Route>
        <Route path="/ask-suggestion" exact element={<Suggestion />}></Route>
        <Route path="/pathy" exact element={<Pathy/>}></Route>
        {/* <Route path="/clinics-hospitals" exact element={<Home />}></Route>  */}
        <Route path="/books/:titlee" exact element={<Books />}></Route> 
        <Route path="/ejournal" exact element={<Ejournal />}></Route>
        <Route path="/join-us" exact element={<Joinus />}></Route> 
        <Route path="/join-us" exact element={<Joinus />}></Route> 
        <Route path="/directcases" exact element={<DirectCases />}></Route> 
        <Route path="/PathyPage/:titles" exact element={<PathyPage/>}></Route>       
        <Route path="/our-team" exact element={<OurTeam />}></Route> 
        <Route path="/Testimonials/:title1/:title2" exact element={<Testimonials />}></Route> 
        <Route path="/feedback" exact element = {<Feedback />}></Route>
      </Routes>     
      <Footer />
    </div>
  );
}

export default App;
