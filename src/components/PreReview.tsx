import React from 'react';

const PreReview: React.FC = () => {
  const preReviewData = [
    { fileName: 'research_paper_1.pdf', title: 'Effects of Climate Change on Mindanao Agriculture', field: 'Environmental Science', dateSubmitted: '2024-03-15' },
    { fileName: 'study_2.docx', title: 'Indigenous Knowledge Systems in Mindanao', field: 'Anthropology', dateSubmitted: '2024-03-14' },
    { fileName: 'analysis_3.pdf', title: 'Economic Impact of Tourism in Mindanao', field: 'Economics', dateSubmitted: '2024-03-13' },
  ];

  return (
    <div className="pre-review-container">
      <h2 className="text-2xl font-bold mb-4">Pre-Review</h2>
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
            {preReviewData.map((row, index) => (
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

export default PreReview;