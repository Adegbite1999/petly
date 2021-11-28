import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LayOut from '../Layout/LayOut';
import Home from '../pages/Home';
import Pets from '../pages/pets/Index'


const Dashboard = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/pet' element={<Pets/>} />
        </Routes>
    )
}

function MainRoutes() {
    return (
        <Router>
            <LayOut>
                <Dashboard />
            </LayOut>
        </Router>
    )
}

export default MainRoutes
