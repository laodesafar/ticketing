import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

export default function signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    await doRequest();
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          onSubmit={onSubmit}
          className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
        >
          <h1 className="mb-8 text-3xl text-center">Sign In</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          {errors}

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Sign In
          </button>
        </form>

        <div className="text-grey-dark mt-6">
          Dont have'nt an account?
          <Link href="signup">
            <a className="no-underline border-b border-blue text-blue">
              Sign Up
            </a>
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
