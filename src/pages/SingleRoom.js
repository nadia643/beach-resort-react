import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext;
    // componentDidMount() {}
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return ( <div className="error">
                <h3>No such room could be found...</h3>
                <Link to='./rooms' className="btn-primary">
                    Back to rooms
                </Link>
            </div>
        );
    }

    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
        console.log(room);
        return (
            <Hero hero='roomsHero'>
            <Banner title = {`${name} room`}>
                <Link to='./rooms' className="btn-primary">
                    Back to rooms
                </Link>
            </Banner>
            </Hero>
        )
    }
}
