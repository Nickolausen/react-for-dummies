import WelcomePage from "./components/WelcomePage"
import DashboardConditionalRendering from "./components/1-conditional_rendering/DashboardConditionalRendering"
import DashboardEventsHandling from "./components/2-events_handling/DashboardEventsHandling"
import DashboardStateManagement from "./components/3-state_management/DashboardStateManagement"
import DashboardComponentStyling from "./components/4-component_styling/DashboardComponentStyling"
import DashboardSynchronization from "./components/5-synchronization/DashboardSynchronization"
import DashboardContextUsage from "./components/6-context_usage/DashboardContextUsage"

export default function App() {
    return <>
        <WelcomePage/>
        <DashboardConditionalRendering/>
        <DashboardEventsHandling/>
        <DashboardStateManagement/>
        <DashboardComponentStyling/>
        <DashboardSynchronization/>
        <DashboardContextUsage/>
    </>
}