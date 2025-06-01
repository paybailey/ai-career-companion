
import React, { useState } from 'react';

export default function CareerCompanion() {
  const [step, setStep] = useState(1);
  const [major, setMajor] = useState('');
  const [interests, setInterests] = useState([]);
  const [likes, setLikes] = useState([]);
  const [result, setResult] = useState('');

  const interestOptions = ['Research', 'Marketing', 'Design', 'Product', 'Data Analysis', 'Strategy', 'AI'];
  const likeOptions = ['Data', 'Design', 'Business Strategy'];

  const handleSelect = (value, list, setter) => {
    if (list.includes(value)) {
      setter(list.filter((item) => item !== value));
    } else {
      setter([...list, value]);
    }
  };

  const handleContinue = () => {
    if (step === 3) {
      const keywords = [...interests, ...likes].join(' ').toLowerCase();
      if (keywords.includes('strategy')) {
        setResult('You’re best suited for a Strategy/Product Ops role.');
      } else if (keywords.includes('design')) {
        setResult('You might thrive in a UX/UI Product role.');
      } else if (keywords.includes('data')) {
        setResult('You’re aligned with roles in Data or AI Product Strategy.');
      } else {
        setResult('We recommend exploring Generalist Product roles.');
      }
    }
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4">AI Career Companion</h1>
        {step === 1 && (
          <div>
            <h2 className="text-lg font-bold mb-2">Hi! Let’s tailor your journey.</h2>
            <label className="block mb-2">What’s your major?</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              placeholder="e.g. Psychology"
            />
            <button onClick={handleContinue} className="mt-4 w-full bg-blue-700 text-white py-2 rounded">
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="font-bold mb-2">What are your interests?</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {interestOptions.map((interest) => (
                <button
                  key={interest}
                  onClick={() => handleSelect(interest, interests, setInterests)}
                  className={\`px-3 py-1 rounded-full border \${interests.includes(interest) ? 'bg-blue-200' : 'bg-gray-100'}\`}
                >
                  {interest}
                </button>
              ))}
            </div>
            <button onClick={handleContinue} className="w-full bg-blue-700 text-white py-2 rounded">
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="font-bold mb-2">Do you like:</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {likeOptions.map((like) => (
                <button
                  key={like}
                  onClick={() => handleSelect(like, likes, setLikes)}
                  className={\`px-3 py-1 rounded-full border \${likes.includes(like) ? 'bg-blue-200' : 'bg-gray-100'}\`}
                >
                  {like}
                </button>
              ))}
            </div>
            <button onClick={handleContinue} className="w-full bg-blue-700 text-white py-2 rounded">
              Show Results
            </button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-lg font-bold mb-2">Recommended Path:</h2>
            <p className="text-gray-700 mb-4">{result}</p>
            <button onClick={() => setStep(1)} className="w-full bg-gray-200 py-2 rounded">
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
