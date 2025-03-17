import React, { ReactNode } from 'react'

const AuthLayout = ({ children }: {children: ReactNode} ) => {
  return (
    <main className="flex min-h-screeen items-center justify-center bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat px-4 py-10">
        <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px sm:px-8">
        <div className='flex items-center justify-between gap-2'></div>

        {children}
        </section>
        

        
    </main>
  )
}

export default AuthLayout