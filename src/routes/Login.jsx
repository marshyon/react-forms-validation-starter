import { appendErrors, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Login() {
    
    const schema = yup.object().shape({
        email: yup.string().email().required("Email is required"),
        username: yup.string().required("Username is required"),
        age: yup.number().positive().integer().min(18).required("Age is required - must be 18 or older"),
        password: yup.string().min(7).required("Password is required - must be at least 7 characters"),
        confirm: yup.string().oneOf([yup.ref('password'), null], "passwords do not match").required()
    })
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <>
            <div className="container mx-auto bg-blue-50 rounded-xl shadow border p-8 m-10">
                <p className="text-3xl text-primary font-bold mb-5">
                    Login
                </p>
                <p className="text-secondary text-lg">
                    React React Router Dom V6 and Tailwind CSS in action
                </p>
            </div>
            <div className="container mx-auto shadow-sm  p-8 m-10">

                <div className="flex items-center justify-center">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-xl font-bold mb-2">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" {...register("username")}></input>
                        </div>
                        <p className="text-red-500 text-xs italic">{errors.username?.message}.</p>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-xl font-bold mb-2">
                                Age
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" placeholder="21" {...register("age")}></input>
                        </div>                  
                        <p className="text-red-500 text-xs italic">{errors.age?.message}.</p>
      
                        <div className="mb-4">
                            <label className="block text-gray-700 text-xl font-bold mb-2">
                                @ Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="j.doe@mail.com" {...register("email")}></input>
                        </div>                        
                        <p className="text-red-500 text-xs italic">{errors.email?.message}.</p>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            {/* border-red-500 */}
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" {...register("password")}></input>
                            <p className="text-red-500 text-xs italic">{errors.password?.message}.</p>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="confirm">
                                Confirm Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm" type="password" placeholder="******************" {...register("confirm")}></input>
                            <p className="text-red-500 text-xs italic">{errors.confirm?.message}.</p>
                        </div>


                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign In
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>

                </div>


            </div>












        </>





    );
}



