import React from "react"
import { css } from "@emotion/core"
import dubai from '../../static/img/dubai.jpg'

const back = css`
  background: #fa7ea8;
  background: url(${dubai});
  background-size: cover;
  filter: blur(8px);
`

const bgClear = css`
  background-color: rgba(0, 0, 0, 0.4);
`


export default () => (
   <div className="contanair">
    <header
      className="flex flex-col justify-center items-center w-screen h-screen text-black"
    >
      <div className="z-50 flex flex-col justify-center items-center px-12 py-8">
        <h1 className="text-white text-center text-md font-bold uppercase">
          Koji Ishimoto
        </h1>
        <p className="my-2 text-gray-800 text-2xl font-normal uppercase">
          Frontend Engineer
        </p>
        <button
          className="bg-blue hover:bg-blue-dark text-2xl font-bold py-2 px-4 rounded-full"
        >
          <a className="no-underline text-white" href="/">今すぐ試す</a>
        </button>
      </div>
      <div css={back} className="absolute w-full h-full"></div>
      <div css={bgClear} className="bg-orange-800 opacity-50 absolute w-full h-full"></div>
    </header>
  </div>
)