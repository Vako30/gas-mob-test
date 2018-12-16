import React from 'react';

export default function Header() {
    return(
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <span className="navbar-brand font-weight-bold text-primary">
                    GasMob
                    <span className="text-muted ml-2">Client Name</span>
                </span>
            <div className="collapse navbar-collapse justify-content-end">
                <div className="navbar-nav">
                    <a className="nav-item nav-link text-uppercase" href="#">fuel prices</a>
                    <a className="nav-item nav-link text-uppercase" href="#">orders</a>
                    <a className="nav-item nav-link text-uppercase" href="#">vessel list</a>
                    <a className="nav-item nav-link text-uppercase" href="#">invoices</a>
                    <a className="nav-item nav-link text-uppercase font-weight-bold" href="#">data</a>
                </div>
                <button className="btn btn-primary text-uppercase rounded-0">order fuel</button>
            </div>
        </nav>
    );
}