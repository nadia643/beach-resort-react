import React, { Component } from 'react';
import Title from '../components/Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer, FaCentercode} from 'react-icons/fa';


export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: 'Free cocktails',
                info: 'Pariatur sit voluptate nulla exercitation labore adipisicing.'
            },
            {
                icon: <FaHiking/>,
                title: 'Endless hiking',
                info: 'Pariatur sit voluptate nulla exercitation labore adipisicing.'
            },            {
                icon: <FaShuttleVan/>,
                title: 'Free shuttle',
                info: 'Pariatur sit voluptate nulla exercitation labore adipisicing.'
            },            {
                icon: <FaBeer/>,
                title: 'Strongest beer',
                info: 'Pariatur sit voluptate nulla exercitation labore adipisicing.'
            },            
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">

                    {this.state.services.map( (item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>

                        </article>

                    })}

                    </div>  

            </section>
        )
    }
}
