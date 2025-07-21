'use client';
import { useState } from 'react';
import { Geometry, LongdoMap, LongdoTag, Map, Marker, Popup } from 'longdomap-react';
import MapCtrl from './MapCtrl';

export default function LongdoMapCmp({
    mapKey,
}: {
    mapKey: string;
}) {
    const [map, setMap] = useState<Map>();
    return (
        <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 h-full w-full">
            <MapCtrl map={map} />
            <section className="relative rounded-xl overflow-hidden shadow text-black w-full h-[60vh] md:h-[calc(100vh-9rem)]">
                <LongdoMap
                    mapObj={(map: Map) => {
                        setMap(map);
                    }}
                    zoom={10}
                    apiKey={mapKey}
                    baseMap="GRAY"
                    height="100%"
                >
                    <Marker
                        detail="This is a marker."
                        position={{ lon: 100.5018, lat: 13.7563 }}
                        title="Bangkok"
                    />
                    <Geometry
                        type="circle"
                        options={{
                            title: "Circle Area",
                            detail: "This is a circle area.",
                        }}
                        radius={0.01}
                        points={[
                            {
                                lat: 13.747047,
                                lon: 100.52547,
                            },
                        ]}
                    />
                    <Popup
                        position={{ lon: 100.555, lat: 13.666 }}
                        title="Bangkok"
                    />
                    <LongdoTag tagName="travel" />
                </LongdoMap>
            </section>
        </div>
    );
}