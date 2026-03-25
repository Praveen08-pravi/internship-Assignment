import React, { useState } from "react";
import "./App.css";

function App() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [emailError, setEmailError] = useState("");
const [passwordStrength, setPasswordStrength] = useState("");
const [confirmError, setConfirmError] = useState("");

const validateEmail = (value) => {
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if (!pattern.test(value)) {
setEmailError("Invalid Email");
} else {
setEmailError("");
}
};

const checkStrength = (value) => {
if (value.length < 6) {
setPasswordStrength("Weak");
} else if (value.length < 10) {
setPasswordStrength("Medium");
} else {
setPasswordStrength("Strong");
}
};

const handleSubmit = (e) => {
e.preventDefault();

if (password !== confirmPassword) {
setConfirmError("Passwords do not match");
} else {
setConfirmError("");
alert("Signup Successful!");
}
};

return (
<div className="container">
<h2>Smart Signup Form</h2>

<form onSubmit={handleSubmit}>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>{
setEmail(e.target.value);
validateEmail(e.target.value);
}}
/>
<p className="error">{emailError}</p>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>{
setPassword(e.target.value);
checkStrength(e.target.value);
}}
/>
<p className="strength">{passwordStrength}</p>

<input
type="password"
placeholder="Confirm Password"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
/>
<p className="error">{confirmError}</p>

<button type="submit">Signup</button>

</form>
</div>
);
}

export default App;