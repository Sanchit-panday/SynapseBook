import { useState } from "react";

import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LoginProps = {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

function Auth({ setIsLoggedIn }: LoginProps) {
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const token = localStorage.getItem("token")
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
        const endpoint = isLoginForm ? "http://localhost:5000/api/login" : "http://localhost:5000/api/register";

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

                localStorage.setItem("token", data.token);
                setIsLoggedIn(true);
                window.location.reload();
                
            } else {
                // Set token to local storage
                localStorage.setItem("token", data.token);
                setIsLoggedIn(true);
                alert("Registration successful");
                window.location.reload()
            }

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <h2>Login Form</h2>

            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>{isLoginForm ? "Login to your account" : "Sign Up to your account"}</CardTitle>
                    <CardAction>
                        <Button variant="link"
                            onClick={() => setIsLoginForm(!isLoginForm)}>
                            {isLoginForm ? "Signup" : "Login"}</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form id="authForm" onSubmit={onSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    {isLoginForm ? <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                        : <></>
                                    }
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        })
                                    }
                                    required
                                />
                                {isLoginForm ? <> </> :
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        value={formData.confirmPassword}
                                        placeholder="confirm password"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                        required
                                    />}
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" form="authForm" className="w-full">
                        {isLoginForm ? "Login" : "Sign Up"}
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}

export default Auth;