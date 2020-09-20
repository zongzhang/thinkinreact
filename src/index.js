import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

function Example() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

ReactDOM.render(<Example/>, document.getElementById('root'));


// function FriendStatus(props) {
//     const [isOnline, setIsOnline] = useState(null);
//
//     useEffect(() => {
//         function handleStatusChange(status) {
//             setIsOnline(status.isOnline);
//         }
//         ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//         // Specify how to clean up after this effect:
//         return function cleanup() {
//             ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//         };
// OR
// return () => {
//     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
// };
//     });
//
//     if (isOnline === null) {
//         return 'Loading...';
//     }
//     return isOnline ? 'Online' : 'Offline';
// }
