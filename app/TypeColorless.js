import React, { useEffect, useState } from 'react';
import { Card, Button, Typography, Spin, Flex, AutoComplete, Input, Space } from 'antd';
import { CardActions, CardMedia } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { Modal } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './TypeColorless.css';

const {Search}=Input;
 
const TypeColorless = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [expandedList, setExpandedList] = useState({});
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => { // API
    fetch('https://api.pokemontcg.io/v2/cards')
      .then((response) => response.json())
      .then((data) => {
        const uniqueColorlessPokemons = data.data.reduce((acc, pokemon) => {
          const isColorlessType = pokemon.types && pokemon.types.includes('Colorless'); // TUR KONTROLU
          if (isColorlessType && !acc.some((p) => p.name === pokemon.name)) {
            acc.push(pokemon); // AYNI ISIMLI TEK BIR POKE
          }
          return acc;
        }, []);
        setPokemonList(uniqueColorlessPokemons); // FILTER POKE
        setFilteredPokemonList(uniqueColorlessPokemons); // Başlangıçta tüm kartlar gösteriliyor
      })
      .catch((error) => console.error('HATA:', error));
  }, []);
  const handleSearch = (value) => {
    // Arama sonuçlarını filtrele ve seçenekleri güncelle
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPokemonList(filtered);
    const options = filtered.map((pokemon) => ({ value: pokemon.name }));
    setFilteredOptions(options);
  };
  if (!pokemonList.length) {
    return (
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        <img
          id='Colorlessyükleme'
          src="https://pa1.aminoapps.com/6498/bafcb1152c8ceb20bfce6c2a5c83f08187225220_hq.gif"
          alt="Pokemon Wallpaper"
          style={{
            position: 'absolute',
            top: '40%',
            left: '40%',
            transform: 'translate(-50%, -50%)',
            maxHeight: '80%',
            maxWidth: '80%',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '40%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '24px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          }}
        >
          LÜTFEN BEKLEYİNİZ...
        </div>
      </div>
    );
  }
  
  
  const handleExpandClick = (pokemonId) => {
    setExpandedList((prevState) => ({
      ...prevState,
      [pokemonId]: !prevState[pokemonId],
    }));
  };
  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleModalClose = () => {
    setSelectedPokemon(null);
  };

  return (
    <>
      <Space id="audio" direction="vertical" style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
        <AutoComplete
          options={filteredOptions}
          onSearch={handleSearch} // Kullanıcı aradıkça filtreleme yapar
          style={{ width: '800px' }}
        >
          <Search
            size="large"
            onChange={(e) => handleSearch(e.target.value)} // Arama kutusundaki her değişiklikte güncelleme yapar
            placeholder="Search Pokémon"
            allowClear
          />
        </AutoComplete>
      </Space>

      <div className="kartlar" id="arkaplan">
        {filteredPokemonList.map((pokemon) => (
          <div className="kart" key={pokemon.id}>
            <Card className="cards">
              <CardMedia
                onClick={() => handleCardClick(pokemon)}
                sx={{ height: 200 }}
                image={pokemon.images?.small || 'default-image.jpg'}
                title={pokemon.name || 'Pokémon'}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" id="ISIM">
                  <strong> {pokemon.name || 'Pokémon Adı'} </strong>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <strong>Güç:</strong> {pokemon.subtypes || 'Bu Pokémon için açıklama mevcut değil.'}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: '8px' }}>
                  <strong>HP:</strong> {pokemon.hp || 'N/A'}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: '8px' }}>
                  <strong>Zayıflık:<br /></strong>
                  {pokemon.weaknesses && pokemon.weaknesses.length > 0 ? (
                    pokemon.weaknesses.map((weakness, index) => (
                      <span key={index}>
                        {weakness.type} <strong>{weakness.value}</strong>
                        {index < pokemon.weaknesses.length - 1 ? <br /> : ''}
                      </span>
                    ))
                  ) : (
                    'No weakness'
                  )}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleExpandClick(pokemon.id)}>
                  LEARN MORE
                </Button>
                <IconButton
                  expand={expandedList[pokemon.id] || false}
                  onClick={() => handleExpandClick(pokemon.id)}
                  aria-expanded={expandedList[pokemon.id] || false}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expandedList[pokemon.id] || false} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: '8px' }}>
                    <strong>Saldırı Türü:<br /></strong> {pokemon.attacks && pokemon.attacks.length > 0 ?
                      pokemon.attacks.map((attack, index) => (
                        <span key={index}>
                          {index + 1}. {attack.name}
                          {index < pokemon.attacks.length - 1 ? <br /> : ''}
                        </span>
                      ))
                      : 'No attacks available'}
                  </Typography>
                  <Typography paragraph>
                    <strong>Nadirlik:</strong> {pokemon.rarity || 'Bilinmiyor'}
                  </Typography>
                  <Typography paragraph>
                    <strong>SET BILGISI:</strong> {pokemon.set.name || 'Bu Pokémon için açıklama mevcut değil.'}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        ))}
        <Modal
          visible={!!selectedPokemon}
          onCancel={handleModalClose}
          footer={null}
          centered
        >
          {selectedPokemon && (
            <div className="modal-content">
              <img
                src={selectedPokemon.images?.large || 'default-image.jpg'}
                alt={selectedPokemon.name}
                style={{ width: '100%' }}
              />
              <Typography.Title level={4} style={{ textAlign: 'center' }}>
                {selectedPokemon.name}
              </Typography.Title>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
};

export default TypeColorless;