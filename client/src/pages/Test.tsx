import { FileText } from "lucide-react"
import { useState } from "react";

function test() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-stone-900 mb-1">
                    {/* {mode === 'signin' ? 'Welcome back' : 'Get started'} */}
                </h2>
                <p className="text-sm text-stone-500 mb-8">
                    {/* {mode === 'signin'
                  ? 'Sign in to access your notes'
                  : 'Create an account to start capturing ideas'} */}
                </p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-stone-700 mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            value={""}
                            placeholder="you@example.com"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-300 transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-stone-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                placeholder="••••••••"
                                required
                                minLength={6}
                                className="w-full px-4 py-3 pr-11 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-300 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(v => !v)}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors flex-shrink-0"
                            >
                            </button>
                        </div>
                    </div>

                    {/* {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-700 font-medium">{error}</p>
                  </div>
                )}

                {success && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                      <Check className="w-4 h-4" /> {success}
                    </p>
                  </div>
                )} */}

                    <button
                        type="submit"
                        className="w-full bg-stone-900 hover:bg-stone-800 disabled:bg-stone-400 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group mt-6"
                    >
                        {/* {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Please wait
                    </>
                  ) : (
                    <>
                      {mode === 'signin' ? 'Sign in' : 'Create account'}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )} */}
                    </button>
                </form>

                <div className="mt-6 pt-6 border-t border-stone-200">
                    <p className="text-sm text-stone-500 text-center">
                        {/* {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
                  <button
                    onClick={toggleMode}
                    className="font-semibold text-stone-900 hover:underline transition-colors"
                  >
                    {mode === 'signin' ? 'Sign up' : 'Sign in'}
                  </button> */}
                    </p>
                </div>

                <p className="text-xs text-stone-400 text-center mt-6">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
            </div>

            {/* Mobile branding */}
            <div className="md:hidden text-center mt-8">
                <div className="flex items-center justify-center gap-2 text-white mb-3">
                    <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                        <FileText className="w-5 h-5" />
                    </div>
                    <span className="font-bold">Notepad</span>
                </div>
                <p className="text-stone-300 text-sm">
                    Beautiful note-taking, made simple
                </p>
            </div>
        </div>
    )
}

export default test