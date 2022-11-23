import React from 'react'
import './App.css'
import DocTitleOne from './components/DocTitleOne'
import CounterOne from './components/CounterOne'
import UserForm from './components/UserForm'

function App() {
	return (
		<div className="App">
			<DocTitleOne />
			<CounterOne />
			<UserForm />
		</div>
	)
}

export default App