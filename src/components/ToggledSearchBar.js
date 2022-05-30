import React, { useState } from 'react';
import useEffectOnce from '../hooks/useEffectOnce';
import Logo from '../logo.svg'

function ToggledSearchBar() {
    const [inputText, setInputText] = useState("")
    // Guarda el texto que se verá en la consola cuando le hacemos clic al botón de enviar
    // Saves the text that will be seen in the console when we click the send button
    const [inputColor, setInputColor] = useState("default")
    // Especifica si el campo de entrada se debería ver en verde 
    // Specifies if the input field should be seen in green
    const [buttonActive, setButtonActive] = useState("left")
    // Especifica cuál botón está activo ahora mismo
    // Specifies which button is active at the moment
    const inactiveButton = "border-t-[0.09rem] drop-shadow-md bg-white mx-4 px-6 py-2 rounded-md"
    const activeButton = "drop-shadow-md bg-gradient-to-r from-[#1B7EC8] to-[#3FA9FB] mx-4 px-6 py-2 text-white rounded-md"
    // Las clases de los botones 
    // The button classes
    const handleSetButton = () => buttonActive === "left" ? setButtonActive("right") : setButtonActive("left")
    // Para cambiar cuál botón está activo 
    // To change which button is active
    const handleSendText = () => console.log(inputText)
    // Para que se vea el input en la consola cuando le hacemos clic al botón de enviar 
    // So that the input is seen in the console when we click on the send button
    const handleInput = e => {
        (e.target.value.toLowerCase().includes("a")) ? setInputColor("green") : setInputColor("default")
        // Si se incluye 'a' en el campo de entrada, se verá en verde
        // If 'a' is included in the input field, it will be displayed in green
        let text = e.target.value
        setInputText(text)
        // Guarda el texto para cuando usemos el botón de 'enviar'
        // Save the text for when we use the 'send' button
    }
    useEffectOnce(() => {
        console.log("Componente cargado correctamente")
    })
    // useEffectOnce es un custom hook. Con el modo dev de Create-React-App, useEffect() se activa 2 veces.
    // useEffectOnce is a custom hook. With Create-React-App's dev mode, useEffect() fires twice.
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
                <div className='flex flex-col justify-between items-center lg:pr-8'>
                    <input onChange={(e) => { handleInput(e) }} className={`rounded-sm border-2 my-3 ${inputColor === "green" && "bg-green-100"}`} />
                    <button onClick={() => { handleSendText() }} className='font-semibold my-3 drop-shadow-md bg-gradient-to-r from-[#1B7EC8] to-[#3FA9FB] mx-4 px-8 py-2 text-white rounded-md'>ENVIAR</button>
                </div>
            </div>
        </div>
    );
}

export default ToggledSearchBar;