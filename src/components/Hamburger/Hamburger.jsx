import React, { Component } from 'react'
import Style from './Hamburger.module.scss';

export class Hamburger extends Component {
    state = {
        isOpen: false
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { isOpen } = this.state;
        const { focus, base } = Style;
        return (
            <div className={Style.wrapper} onClick={this.toggleMenu}>
                <span className={isOpen ? focus : base}></span>
                <span className={isOpen ? focus : base}></span>
                <span className={isOpen ? focus : base}></span>
            </div>
        )
    }
}

export default Hamburger;
