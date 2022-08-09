import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import { UserContextProvider } from "./context/userContext";
import Activities from "./pages/activities";
import AllSolicitudes from "./pages/allSolicitud";
import Home from "./pages/home";    
import Login from "./pages/login";
import NewActivity from "./pages/newActivity";
import ListOfProjects from "./pages/projects";
import Solicitud from "./pages/solicitud";
import { initialState, reducer } from "./context/reducer"
import AddSolicitud from "./pages/addSolicitud";

function App() {

    return (
        <UserContextProvider initialState={initialState} reducer={reducer}>
            <div className="App">
                
                <Router>
                    <Routes>
                        <Route path="/" element={
                            <RequireAuth redirectTo="/login">
                                <Home />
                            </RequireAuth> 
                        } />
                        <Route path="/login" element={<Login />} />
                        <Route path="/activities" >
                            <Route index element={<Activities />} />
                            {/* <Route path="addActivities" element={<NewActivity />} /> */}
                        </Route>
                        <Route path="/solicitud">
                            <Route index element={<Solicitud />} />
                            <Route path=":mysolicitudId" element={<NewActivity />} />
                        </Route>
                        <Route path="/totalSolicitudes" >
                            <Route index element={<AllSolicitudes />} />
                            <Route path="addSolicitud" element={<AddSolicitud />} />
                        </Route>
                        <Route path="/proyectos" >
                            <Route index element={<ListOfProjects />} />
                        </Route>
                    </Routes>
                </Router>
            </div>
        </UserContextProvider>
    );
}

function RequireAuth({ children, redirectTo}) {
    let get = JSON.parse(localStorage.getItem('user')) || null
    let isLooged = get
    return isLooged ? children : <Navigate to={redirectTo} />
}
    


export default App;
