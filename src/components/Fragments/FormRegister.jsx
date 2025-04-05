import Button from "../Elements/button";
import InputForm from "../Elements";
import { Link } from "react-router-dom";
import PhoneInputForm from "../Elements/phone_input";

const FormRegister = () => {
    return (
        <div className="space p-10 overflow-sm-hidden">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm mx-auto max-w-xl sm:px-6 lg:px-8 dark:border-gray-300">
            <h3 className="text-2xl font-bold text-center mb-1">Pendaftaran Akun</h3>
            <p className="text-center text-secondary mb-4">Yuk, daftarkan akunmu sekarang juga!</p>
            <form>
                <InputForm label="Nama Lengkap *" type="text" placeholder="name" name="name" />
                <InputForm label="Email" type="text" placeholder="email@gmail.com" name="email" />
                <PhoneInputForm label="No. Hp *" type="number" name="phone" />
                <InputForm label="Kata Sandi *" type="password" placeholder="***" name="password" />
                <InputForm label="Konfirmasi Kata Sandi *" type="password" placeholder="***" name="password" />
                <div className="mb-4 text-right">
                    <a className="text-sm">Lupa Password ?</a>
                </div>
                <Link className="block text-center bg-green-500  w-full text-white py-2 rounded hover:bg-green-600 transition" to="/login">Daftar</Link>
                <Link className="block text-center bg-green-100 text-green-600 w-full py-2 rounded mt-2 hover:bg-green-200 transition" to="/login">Masuk</Link>
                <div className="separator mt-4 mb-4">atau</div>
                <Link className="w-full border rounded py-2 flex items-center justify-center gap-2 hover:bg-gray-50" to="/">
                <img src="../assets/logos_google.svg" className="w-5 h-5" alt="Google" />
                Daftar dengan Google</Link>
            </form>
        </div>
    </div>
    )
}

export default FormRegister