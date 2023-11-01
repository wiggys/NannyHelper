import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParentPage } from './pages/Parent';
import { SchedulePage } from './pages/Schedule';

export const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path = "/">
                    <ParentPage/>
                </Route>
                <Route path="">
                    <SchedulePage/>
                </Route>
            </Routes>
        </Router>
    );
}