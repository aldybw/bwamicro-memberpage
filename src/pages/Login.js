import { useEffect } from "react";

import Footer from "parts/Footer";
import Header from "parts/Header";
import LoginForm from "parts/LoginForm";

export default function Login() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="container mx-auto pt-10">
        <Header onLight></Header>
      </section>
      <section className="container mx-auto pt-10">
        <LoginForm></LoginForm>
      </section>
      <section className="mt-24 bg-indigo-1000 py-12">
        <Footer></Footer>
      </section>
    </>
  );
}
