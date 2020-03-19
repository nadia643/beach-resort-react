import React from 'react'
import RoomsFilter from './RoomsFilter.js';
import RoomList from './RoomList';
import { witihRoomConsumer, withRoomConsumer } from '../Context';
import Loading from './Loading';

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomContainer)



// We are retyping this for some reason as per lesson 95 on project

// import React from 'react';
// import RoomsFilter from './RoomsFilter.js';
// import RoomList from './RoomList';
// import { RoomConsumer } from '../Context';
// import Loading from './Loading';

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//                 {value => {
//                     const {loading, sortedRooms, rooms} = value
//                     if (loading) {
//                         return <Loading />;
//                     }
                    
//                     return (
//                         <div>
//                             Hello from room container
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomList rooms={sortedRooms}/>
//                         </div>
//                     );
//                 }}
//         </RoomConsumer>
//     );
// }
