
import * as React from "react";
import { NextRequest } from "next/server";
import { useSearchParams } from 'next/navigation'

function Release() {
  const searchParams = useSearchParams()
  //console.log(requ)
  const req = NextRequest;
  console.log(req)
  return (
    <></>
  );
}

export default Release;