import { useState } from 'react'
import "./App.css";
function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const URL = "http://localhost:5000/register";
		const options = {
			method: "post",
			body: JSON.stringify({ name, email }),
			headers: {
				'Content-Type': 'application/json'
			}
		}
		let result = await fetch(URL, options)
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setEmail("");
			setName("");
		}
	}
	return (
		<>
			<h1>This is React Login Page App </h1>
			<form action="" className="fonmContainer">
				<input className="item" type="text" placeholder="Name"
				value={name} onChange={(e) => setName(e.target.value)} /> <br/>
				<input className="item" type="email" placeholder="E-mail"
				value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
				<button className="item" type="submit"
				onClick={handleOnSubmit}>submit</button>
			</form>

		</>
	);
}

export default App;
