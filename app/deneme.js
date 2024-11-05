'use client'
import React from 'react';
import { DownOutlined, LaptopOutlined, MenuUnfoldOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, } from 'antd';
import SayfaAlt from './sayfaalt';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import './page.css';
import Page2 from './page2';
import Page3 from './TypeFire';
import Page4 from './TypeDragon';
import Page5 from './TypePsychic';
// import './anasayfa.js';
import CardContent from '@mui/material/CardContent';
import { Avatar } from '@mui/material';

const { Header, Content, Footer, Sider } = Layout; //layout içerik
const items2 = [Avatar].map((icon, index) => { //kategorilerin ekleneceği yer
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: <Avatar src="https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf_vkYSzY2EsbRFAOJOS3_ZdreU4YoqzdzVZf-f1CEP9ndmI3705aHteXy3ZD7tLH4YbavoJT3lPK9luZDLgQxhQOBw1tLuBzxFG.jpg?r=b99" />,
    label: `Pokémon's ${key}`,
    children: new Array(3).fill(null).map((_, j) => { //alt kategorilerin ekleneceği yer
      const subKey = index * 4 + j + 1; //olusturdugumuz diziye gore alt kategori ekler
      return {
        key: subKey,
        label: `Alt Kategoriler${subKey}`,
      };
    }),
  };
});
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState('0');

  const renderContent = () => { //kategori içeriği
    switch (selectedKey) {
      case '1':
        return <div><Page3 /></div>
      case '2':
        return <div><Page4 /></div>
      case '3':
        return <div><Page5 /></div>
      case '4':
        return <div><Page6 /></div>
      // case '5':
      //   return <div><Page6/></div>
      // // case '6':
      // //   return <div><Page3/></div>
      default:
        return <div
        //  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        // <img // DEFAULT SAYFA
        //   src="https://images8.alphacoders.com/124/1243956.jpg"
        //   alt="Pokemon Wallpaper"
        //   style={{ maxWidth: '80%', maxHeight: 'auto', borderRadius: '10px', visibility: 'visible' }}
        />
      // </div>

    }
  };

  return ( //asıl table
    <Layout id='layo'>
      <Header
        id='headerbody' style={{
          backgroundImage: `url('https://4kwallpapers.com/images/wallpapers/pokemon-pikachu-3840x1080-10924.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div />
        <Page2 />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
          <Sider style={{ background: colorBgContainer, }} width={200}>
            <Menu
              mode="inline" //ilk arayüz
              defaultSelectedKeys={[0]}
              defaultOpenKeys={[0]}
              style={{ height: '100%' }}
              items={items2}
              onClick={(e) => setSelectedKey(e.key)}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {renderContent()} {/*render kısmı*/}
          </Content>
        </Layout>
      </Content>
      <Footer
      // style={{
      //   height:'2000px',
      //   backgroundImage: `url('https://user-images.githubusercontent.com/46288072/54165198-156e8c80-4436-11e9-84e0-082d620699ac.jpg')`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      // }}
      >
        <SayfaAlt />
      </Footer>
    </Layout>
  );
};

export default App;
 // page1 eski 
 // **************************************************************** //




 // **************************************************************** //


************************************************************************************
  #arkaplan {
  background - image: url(https://static.vecteezy.com/system/resources/previews/024/625/582/non_2x/cute-yellow-mouse-character-background-free-vector.jpg);
    background - repeat: no - repeat;
  display: flex;
  justify - content: space - between;
  flex - wrap: wrap;
  background - size: cover;
  background - attachment: fixed;
  background - position: center;
}

***

  <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: '8px' }}>
    <strong>Zayıflık:<br /></strong>
    {pokemon.weaknesses && pokemon.weaknesses.length > 0 ? (
      pokemon.weaknesses.map((weakness, index) => (
        <span key={index}>
          {weakness.type}  <strong>{weakness.value}</strong>
          {index < pokemon.weaknesses.length - 1 ? <br /> : ''}
        </span>
      ))
    ) : (
      'Zayıflık mevcut değil.'
    )}
  </Typography>



  **
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
{pokemon?.set?.name ? `SET: ${pokemon.set.name}` : 'Set bilgisi mevcut değil.'}
</Typography>










  ****************************************************************************


import React, { useEffect, useState } from 'react';
import { Card, Button, Typography, Spin } from 'antd';
import './TypeFighting.css';
import { CardActions, CardMedia } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { LoadingOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

const TypeFighting = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [expandedList, setExpandedList] = useState({});
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState([]); // Filtrelenmiş Pokemon isimleri

  useEffect(() => {
    // API KISMI
    fetch('https://api.pokemontcg.io/v2/cards')
      .then((response) => response.json())
      .then((data) => {
        const uniqueFightingPokemons = data.data.reduce((acc, pokemon) => {
          const isFightingType = pokemon.types && pokemon.types.includes('Fighting'); // 'Fighting' türüne sahip mi kontrolü
          if (isFightingType && !acc.some(p => p.name === pokemon.name)) {
            acc.push(pokemon); // Aynı isimli sadece bir Poke ekleniyor
          }
          return acc;
        }, []);
        setPokemonList(uniqueFightingPokemons); // Filtrelenmiş Fighting türü Pokeler
      })
      .catch((error) => console.error('HATA:', error));
  }, []);
  const handleSearch = (value) => {
    const filtered = pokemonList
      .filter((pokemon) => pokemon.name.toLowerCase().includes(value.toLowerCase()))
      .map((pokemon) => ({ value: pokemon.name }));
    setFilteredOptions(filtered); // Filtrelenmiş sonuçları güncelliyoruz
  };
  // Kullanıcı arama yapınca tek bir Pokémon ismini göstermek için
  const onSearch = (value) => {
    const selectedPokemon = pokemonList.find((pokemon) => pokemon.name.toLowerCase() === value.toLowerCase());
    if (selectedPokemon) {
      console.log('Seçilen Pokémon:', selectedPokemon.name); // Yalnızca seçilen Pokémon adını logluyoruz
    } else {
      console.log('Hiçbir Pokémon bulunamadı');
    }
  };

  return (
    <Space id="audio" direction="vertical" style={{ width: '100%' }}>
      <AutoComplete
        options={filteredOptions} // Filtrelenmiş Pokémon isimleri
        onSearch={handleSearch}
        onSelect={onSearch}
        placeholder="Search Pokémon"
        style={{ width: '100%' }}
      >
        <onSearch style={{ width: '800px' }}
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </AutoComplete>
    </Space>
  );



  if (!pokemonList.length) {
    return (
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        <img
          id='Fightingyükleme'
          src="https://media2.giphy.com/media/rCftUAVPLExZC/200w.gif?cid=82a1493badf78ch5hajkxp307b6ik5vhnu2cmarbzoqcuhxr&ep=v1_gifs_related&rid=200w.gif&ct=g"
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
    <div className="kartlar" id='arkaplan'>
      {pokemonList.map((pokemon) => (
        <div className="kart" key={pokemon.id}>
          <Card className='cards'>
            <CardMedia
              onClick={() => handleCardClick(pokemon)}
              sx={{ height: 200 }}
              image={pokemon.images?.small || 'default-image.jpg'}
              title={pokemon.name || 'Pokémon'}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" id='ISIM'>
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
                      {weakness.type}  <strong>{weakness.value}</strong>
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
                {/* <Typography paragraph><strong>Extra INFO:</strong></Typography> */}
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
                {/* <Typography>
                  {pokemon?.artist ? `Artist: ${pokemon.artist}` : 'Artist bilgisi mevcut değil.'}
                </Typography> */}
              </CardContent>
            </Collapse>
          </Card>
        </div>
      ))}
      <Modal
        visible={!!selectedPokemon} // Modal sadece Pokémon seçildiğinde görünür olacak
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
  );
};

export default TypeFighting;