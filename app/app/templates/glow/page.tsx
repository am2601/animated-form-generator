'use client';

import { useState, useEffect } from 'react';

const lightenColor = (hex: string, factor: number) => {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  r = Math.min(255, Math.round(r * factor));
  g = Math.min(255, Math.round(g * factor));
  b = Math.min(255, Math.round(b * factor));
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

export default function Page() {
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [mainColor, setMainColor] = useState('#191919');
  const [textColor, setTextColor] = useState('#ffffff');
  const [switchColor, setSwitchColor] = useState('#333333');
  const [glowColor, setGlowColor] = useState('#00f7ff');

  useEffect(() => {
    setSwitchColor(lightenColor(mainColor, 1.5));
  }, [mainColor]);

  const htmlCode = `<body>
<div class="login-light"></div>
<div class="login-box">
    <form action="#">
        <input type="checkbox" class="input-check" id="input-check" />
        <label for="input-check" class="toggle">
            <span class="text off">off</span>
            <span class="text on">on</span>
        </label>
        <div class="light"></div>

        <h2>Login</h2>
        <div class="input-box">
            <span class="icon">
                <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
            <div class="input-line"></div>
        </div>
        <div class="input-box">
            <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Password</label>
            <div class="input-line"></div>
        </div>
        <div class="remember-forgot">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <div class="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
        </div>
    </form>
</div>

<script
    type="module"
    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>`;
  const cssCode = `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Poppins", sans-serif;
}

body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: ${backgroundColor};
	overflow: hidden;
}

.login-box {
	position: relative;
	width: 400px;
	height: 450px;
	background: ${mainColor};
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}

h2 {
	font-size: 2em;
	color: ${textColor};
	text-align: center;
	transition: 0.5s ease;
}

.input-check:checked ~ h2 {
	color: ${glowColor};
	text-shadow: 0 0 15px ${glowColor}, 0 0 30px ${glowColor};
}

.input-box {
	position: relative;
	width: 310px;
	margin: 30px 0;
}

.input-box .input-line {
	position: absolute;
	bottom: -2px;
	left: 0;
	width: 100%;
	height: 2.5px;
	background: ${textColor};
	transition: 0.5s ease;
}

.input-check:checked ~ .input-box .input-line {
	background: ${glowColor};
	box-shadow: 0 0 10px ${glowColor};
}

.input-box label {
	position: absolute;
	top: 50%;
	left: 5px;
	transform: translateY(-50%);
	font-size: 1em;
	color: ${textColor};
	pointer-events: none;
	transition: 0.5s ease;
}

.input-box input:focus ~ label,
.input-box input:valid ~ label {
	top: -5px;
}

.input-check:checked ~ .input-box label {
	color: ${glowColor};
	text-shadow: 0 0 10px ${glowColor};
}

.input-box input {
	width: 100%;
	height: 50px;
	background: transparent;
	border: none;
	outline: none;
	font-size: 1em;
	color: ${textColor};
	padding: 0 35px 0 5px;
	transition: 0.5s ease;
}

.input-check:checked ~ .input-box input {
	color: ${glowColor};
	text-shadow: 0 0 5px ${glowColor};
}

.input-box .icon {
	position: absolute;
	right: 8px;
	color: ${textColor};
	font-size: 1.2em;
	line-height: 57px;
	transition: 0.5s ease;
}

.input-check:checked ~ .input-box .icon {
	color: ${glowColor};
	filter: drop-shadow(0 0 5px ${glowColor});
}

.remember-forgot {
	color: ${textColor};
	font-size: 0.9em;
	margin: -15px 0 15px;
	display: flex;
	justify-content: space-between;
	transition: 0.5s ease;
}

.input-check:checked ~ .remember-forgot {
	color: ${glowColor};
	text-shadow: 0 0 10px ${glowColor};
}

.remember-forgot label input {
	accent-color: ${textColor};
	margin-right: 3px;
	transition: 0.5s ease;
}

.input-check:checked ~ .remember-forgot label input {
	accent-color: ${glowColor};
}

.remember-forgot a {
	color: ${textColor};
	text-decoration: none;
	transition: color 0.5s ease;
}

.remember-forgot a:hover {
	text-decoration: underline;
}

.input-check:checked ~ .remember-forgot a {
	color: ${glowColor};
}

button {
	width: 100%;
	height: 40px;
	background: ${textColor};
	border: none;
	outline: none;
	border-radius: 40px;
	cursor: pointer;
	font-size: 1em;
	color: ${mainColor};
	font-weight: 500;
	transition: 0.5s ease;
}

.input-check:checked ~ button {
	background: ${glowColor};
	box-shadow: 0 0 15px ${glowColor}, 0 0 15px ${glowColor};
}

.register-link {
	color: ${textColor};
	font-size: 0.9em;
	text-align: center;
	margin: 25px 0 10px;
	transition: 0.5s ease;
}

.input-check:checked ~ .register-link {
	color: ${glowColor};
	text-shadow: 0 0 10px ${glowColor};
}

.register-link p a {
	color: ${textColor};
	text-decoration: none;
	font-weight: 600;
	transition: color 0.5s ease;
}

.register-link p a:hover {
	text-decoration: underline;
}

.input-check:checked ~ .register-link p a {
	color: ${glowColor};
}

.login-light {
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 500px;
	height: 10px;
	background: ${glowColor};
	border-radius: 20px;
}

.light {
	position: absolute;
	top: -200%;
	left: 0;
	width: 100%;
	height: 950px;
	background: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 0.3) -50%,
		rgba(255, 255, 255, 0) 90%
	);
	clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%);
	pointer-events: none;
	transition: 0.5s ease;
}

.input-check:checked ~ .light {
	top: -90%;
}

.toggle {
	position: absolute;
	top: 20px;
	right: -70px;
	width: 60px;
	height: 120px;
	background: ${mainColor};
	border-radius: 10px;
}

.toggle::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 10px;
	height: 80%;
	background: #000;
}

.toggle::after {
	content: "";
	position: absolute;
	top: 5px;
	left: 50%;
	transform: translateX(-50%);
	width: 45px;
	height: 45px;
	background: ${switchColor};
	border: 2px solid ${mainColor};
	border-radius: 10px;
	cursor: pointer;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	transition: 0.5s ease;
}

.input-check:checked ~ .toggle::after {
	top: 65px;
}

.input-check {
	position: absolute;
	right: -70px;
	z-index: 1;
	opacity: 0;
}

.toggle .text {
	position: absolute;
	top: 17px;
	left: 50%;
	transform: translateX(-50%);
	color: ${textColor};
	font-size: 1em;
	z-index: 1;
	text-transform: uppercase;
	pointer-events: none;
	transition: 0.5s ease;
}

.toggle .text.off {
	opacity: 1;
}

.input-check:checked ~ .toggle .text.off {
	top: 76px;
	opacity: 0;
}

.toggle .text.on {
	opacity: 0;
}

.input-check:checked ~ .toggle .text.on {
	top: 76px;
	opacity: 1;
	color: ${glowColor};
	text-shadow: 0 0 15px ${glowColor}, 0 0 30px ${glowColor}, 0 0 45px ${glowColor}, 0 0 60px ${glowColor};
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
        <div className="mt-2">
          <label htmlFor="text-color" className="block text-sm font-medium text-gray-700">
            Text Color
          </label>
          <input
            type="color"
            id="text-color"
            defaultValue={textColor}
            className="mt-1 h-10 w-full p-1 border border-gray-300 rounded-md shadow-sm"
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="glow-color" className="block text-sm font-medium text-gray-700">
            Glow Color
          </label>
          <input
            type="color"
            id="glow-color"
            defaultValue={glowColor}
            className="mt-1 h-10 w-full p-1 border border-gray-300 rounded-md shadow-sm"
            onChange={(e) => setGlowColor(e.target.value)}
          />
        </div>
        {/* Copy Code Buttons */}
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
        <div className="mt-10 p-2 text-lg text-gray-500">Original source: <a href="https://codehalweb.com/login-form-animation-css/" target="_blank" className="text-blue-500 underline">Codehalweb</a></div>
      </div>
    </div>
  );
}
