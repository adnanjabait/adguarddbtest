
import * as React from "react";
import { useSearchParams } from 'next/navigation'


function Register(request) {
  const searchParams = useSearchParams()
  console.log(searchParams);
  return (
    <></>
  );
}

export default Register;