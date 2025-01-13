import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';
import { TbMessageChatbot } from "react-icons/tb";
import toast from 'react-hot-toast';
import AuthSideImage from "auth-sidebar.png";
import Input from '../ui/Input';
import { Button } from '../ui/Button';


const Signup = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const { signup } = useAuthStore();

    const validateForm = () => {
        if (!formData.firstName.trim()) return toast.error("Full name is required");
        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
        if (!formData.password) return toast.error("Password is required");
        if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const success = validateForm();

        if (success == true) signup(formData);
    }


    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* left side */}
            <div className="flex flex-col justify-center items-center p-6 sm:p-12 shadow-lg">
                <div className="w-full max-w-md space-y-8">
                    {/* LOGO */}
                    <div className="text-center mb-8">
                        <div className="flex flex-col items-center gap-2 group">
                            <div
                                className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
            group-hover:bg-primary/20 transition-colors"
                            >
                                <TbMessageChatbot className="size-60 text-primary" />
                            </div>
                            <h1 className="text-2xl font-bold mt-2">Create Account</h1>
                            <p className="text-base-content/60">Get started with your free account</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="form-control">
                            <Input
                                placeholder='First Name'
                                type="text"
                                initialValue={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                        </div>

                        <div className="form-control">
                            <Input
                                placeholder='Last Name'
                                type="text"
                                initialValue={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                        </div>

                        <div className="form-control">
                            <Input
                                placeholder='Email'
                                type="email"
                                initialValue={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="form-control">
                            <Input
                                placeholder='Password'
                                type="password"
                                initialValue={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                        <Button
                            text='Create Account'
                            type="submit"
                        />
                    </form>

                    <div className="text-center">
                        <p className="text-base-content/60">
                            Already have an account?{" "}
                            <Link to="/login" className="link link-primary">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img src={AuthSideImage} />
            </div>
        </div>
    )
}

export default Signup