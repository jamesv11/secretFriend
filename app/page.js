'use client';

import { useState } from "react";
import { AddFriend } from "./components/addFriend";
import { RevealFriend } from "./components/revealFriend";
import { GivePresents } from "./components/givePresents";


export default function Home() {

  const [friends, setFriends] = useState([]);

  const [play, setPlay] = useState(false);


  const onPlay = () => {

    console.log('hola');
    setPlay((previousState) => previousState = true)
  }

  return (
    <>
      <header>

        <h1>Secret friend</h1>

      </header>

      <main>
        <AddFriend friends={friends} setFriends={setFriends} ></AddFriend>

        <button disabled={friends.length <= 0} onClick={onPlay}>Jugar</button>
      </main>

      <section>

        {play && <RevealFriend friends={friends} ></RevealFriend>}

      </section>


      <section>
        <GivePresents friends={friends}  ></GivePresents>

      </section>
    </>
  )
}
