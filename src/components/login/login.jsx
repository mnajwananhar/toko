const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-100">
      <div className="p-6 bg-white rounded-md shadow-md w-80">
        <h1 className="text-2xl font-bold text-center mb-4">TOKO KUE</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-semibold">
              Nama Pengguna
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
