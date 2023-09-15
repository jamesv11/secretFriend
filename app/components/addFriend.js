import { useState } from "react";

export const AddFriend = (props) => {


   

    const [form, setForm] = useState({
        friend: ""
    });

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
      
        setForm((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue
        }));
      }


    const onSubmit = (event) => {
        event.preventDefault()
        props.setFriends([...props.friends, form.friend])
      }

    return (
        <section>
            <form onSubmit={onSubmit}>
                <h2>Ingresa el nombre del amigo: </h2>
                <input type='text' name='friend'
                    placeholder='Juan...' onChange={handleInput}></input>
                <button type="submit">Submit</button>
            </form>
            <aside>
                <h2>Lista de participantes</h2>
                {props.friends.map((friend) => (
                    <p key={friend} >{friend}</p>
                ))}
            </aside>
            
        </section>
    )

}