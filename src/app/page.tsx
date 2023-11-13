/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function Home() {
  return (
   <>
      <main className='bg-bg-black-100 h-screen w-screen flex items-center justify-center font-roboto'>
        <form action="" className='flex w-[645px] bg-slate-100 rounded-xl gap-6 items-center'>
          
          <img 
            src="/bg.png" 
            alt=""
            className='max-md:w-[360p] max-md:h-[142px]'
          />

          <section className='bg-slate-500 h-[283px] w-[300px] flex flex-col justify-between'>
            <h1 className='text-4xl font-bold'>
              Hotspot
            </h1>

            <div className='flex flex-col gap-2'>
              <label className='font-sm font-normal'>Insira seu cédigo de ativação</label>

              <input type="text" maxLength={8} placeholder='••••••••' className='className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-none sm:text-sm sm:leading-6"  pl-2  max-lg '/>

              <button className="flex w-full justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-150 hover:rounded-lg">
                Conectar
              </button>

            </div>
          </section>
        </form>
      </main>
   </>
  )
}
