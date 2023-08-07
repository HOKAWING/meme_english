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
        {/*https://getbootstrap.com/docs/5.3/forms/form-control/*/}
        <style jsx global>{`body { background: #EBD7FA;}`}</style>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div style={{margin:'20px 20px 20px 43px'}}>
              <Image src="/logo2.jpg" width={180} height={140} />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">用户名</span>
              <input type="text" className="form-control" aria-label="用户名"
                     aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">密码</span>
              <input type="text" className="form-control" aria-label="密码"
                     aria-describedby="basic-addon1"/>
            </div>

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
