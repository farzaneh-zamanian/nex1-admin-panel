import loginPagestyles from "./LoginPage.module.scss";
import formStyles from "../form.module.scss"; //SHARED FOR REGISTER AND LOGIN
import { setCookie } from "../../../utils/cookie";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { useLogin } from "../../../hooks/mutation";
function LoginPage() {
      const router = useRouter();

      //STATE -FORM
      const [form, setForm] = useState({
            username: "",
            password: "",
      });
      //MUTATION
      const { mutateAsync } = useLogin();

      // STATE - LOADING
      const [loading, setLoading] = useState(false);

      //ACTION - onCHANGE INPUT VALUE
      const changeHandler = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setForm((form) => ({ ...form, [name]: value }));
      };
      //ACTION- REGISTER FORM
      const loginHandler = async (event) => {
            event.preventDefault();
            if (!form.username || !form.password)
                  return;
            // return alert("تمام فیلدها مورد نیاز است");
            setLoading(true)

            try {
                  const response = await mutateAsync(form);
                  setCookie("token", response?.token);
                  // Redirect to the /admin page
                  router.push("/admin");

            } catch (error) {
                  console.error(
                        "Login failed:",
                        error.response?.data?.message || error.message
                  );
                  alert("login failed:" + error.response?.data?.message || "Unknown error")
            }
      }


      return (
            <form
                  onSubmit={loginHandler}
                  className={loginPagestyles.containerLoginPage}
            >
                  <span className={formStyles.containerLoginPage__logo}>
                        <img src="/images/logoMain.svg" alt="Company Logo" />
                  </span>
                  <h2 className={formStyles.containerLoginPage__title}>فرم ورود</h2>
                  <div className={formStyles.containerLoginPage__inputGroup}>
                        <input
                              type="text"
                              placeholder="نام کاربری"
                              name="username"
                              value={form.username}
                              onChange={changeHandler}
                        />
                        <input
                              type="password"
                              placeholder="رمز عبور"
                              name="password"
                              value={form.password}
                              onChange={changeHandler}
                        />
                  </div>
                  <button className={formStyles.containerLoginPage__entranceBtn}>
                        {loading ? "در حال ورود به پنل..." : "ورود "}

                  </button>
                  <p className={formStyles.containerLoginPage__accountCreation} >
                        <Link href="/register"> ایجاد حساب کاربری؟</Link>
                  </p>
            </form>
      )
}

export default LoginPage