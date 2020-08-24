import React from 'react';

class PollItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { id: props.id, name: props.name, votes: 0 }
        this.handleVote = this.handleVote.bind(this);
    }

    handleVote() {
        this.setState({ votes: this.state.votes + 1 });
    }

    render() {
        return(
            <li>{this.state.name}&nbsp;
                <button data-testid={this.state.id} onClick={() => this.handleVote()}>
                    Vote
                </button>
                <p>&nbsp;{this.state.votes} {(this.state.votes === 1) ? 'vote' : 'votes'}</p>
            </li>
        )
    }
}

export default PollItem;