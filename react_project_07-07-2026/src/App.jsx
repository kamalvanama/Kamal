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
import StatePage28 from "./pages_07-07-2026/State_28-07-2026/StatePage28";
import PropsPage1 from "./pages_07-07-2026/Props_28-07-2026/PropsPage1";
import ComponentHiererchypage from "./pages_07-07-2026/ParentandChild Component Hierarchy/ComponentHierarchypage"
import ChildIntractionPage from "./pages_07-07-2026/ChildToParent Communication_29-07-2026/ChildInteractionPage";
import MiniprojectPage from "./pages_07-07-2026/MiniAssignment_30-07-2026/MiniprojectPage";
import LocalStatePage30 from "./pages_07-07-2026/LocalState_30-07-2026/LocalStatePage30";
import GlobalState from "./Components_07-07-2026/Global State_30-07-2026/GlobalState";
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
    <Route path='/props' element={<ChildPage/>}/>
    <Route path='/props3' element={<ParentPage/>}/>
    <Route path='/JsxExpression' element={<JsxExpressionPage/>}/>
    <Route path='/Props1' element={<PropsPage1/>}/>
    <Route path='/State1' element={<StatePage28/>}/>
    <Route path='/hierarchy' element={<ComponentHiererchypage/>}/>
    <Route path='/Communication' element={<CommuincationPage29/>}/>
    <Route path='/Child' element={<ChildPage/>}/>
    <Route path='/Child' element={<CommunicationPage2/>}/>
    <Route path='/interaction' element={<ChildIntractionPage/>}/>
    <Route path='/ChildToChild' element={<ChlidPage2/>}/>
    <Route path='/Miniproject' element={<MiniprojectPage/>}/>
    <Route path='/LocalState' element={<LocalStatePage30/>}/>
    <Route path='/GlobalState' element={<GlobalState/>}/>
    
</Routes>
    </BrowserRouter>
  )
}
export default App



