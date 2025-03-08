'use client';

import { useState, useEffect } from 'react';
import { text } from 'stream/consumers';

export default function Page() {
  const [backgroundColor, setBackgroundColor] = useState('#111111');
  const [mainColor, setMainColor] = useState('#ffffff');


  const htmlCode = `<body>
    <div class="ring">
        <i style="--clr:#00ff0a;"></i>
        <i style="--clr:#ff0057;"></i>
        <i style="--clr:#fffd44;"></i>
        <div class="login">
          <h2>Login</h2>
          <div class="inputBx">
            <input type="text" placeholder="Username">
          </div>
          <div class="inputBx">
            <input type="password" placeholder="Password">
          </div>
          <div class="inputBx">
            <input type="submit" value="Sign in">
          </div>
          <div class="links">
            <a href="#">Forget Password</a>
            <a href="#">Signup</a>
          </div>
        </div>
    </div>
</body>`;
  const cssCode = `@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Quicksand", sans-serif;
}
body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: ${backgroundColor};
	width: 100%;
	overflow: hidden;
}
.ring {
	position: relative;
	width: 500px;
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.ring i {
	position: absolute;
	inset: 0;
	border: 2px solid #fff;
	transition: 0.5s;
}

.ring i:nth-child(1) {
	border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
	animation: animate 6s linear infinite;
}

.ring i:nth-child(2) {
	border-radius: 41% 44% 56% 59% / 38% 62% 63% 37%;
	animation: animate 4s linear infinite;
}

.ring i:nth-child(3) {
	border-radius: 41% 44% 56% 59% / 38% 62% 63% 37%;
	animation: animate2 10s linear infinite;
}

.ring:hover i {
	border: 6px solid var(--clr);
	filter: drop-shadow(0 0 20px var(--clr));
}

@keyframes animate {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

@keyframes animate2 {
	0% {
		transform: rotate(360deg);
	}
	100% {
		transform: rotate(0deg);
	}
}

.login {
	position: absolute;
	width: 300px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
}

.login h2 {
	font-size: 2em;
	color: ${mainColor};
}

.login .inputBx {
	position: relative;
	width: 100%;
}

.login .inputBx input {
	position: relative;
	width: 100%;
	padding: 12px 20px;
	background: transparent;
	border: 2px solid ${mainColor};
	border-radius: 40px;
	font-size: 1.2em;
	color: ${mainColor};
	box-shadow: none;
	outline: none;
}

.login .inputBx input[type="submit"] {
	width: 100%;
	background: #0078ff;
	background: linear-gradient(45deg, #ff357a, #fff172);
	border: none;
	cursor: pointer;
}

.login .inputBx input::placeholder {
	color: ${mainColor} / 0.75;
}

.login .links {
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
}

.login .links a {
	color: ${mainColor};
	text-decoration: none;
}
`;
  const jsCode = ``;

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const copyAllToClipboard = () => {
    const fullCode = `<style>${cssCode}</style>\n${htmlCode}`;
    copyToClipboard(fullCode);
  };


  return (
    <div className="flex h-screen p-6 pt-16">
      <div className="bg-white rounded-lg shadow-md w-full">
      <iframe
        className="w-full h-full border-none"
        sandbox="allow-scripts allow-same-origin"
        ref={(iframe) => {
          if (iframe) {
            const doc = iframe.contentDocument;
            if (doc) {
              doc.open();
              doc.write(`
                <html>
                  <head>
                    <style>${cssCode}</style>
                  </head>
                  <body>
                    ${htmlCode}
                    <script>${jsCode}</script>
                  </body>
                </html>
              `);
              doc.close();
            }
          }
        }}
      />
      </div>

      <div className="w-80 ml-4 bg-white shadow-md rounded-lg p-6">
        <div>
          <label htmlFor="background-color" className="block text-sm font-medium text-gray-700">
            Background Color
          </label>
          <input
            type="color"
            id="background-color"
            defaultValue={backgroundColor}
            className="mt-1 h-10 w-full p-1 border border-gray-300 rounded-md shadow-sm"
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="main-color" className="block text-sm font-medium text-gray-700">
            Main Color
          </label>
          <input
            type="color"
            id="main-color"
            defaultValue={mainColor}
            className="mt-1 h-10 w-full p-1 border border-gray-300 rounded-md shadow-sm"
            onChange={(e) => setMainColor(e.target.value)}
          />
        </div>
        <button
          onClick={() => copyToClipboard(htmlCode)}
          className="mt-10 w-full p-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600"
        >
          Copy HTML
        </button>
        <button
          onClick={() => copyToClipboard(cssCode)}
          className="mt-2 w-full p-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600"
        >
          Copy CSS
        </button>
        <button
          onClick={copyAllToClipboard}
          className="mt-2 w-full p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Copy All
        </button>
        <div className="mt-10 p-2 text-lg text-gray-500">Original source: <a href="https://medium.com/@mr.zouraiz1580/animated-login-form-html-css-d28ef649f54f" target="_blank" className="text-blue-500 underline">Medium</a></div>
      </div>
    </div>
  );
}
