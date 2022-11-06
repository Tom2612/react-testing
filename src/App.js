import React, { useEffect, useState } from 'react';
import User from './User';

const App = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prev => ++prev)
    };

    const decrement = () => {
        setCounter(prev => --prev)
    };

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users/1')
    //   .then((response) => response.json())
    //   .then((user) => setUser(user))
    //   .catch((error) => setError(error.message));
    // }, []);

    if(error){
        return <span>{error}</span>
    }
    
    return (
        <div>
            <div>{user ? <User user={user} /> : <span>Loading...</span>}</div>
            <h2 data-testid="counter">{counter}</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    );  
};

export default App;