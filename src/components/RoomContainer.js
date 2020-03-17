import React from 'react';
import RoomsFilter from './RoomsFilter.js';
import RoomList from './RoomList';
import { RoomConsumer } from '../Context';
import Loading from './Loading';

export default function RoomContainer() {
    return (
        <RoomConsumer>
                {value => {
                    console.log(value);
                    
                    return (
                        <div>
                            Hello from room container
                            <RoomsFilter />
                            <RoomList />
                        </div>
                    );
                }}
        </RoomConsumer>
    );
}
