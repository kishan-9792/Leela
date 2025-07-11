function App() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Leela Ship Recycling</h1>
        <p className="text-gray-600">
          Yard visits by his excellence German Ambassador, Walter Johannes Lindner.
        </p>
        <div className="mt-6">
          <p className="font-medium">📞 +91 278 252 2111</p>
          <p>📧 info@leelaworldwide.com</p>
          <p>📍 Bhavnagar, Gujarat, India</p>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#"><img src="/facebook-icon.svg" alt="Facebook" /></a>
          <a href="#"><img src="/instagram-icon.svg" alt="Instagram" /></a>
          <a href="#"><img src="/linkedin-icon.svg" alt="LinkedIn" /></a>
        </div>
      </div>
    </div>
  );
}

export default App;