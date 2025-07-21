
import getConfig from 'next/config';
import Header from './components/Header';
import LongdoMapCmp from './components/Map';

export default function Home() {

  const { publicRuntimeConfig } = getConfig();
  const mapKey = publicRuntimeConfig.longdoMapKey;

  if (!mapKey) {
    return <div className="p-6 text-red-500">Please set LONGDO_MAP_KEY in your environment variables.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="">
        <LongdoMapCmp mapKey={mapKey} />
      </main>
    </div>
  );
}
