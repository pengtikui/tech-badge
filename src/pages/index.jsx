import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Badge from '../components/Badge';
import Select from '../components/Select';
import { getData } from '../lib/data';

const STYLES = [
  'plastic',
  'flat',
  'flat-square',
  'for-the-badge',
].map((item) => ({ name: item, value: item }));

export default function Home({ badges }) {
  const [style, setStyle] = useState('for-the-badge');

  const handleStyleChange = (event) => {
    setStyle(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="max-w-screen-md mx-auto pt-6 px-4 md:px-0">
        <div className="grid grid-cols-3 gap-x-4">
          <div className="col-span-2 md:col-span-1 flex items-center">
            <label className="mr-2 font-medium">Style</label>
            <Select
              options={STYLES}
              value={style}
              onChange={handleStyleChange}
            />
          </div>
        </div>
        {badges.map((badge) => (
          <div key={badge.title} className="mt-6">
            <h2 className="text-lg font-semibold">{badge.title}</h2>
            <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
              {badge.list.map((item) => (
                <Badge key={item.name} badge={item} style={style} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = getData();
  return {
    props: {
      badges: data.map((item) => ({
        ...item,
        list: item.list.sort((a, b) => (a.name > b.name ? 1 : -1)),
      })),
    },
  };
}
