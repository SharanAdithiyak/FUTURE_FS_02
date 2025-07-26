import React, { useState } from "react";

const AuthModal = ({ open, onClose, onSignIn, onSignUp, error, showSignIn, setShowSignIn }) => {
  const [signup, setSignup] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [signin, setSignin] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState({ signin: false, signup: false, confirm: false });

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl">&times;</button>
        {/* Sign Up Form */}
        {!showSignIn && (
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 text-left">Create Account</h2>
            <p className="mb-4 text-gray-500">Join PixelBazaar and start your shopping journey</p>
            <form className="space-y-4" onSubmit={e => { e.preventDefault(); onSignUp(signup); }}>
              <div className="flex gap-2">
                <input type="text" className="w-1/2 p-2 rounded border border-gray-300" placeholder="First name" required value={signup.firstName} onChange={e => setSignup({ ...signup, firstName: e.target.value })} />
                <input type="text" className="w-1/2 p-2 rounded border border-gray-300" placeholder="Last name" required value={signup.lastName} onChange={e => setSignup({ ...signup, lastName: e.target.value })} />
              </div>
              <div className="relative">
                <input type="email" className="w-full p-2 rounded border border-gray-300 pl-10" placeholder="Enter your email" required value={signup.email} onChange={e => setSignup({ ...signup, email: e.target.value })} />
                <span className="absolute left-3 top-3 text-gray-400"><i className="fa fa-envelope"></i></span>
              </div>
              <div className="relative">
                <input type="tel" className="w-full p-2 rounded border border-gray-300 pl-10" placeholder="Enter your phone number" required value={signup.phone} onChange={e => setSignup({ ...signup, phone: e.target.value })} />
                <span className="absolute left-3 top-3 text-gray-400"><i className="fa fa-phone"></i></span>
              </div>
              <div className="relative">
                <input type={showPassword.signup ? "text" : "password"} className="w-full p-2 rounded border border-gray-300 pl-10 pr-10" placeholder="Create a password" required value={signup.password} onChange={e => setSignup({ ...signup, password: e.target.value })} />
                <span className="absolute left-3 top-3 text-gray-400"><i className="fa fa-lock"></i></span>
                <span className="absolute right-3 top-3 text-gray-400 cursor-pointer" onClick={() => setShowPassword(p => ({ ...p, signup: !p.signup }))}><i className={`fa ${showPassword.signup ? "fa-eye-slash" : "fa-eye"}`}></i></span>
              </div>
              <div className="relative">
                <input type={showPassword.confirm ? "text" : "password"} className="w-full p-2 rounded border border-gray-300 pl-10 pr-10" placeholder="Confirm your password" required value={signup.confirmPassword} onChange={e => setSignup({ ...signup, confirmPassword: e.target.value })} />
                <span className="absolute left-3 top-3 text-gray-400"><i className="fa fa-lock"></i></span>
                <span className="absolute right-3 top-3 text-gray-400 cursor-pointer" onClick={() => setShowPassword(p => ({ ...p, confirm: !p.confirm }))}><i className={`fa ${showPassword.confirm ? "fa-eye-slash" : "fa-eye"}`}></i></span>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded font-semibold">Sign Up</button>
            </form>
            <p className="mt-4 text-center text-gray-500">Already have an account? <button className="text-indigo-600 hover:underline" onClick={() => setShowSignIn(true)}>Sign In</button></p>
          </div>
        )}
        {/* Sign In Form */}
        {showSignIn && (
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 text-left">Welcome Back</h2>
            <p className="mb-4 text-gray-500">Sign in to your account to continue shopping</p>
            <form className="space-y-4" onSubmit={e => { e.preventDefault(); onSignIn(signin); }}>
              <div className="relative">
                <input type="email" className="w-full p-2 rounded border border-gray-300 pl-10" placeholder="Enter your email" required value={signin.email} onChange={e => setSignin({ ...signin, email: e.target.value })} />
                <span className="absolute left-3 top-3 text-gray-400"><i className="fa fa-envelope"></i></span>
              </div>
              <div className="relative">
                <input type={showPassword.signin ? "text" : "password"} className="w-full p-2 rounded border border-gray-300 pl-10 pr-10" placeholder="Enter your password" required value={signin.password} onChange={e => setSignin({ ...signin, password: e.target.value })} />
                <span className="absolute left-3 top-3 text-gray-400"><i className="fa fa-lock"></i></span>
                <span className="absolute right-3 top-3 text-gray-400 cursor-pointer" onClick={() => setShowPassword(p => ({ ...p, signin: !p.signin }))}><i className={`fa ${showPassword.signin ? "fa-eye-slash" : "fa-eye"}`}></i></span>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center text-gray-500 text-sm">
                  <input type="checkbox" className="mr-2" /> Remember me
                </label>
                <a href="#" className="text-indigo-600 hover:underline text-sm">Forgot password?</a>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded font-semibold">Sign In</button>
            </form>
            <div className="my-4 flex items-center justify-center">
              <span className="border-b border-gray-300 w-1/4"></span>
              <span className="mx-2 text-gray-400 text-sm">Or continue with</span>
              <span className="border-b border-gray-300 w-1/4"></span>
            </div>
            <div className="flex gap-4 justify-center mb-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" className="w-5 h-5" alt="Google" /> Google</button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" className="w-5 h-5" alt="Facebook" /> Facebook</button>
            </div>
            <p className="mt-2 text-center text-gray-500">Don't have an account? <button className="text-indigo-600 hover:underline" onClick={() => setShowSignIn(false)}>Sign up</button></p>
          </div>
        )}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default AuthModal; 