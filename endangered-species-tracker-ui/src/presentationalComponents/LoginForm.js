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
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 right-0 flex items-center px-2">
                                <input className="hidden js-password-toggle" id="toggle" type="checkbox" />
                                <label className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label" htmlFor="toggle">show</label>
                            </div>
                        <input 
                            className="appearance-none w-full p-2 mb-6 text-indigo-700 border-b-2 leading-tight border-indigo-500 outline-none focus:bg-gray-300 js-password"
                            name="password"
                            onChange={props.handleOnChange} 
                            value={props.password} 
                            type="password"
                            autoComplete="off"
                        />
                    </div>
                    </div>    
                    <button className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">Login</button>
                </form>
            </div>
        </div>
    )  
}
