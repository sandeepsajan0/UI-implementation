import * as React from 'react';
//const rt = require('./icons/endToEnd.png')


const icon = (props: { name?: string }) => {
    const imgName = props.name;
    const imgSrc = require(`./icons/${imgName}`)


    return (
        <img alt={imgName} className="icon" src={imgSrc} />

    );
};

export default icon