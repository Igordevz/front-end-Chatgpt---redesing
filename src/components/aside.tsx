"use client"
import React from 'react'
import Image from "next/image";
import chat from "@/assets/ChatText.png";
import lixeira from "@/assets/lixeira.png";
import account from "@/assets/account.png";
import singout from "@/assets/SignOut.png";
import trash from "@/assets/trash.png";
import updates from "@/assets/updates.png";
import close from "@/assets/marca-cruzada.png"
import { useState } from "react";
import MenuItem from './menu';

export default function Aside() {

        const [recentChat, setRecentChat] = useState<any | undefined>([]);
        const [menu, setMenu ] = useState(false)
        function CreateChat() {
          const newChat = {
            name: "New chat",
            chat: [],
          };

          setRecentChat((preChat: any) => [...preChat, newChat]);

        }

        function ClearChat() {
          setRecentChat([]);
        }

        function removeChat(index: number) {
          setRecentChat((data: any) => {
            const updatedChats = [
              ...data.slice(0, index),
              ...data.slice(index + 1),
            ];

            return updatedChats;
          });
        }

  return (
    <>
    {menu? (
      <MenuItem state={{setMenu}}/>
    ) : (
      <aside>
      <div className="items-top">
        <button id='close-chat' onClick={() => setMenu(!menu)}>
          <Image src={close} alt='close'/>
          <h3>Fechar</h3>
        </button>
        <button id="create-chat" onClick={CreateChat}>
          + New chat
        </button>
        <div className="recent-chat">
          {recentChat?.map((data: any, index: any) => {
            return (
              <>
                <button>
                  <Image alt="chat" src={chat} />
                  {data?.name}
                  <Image
                    id="trash"
                    alt="trash"
                    onClick={() => removeChat(index)}
                    src={trash}
                    />
                </button>
              </>
            );
          })}
        </div>
      </div>
      <div className="items-bottom">
        <div className="information">
          <button onClick={ClearChat}>
            <Image alt="icon" src={lixeira} />
            <h1>Clear conversations</h1>
          </button>
        </div>
        <div className="information">
          <button>
            <Image alt="icon" src={account} />
            <h1>My account</h1>
          </button>
        </div>
        <div className="information">
          <button>
            <Image alt="icon" src={updates} />
            <h1>Updates & FAQ</h1>
          </button>
        </div>
        <div className="information">
          <button onClick={() => location.reload()}>
            <Image alt="icon" src={singout} />
            <h1>Log out</h1>
          </button>
        </div>
      </div>
    </aside>
    )}

  
                    </>
  );
}
