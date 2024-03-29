import { useState } from 'react'
import './App.css'
import Card from './components/card/card'
import { useFoodData } from './hooks/useFoodData'
import Modal from './components/modal/modal'


function App() {
  const { data } = useFoodData()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }


  return (
    <div className='container'>
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData => <Card
          title={foodData.title}
          image={foodData.image}
          price={foodData.price} />)}
      </div>
      {isModalOpen && <Modal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Cadastrar</button>
    </div>
  )
}

export default App
