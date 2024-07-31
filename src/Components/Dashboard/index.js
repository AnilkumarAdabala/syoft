import "./index.css"
const Dashboard = () =>{
    const userDetails = localStorage.getItem("userDetails")
    const details = JSON.parse(userDetails)
    console.log(userDetails)
    const name = details.user_firstname
    return(
        <div className="bg-dashboard">
            <header className="dashboard-header">
                <div className="header-heading"> syoft.</div>
                <nav className="nav">
                    <p>About Syoft</p>
                    <p>Technologies</p>
                    <p>Carrers</p>
                    <p>Blogs</p>
                </nav>
                <img src ="https://res.cloudinary.com/dsukk5zxa/image/upload/v1705917198/menu-bar_os5o7g.png" alt ="hamburger-menu" className="menu"/>
            </header>
            <section className="section">
                <div className="section-container">
                <h4 className="section-heading">Career</h4>
                <p className="section-content">
                At our company, we believe that our team is our greatest asset. We are
             always looking for talented, motivated individuals who are eager to make a difference. 
             If you are looking for a dynamic and challenging work environment, we want to hear from you.</p>
             <h4 className="section-details">Hello <span className="name">{name}</span></h4>
            <h4 className="section-details">Welcomes you to join our syoft technologies community</h4>
                </div>

            <img src ="https://res.cloudinary.com/dllgxizs9/image/upload/v1722425879/v4opan0jlwufkmqgy67m.jpg" alt ="img" className="dashboard-image" />
            </section>
            

        </div>
    )
}
export default Dashboard