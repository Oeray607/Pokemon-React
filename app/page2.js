// 'use client'
// import React from 'react';
// import { useState, useEffect } from 'react';
// import { TreeSelect, AutoComplete, Input, Space } from 'antd';
// import { AudioOutlined, RightCircleFilled } from '@ant-design/icons';
// import './page2.css';

// const { Search } = Input;

// const App = () => {
//   const [pokemonList, setPokemonList] = useState([]); // Pokemon isimlerini tutmak için
//   const [filteredOptions, setFilteredOptions] = useState([]); // Filtrelenmiş Pokemon isimleri

//   useEffect(() => {
//     // API'den verileri çekiyoruz
//     fetch('https://api.pokemontcg.io/v2/cards')
//       .then((response) => response.json())
//       .then((data) => {
//         const uniquePokemons = data.data.reduce((acc, pokemon) => {
//           if (!acc.some((p) => p.name === pokemon.name)) {
//             acc.push({ name: pokemon.name }); // Sadece Pokémon isimlerini topluyoruz
//           }
//           return acc;
//         }, []);
//         setPokemonList(uniquePokemons); // Pokémon listemizi state'e kaydediyoruz
//       });
//   }, []);

//   // Arama sırasında Pokémon'ları filtrelemek için
//   const handleSearch = (value) => {
//     const filtered = pokemonList
//       .filter((pokemon) => pokemon.name.toLowerCase().includes(value.toLowerCase()))
//       .map((pokemon) => ({ value: pokemon.name }));
//     setFilteredOptions(filtered); // Filtrelenmiş sonuçları güncelliyoruz
//   };

//   // Kullanıcı arama yapınca tek bir Pokémon ismini göstermek için
//   const onSearch = (value) => {
//     const selectedPokemon = pokemonList.find((pokemon) => pokemon.name.toLowerCase() === value.toLowerCase());
//     if (selectedPokemon) {
//       console.log('Seçilen Pokémon:', selectedPokemon.name); // Yalnızca seçilen Pokémon adını logluyoruz
//     } else {
//       console.log('Hiçbir Pokémon bulunamadı');
//     }
//   };

//   return (
//     <Space id="audio" direction="vertical" style={{ width: '100%' }}>
//       <AutoComplete
//         options={filteredOptions} // Filtrelenmiş Pokémon isimleri
//         onSearch={handleSearch}
//         onSelect={onSearch}
//         placeholder="Search Pokémon"
//         style={{ width: '100%' }}
//       >
//         <Search style={{width:'800px'}}
//           enterButton="Search"
//           size="large"
//           onSearch={onSearch} 
//         />
//       </AutoComplete>
//     </Space>
//   );
// };

// export default App;