import React, { useState } from 'react';
import useEffectOnce from '../hooks/useEffectOnce';
import Logo from '../logo.svg'

function ToggledSearchBar() {
    const [inputText, setInputText] = useState("")
    // guarda el texto que se verá en el console cuando le damos al botón de enviar
    const [inputColor, setInputColor] = useState("default")
    // especifica si el campo de input se debería ver en verde 
    const [buttonActive, setButtonActive] = useState("left")
    // especifica cuál botón está activo ahora mismo
    const inactiveButton = "border-t-[0.09rem] drop-shadow-md bg-white mx-4 px-6 py-2 rounded-md"
    const activeButton = "drop-shadow-md bg-gradient-to-r from-[#1B7EC8] to-[#3FA9FB] mx-4 px-6 py-2 text-white rounded-md"
    // las clases de los botones 
    const handleSetButton = () => buttonActive === "left" ? setButtonActive("right") : setButtonActive("left")
    // para cambiar cuál botón está activo 
    const handleSendText = () => console.log(inputText)
    // para que se vea el input en el console cuando le damos al botón de enviar 
    const handleInput = e => {
        (e.target.value.toLowerCase().includes("a")) ? setInputColor("green") : setInputColor("default")
        // si se incluye 'a' en el input el campo de input se verá en verde
        let text = e.target.value
        setInputText(text)
        // guarda el texto para cuando usemos el botón de 'enviar'
    }
    useEffectOnce(() => {
        console.log("Componente cargado correctamente")
    })

    // useEffectOnce es un custom hook. Con el modo dev de Create-React-App useEffect() activa 2 veces

    return (
        <div className='w-[100vw] flex flex-col items-center mt-20'>
            <div className='max-h-[10%] flex justify-center items-center'>
                <div className='flex justify-between'>
                    <span className='border-r-2'><button onClick={() => { handleSetButton() }} className={buttonActive === "right" ? inactiveButton : activeButton}>{(buttonActive === "left" && "Active") || "Inactive"}</button></span>
                    <span><button onClick={() => { handleSetButton() }} className={buttonActive === "left" ? inactiveButton : activeButton}>{(buttonActive === "right" && "Active") || "Inactive"}</button></span>
                </div>
            </div>
            <div className='border-t-[0.09rem] max-h-[90%] mt-3 align-middle bg-white h-[25rem] sm:w-[40rem] w-[20rem] max-w-[90%] drop-shadow-md rounded-md flex flex-col justify-center lg:flex-row lg:justify-around lg:items-center'>
                <div className='flex justify-center items-center'>
                    <img className="h-[15rem]" alt="react-logo" src={Logo} />
                </div>
                <div className='flex flex-col justify-between items-center pr-8'>
                    <input onChange={(e) => { handleInput(e) }} className={`border-2 my-3 ${inputColor === "green" && "bg-green-100"}`} />
                    <button onClick={() => { handleSendText() }} className='font-semibold my-3 drop-shadow-md bg-gradient-to-r from-[#1B7EC8] to-[#3FA9FB] mx-4 px-8 py-2 text-white rounded-md'>ENVIAR</button>
                </div>
            </div>
        </div>


    );
}

export default ToggledSearchBar;