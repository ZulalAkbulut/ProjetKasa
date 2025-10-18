import React from "react"
import Banner from "../../components/banner/Banner"
import Collapse from "../../components/collapse/Collapse"
import collapses from "../../data/collapses-content.json"

function About() {
    return (
        <main className="main-about">
            <div className="about-banner">
                <Banner url="src/assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png" />
            </div>
            <div className="collapses-group">
                {collapses.map(collapse => (
                    <Collapse key={collapse.id} title={collapse.title} text={collapse.text} />
                ))}
            </div>
        </main>
    )
}

export default About;
