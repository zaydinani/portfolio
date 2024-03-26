import DashSideBar from "../../../components/admin/dashSideBar"
import ProjectsCard from "../../../components/admin/projects"
import SkillCard from "../../../components/admin/skillCard"

import "../../../styles/dashMain.scss"

function dashMain() {
    return (
        <>
            <DashSideBar />
            <div className="dash_container">
                <div className="cards_container">
                    <h1 className="titles">articles</h1>
                    <div className="projects">
                        <ProjectsCard />
                        <ProjectsCard />
                    </div>
                    <div className="more">
                        <a href="#">see all</a>
                    </div>
                </div>
                <div className="cards_container">
                    <h1 className="titles">projects</h1>
                    <div className="projects">
                        <ProjectsCard />
                        <ProjectsCard />
                    </div>
                    <div className="more">
                        <a href="#">see all</a>
                    </div>
                </div>
                <div className="cards_container">
                    <h1 className="titles">skills</h1>
                    <div className="projects">
                        <SkillCard />
                        <SkillCard />
                    </div>
                    <div className="more">
                        <a href="#">see all</a>
                    </div>
                </div>
            </div>
        </>
    )
}
    
export default dashMain
