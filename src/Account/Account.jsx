import { useState } from "react";
import Signup from "./signUp";
import Signin from "./signIn";

function Account() {
  const [page, setPage] = useState("sign_in");

  return (
    <>
      {page === "sign_up" && <Signup setPage={setPage} />}
      {page === "sign_in" && <Signin setPage={setPage} />}
    </>
  );
}

export default Account;