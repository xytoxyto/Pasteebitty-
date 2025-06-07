
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Pasteebitty
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Instantly turn mockups into real websites. Just paste it. Build it. Ship it.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/builder" className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition">
            Launch the Builder
          </a>
          <a href="/templates" className="border border-black text-black px-6 py-3 rounded-full text-lg hover:bg-black hover:text-white transition">
            Browse Templates
          </a>
        </div>
      </div>
    </div>
  );
}
