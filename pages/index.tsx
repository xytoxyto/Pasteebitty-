import { useState } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [outputHTML, setOutputHTML] = useState('');
  const [loading, setLoading] = useState(false);

  const generateHTML = async () => {
    setLoading(true);
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputText }),
    });
    const data = await response.json();
    setOutputHTML(data.html || 'Error generating HTML');
    setLoading(false);
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Pasteebitty</h1>
      <textarea
        className="w-full p-3 border rounded mb-4"
        rows={6}
        placeholder="Paste your mockup description here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={generateHTML}
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded"
      >
        {loading ? 'Generating...' : 'Generate Site'}
      </button>

      <div className="mt-8 p-4 border rounded bg-white">
        <h2 className="text-xl font-semibold mb-2">Live Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: outputHTML }} />
      </div>
    </main>
  );
}


Add main homepage
