import Card from "../../task_13-07-2026/componentscommunication_13-07-2026/Card";
import Content from "../../task_13-07-2026/componentscommunication_13-07-2026/Content";
import Header from "../../task_13-07-2026/componentscommunication_13-07-2026/Header";
import Task1 from "../../task_13-07-2026/componentscommunication_13-07-2026/Task1";
import Footer from "../../task_13-07-2026/componentscommunication_13-07-2026/Task2";
import Button from "../../task_13-07-2026/componentscommunication_13-07-2026/Task5";

function CommunicationPage(){
  return(
    <>
    <Content/>
    <Footer/>
    <Header/>
    <Parent/>
    <Task1/>
    <Button/>
    <Card/>
    </>
  )
}
export default CommunicationPage;