import React from 'react';
import HotDealItem from '../components/HotDealItem';
import SidebarLayout from '../components/SidebarLayout';

type HomeComponent = React.FC & { layout: typeof SidebarLayout }

const Home: HomeComponent = () => {
  
  return (
    <React.Fragment>

      <HotDealItem title={`2629 TL LG 27'' 27UL550-W IPS 4K HDR 10 RADEON FreeSync™ HDMI DP Beyaz LED Monitör`} description="Bu monitör, yüksek dinamik aralık içeriklerin parlak ve karanlık kısımlardaki detayları göstermek için HDR10 ile uyumludur." />
      <HotDealItem title={`SONY 65XH8077 65" 164 Ekran Uydu Alıcılı Android Smart 4K Ultra HD LED TV 7700 TL (Mediamarkt)`} description="Bu monitör, yüksek dinamik aralık içeriklerin parlak ve karanlık kısımlardaki detayları göstermek için HDR10 ile uyumludur." />

    </React.Fragment>
  )
}

Home.layout = SidebarLayout;
export default Home;
