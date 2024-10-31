"use client"
import { useEffect } from "react"
export default function error({error,reset}) {
    useEffect(()=>{
console.log(error)
    },[error])
  return (
    <div className="text-center mt-10">
      <h1 className="">Something went wrong.Please ty again later.</h1>
      <button className="hover:text-amber-600" onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
