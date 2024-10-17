
import { useRef } from 'react'
import './App.css'
import { Advantage } from './components/ui/Advantage'
import { Characteristic } from './components/ui/Characteristic'
import { Form } from './components/ui/Form'
import { Hero } from './components/ui/Hero'
import { Review } from './components/ui/Review'

function App() {

  const formRef = useRef<HTMLDivElement>(null); // Создание рефа для формы

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <>
      <main >
        <Hero scrollToForm={scrollToForm}/>
        <Advantage />
        <Characteristic />
        <Review />
        <Form ref={formRef}/>
      </main>
    </>
  )
}

export default App
