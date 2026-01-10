import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import Home from './home'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router";

function Login() {
    const [showPassword, setShowPassword] = useState(false)
    console.log(!showPassword) //
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const { user, login  } = useContext(UserContext)
    const password = watch("password");
    // console.log(password)
    const handleLogin = (data) => {
        // console.log(data)
        // setUser(data)
        login(data)
        navigate('/')

    };
    // console.log(user)

    console.log(errors)
    return (
        <>
            <h1 className="text-center text-blue">
                Login
            </h1>
            <div>
                <form action="" onSubmit={handleSubmit(handleLogin)}>
                    <span className="flex flex-col">
                        <label htmlFor="">Username</label>
                        <input type="text"
                            {...register("username", {
                                required: "Username is required",
                                maxLength: {
                                    value: 10,
                                    message: "Max 10 character"
                                }
                            })}
                            // {...register("username", {required: "Username is required", maxLength: {
                            //     value: 10,
                            //     message: "Max 10 Characters"
                            // } })}
                            placeholder="Enter Username" className="border h-10  bg-gray-100 rounded-lg " />
                        {errors.username && <span className="text-red-500">{errors.username.message}</span>}
                    </span>
                    <span className="flex flex-col">
                        <label htmlFor="">Email</label>
                        <input type="email"
                            {...register("email", { required: "Email is Required" })}
                            placeholder="Enter Email" className="border h-10  bg-gray-100 rounded-lg " />
                        {
                            errors.email && <span className="text-red-500">{errors.email.message}</span>
                        }
                    </span>
                    <span className="flex flex-col">
                        <label htmlFor="">Password</label>
                        <input type={showPassword ? "text" : "password"}
                            {...register("password", {
                                required: "Password is Required",
                                minLength: {
                                    value: 4,
                                    message: "Atleast 7 character is required"
                                },
                                pattern: {
                                    value: /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
                                    message: "Atleast one special character is required"
                                }
                            })}
                            placeholder="Enter Password" className="border h-10  bg-gray-100 rounded-lg " />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>


                        {
                            errors.password && <span className="text-red-500">{errors.password.message}</span>
                        }
                    </span>
                    <span className="flex flex-col">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password"
                            {...register("confirmPassword", {
                                required: "confirm Password is Required",
                                minLength: {
                                    value: 4,
                                    message: "Atleast 7 character is required"
                                },
                                pattern: {
                                    value: /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
                                    message: "Atleast one special character is required"
                                },
                                validate: (value) => value === password || "Password Not Match "
                            })}
                            placeholder="Enter Confirm  Password" className="border h-10  bg-gray-100 rounded-lg " />
                        {
                            errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>
                        }
                    </span>
                    <button type="" className="bg-blue-300 rounded-lg w-20 h-10 m-3 ">Login</button>
                        
                </form>
            </div>
        </>
    )
}
export default Login