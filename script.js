const chat = document.querySelector(".messages");
const inputText = document.querySelector("#newMessage");
const send = document.querySelector("#send");
const iniHr = document.querySelector("#last-seen");
const linkedin = document.querySelector("#user-info");

let date = new Date();
let hr = date.getHours();
if (hr < 10) hr = "0" + hr;
let min = date.getMinutes();
if (min < 10) min = "0" + min;
let flag = 0;
let randomMessage = "Olá  🖖";

const openLinkedin = () => {
  linkedin.addEventListener("click", () => {
    open("https://www.linkedin.com/in/abner-suhett-8bbb45175/");
  });
};

const Hour = () => {
  setInterval(() => {
    let date = new Date();
    hr = date.getHours();
    if (hr < 10) hr = "0" + hr;
    min = date.getMinutes();
    if (min < 10) min = "0" + min;
  }, 500);
};

const dateTime = () => {
  iniHr.innerHTML = `Hoje ${hr}:${min} `;
};

const firstMessage = setInterval(
  (first = () => {
    bootMessage(randomMessage);
    clearTime(firstMessage);
  }),
  2000
);

const scdMsg = () => {
  secondMsg = setInterval(
    (first = () => {
      switch (flag) {
        case 0:
          randomMessage = "Tive uma ideia incrível para um projeto! 😍";
          break;
        case 1:
          randomMessage =
            "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?";
          break;
        case 2:
          randomMessage = "Fechado! Conto com você! 🤩";
          break;
        case 3:
          randomMessage = "#boraCodar! 💜🚀";
          break;
        case 4:
          randomMessage =
            "Já ia me esquecendo.. Me siga no Linkedin clicando no perfil";
          break;
        case 5:
          randomMessage = "Abner Suhett foi o desenvolvedor do código.";
          break;
        case 6:
          randomMessage = `você pode acessar o repositório clicando aqui: <a style="color:#e1e1e6; text-decoration:none;" href="https://github.com/ruan-narici/boraCodar-UmChat">Github</a>`;
          break;
        case 7:
          randomMessage = "Agora eu estou cansado e estou indo dormir...";
          break;
        case 8:
          randomMessage = "*Mensagem Automática* Abner está dormindo.";
          break;
        default:
          randomMessage = "Não posso te responder agora";
          break;
      }
      flag++;
      bootMessage(randomMessage);
      rollScroll();
      clearTime(secondMsg);
    }),
    2000
  );
};

const bootMessage = (message) => {
  chat.innerHTML += ` <!-- RECEIVE -->  
    <div class="message"> 
    <div class="top"> Abner - ${hr}:${min}</div> 
    <div class="body">
    <span >${message}</span> 
    </div>
    </div> `;
};

const myMessage = (text) => {
  return ` <!-- SENT -->  
    <div class="message you"> 
    <div class="top"> Você - ${hr}:${min}</div> 
    <div class="body"> 
    <span >${text}</span> 
    </div> 
    </div> `;
};

const sentMessage = () => {
  send.addEventListener("click", (e) => {
    e.preventDefault();
    let x = inputText.value;
    if (inputText.value != "" && x.length <= 95) {
      chat.innerHTML += myMessage(inputText.value);
      rollScroll();
      clearMyMessage();
      scdMsg();
    }
  });
};

const clearTime = (id) => {
  clearInterval(id);
};

const clearMyMessage = () => {
  inputText.value = "";
};

const rollScroll = () => {
  const messages = document.querySelector(".messages");
  messages.lastElementChild.scrollIntoView();
};

//EXECUTE
Hour();
dateTime();
sentMessage();
openLinkedin();
