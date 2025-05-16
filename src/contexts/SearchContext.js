import { createContext, useContext, useState} from 'react';

// 1. Context 생성
export const SearchContext = createContext();

// 2. Provider 생성
export const SearchProvider = ({children}) => {
        const [inputText, setInputText] = useState('');

        return (
            <SearchContext.Provider value={{ inputText, setInputText }}>
                {children}
            </SearchContext.Provider>
        );
};


export const useSearch = () => useContext(SearchContext);