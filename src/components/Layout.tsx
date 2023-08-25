import { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

type LayoutProp = {
  children: ReactNode
  title?: string
}
const Layout = ({ title = "PleasureBee", children }: LayoutProp) => {
  return (
    <div className="w-full flex h-screen">
      <Sidebar />
      <div className="w-full ml-16 md:ml-64">
        <Header title={title} />
        {
          children
        }
      </div>
    </div>
  )
}

export default Layout