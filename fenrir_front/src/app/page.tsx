"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useMemo } from "react";
import { Search } from "@/components/search/Search";
import { Location } from "@/types/location";

export default function Home() {
  //location:{latitude(緯度),longtitude(経度)}
  //初期値：ドキュメントのもので適当
  const [location, setLocation] = useState<Location>({
    latitude: 51.505,
    longtitude: -0.09,
  });

  const [focusedShopLocation, setFocusedShopLocation] = useState<Location>({
    latitude: 51.505,
    longtitude: -0.09,
  });

  const [radius, setRadius] = useState(0);

  //CSRに対応させるため、dynamic importしている.
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map/Map"), {
        loading: () => (
          <div className="flex justify-center items-center">Map is loading</div>
        ),
        ssr: false,
      }),
    []
  );

  //page表示時に一度だけ現在地の情報を取得
  useEffect(() => {
    async function getGeolocation() {
      await navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longtitude: position.coords.longitude,
          });
        },
        (error) => {
          alert(
            "現在地が取得できませんでした。このアプリケーションには現在地の情報が必要になります。"
          );
          console.log(error);
        }
      );
    }
    getGeolocation();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full gap-6">
      <div className="w-full z-50">
        <Map
          latitude={location.latitude}
          longtitude={location.longtitude}
          shopLatitude={focusedShopLocation.latitude}
          shopLongtitude={focusedShopLocation.longtitude}
          radius={radius}
        ></Map>
      </div>

      <Search
        radius={radius}
        setRadius={setRadius}
        setFocus={setFocusedShopLocation}
        location={location}
      ></Search>
    </div>
  );
}
