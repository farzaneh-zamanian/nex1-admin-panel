import React, { useState } from 'react'
import RegistrationPagestyles from "./RegistrationPage.module.scss"
import formStyles from "../form.module.scss"; //SHARED FOR REGISTER AND LOGIN
import Link from 'next/link';
import { useRegister } from '../../../hooks/mutation';
import { useRouter } from 'next/router';
import { validateInput } from '../../../utils/inputsValidation';


function RegistrationPage() {
      const router = useRouter();
      //STATE -ERROR
      const [errors, setErrors] = useState({
            username: "",
            password: "",
            confirmedPassword: "",
      });

      //STATE -FORM
      const [form, setForm] = useState({
            username: "",
            password: "",
            confirmedPassword: "",
      });
      // STATE - LOADING
      const [loading, setLoading] = useState(false);

      //MUTATION
      const { mutateAsync } = useRegister();


      //ACTION - onCHANGE INPUT VALUE
      const changeHandler = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            const error = validateInput(name, value);
            setErrors((errors) => ({ ...errors, [name]: error })); //errors
            setForm((form) => ({ ...form, [name]: value }));//values
      };




      //ACTION- REGISTER FORM
      const registerHandler = async (event) => {
            event.preventDefault();
            const { username, password, confirmedPassword } = form;

            // validation - if inputs are empty
            if (!form.username || !form.password || !form.confirmedPassword || errors.username || errors.password || errors.confirmedPassword)
                  // return alert("تمام فیلدها مورد نیاز است");
                  return;
            // validation -confirmation password
            if (form.password !== form.confirmedPassword)
                  // return alert("پسورد و تکرار آن باید مشابه باشند.");

                  setErrors((errors) => ({ ...errors, confirmedPassword: "پسورد و تکرار آن باید مشابه باشند." }));

            setLoading(true); // Set loading state


            try {
                  const response = await mutateAsync({ username, password }); // Use mutateAsync for async/await
                  console.log("Registration successful:", response.message); // Access the response data
                  // Redirect to the /login page
                  router.push("/login");
            } catch (error) {
                  console.error(
                        "Registration failed:",
                        error.response?.data?.message || error.message
                  );
            }


      }

      return (
            <form
                  onSubmit={registerHandler}
                  className={RegistrationPagestyles.containerRegistrationPage}
            >
                  <span className={formStyles.containerLoginPage__logo}>
                        <img src="/images/logoMain.svg" alt="Company Logo" />
                  </span>
                  <h2 className={formStyles.containerLoginPage__title}>فرم ثبت نام</h2>
                  <div className={formStyles.containerLoginPage__inputGroup}>
                        <input
                              type="text"
                              placeholder="نام کاربری"
                              name="username"
                              value={form.username}
                              onChange={changeHandler}
                        />
                        {errors.username && <span className={RegistrationPagestyles.validationError}>{errors.username}</span>}
                        <input
                              type="password"
                              placeholder="رمز عبور"
                              name="password"
                              value={form.password}
                              onChange={changeHandler}
                        />
                        {errors.password && <span className={RegistrationPagestyles.validationError}>{errors.password}</span>}

                        <input
                              type="password"
                              placeholder="تکرار رمز عبور"
                              name="confirmedPassword"
                              value={form.confirmedPassword}
                              onChange={changeHandler}
                        />
                        {errors.confirmedPassword && <span className={RegistrationPagestyles.validationError}>{errors.confirmedPassword}</span>}

                  </div>
                  <button
                        type="submit"
                        className={formStyles.containerLoginPage__entranceBtn}
                        disabled={loading} // Disable button while loading

                  >
                        {loading ? "در حال ثبت نام..." : "ثبت نام"}

                  </button>
                  <p

                        className={formStyles.containerLoginPage__accountCreation}
                  >
                        <Link href="/login"> حساب کاربردی دارید؟</Link>


                  </p>
            </form>
      )
}

export default RegistrationPage