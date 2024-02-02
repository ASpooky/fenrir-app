interface LargeServiceArea {
  code: string;
  name: string;
}

interface ServiceArea {
  code: string;
  name: string;
}

interface LargeArea {
  code: string;
  name: string;
}

interface MiddleArea {
  code: string;
  name: string;
}

interface SmallArea {
  code: string;
  name: string;
}

interface Genre {
  name: string;
  catch: string;
  code: string;
}

interface SubGenre {
  name: string;
  code: string;
}

interface Budget {
  code: string;
  name: string;
  average: string;
}

interface Urls {
  pc: string;
}

interface Photo {
  pc: {
    l: string;
    m: string;
    s: string;
  };
  mobile: {
    l: string;
    s: string;
  };
}

interface CouponUrls {
  pc: string;
  sp: string;
}

export interface Shop {
  id: string;
  name: string;
  logo_image: string;
  name_kana: string;
  address: string;
  station_name: string;
  ktai_coupon: string;
  large_service_area: LargeServiceArea;
  service_area: ServiceArea;
  large_area: LargeArea;
  middle_area: MiddleArea;
  small_area: SmallArea;
  lat: string;
  lng: string;
  genre: Genre;
  sub_genre: SubGenre;
  budget: Budget;
  catch: string;
  capacity: string;
  access: string;
  mobile_access: string;
  urls: Urls;
  photo: Photo;
  open: string;
  close: string;
  party_capacity: string;
  other_memo: string;
  shop_detail_memo: string;
  budget_memo: string;
  wedding: string;
  course: string;
  free_drink: string;
  free_food: string;
  private_room: string;
  horigotatsu: string;
  tatami: string;
  card: string;
  non_smoking: string;
  charter: string;
  parking: string;
  barrier_free: string;
  show: string;
  karaoke: string;
  band: string;
  tv: string;
  lunch: string;
  midnight: string;
  english: string;
  pet: string;
  child: string;
  wifi: string;
  couponUrls: CouponUrls;
}

export interface GourmetJsonResponse {
  apiVersion: string;
  resultAvailable: string;
  resultsReturned: string;
  resultStart: string;
  shop: Shop[];
}
