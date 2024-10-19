
import { useRef } from 'react'
import './App.css'
import { Advantage } from './components/ui/Advantage'
import { Characteristic } from './components/ui/Characteristic'
import { Form } from './components/ui/Form'
import { Hero } from './components/ui/Hero'
import { Review } from './components/ui/Review'
import { GallerySection } from './components/ui/GallerySection'
import { StoreFeatures } from './components/ui/StoreFeatures'
import { AdditionalAdvantages } from './components/ui/AdditionalAdvantages'

function App() {

  const formRef = useRef<HTMLDivElement>(null); 

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <>
      <main >
        <Hero scrollToForm={scrollToForm}/>
        <GallerySection />
        <Advantage />
        <Characteristic />
        <AdditionalAdvantages />
        <Review />
        <StoreFeatures />
        <Form ref={formRef}/>
      </main>
    </>
  )
}

export default App
