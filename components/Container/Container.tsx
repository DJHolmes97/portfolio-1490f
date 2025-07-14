import React from 'react'
import './main.css'

export const Container = ({ children }: { children?: React.ReactNode }) => {
  return <div className="container">{children}</div>
}