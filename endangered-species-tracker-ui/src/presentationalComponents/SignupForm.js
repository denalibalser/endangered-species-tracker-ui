import React from 'react'

export const SignupForm = (props) => {

    return (
        <div className="flex h-screen">
            <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
                <header>
                    <img className="w-20 mx-auto mb-5" alt="Tiger Icon" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
                </header>
                <form onSubmit={props.handleOnSubmit}>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="username">Username</label>
                        <input 
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                            name="username"
                            onChange={props.handleOnChange} 
                            value={props.username} 
                            type="text"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="first_name">First Name</label>
                        <input 
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                            name="first_name"
                            onChange={props.handleOnChange} 
                            value={props.first_name} 
                            type="text"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="last_name">Last Name</label>
                        <input 
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                            name="last_name"
                            onChange={props.handleOnChange} 
                            value={props.last_name} 
                            type="text"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
                        <input 
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                            name="password"
                            onChange={props.handleOnChange} 
                            value={props.password} 
                            type="text"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="password_confirmation">Confirm Password</label>
                        <input 
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                            name="password_confirmation"
                            onChange={props.handleOnChange} 
                            value={props.password_confirmation} 
                            type="text"
                            autoComplete="off"
                        />
                    </div>
                    <button className="btn" type="submit">Signup</button>            
                </form>
            </div>
        </div>
    )
}