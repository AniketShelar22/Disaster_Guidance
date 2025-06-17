// /src/components/TipsSection.jsx
export default function TipsSection({ title, tips }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold capitalize mb-2 text-gray-800 dark:text-white">
        {title}
      </h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
