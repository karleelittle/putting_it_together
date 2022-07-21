import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, age, hair } = props;
    const [ stateAge, setStateAge ] = useState(age);

    return (
        <div className="container">
            <h1> {lastName}, {firstName} </h1>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {hair}</p>
            <button onClick={ () => setStateAge(stateAge + 1)}> Birthday Button for {firstName} {lastName}</button>
        </div>
    );
};

export default PersonCard;