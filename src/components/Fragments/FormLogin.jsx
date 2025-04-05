import Button from "../Elements/button";
import InputForm from "../Elements";
import { Link } from "react-router-dom";

const Formlogin = () => {
    const HandleLogin = () => {
        window.location.href = "/";
    };
    return (
        <div className="space p-10 overflow-sm-hidden">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm mx-auto max-w-sm sm:px-6 lg:px-8 dark:border-gray-300">
                <h3 className="text-2xl font-bold text-center mb-1">Masuk ke Akun</h3>
                <p className="text-center text-secondary mb-4">Yuk, lanjutin belajarmu di videobelajar.</p>
                <form onSubmit={HandleLogin}>
                    <InputForm label="Email" type="text" placeholder="email@gmail.com" name="email" />
                    <InputForm label="Password" type="password" placeholder="***" name="password" />
                    <div className="mb-4 text-right">
                        <a className="text-sm">Lupa Password ?</a>
                    </div>
                    <Link className="block text-center bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition" to="/">Masuk</Link>
                    <Link className="block text-center bg-green-100 text-green-600 w-full py-2 rounded mt-2 hover:bg-green-200 transition" to="/register">Daftar</Link>
                    <div className="separator mt-4 mb-4">atau</div>
                    <Link className="w-full border rounded py-2 flex items-center justify-center gap-2 hover:bg-gray-50" to="/">
                    <img src="../assets/logos_google.svg" className="w-5 h-5" alt="Google" />
                    Masuk dengan Google</Link>
                </form>
            </div>
        </div>
    )
}

export default Formlogin