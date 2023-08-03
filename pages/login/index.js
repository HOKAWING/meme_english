import InputField from "../../components/InputField";
import InputDate from "../../components/InputDate";
import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css'
const bg = require("../../public/background.jpg");

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const {
    register,
    unregister,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onTouched"
  });

  async function onFormSubmit(data) {
    console.log('data: ', data);
    setError(null);
  }

  return (
      <>
        <style jsx global>{`body { background: #EBD7FA;}`}</style>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div style={{margin:'20px 20px 20px 43px'}}>
              <Image src="/logo.jpg" width={204} height={140} />
            </div>
            <InputField
              type="username"
              name="username"
              label="用戶名"
              style={{justifyContent: 'center',margin:'5px'}}
              error={errors.username && errors.username.message}
              {...register("username", {
                required: "請輸入用戶名",
              })}
            />
            <InputField
              type="password"
              name="password"
              label="密碼"
              style={{justifyContent: 'center',margin:'5px 0px 5px 20px'}}
              error={errors.password && errors.password.message}
              {...register("password", {
                required: "請輸入密碼",
              })}
            />

            {error && (
              <p className="w-full rounded-sm text-center bg-red-200 border border-red-500 text-red-500">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="mt-3 disabled:opacity-30 bg-primary hover:bg-primary_hover w-full p-1 border-0 rounded-md text-white text-base m-auto px-2"
              style={{display: 'flex', justifyContent: 'center',}}
            >
              登入
            </button>

          </form>
        </div>
      </>
  );
}
