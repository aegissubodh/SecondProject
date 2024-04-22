import logo from './logo.svg';
import './App.css';
import Project from './component/FunctionComponent';
import ClassComponent from './component/ClassComponent';
import Parent from './component/Parent';
import First from './component/First';
import Consumer from './component/ContextApi/Consumer';
import Provider from './component/ContextApi/Provider';
import Home from './component/Routing/Home';
import About from './component/Routing/About';
import Contact from './component/Routing/Contact';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//import StyleComponent from './component/StyleComponent';
//import InlineStyle from './component/Style/InlineStyle';
import Spread from './component/Spread';
import HOC from './component/HOC';
import MyFunction from './component/Map';
import PropValidation from './component/PropValidation';
//import Example1 from './component/useEffect/Example1';
//import Parent2 from './component/useEffect/Example2';
import ShowingData from './component/ShowingData';
//import Example4 from './component/useEffect/Example4';
import MyForm from './component/CustomHook';
import FormIk from './component/FormValidation';
import Solution1CreateContext from './component/ContextApi2/Example1';
import PassExample1 from './component/PasswordValidation/PassExample1';
import PassExample2 from './component/PasswordValidation/PassExample2';
//import BoorStrap from './component/BootstrapPractice';
import PureComponent from './component/PureVsImpure/PureComponent';
import ImPureComponent from './component/PureVsImpure/ImPureComponent';
import Reducer from './component/Reducer';
import Refuse from './component/useref/Refuse';
import LazyComponent from './component/LazyComponent/LazyComponent';
import SuspenseComponent from './component/LazyComponent/SuspenseComponent';
//import HowToChange from './component/useref/HowToChange';
//import Practice from './component/Practice/Practice';
import ErrorBoundary from './component/ReactError/ErrorBoundry';
//import Counter from './component/ReactError/Counter';
import Promises from './component/Promises/Promises';
//import Counter from './component/UnitTesing/Counter';
import ComponentWith from './component/Practice/ComponentWith';
import FileUpload from './component/FileUpload';
import MultipleFileUpload from './component/MultipleFileUpload';
import LoginWithImageUpload from './LoginWithImageUpload';
import Programe from './component/Programe';
//import Search from './component/Practice/Search';
//import PostData from './component/Practice/PostData';
import Stories from './component/Stories';
import Mentor from './component/Mentor';
import TopHiring from './component/TopHiring';
import Registration from './component/Registration';
import Footer from './component/Footer';



function App() {
  return (<>


    {/* <BrowserRouter>
      <ol>
        <li>
          <Link to="/home">Home</Link><br />
        </li>
        <li>
          <Link to="/about">About</Link><br />
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li>
        <li>
          <Link to="/StyleComponent">Style Component</Link>
        </li>
        <li>
          <Link to="/InlineStyle">Inline Style</Link>
        </li>
      </ol>
      <Routes>
        <Route
          exact
          path="/home"
          element={<Home />}
        ></Route>
        <Route
          exact
          path="/about"
          element={<About />}
        ></Route>
        <Route
          exact
          path="/contactus"
          element={<Contact />}
        ></Route>
         <Route
          exact
          path="/StyleComponent"
          element={<StyleComponent />}
        ></Route>
         <Route
          exact
          path="/InlineStyle"
          element={<InlineStyle />}
        ></Route>

      </Routes>

    </BrowserRouter> */}

    {/* <Project/> */}
     {/* <ClassComponent/> */}
    {/* <Parent/>
     <First/> */}
    {/* <Provider/> */}
    {/* <Home/>
     <About/>
     <Contact/> */}
     {/* <Spread/>
      <HOC/> */}
      {/* <Practice/> */}
      {/* <MyFunction/> */}
      {/* <PropValidation/> */}
      {/* <Example1/> */}
      {/* <Parent2/> */}
      {/* <Example3/> */}
      {/*  <ShowingData/>   */}
      {/* <Example4/> */}
      {/* <MyForm/> */}
      {/* <FormIk/> */}
      {/* <PassExample1/> */}
      {/* <PassExample2/> */}
      {/* <BoorStrap/> */}
      {/* <PureComponent/>
      <ImPureComponent/> */}
      {/* <Reducer/> */}
      {/* <Refuse/> */}
    {/* <HowToChange/> */}
    {/* <LazyComponent/> */}
    {/* <SuspenseComponent/> */}
    {/* <Counter/>
    <ErrorBoundary/> */}
    {/* <Promises/> */}
    {/* <Counter/> */}
      {/* <ComponentWith/> */}
      {/* <Search/> */}
      {/* <PostData/> */}
      {/* <Update/> */}
      {/* <FileUpload/> */}
      {/* <MultipleFileUpload/> */}
      {/* <LoginWithImageUpload/> */}
      {/* <Programe/> */}
      {/* <Stories/> */}
      {/* <Mentor/> */}
      {/* <TopHiring/> */}
      {/* <Registration/> */}
      <Footer/>


  

  

  </>

  );
}

export default App;
