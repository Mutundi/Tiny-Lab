import React, {useState} from 'react'

const SearchBar = ({items}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = items.filter(item => item.toLowerCase().includes(term));
        setFilteredItems(filtered);
    };

  return (
    <div className="max-w-md bg-gray-200 rounded mx-auto mt-8 p-4">
        <input 
        type="text"
        placeholder="Search Items..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <ul className="mt-4 space-y-2">
            {filteredItems.map((item, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded-md">{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default SearchBar;