'use client';

export default function Page() {
  const htmlCode = `
  <div class="login-container">
    <div class="character">
        <div class="head">
            <div id="face" class="face opened-eyes">
                <div class="nose"></div>
                <div class="nose-circle"></div>
                <div class="left-cheek"></div>
                <div class="right-cheek"></div>
                <div class="beak"></div>
                <div class="left-eye">
                    <div class="left-pupil"></div>
                </div>
                <div class="right-eye">
                    <div class="right-pupil"></div>
                </div>
            </div>
        </div>
        <div class="body"></div>
        <div class="belly"></div>
    </div>
    <form class="login-form">
        <div class="input-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required>
        </div>
        <div class="input-group">
            <label for="password">Password</label>
            <div class="password-wrapper">
                <input type="password" id="password" name="password" placeholder="Enter your password" required>
                <span id="toggle-password" class="toggle-icon">👁️</span>
            </div>
        </div>
        <button type="submit" class="login-btn" id="login-btn" disabled>Login</button>
        <div class="links">
            <a href="#" class="forgot-password">Forgot password?</a>
            <a href="#" class="register">Don't have an account?</a>
        </div>
    </form>
  </div>
  `;
  const cssCode = `
  .login-container {
      position: relative;
      top: 100px;
      height: 600px;
      width: 540px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      text-align: center;
      margin: auto;
      background-color: rgb(243, 255, 255);
      font-size: 10px;
  }

  .login-form {
      margin-top: 300px;
  }


  .head {
      width: 30%;
      height: 25%;
      background-color: black;
      border-radius: 50% / 55%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
  }

  .body {
      width: 35%;
      height: 40%;
      background-color: black;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 38%;
      transform: translate(-50%, -50%);
      z-index: 1;
  }

  .belly {
      width: 25%;
      height: 35%;
      background-color: white;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 38%;
      transform: translate(-50%, -50%);
      z-index: 2;
  }

  .face {
      width: 80%;
      height: 75%;
      background-color: white;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
  }

  .beak {
      width: 30%;
      height: 23%;
      background-color: orange;
      border-radius: 60% / 55%;
      border: 1px solid #d2580c;
      position: absolute;
      left: 50%;
      top: 65%;
      transform: translate(-50%, -50%);
  }

  .nose {
      width: 40%;
      height: 70%;
      background-color: black;
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
      clip-path: polygon(0% 0%, 100% 0%, 60% 100%, 40% 100%);
  }

  .nose-circle {
      width: 100%;
      height: 50%;
      background-color: black;
      border-radius: 60% / 55%;
      position: absolute;
      left: 50%;
      top: 20%;
      transform: translate(-50%, -50%);
  }

  .left-cheek {
      width: 35%;
      height: 50%;
      background-color: white;
      border-radius: 70% / 50%;
      position: absolute;
      left: 27%;
      top: 35%;
      rotate: -15deg;
      transform: translate(-50%, -50%);
  }

  .right-cheek {
      width: 36%;
      height: 50%;
      background-color: white;
      border-radius: 70% / 50%;
      position: absolute;
      left: 71%;
      top: 46%;
      rotate: 15deg;
      transform: translate(-50%, -50%);
  }

  .left-eye {
      width: 17%;
      height: 17%;
      background-color: black;
      border-radius: 50%;
      position: absolute;
      left: 23%;
      top: 40%;
      transform: translate(-50%, -50%);
  }

  .right-eye {
      width: 17%;
      height: 17%;
      background-color: black;
      border-radius: 50%;
      position: absolute;
      left: 78%;
      top: 40%;
      transform: translate(-50%, -50%);
  }

  .left-pupil, .right-pupil {
      width: 25%;
      height: 25%;
      background-color: white;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 60%;
      transform: translate(-50%, -50%);
  }

  @keyframes blink {
      0%, 90% {
          height: 17%;
      }
      95% {
          height: 3%;
      }
      100% {
          height: 17%;
      }
  }

  @keyframes rapid-blink {
      0%, 80% {
          height: 3%;
      }
      90% {
          height: 12%;
      }
      100% {
          height: 3%;
      }
  }

  .opened-eyes .left-eye,
  .opened-eyes .right-eye {
      animation: blink 3s infinite ease-in-out;
  }

  .closed-eyes .left-eye {
      height: 3%;
  }

  .closed-eyes .right-eye {
      height: 3%;
      animation: rapid-blink 4s infinite ease-in-out;
  }

  @keyframes nose-wiggle {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      25% { transform: translate(-50%, -50%) rotate(5deg); }
      50% { transform: translate(-50%, -50%) rotate(0deg); }
      75% { transform: translate(-50%, -50%) rotate(-5deg); }
      100% { transform: translate(-50%, -50%) rotate(0deg); }
  }

  .beak {
      animation: nose-wiggle 2s infinite ease-in-out;
  }

  .tilt-left {
      transform: translateX(-50%) rotate(-15deg);
  }

  .tilt-right {
      transform: translateX(-50%) rotate(18deg);
  }

  .input-group {
      margin-bottom: 15px;
      text-align: left;
      position: relative;
      z-index: 10;
  }

  .input-group label {
      display: block;
      font-size: 14px;
      margin-bottom: 5px;
  }

  .input-group input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
  }

  /* Password Input with Button */
  .password-wrapper {
      position: relative;
      display: flex;
      align-items: center;
  }

  .password-wrapper input {
      width: 100%;
      padding: 10px;
      padding-right: 40px; /* Space for icon */
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
  }

  .toggle-icon {
      position: absolute;
      right: 10px;
      cursor: pointer;
      font-size: 18px;
      color: gray;
  }

  .toggle-icon:hover {
      color: black;
  }

  .login-btn {
      width: 100%;
      padding: 10px;
      background: #a9d0e6; /* Light icy blue */
      border: none;
      color: white;
      font-size: 18px;
      border-radius: 5px;
      cursor: not-allowed;
      position: relative; /* For positioning the shimmer effect */
      overflow: hidden; /* Ensures the shimmer doesn't spill out of the button */
      transition: background 0.3s ease-in-out;
  }

  /* Shimmer effect on the disabled button */
  .login-btn:disabled {
      background: #a9d0e6; /* Icy background */
      cursor: not-allowed;
      box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.3); /* Frosty glow */
  }

  /* Icy shine animation */
  .login-btn:disabled::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, rgba(255, 255, 255, 0.7) 25%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.7) 75%);
      animation: shine 3s infinite linear;
      opacity: 0.2; /* Make the shimmer more subtle */
  }

  @keyframes shine {
      0% {
          transform: translateX(-150%);
      }
      100% {
          transform: translateX(150%);
      }
  }


  .login-btn.enabled {
      background: #28a745;
      cursor: pointer;
  }

  .links {
      margin-top: 30px;
      font-size: 14px;
  }

  .links a {
      text-decoration: none;
      color: #007bff;
      display: block;
      margin-bottom: 5px;
  }
`;
  const jsCode = `const head = document.querySelector(".head");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-btn");
const togglePasswordBtn = document.getElementById("toggle-password");
const penguinFace = document.getElementById("face");

function validateForm() {
    if (usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
        loginButton.classList.add("enabled");
        loginButton.removeAttribute("disabled");
    } else {
        loginButton.classList.remove("enabled");
        loginButton.setAttribute("disabled", "true");
    }
}

usernameInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

togglePasswordBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordBtn.textContent = "🫣";
        penguinFace.classList.remove("opened-eyes");
        penguinFace.classList.add("closed-eyes");
    } else {
        passwordInput.type = "password";
        togglePasswordBtn.textContent = "👁️";
        penguinFace.classList.remove("closed-eyes");
        penguinFace.classList.add("opened-eyes");
    }
});


usernameInput.addEventListener("focus", () => {
    head.classList.add("tilt-left");
});

passwordInput.addEventListener("focus", () => {
    head.classList.add("tilt-right");
});

usernameInput.addEventListener("blur", () => {
    head.classList.remove("tilt-left");
});

passwordInput.addEventListener("blur", () => {
    head.classList.remove("tilt-right");
});`;

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const copyAllToClipboard = () => {
    const fullCode = `<style>${cssCode}</style>\n${htmlCode}\n<script>${jsCode}</script>`;
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
        {/* Copy Code Buttons */}
        <button
          onClick={() => copyToClipboard(htmlCode)}
          className="mt-6 w-full p-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600"
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
          onClick={() => copyToClipboard(jsCode)}
          className="mt-2 w-full p-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600"
        >
          Copy JS
        </button>
        <button
          onClick={copyAllToClipboard}
          className="mt-2 w-full p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Copy All
        </button>
      </div>
    </div>
  );
}
