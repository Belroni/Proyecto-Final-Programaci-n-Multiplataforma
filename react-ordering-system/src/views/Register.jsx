import { createRef, useState} from 'react'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert';
import { useAuth } from '../hooks/useAuth';

export default function Register() {

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [errores, setErrores] = useState([])
    const {register} = useAuth({middleware: 'guest', url: '/'})


    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        register(datos, setErrores)
    }

  return (
    <>
        <h1 className="text-3xl font-black">Create your account</h1>
        
        <div className="w-full px-5 py-10">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
                noValidate
            >
                {errores ? errores.map((error, i) => <Alert key={i}>{error}</Alert>) : null }

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
                        ref={nameRef}
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
                        ref={emailRef}   
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
                        ref={passwordRef}
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
                        ref={passwordConfirmationRef}                        
                    />
                </div>

                <input
                    type="submit"
                    value="Sign up"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                    
                    href="#"
                />

            </form>

        </div>
        <nav className="mt-5">
            <Link to="/auth/login">
                Already have an account? <b>Log in</b>
            </Link>
        </nav>
    </>
  )
}
