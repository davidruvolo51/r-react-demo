////////////////////////////////////////////////////////////////////////////////
// FILE: App.js
// AUTHOR: David Ruvolo
// CREATED: 2019-11-01
// MODIFIED: 2021-01-18
// PURPOSE: build ui
// DEPENDENCIES: react
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
function App() {

	// set state
	const [inputValue, setInputValue] = useState(1);
	const [inputPower, setInputPower] = useState(2);
	const [squaredJS, setSquaredJS] = useState(0);
	const [squaredR, setSquaredR] = useState(0);

	// on form submit function
	// send input values to /data/ and wait for response
	const handleSubmit = async e => {
		e.preventDefault();

		// create response through POST
		const response = await fetch("http://localhost:5000/data", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ value: inputValue, power: inputPower }),
		});
		
		const body = await response.json();

		// update state
		setSquaredJS(body.squaredJS);
		setSquaredR(body.squaredR);
	};

	////////////////////////////////////////
	// RENDER APP
	return (
		<>
			<header className="header">
				<p>R &#10084; React</p>
			</header>
			<main className="main" id="main" aria-label="main content">
				<section className="section">
					<h1>Example app using R, React, and Node.js</h1>
					<p>In this example, we are sending a number the server, squaring by a number of our choice using R and JavaScript, and then sending it back to our react component.</p>
					<form className="form" onSubmit={(e) => e.preventDefault()}>
						<legend>Define Values</legend>
						<fieldset>
							<label htmlFor="num">Enter a number</label>
							<span>Between 1 and 1000</span>
							<input id="num" type="number" min="1" max="1000" onChange={(e) => setInputValue(e.target.value)} />
						</fieldset>
						<fieldset>
							<label htmlFor="power">Enter an exponent</label>
							<span>Between 2 and 10</span>
							<input id="power" type="number" min="2" max="10" onChange={(e) => setInputPower(e.target.value)} />
						</fieldset>
						<button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
					</form>
					<h3>Results</h3>
					{
						// render only after first entry
						squaredJS > 0
							? (
								<>
									<label>via JavaScript using <code>Math.pow(...)</code></label>
									<output>{squaredJS}</output>
									<label>via R using <code>squared()</code></label>
									<output>{squaredR}</output>
								</>
							)
							: <output>Results will appear here</output>
					}
				</section>
			</main>
		</>
	);
}

export default App;