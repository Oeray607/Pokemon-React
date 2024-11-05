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
// import Page2 from './page2';
import Page10 from './TypeMetal';
import CardContent from '@mui/material/CardContent';
import { Avatar } from '@mui/material';
import TypeDragon from './TypeDragon';
import TypeLightning from './TypeLightning';
import TypeMetal from './TypeMetal';
import TypeWater from './TypeWater';
import TypeGrass from './TypeGrass';
import TypeFighting from './TypeFighting';
import TypeFire from './TypeFire';
import TypeDarkness from './TypeDarkness';
import TypeColorless from './TypeColorless';
import TypePsychic from './TypePsychic';

const avatarUrls = {
  Fire: 'https://avatarfiles.alphacoders.com/374/thumb-350-374850.webp',
  Colorless: 'https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf_vkYSzY2EsbRFAOJOS3_ZdreU4YoqzdzVZf-f1CEP9ndmI3705aHteXy3ZD7tLH4YbavoJT3lPK9luZDLgQxhQOBw1tLuBzxFG.jpg?r=b99',
  Dragon: 'https://img.freepik.com/premium-photo/pokemon-3d-art-avatar-charizard-dragon_956173-35.jpg',
  Psychic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png',
  Fighting: 'https://i.ebayimg.com/images/g/VmMAAOSwQ5xh4i4r/s-l400.jpg',
  Lightning: 'https://cdn.openart.ai/published/f2OFMv7tIyjeH3jrMKeQ/CyMGbCgo_G_86_1024.webp',
  Darkness: 'https://i.pinimg.com/originals/1f/a1/20/1fa120d9bc6db239f16c5d84e2b9618a.jpg',
  Metal: 'https://facts.net/wp-content/uploads/2023/07/12-facts-about-aggron-1689676444.jpg',
  Water: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/sword-shield-the-best-pokemon-for-water-type-runs.jpg',
  Grass: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdGYMg4V0Uv8Cc25iVSFXUXvevtxXkd7oow&s',


};
const cardTypes = ['Fire', 'Dragon', 'Psychic', 'Colorless',
   'Fighting', 'Lightning', 'Darkness', 'Metal', 'Water', 'Grass',];
const { Header, Content, Footer, Sider } = Layout; //layout içerik
const items2 = cardTypes.map((type, index) => {
  const key = String(index + 1);
  return {
    key: key,
    icon: <Avatar src={avatarUrls[type]} />,
    label: `Tür: ${type}`,
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
        return <div><TypeFire /></div>
      case '2':
        return <div><TypeDragon /></div>
      case '3':
        return <div><TypePsychic /></div>
      case '4':
        return <div><TypeColorless /></div>
      case '5':
        return <div><TypeFighting /></div>
      case '6':
        return <div><TypeLightning /></div>
      case '7':
        return <div><TypeDarkness /></div>
      case '8':
        return <div><TypeMetal /></div>
      case '9':
        return <div><TypeWater /></div>
      case '10':
        return <div><TypeGrass /></div>
      default:
      //   return <div
      //    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      //   <img // DEFAULT SAYFA
      //     src="https://images8.alphacoders.com/124/1243956.jpg"
      //     alt="Pokemon Wallpaper"
      //     style={{ maxWidth: '80%', maxHeight: 'auto', borderRadius: '10px', visibility: 'visible' }}
      //   />
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
        {/* <Page2 /> */}
      </Header>
      <Content id='tablo'>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><strong>    BİR KATEGORİ SEÇİNİZ</strong></Breadcrumb.Item>
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
