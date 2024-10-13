import React from 'react';

const Published: React.FC = () => {
  const publishedData = [
    { fileName: 'journal_6.pdf', title: 'Renewable Energy Potential in Mindanao', field: 'Energy Studies', datePublished: '2024-03-01' },
    { fileName: 'study_7.pdf', title: 'Biodiversity of Mindanao Rainforests', field: 'Ecology', datePublished: '2024-02-28' },
  ];

  return (
    <div className="published-container">
      <h2 className="text-2xl font-bold mb-4">Published</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">File Name</th>
              <th className="py-3 px-4 text-left">Journal/Research Title</th>
              <th className="py-3 px-4 text-left">Field/Scope</th>
              <th className="py-3 px-4 text-left">Date Published</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {publishedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-4 px-4">{row.fileName}</td>
                <td className="py-4 px-4">{row.title}</td>
                <td className="py-4 px-4">{row.field}</td>
                <td className="py-4 px-4">{row.datePublished}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Published;