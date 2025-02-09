'use client';

import { useState } from 'react';

export default function Page() {
  const [backgroundColor, setBackgroundColor] = useState('#3b82f6');

  const htmlCode = `<div><button style="background-color: ${backgroundColor};">Click Me</button></div>`;
  const cssCode = ``;
  const jsCode = ``;

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const copyAllToClipboard = () => {
    const fullCode = `<style>${cssCode}</style>\n${htmlCode}\n<script>${jsCode}</script>`;
    copyToClipboard(fullCode);
  };


  return (
    <div className="flex h-screen p-6 pt-16">
      <div className="p-6 bg-white rounded-lg shadow-md w-full">
        <div
          dangerouslySetInnerHTML={{
            __html: `<style>${cssCode}</style>${htmlCode}<script>${jsCode}</script>`,
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
