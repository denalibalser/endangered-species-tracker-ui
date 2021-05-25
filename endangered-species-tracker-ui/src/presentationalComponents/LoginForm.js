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
                            autoComplete="off"
                        />
                        <div className='errorMsg text-red-600'>{props.usernameError}</div> 
                        <div className='errorMsg text-red-600'>{props.errors}</div>
                    </div>
                    <div >
                        <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
                        <div className="relative w-full">
                            <input 
                                className="appearance-none border-b-2 w-full py-3 px-3 leading-tight border-indigo-500 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-gray-300 text-indigo-700 pr-16 font-mono js-password"
                                id="password"
                                name="password"
                                onChange={props.handleOnChange} 
                                value={props.password} 
                                type="password"
                                autoComplete="off"
                            />
                            <div className='errorMsg text-red-600'>{props.passwordError}</div> 

                        </div>
                    </div>  
                    <button className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-medium py-3 px-4 mt-10 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Login
                    </button>  
                </form>
            </div>
        </div>
    )  
}
