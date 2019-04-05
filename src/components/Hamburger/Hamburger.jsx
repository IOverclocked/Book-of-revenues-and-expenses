import React, { Component } from 'react'
import styles from './Hamburger.module.scss';

export class Hamburger extends Component {
    state = {
        isOpen: false
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { isOpen } = this.state;
        const { focus, base } = styles;
        return (
            <div className={styles.wrapper} onClick={this.toggleMenu}>
                <span className={isOpen ? focus : base}></span>
                <span className={isOpen ? focus : base}></span>
                <span className={isOpen ? focus : base}></span>
            </div>
        )
    }
}

export default Hamburger;
