import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>
        <h1 className="text-3xl font-black">Create your account</h1>
        
        <div className="w-full px-5 py-10">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" 
                        type="text" 
                        id="name"
                        name="name"
                        placeholder="Enter your name"    
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="Enter your email"    
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" 
                        type="password" 
                        id="password"
                        name="password"
                        placeholder="Enter your password"    
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password_confirmation">
                        Repeat password
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" 
                        type="password" 
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder="Enter your password"    
                    />
                </div>

                <input
                    type="submit"
                    value="Sign up"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                    
                    href="#"
                />




                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
        <nav className="mt-5">
            <Link to="/auth/login">
                Already have an account? <b>Log in</b>
            </Link>
        </nav>
    </>
  )
}
