// /src/components/Checklist.jsx
export default function Checklist({ category, items, checkedItems, toggleItem }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">
        {category}
      </h3>
      <ul className="bg-white dark:bg-gray-800 p-4 rounded shadow-md space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center">
            <input
              type="checkbox"
              checked={!!checkedItems?.[category]?.[item]}
              onChange={() => toggleItem(category, item)}
              className="mr-2"
            />
            <span className="text-gray-800 dark:text-gray-200">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
