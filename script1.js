const buttonStart = document.querySelector(".start");
const buttonsend = document.querySelector(".send");
let result;
const html5Qrcode = new Html5Qrcode("reader");
const h1 = document.querySelector("h1");

let arr = [];

// buttonStart.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (navigator.mediaDevices.getUserMedia()) {
//     console.log(navigator.mediaDevices.getUserMedia());
//     h1.textContent = "Hiuhiu";
//   } else {
//     h1.textContent = "noooo :(";
//   }
// });

buttonStart.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      // audio: false,
    });
    h1.textContent = "Hiuhiu";
    console.log("Kato");
  } catch (error) {
    h1.textContent = "noooo :(";
  }
});

// h1.textContent = "Hiuhiu";

// buttonStart.addEventListener("click", (e) => {
//   e.preventDefault();
//   const qrCodeSuccessCallback = (decodedText, decodedResult) => {
//     if (decodedText) {
//       document.getElementById("show").style.display = "block";
//       document.getElementById("result").textContent = decodedText;
//       console.log(decodedText);
//       // click.addEventListener("click", (e) => {
//       // e.preventDefault();

//       // });
//       result = decodedText;
//       console.log(result);
//       html5Qrcode.stop();
//     }
//   };
//   const config = { fps: 10, qrbox: { width: 250, height: 250 } };
//   html5Qrcode.start(
//     { facingMode: "environment" },
//     config,
//     qrCodeSuccessCallback
//   );

//   // h1.textContent = "Hiuhiu";
// });

buttonsend.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(result);

  axios
    .post("https://jsonplaceholder.typicode.com/users", {
      name: result,
      //   username: username.value,
      //   email: email.value,
    })
    .then((res) => {
      //   handler(res);
      console.log(res);
      // arr.push(res.data.name);
      // console.log(arr);
    })
    .catch((rej) => {
      console.log(rej);
    });

  console.log(arr);
});

// console.log(arr);
// const qrCodeSuccessCallback = (decodedText, decodedResult) => {
//   if (decodedText) {
//     document.getElementById("show").style.display = "block";
//     document.getElementById("result").textContent = decodedText;
//     console.log(decodedText);
//     html5Qrcode.stop();
//   }
// };
// const config = { fps: 10, qrbox: { width: 250, height: 250 } };
// html5Qrcode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
