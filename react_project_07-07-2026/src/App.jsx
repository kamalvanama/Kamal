import { BrowserRouter, Route,Routes } from "react-router-dom";
import ComponentsPage from "./pages_07-07-2026/Components_07-07-2026/ComponentsPage";
import FragmentPage from "./pages_07-07-2026/fragments_07-07-2026/FragmentsPage";
import JsxExpressionPage from "./pages_07-07-2026/jsxexpression_07-07-2026/jsxExpressionPage";
import ReactStrictModePage from "./pages_07-07-2026/reactstrictmode_07-07-2026/ReactStrictModePage";
import StatePage from "./pages_07-07-2026/State_07-07-2026/StatePage";
import PropsPage2 from "./pages_07-07-2026/Props_07-07-2026/PropsPages2";

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/components' element={<ComponentsPage/>}/>
      <Route path='/fragments' element={<FragmentPage/>}/>
      <Route path='/mode'  element={<ReactStrictModePage/>}/>
      <Route path='/jsx' element={<JsxExpressionPage/>}/>
      <Route path='/state' element={<StatePage/>}/>
      <Route path='/props' element={<PropsPage/>}/>
      <Route path='/props2' element={<PropsPage2/>}/>


    </Routes>
    </BrowserRouter>
  )
}
export default App



