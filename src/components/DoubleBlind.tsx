import React from 'react';

const DoubleBlind: React.FC = () => {
  const doubleBlindData = [
    { fileName: 'paper_4.pdf', title: 'Sustainable Fishing Practices in Mindanao', field: 'Marine Biology', dateSubmitted: '2024-03-10' },
    { fileName: 'research_5.docx', title: 'Cultural Diversity in Mindanao Schools', field: 'Education', dateSubmitted: '2024-03-09' },
  ];

  return (
    <div className="double-blind-container">
      <h2 className="text-2xl font-bold mb-4">Double-Blind Review</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">File Name</th>
              <th className="py-3 px-4 text-left">Journal/Research Title</th>
              <th className="py-3 px-4 text-left">Field/Scope</th>
              <th className="py-3 px-4 text-left">Date Submitted</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {doubleBlindData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-4 px-4">{row.fileName}</td>
                <td className="py-4 px-4">{row.title}</td>
                <td className="py-4 px-4">{row.field}</td>
                <td className="py-4 px-4">{row.dateSubmitted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoubleBlind;