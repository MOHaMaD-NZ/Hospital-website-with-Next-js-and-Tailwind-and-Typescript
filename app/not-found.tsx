import React from 'react'
import Link from 'next/link'
const notFound = () => {
  return (
    <div>
        <div className=" bg-gradient-to-t from-red-300 to-[#81A8E0] min-w-[100%] h-[30rem] mt-[5rem] mx-auto rounded text-white">
          <div className="flex flex-col space-y-2 justify-center items-center">
          <h1 className="text-white text-center mx-auto text-[1.5rem]">404</h1>
          <div className="text-white text-center mx-auto text-[1.5rem]">متاسفانه صفحه مورد نظر پیدا نشد !</div>
          <Link href="/" >
            <button className="bg-white p-2 text-red-300 rounded">بازگشت به صفحه نخست</button>
          </Link>
          </div>
        </div>
    </div>
  )
}

export default notFound