import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = props =>{
    return(
        <div>
            <div className="list-group">
                <Link to="/admin" className="list-group-item list-group-item-action active">
                    Select an option
                </Link>
                <Link to='/admin/portfolio' className="list-group-item list-group-item-action">Portfolio</Link>
            </div>
        </div>
    )
}

export default AdminMenu