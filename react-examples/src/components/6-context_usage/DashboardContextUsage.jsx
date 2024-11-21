import DrillingVSContext from "./DrillingVSContext";
import PropsContextView from "./components_with_context/PropsContextView";
import PropsDrillingView from "./components_with_drilling/PropsDrillingView";

export default function DashboardContextUsage() {
    return <>
        <DrillingVSContext/>
        <PropsDrillingView/>
        <PropsContextView/>
    </>
}