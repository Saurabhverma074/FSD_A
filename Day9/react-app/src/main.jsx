import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from './Marks.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={'Saurabh'} email={"sayfs@gmail.com"} mob={3526426541}/>
    <Marks m1 = {99} m2 = {99} m3 = {99} />
    <App name={'Saurabh'} email={"sayfs@gmail.com"} mob={3526426541}/>
    <Marks m1 = {99} m2 = {99} m3 = {99} />
  </StrictMode>,
)