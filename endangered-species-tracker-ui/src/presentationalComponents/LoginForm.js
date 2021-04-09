import React from 'react'

export const LoginForm = (props) => {

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
                        />
                    </div>    
                    <button className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">Login</button>
                </form>
            </div>
        </div>
    )  
}
