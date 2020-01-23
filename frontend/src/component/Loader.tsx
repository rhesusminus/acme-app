import React, { FC } from 'react'
import '../style/Loader.css'

export const Loader: FC = () => (
  <div className="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)
