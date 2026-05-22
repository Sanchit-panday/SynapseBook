import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

function AuthForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const { login } = useAuth();
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isLoginForm && formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const base_url = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api"
        const endpoint = base_url + (isLoginForm ? "/login" : "/register");

        try {
            const res = await fetch(
                endpoint,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password: formData.password,
                    }),
                }
            );
            const data = await res.json();

            if (!res.ok) {
                alert(data.error);
                return;
            }
            if (isLoginForm) {
                if (!data.token) {
                    alert("No token received from server");
                    return;
                }
                login(data.token);
                navigate("/notes");

            } else {
                alert("Registration successful");
                login(data.token);
                navigate("/notes");
            }

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Card className=" bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20 gap-0">
                <CardHeader className="p-0 pb-0 mb-7">
                    <CardTitle className="text-2xl font-bold text-stone-900 mb-1">{isLoginForm ? "Welcome Back" : "Get Started"}</CardTitle>
                    <CardDescription className="text-sm text-stone-500">
                        {isLoginForm ? "Sign in to access your notes" : "Create an account to start capturing ideas"}
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-0 pb-0">
                    <form id="authForm" onSubmit={onSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <Label className="block text-sm font-semibold text-stone-700" htmlFor="email">
                                Email address
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-300 transition-all h-fit"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label className="text-sm font-semibold text-stone-700" htmlFor="password">Password</Label>
                                {/* {isLoginForm ? <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                        : <></>
                                    } */}
                            </div>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    value={formData.password}
                                    minLength={6}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 pr-11 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-300 transition-all h-fit"
                                    required
                                />
                                <button type="button"
                                    onClick={() => setShowPassword(v => !v)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors flex-shrink-0">
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            {isLoginForm ? <> </> :
                                <div className="relative">
                                    <Input
                                        id="confirmPassword"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        value={formData.confirmPassword}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-3 pr-11 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-300 transition-all h-fit"
                                        required
                                    />
                                    <button type="button"
                                        onClick={() => setShowPassword(v => !v)}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors flex-shrink-0">
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            }
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="px-0 pt-0 mt-6 rounded-lg">
                    <Button type="submit" form="authForm" className="h-fit w-full bg-stone-900 hover:bg-stone-800 disabled:bg-stone-400 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group">
                        {isLoginForm ? 'Sign in' : 'Create account'}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                </CardFooter>
                <div className="mt-6 pt-6 border-t border-stone-200">
                    <p className="text-sm text-stone-500 text-center">
                        {isLoginForm ? "Don't have an account? " : 'Already have an account? '}
                        <button
                            onClick={() => setIsLoginForm(!isLoginForm)}
                            className="font-semibold text-stone-900 hover:underline transition-colors"
                        >
                            {isLoginForm ? 'Sign up' : 'Sign in'}
                        </button>
                    </p>
                    <p className="text-xs text-stone-400 text-center mt-6">
                        By continuing, you agree to our
                        <a href="/site-policy" className="hover:underline">
                            Terms of Service and Privacy Policy
                        </a>
                    </p>
                </div>
            </Card>
        </>
    );
}

export default AuthForm;