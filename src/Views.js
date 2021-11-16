import { HashRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Portfolio from './views/Portfolio';
import Project from './views/Project';
import Blog from './views/Blog';
import Contact from './views/Contact';

const Views = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/portfolio' element={<Portfolio />} />
                <Route exact path='/portfolio:name' element={<Project />} />
                <Route exact path='/blog' element={<Blog />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes >
        </Router>
    );
}

export default Views;