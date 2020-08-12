import React from 'react';

class Poll extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: props.title, value: "" }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {

    }

    handleSubmit(event) {

    }

    render() {
        return (
            <div className="Poll" data-testid="poll">
                <h3>{this.state.title}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter New Game:&nbsp;
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </form>
            </div>
        );
    }
}

export default Poll;
