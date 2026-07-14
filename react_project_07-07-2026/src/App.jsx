import { BrowserRouter, Route,Routes } from "react-router-dom";
import ComponentsPage from "./pages_07-07-2026/Components_07-07-2026/ComponentsPage";
import FragmentPage from "./pages_07-07-2026/fragments_07-07-2026/FragmentsPage";
import JsxExpressionPage from "./pages_07-07-2026/jsxexpression_07-07-2026/jsxExpressionPage";
import ReactStrictModePage from "./pages_07-07-2026/reactstrictmode_07-07-2026/ReactStrictModePage";
import StatePage from "./pages_07-07-2026/State_07-07-2026/StatePage";
import PropsPage2 from "./pages_07-07-2026/Props_07-07-2026/PropsPages2";
import PropsPages from "./pages_07-07-2026/Props_10-07-2026/PropsPages";
import CommunicationPage from "./pages_07-07-2026/ComponentsCommunications_13-07-2026/CommunicationPage";
import ChildPage from "./pages_07-07-2026/Props_14-07-2026/ChildPage";
import ParentPage from "./pages_07-07-2026/Props_14-07-2026/ParentPage";

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/components' element={<ComponentsPage/>}/>
      <Route path='/fragments' element={<FragmentPage/>}/>
      <Route path='/mode'  element={<ReactStrictModePage/>}/>
      <Route path='/jsx' element={<JsxExpressionPage/>}/>
      <Route path='/state' element={<StatePage/>}/>
      <Route path='/props' element={<PropsPages/>}/>
      <Route path='/props2' element={<PropsPage2/>}/>
      <Route path='/componentscommunication' element={<CommunicationPage/>}/>
      <Route path='/state' element={<StatePage/>}/>
      <Route path='/state' element={<StatePage/>}/>
    <Routes path='/props' element={<ChildPage/>}/>
    <Routes path='/props' element={<ParentPage/>}/>
    
    </BrowserRouter>
  )
}
export default App



