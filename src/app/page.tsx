/* eslint-disable @next/next/no-img-element */
"use client"

import {useState, useEffect} from "react";


export default function Home() {
  return (
   <>
      <main className='bg-bg-black-100 flex-1 w-screen h-screen flex items-center justify-center font-roboto'>
        <div className='flex gap-1 max-md:flex-col m-7 max-md:align-middle'>
          <img src='./bg.png'  width={282} height={425} className="rounded-md  max-md:h-[142px] max-md:w-[360px] max-sm:w-[290px]" />
          <form action="" className='flex w-[360px] h-[425px] bg-slate-100 rounded-xl gap-6 flex-col p-10 justify-between  max-md:h-[350px] max-sm:w-[290px]'>
            <h1 className='text-4xl font-bold mt-6 max-sm:'>
              Hotspot
            </h1>

            <div className='flex flex-col gap-2 mb-4'>
              <label className='font-sm font-normal'>Insira seu codigo de ativação</label>

              <input type="text" maxLength={8} placeholder='••••••••' className='className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-none sm:text-sm sm:leading-6"  pl-2  max-lg '/>

              <button className="flex w-full justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-150 hover:rounded-lg">
                Conectar
              </button>

            </div>
          </form>
        </div>
      </main>
   </>
  )
}
