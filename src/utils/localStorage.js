import { useParams, Link } from 'react-router-dom';

export const loadFromLocalStorage = (key) => {
try {
const data = localStorage.getItem(key);
return data ? JSON.parse(data) : [];
} catch (e) {
console.error("Error reading from localStorage", e);
return [];
}
};

export const saveToLocalStorage = (key, data) => {
try {
localStorage.setItem(key, JSON.stringify(data));
} catch (e) {
console.error("Error writing to localStorage", e);
}
};

export const toggleChecklistItem = (key, item) => {
const current = loadFromLocalStorage(key);
let updated;

if (current.includes(item)) {
updated = current.filter((i) => i !== item);
} else {
updated = [...current, item];
}

saveToLocalStorage(key, updated);
return updated;
};