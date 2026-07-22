import { useState } from "react";
import Signup from "./signUp";
import Signin from "./signIn";
import Home from "../pages/Home";

function Account() {
  const [page, setPage] = useState("sign_in");

  return (
    <>
      {page === "sign_up" && <Signup setPage={setPage} />}
      {page === "sign_in" && <Signin setPage={setPage} />}
      {page === "home" && <Home/>}

    </>
  );
}

export default Account;