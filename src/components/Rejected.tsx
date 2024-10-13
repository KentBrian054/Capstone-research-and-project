import React from 'react';

const Rejected: React.FC = () => {
  const rejectedData = [
    { fileName: 'paper_8.pdf', title: 'Urban Planning in Mindanao Cities', field: 'Urban Studies', dateRejected: '2024-03-05' },
    { fileName: 'research_9.docx', title: 'Water Quality in Mindanao Rivers', field: 'Environmental Science', dateRejected: '2024-03-04' },
  ];

  return (
    <div className="rejected-container">
      <h2 className="text-2xl font-bold mb-4">Rejected</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">File Name</th>
              <th className="py-3 px-4 text-left">Journal/Research Title</th>
              <th className="py-3 px-4 text-left">Field/Scope</th>
              <th className="py-3 px-4 text-left">Date Rejected</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rejectedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-4 px-4">{row.fileName}</td>
                <td className="py-4 px-4">{row.title}</td>
                <td className="py-4 px-4">{row.field}</td>
                <td className="py-4 px-4">{row.dateRejected}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rejected;