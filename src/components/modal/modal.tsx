import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate"
import { FoodData } from "../../interface/FoodData"
import './modal.css'

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void

}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)} />
        </>
    )
}


const Modal = ({ closeModal }: ModalProps) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const { mutate, isSuccess } = useFoodDataMutate()

    const submit = () => {

        if (!title || !price || !image) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData)

        setTitle("");
        setPrice(0);
        setImage("");
    }

    useEffect(() => {
        if (!isSuccess) {
            return
        } closeModal()
    }, [isSuccess])


    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <button className="btn-close" onClick={closeModal}>Fechar</button>
                <form action="" method="post" className="input-container">
                    <Input label="Nome" value={title} updateValue={setTitle} />
                    <Input label="Valor" value={price} updateValue={setPrice} />
                    <Input label="Imagem" value={image} updateValue={setImage} />
                </form>
                <button className="btn-secondary" onClick={submit}>Postar</button>
            </div>
        </div>
    );
}

export default Modal;