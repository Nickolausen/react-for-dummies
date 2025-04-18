import WelcomePage from "./components/WelcomePage"
import DashboardConditionalRendering from "./components/1-conditional_rendering/DashboardConditionalRendering"
import DashboardEventsHandling from "./components/2-events_handling/DashboardEventsHandling"
import DashboardStateManagement from "./components/3-state_management/DashboardStateManagement"
import DashboardComponentStyling from "./components/4-component_styling/DashboardComponentStyling"
import DashboardSynchronization from "./components/5-synchronization/DashboardSynchronization"
import DashboardContextUsage from "./components/6-context_usage/DashboardContextUsage"
import DashboardCompoundComponents from "./components/7-compound_components/DashboardCompoundComponents"
import DashboardUseRef from "./components/8-useRef_hook/DashboardUseRef"

export default function App() {
    return <main className="px-5 d-flex flex-column justify-content-center">
        <WelcomePage/>
        <DashboardConditionalRendering/>
        <DashboardEventsHandling/>
        <DashboardStateManagement/>
        <DashboardComponentStyling/>
        <DashboardSynchronization/>
        <DashboardContextUsage/>
        <DashboardCompoundComponents />
        <DashboardUseRef/>
    </main>
}