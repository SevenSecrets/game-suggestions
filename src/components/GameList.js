import React from 'react';
import PollItem from './PollItem';

class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gameNames: props.gameNames };
    }

    render() {
        const gameList = this.state.gameNames.map((game, i) => {
            return <PollItem name={game} key={i.toString()} id={i.toString()} />
        })
        return(
            <ul>
                {gameList}
            </ul>
        )
    }
}

export default GameList;