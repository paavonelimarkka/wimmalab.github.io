// libs
import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import { removeHash } from 'react-scrollable-anchor';
import Waypoint from 'react-waypoint';
// components
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import ForYou from './ForYou';
import Companies from './Companies';
import Contact from './Contact';

configureAnchors({scrollDuration: 400});

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            scrollSpy: ''
        }
    }
    handleWaypointEnter = (value) => {
        console.log(value);
        this.setState({
            scrollSpy: value
        });
    }
    render() {
        console.log('App state:', this.state.scrollSpy);
        return (
            <div className="wrapper">
                <Nav scrollSpy={this.state.scrollSpy} />
                <ScrollableAnchor id={'page-top'}><div></div></ScrollableAnchor>
                <Waypoint onEnter={() => this.handleWaypointEnter('')} topOffset={'45%'} bottomOffset={'45%'}>
                    <div>
                        <Landing />
                    </div>
                </Waypoint>
                <ScrollableAnchor id={'about'}><div></div></ScrollableAnchor>
                <Waypoint onEnter={() => this.handleWaypointEnter('about')} topOffset={'45%'} bottomOffset={'45%'}>
                    <div>
                        <About />
                    </div>
                </Waypoint>
                <ScrollableAnchor id={'for-you'}><div></div></ScrollableAnchor>
                <Waypoint onEnter={() => this.handleWaypointEnter('for-you')} topOffset={'45%'} bottomOffset={'45%'}>
                    <div>
                        <ForYou />
                    </div>
                </Waypoint>
                <ScrollableAnchor id={'companies'}><div></div></ScrollableAnchor>
                <Waypoint onEnter={() => this.handleWaypointEnter('companies')} topOffset={'45%'} bottomOffset={'45%'}>
                    <div>
                        <Companies />
                    </div>
                </Waypoint>
                <ScrollableAnchor id={'contact'}><div></div></ScrollableAnchor>
                <Contact />
                <Waypoint onEnter={() => this.handleWaypointEnter('contact')} />
            </div>
        );
    }
}
