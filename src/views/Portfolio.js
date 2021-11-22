import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Project from '../components/Project';
import PageTitle from '../components/PageTitle';

export default function Portfolio() {
    let url = "https://jamiekneiss-portfolio-backend.herokuapp.com"
    const [projects, setProjects] = useState();
    document.title = 'Portfolio';
    useEffect(() => {
        let loadAPI = async () => {
            try {
                const response = await fetch(url + '/api/projects');
                const data = await response.json();
                let arr = projects || [];
                if (data.length === 0) {
                    alert("No results.");
                }
                else {
                    data.forEach(element => arr.push({
                        id: element.id,
                        name: element.name,
                        description: element.description,
                        frontEnd: element.frontEnd,
                        backEnd: element.backEnd,
                        siteLink: element.siteLink,
                        thumbnailImage: element.thumbnailImage
                    }));
                    setProjects(arr);
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        loadAPI();
    }, [projects]);
    let projectsList;
    if (projects !== undefined && projects.length > 0) {
        projectsList = projects.map((element, index) => {
            return (<Project key={element.id} val={element} />);
        });
    }
    return (
        <div className="App">
            <Header />
            <PageTitle text="My" highlight="Portfolio" />
            <section>
                {projectsList || "Loading"}
            </section>
        </div >
    );
}