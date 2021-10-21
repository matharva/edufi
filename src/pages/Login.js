const Login = () => {
    const handleLogin=async()=>{
        // Adding Google Sign in
        const response=await fetch("/auth/google");
        
    }
    return ( <>
        <div className="flex justify-center pt-20">
            <a href="http://localhost:8000/auth/google" className="bg-purple-500 rounded-md text-white p-5 text-4xl hover:bg-purple-700 transition transition-all ease-in-out duration-300 ">Google Sign in</a>
        </div>
    </> );
}
 
export default Login;