import React, {useState} from 'react'

const AuthForm = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <div className="min-h-screen flex items-center justify-center p-10 bg-gray-100 rounded">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">
                {isLogin ? 'Login' : 'Register'}
            </h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div className="mb-4">
                        <label 
                        htmlFor="name"
                        className="block text-gray-500 font-bold mb-2"
                        >Name</label>
                        <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                )}
                <div className="mb-4">
                    <label 
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                    >Email</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label 
                    htmlFor="password"
                    className="block text-gray-700 font-bold mb-2"
                    >Password</label>
                    <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-lg focus:outline-none border focus:border-blue-500"
                    />
                </div>
                <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <p
            className="mt-4 text-center"
            >
                {isLogin ? "Dont have an account?" : "Already have an account?"}
                <button
                className="text-blue-500 ml-2 focus:outline-none px-3 border hover:border-blue-500"
                onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? 'Register' : 'Login'}
                </button>
            </p>
        </div>
    </div>
  )
}

export default AuthForm;