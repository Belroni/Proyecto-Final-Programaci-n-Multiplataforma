import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <h1 className="text-3xl font-black">Welcome back</h1>
      
      <div className="w-full px-5 py-10">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

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

              <input
                  type="submit"
                  value="Log in"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                    
                  href="#"
              />

          </form>
          <p className="text-center text-gray-500 text-xs">
              &copy;2024 Acme Corp. All rights reserved.
          </p>
      </div>

      <nav className="mt-5">
        <Link to="/auth/register">
          Don't have an account yet? <b>Sign up</b>
        </Link>
      </nav>

    </>
  )
}
