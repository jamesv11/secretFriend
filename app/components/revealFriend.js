import { useState } from "react";

export const RevealFriend = (props) => {

    const [dictionary, setDictionary] = useState([...props.friends])
    const [name, setName] = useState('');


    const getRandomName = (max) => {
        const number = Math.floor(Math.random() * max);
        return dictionary[number]
    }


    const nextName = () => {
        if(dictionary.length <= 0 ) return

        let newName = getRandomName(dictionary.length);

        setName(newName);


        setDictionary(dictionary.filter((friend) => friend != newName));

    }

    console.log(dictionary);


    return (
        <>
            <button onClick={nextName}>Revelar</button>

            <h2>{name}</h2>

            <h3>cuentas con dos segundos para visualizar el nombre!</h3>
        </>

    )

}