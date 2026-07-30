import GlobalState from "../../Components_07-07-2026/Global State_30-07-2026/GlobalState";
import LocalState from "../../Components_07-07-2026/Global State_30-07-2026/LocalState";
import Counter from "../../Components_07-07-2026/Global State_30-07-2026/MultipleComponents/Counter";
import UserName from "../../Components_07-07-2026/Global State_30-07-2026/MultipleComponents/UserName";

function GlobalStatePage30(){
    return (
        <>
        <GlobalState/>
        <LocalState/>
        <Counter/>
        <UserName/>
        </>
    )
}
export default GlobalStatePage30;