import React, { Component } from 'react';

export default class DropDown extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {

        if (!this.dropDownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    render() {
        const {showMenu} = this.state;
        const {children, options, onSelect} = this.props;
        return (
            <div>
                <button className="btn btn-outline-secondary text-dark dropdown-toggle" type="button" onClick={this.showMenu}>
                    {children}
                </button>
                <div className={`dropdown-menu ${showMenu ? 'show' : ''}`} ref={(element) => {this.dropDownMenu = element;}}>
                    {options.map((option, index) =>
                        <button type="button" key={index} className="dropdown-item" onClick={() => onSelect(option)}>{option}</button>
                    )}
                </div>
            </div>
        );
    }
}