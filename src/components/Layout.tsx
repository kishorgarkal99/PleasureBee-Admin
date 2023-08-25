import { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

type LayoutProp = {
  children: ReactNode
  title?: string
}
const Layout = ({ title = "PleasureBee", children }: LayoutProp) => {
  return (
    <div className="w-full h-screen flex bg-gray-100 ">
      <Sidebar />
      <>
        <Header title={title} />
        <div className="w-full ml-16 mt-20 md:ml-64">
          {
            children
          }
        </div>
      </>
    </div>
  )
}

export default Layout