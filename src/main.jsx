import { createRoot } from 'react-dom/client'
import Header from "./Header"
import Content from "./Content"
const root = createRoot(document.getElementById('root'))
root.render(
  <div className='container'>
    <Header />
    <Content />
  </div>
)