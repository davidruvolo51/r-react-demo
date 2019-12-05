////////////////////////////////////////////////////////////////////////////////
// FILE: App.js
// AUTHOR: David Ruvolo
// CREATED: 2019-11-01
// MODIFIED: 2019-11-01
// PURPOSE: build ui
// DEPENDENCIES: react
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React, { Component } from 'react';
class App extends Component {

	// set state
	state = {
		inputValue: 1,
		inputPower: 2,
		sqrdJS: 0,
		sqrdR: 0,
	};

	// on form submit function
	// send input values to /api/data/ and wait for response
	handleSubmit = async e => {
		e.preventDefault();

		// create response through POST
		const response = await fetch("/data", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ value: this.state.inputValue, power: this.state.inputPower }),
		});
		const body = await response.json();

		// update state
		this.setState({ sqrdJS: body.sqrdJS, sqrdR: body.sqrdR });
	};

	////////////////////////////////////////
	// RENDER APP
	render() {
		return (
			<>
				<header className="header">
					<p>R &#10084; React</p>
				</header>
				<main className="main" id="main" aria-label="main content">
					<section className="section">
						<h1>Example app using R, React, and Node.js</h1>
						<p>In this example, we are sending a number the server, squaring by a number of our choice using R and JavaScript, and then sending it back to our react component.</p>
						<form className="form" onSubmit={this.handleSubmit}>
							<legend>Define Values</legend>
							<fieldset>
								<label htmlFor="num">Enter a number</label>
								<span>Between 1 and 1000</span>
								<input id="num" type="number" value={this.state.inputValue} min="1" max="1000"
									onChange={e => this.setState({ inputValue: e.target.value })} />
							</fieldset>
							<fieldset>
								<label htmlFor="power">Enter an exponent</label>
								<span>Between 2 and 10</span>
								<input id="power" type="number" value={this.state.inputPower} min="2" max="10" onChange={e => this.setState({ inputPower: e.target.value })} />
							</fieldset>
							<button type="submit">Submit</button>
						</form>
						<h3>Results</h3>
						{
							// render only after first entry
							this.state.sqrdJS > 0
								? (
									<>
										<label>via JavaScript using <code>Math.pow(...)</code></label>
										<output>{this.state.sqrdJS}</output>
										<label>via R using <code>sqrt()</code></label>
										<output>{this.state.sqrdR}</output>
									</>
								)
								: <output>Results will appear here</output>
						}
					</section>
				</main>
			</>
		);
	}
}

export default App;