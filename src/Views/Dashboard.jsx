import React from 'react';
import DataTable from './DataTable.jsx';
import '../css/dash.css';
import home_icon from '../images/home.png';
import apps_add from '../images/apps-add.png';
import userprofile from '../images/userprofile.jpg';
import upload from '../images/upload.png';
import list from '../images/list.png';
import envelope from '../images/envelope.png';
import shopping from '../images/shopping.png';
import menu from '../images/menu.png';




const Dashboard = () => {
    return ( 
        <div className="dash-wrapper">
            <div className="dash-nav">

                <h3>
                    BlueBoxPortal
                </h3>
                <form className="nav-form">
                    <input type="text" placeholder="search here"/>
                    <input type="submit" value="Search"/>
                </form>
                <nav>
                    <ul>
                        <td><a href='#'>Log In</a></td>
                        <td><a href='#'>Register</a></td>
                        <td><a href='#'>Contact Us</a></td>
                    </ul>
                </nav>
            </div>
            <div className='body-wrapper'>
                <div className="side-nav">
                    <div className='side-info'>
                        <img src={userprofile} alt="user"/>
                        <div className='side-user-info'>
                            
                            <li className="user-name">Mugisha Christian</li>
                            <li>Product Manager</li>
                        </div>
                        
                    </div>
                    <table>
                    <tr>
                            <td className='topic'>Dashboard</td><td><img src={apps_add}/></td>
                    </tr>
                    <tr>
                            <td>UI Elements</td><td><img src={home_icon}/></td>
                    </tr>
                    <tr>
                            <td>Comonents</td><td><img src={apps_add} alt="add_icon" /></td>
                    </tr>
                    <tr>
                            <td>Forms Stuff</td><td><img src={upload} alt="upload_icon" /></td>
                    </tr>
                    <tr>
                            <td>Data Table</td><td><img src={list} alt="list_icon" /></td>
                    </tr>
                    <tr>
                            <td>Icons</td><td><img src={envelope} alt="envelope_icon" /></td>
                    </tr>
                    <tr>
                            <td>Sample Page</td><td><img src={shopping} alt="shopping_icon" /></td>
                    </tr>
                    <tr>
                            <td>Extra</td><td><img src={menu} alt="menu_icon" /></td>
                    </tr>
                    </table>
                    <button className='addProjects'>addProjects</button>
                    
                </div>

                <div className='main-dash'>
                    <h4><img src={home_icon} />Dashboard</h4>
                    <div className='dash-icons'>
                        <div className="card" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">#############</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Total Profit</h6>
                                <p className="card-text">increased by 30%</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                        <div className="card" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">##########</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Stock Total</h6>
                                <p className="card-text">Increased by 60%</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>

                        <div className="card" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">##########</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Expenses Total</h6>
                                <p className="card-text">Increased by 50%</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>

                    </div>
                    
                    <DataTable />

                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;