import { useState } from "react";

export const GivePresents = (props) => {

    const [dictionary, setDictionary] = useState([...props.friends])
    const [name, setName] = useState('');


    const getRandomName = (max) => {
        const number = Math.floor(Math.random() * max);
        return dictionary[number]
    }


    const deliverGift = () => {
        if (dictionary.length <= 0) return

        let newName = getRandomName(dictionary.length);

        setName(newName);


        setDictionary(dictionary.filter((friend) => friend != newName));

    }

    console.log(dictionary);


    return (
        <>
            <h2>Iniciemos a entregar los regalos!!</h2>
            <h2>{name}</h2>
            <button onClick={deliverGift}>Entregado</button>
            <h4>Presiona entregado para continuar</h4>
        </>

    )

}