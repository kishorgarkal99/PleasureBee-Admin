import {ReactNode} from 'react'

type LayoutProp = {
    children:ReactNode
}
const Layout = ({children}:LayoutProp) => {
  return (
    <main className="w-full h-4/5 flex justify-center items-center">
    {
        children
    }
  </main>
  )
}

export default Layout