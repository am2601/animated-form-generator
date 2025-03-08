'use client';

import { useState } from 'react';

export default function Page() {
  const [backgroundColor, setBackgroundColor] = useState('#1f293a');
  const [mainColor, setMainColor] = useState('#00eeff');

  const htmlCode = `<body>

    <div class="container">
        <div class="login-box">
            <h2>Login</h2>
            <form action="#">
                <div class="input-box">
                    <input type="email" required>
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <input type="password" required>
                    <label>Password</label>
                </div>
                <div class="forgot-pass">
                    <a href="#">Forgot your password?</a>
                </div>
                <button type="submit" class="btn">Login</button>
                <div class="signup-link">
                    <a href="#">Signup</a>
                </div>
            </form>
        </div>

        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
        <span style="--i:4;"></span>
        <span style="--i:5;"></span>
        <span style="--i:6;"></span>
        <span style="--i:7;"></span>
        <span style="--i:8;"></span>
        <span style="--i:9;"></span>
        <span style="--i:10;"></span>
        <span style="--i:11;"></span>
        <span style="--i:12;"></span>
        <span style="--i:13;"></span>
        <span style="--i:14;"></span>
        <span style="--i:15;"></span>
        <span style="--i:16;"></span>
        <span style="--i:17;"></span>
        <span style="--i:18;"></span>
        <span style="--i:19;"></span>
        <span style="--i:20;"></span>
        <span style="--i:21;"></span>
        <span style="--i:22;"></span>
        <span style="--i:23;"></span>
        <span style="--i:24;"></span>
        <span style="--i:25;"></span>
        <span style="--i:26;"></span>
        <span style="--i:27;"></span>
        <span style="--i:28;"></span>
        <span style="--i:29;"></span>
        <span style="--i:30;"></span>
        <span style="--i:31;"></span>
        <span style="--i:32;"></span>
        <span style="--i:33;"></span>
        <span style="--i:34;"></span>
        <span style="--i:35;"></span>
        <span style="--i:36;"></span>
        <span style="--i:37;"></span>
        <span style="--i:38;"></span>
        <span style="--i:39;"></span>
        <span style="--i:40;"></span>
        <span style="--i:41;"></span>
        <span style="--i:42;"></span>
        <span style="--i:43;"></span>
        <span style="--i:44;"></span>
        <span style="--i:45;"></span>
        <span style="--i:46;"></span>
        <span style="--i:47;"></span>
        <span style="--i:48;"></span>
        <span style="--i:49;"></span>
    </div>

</body>`;
  const cssCode = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: ${backgroundColor};
}

.container {
    position: relative;
    width: 256px;
    height: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container span {
    position: absolute;
    left: 0;
    width: 32px;
    height: 6px;
    background: #2c4766;
    border-radius: 8px;
    transform-origin: 128px;
    transform: scale(2.2) rotate(calc(var(--i) * (360deg / 50)));
    animation: animateBlink 3s linear infinite;
    animation-delay: calc(var(--i) * (3s / 50));
}

@keyframes animateBlink {
    0% {
        background: ${mainColor};
    }

    25% {
        background: #2c4766;
    }
}

.login-box {
    position: absolute;
    width: 400px;
    /* background: red; */
}

.login-box form {
    width: 100%;
    padding: 0 50px;
}

h2 {
    font-size: 2em;
    color: ${mainColor};
    text-align: center;
}

.input-box {
    position: relative;
    margin: 25px 0;
}

.input-box input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: 2px solid #2c4766;
    outline: none;
    border-radius: 40px;
    font-size: 1em;
    color: #fff;
    padding: 0 20px;
    transition: .5s ease;
}

.input-box input:focus,
.input-box input:valid {
    border-color: ${mainColor};
}

.input-box label {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    font-size: 1em;
    color: #fff;
    pointer-events: none;
    transition: .5s ease;
}

.input-box input:focus~label,
.input-box input:valid~label {
    top: 1px;
    font-size: .8em;
    background: #1f293a;
    padding: 0 6px;
    color: ${mainColor};
}

.forgot-pass {
    margin: -15px 0 10px;
    text-align: center;
}

.forgot-pass a {
    font-size: .85em;
    color: #fff;
    text-decoration: none;
}

.forgot-pass a:hover {
    text-decoration: underline;
}

.btn {
    width: 100%;
    height: 45px;
    background: ${mainColor};
    border: none;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 1em;
    color: #1f293a;
    font-weight: 600;
}

.signup-link {
    margin: 20px 0 10px;
    text-align: center;
}

.signup-link a {
    font-size: 1em;
    color: ${mainColor};
    text-decoration: none;
    font-weight: 600;
}

.signup-link a:hover {
    text-decoration: underline;
}`;
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
        {/* <button
          onClick={() => copyToClipboard(jsCode)}
          className="mt-2 w-full p-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600"
        >
          Copy JS
        </button> */}
        <button
          onClick={copyAllToClipboard}
          className="mt-2 w-full p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Copy All
        </button>
        <div className="mt-10 p-2 text-lg text-gray-500">Original source: <a href="https://codehalweb.com/creative-animated-login-form/" target="_blank" className="text-blue-500 underline">Codehalweb</a></div>
      </div>
    </div>
  );
}
