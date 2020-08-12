import React from 'react';

class Poll extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: props.title }
    }

    render() {
        return (
            <div className="Poll" role="poll">
                <h3>{this.state.title}</h3>
            </div>
        );
    }
}

export default Poll;
