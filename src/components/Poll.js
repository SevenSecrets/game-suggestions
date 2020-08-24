import React from 'react';
import axios from 'axios';
import GameList from './GameList';

class Poll extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: props.title, newGameValue: "", gameList: [] }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addNewGame = this.addNewGame.bind(this);
    }

    handleChange(event) {
        this.setState({ newGameValue: event.target.value });
    }

    getNewGame(gameTitle) {
        axios({
            url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': process.env.REACT_APP_API_KEY
            },
            data: `search "${gameTitle}"; fields name;`
        })
        .then(response => {
            this.addNewGame(response.data[0]);
        })
        .catch(err => {
            console.error(err);
            alert("That game does not exist.");
        });
    }

    addNewGame(gameData) {
        let gameList = this.state.gameList;
        gameList.push(gameData.name);
        this.setState({ gameList: gameList });
    }

    handleSubmit(event) {
        let gameTitle = this.state.newGameValue;
        this.getNewGame(gameTitle);
        event.preventDefault();
    }

    render() {
        return (
            <div className="Poll" data-testid="poll">
                <h3>{this.state.title.charAt(0).toUpperCase() + this.state.title.slice(1)}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter New Game:&nbsp;
                        <input type="text" placeholder="Add a game to the poll" value={this.state.newGameValue} onChange={this.handleChange} />
                    </label>
                    &nbsp;
                    <input className="submit" type="submit" value="Add" />
                </form>
                <GameList gameNames={this.state.gameList} />
            </div>
        );
    }
}

export default Poll;
