"use client";
import { FormEvent } from "react";

export default function Home() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    fetch("http://192.168.8.186:3000/form/submit", {
      method: "POST",
      body: formData,
      credentials:"include"
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <h1>Home</h1>
      <form
        action=""
        method="post"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="file" name="file" id="file" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
