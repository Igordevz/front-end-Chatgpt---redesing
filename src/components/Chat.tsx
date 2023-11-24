import { ContainerPage } from "@/app/style";
import Aside from "./aside";
import Image from "next/image";

import rec from "@/assets/rec.png";
import img from "@/assets/img.png";
import submit from "@/assets/submit.png";

import chatsImg from "@/assets/chats.png";
import chatgptLogo from "@/assets/chatgpt.png";
import compatible from "@/assets/star.png";
import limitations from "@/assets/IconSet.png";

export default function Application() {
  return (
    <ContainerPage>
      <Aside />
      <main>
        <div className="content-top">
          <Image alt="chatgpt" src={chatgptLogo} />
        </div>

        <div className="content-groups">
          <div className="group">
            <Image src={chatsImg} alt="chat" />
            <h1>Examples</h1>
            <div className="models">
              <p>"Explain quantum computing insimple terms"</p>
              <p>"Got any creative ideas for a 10year old's birthday?"</p>
              <p>"How do I make an HTTP requestin Javascript?"</p>
            </div>
          </div>
          <div className="group">
            <Image src={compatible} alt="chat" />
            <h1>Capabilities</h1>
            <div className="models">
              <p>Remembers what user saidearlier in the conversation.</p>
              <p>Allows user to provide follow-up corrections.</p>
              <p>Trained to decline inappropriate requests.</p>
            </div>
          </div>
          <div className="group">
            <Image src={limitations} alt="chat" />
            <h1>Limitations</h1>
            <div className="models">
              <p>May occasionally generate incorrect information.</p>
              <p>
                May occasionally produce harmful instructions or biased content.
              </p>
              <p>Limited knowledge of world andevents after 2021.</p>
            </div>
          </div>
        </div>

        <form>
          <div className="content-input">
            <input type="text" placeholder="Type message" />
            <div className="left">
              <Image alt="img" src={rec} />
              <Image alt="img" src={img} />
            </div>
            <div className="submit-img">
              <button>
                <Image alt="img" src={submit} />
              </button>
            </div>
          </div>
        </form>
      </main>
    </ContainerPage>
  );
}
