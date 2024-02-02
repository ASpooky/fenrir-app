package types

type Shop struct {
	ID               string `xml:"id" json:"id"`
	Name             string `xml:"name" json:"name"`
	LogoImage        string `xml:"logo_image" json:"logo_image"`
	NameKana         string `xml:"name_kana" json:"name_kana"`
	Address          string `xml:"address" json:"address"`
	StationName      string `xml:"station_name" json:"station_name"`
	KtaiCoupon       string `xml:"ktai_coupon" json:"ktai_coupon"`
	LargeServiceArea struct {
		Code string `xml:"code" json:"code"`
		Name string `xml:"name" json:"name"`
	} `xml:"large_service_area" json:"large_service_area"`
	ServiceArea struct {
		Code string `xml:"code" json:"code"`
		Name string `xml:"name" json:"name"`
	} `xml:"service_area" json:"service_area"`
	LargeArea struct {
		Code string `xml:"code" json:"code"`
		Name string `xml:"name" json:"name"`
	} `xml:"large_area" json:"large_area"`
	MiddleArea struct {
		Code string `xml:"code" json:"code"`
		Name string `xml:"name" json:"name"`
	} `xml:"middle_area" json:"middle_area"`
	SmallArea struct {
		Code string `xml:"code" json:"code"`
		Name string `xml:"name" json:"name"`
	} `xml:"small_area" json:"small_area"`
	Lat   string `xml:"lat" json:"lat"`
	Lng   string `xml:"lng" json:"lng"`
	Genre struct {
		Name  string `xml:"name" json:"name"`
		Catch string `xml:"catch" json:"catch"`
		Code  string `xml:"code" json:"code"`
	} `xml:"genre" json:"genre"`
	SubGenre struct {
		Name string `xml:"name" json:"name"`
		Code string `xml:"code" json:"code"`
	} `xml:"sub_genre" json:"sub_genre"`
	Budget struct {
		Code    string `xml:"code" json:"code"`
		Name    string `xml:"name" json:"name"`
		Average string `xml:"average" json:"average"`
	} `xml:"budget" json:"budget"`
	Catch        string `xml:"catch" json:"catch"`
	Capacity     string `xml:"capacity" json:"capacity"`
	Access       string `xml:"access" json:"access"`
	MobileAccess string `xml:"mobile_access" json:"mobile_access"`
	Urls         struct {
		Pc string `xml:"pc" json:"pc"`
	} `xml:"urls" json:"urls"`
	Photo struct {
		Pc struct {
			L string `xml:"l" json:"l"`
			M string `xml:"m" json:"m"`
			S string `xml:"s" json:"s"`
		} `xml:"pc" json:"pc"`
		Mobile struct {
			L string `xml:"l" json:"l"`
			S string `xml:"s" json:"s"`
		} `xml:"mobile" json:"mobile"`
	} `xml:"photo" json:"photo"`
	Open           string `xml:"open" json:"open"`
	Close          string `xml:"close" json:"close"`
	PartyCapacity  string `xml:"party_capacity" json:"party_capacity"`
	OtherMemo      string `xml:"other_memo" json:"other_memo"`
	ShopDetailMemo string `xml:"shop_detail_memo" json:"shop_detail_memo"`
	BudgetMemo     string `xml:"budget_memo" json:"budget_memo"`
	Wedding        string `xml:"wedding" json:"wedding"`
	Course         string `xml:"course" json:"course"`
	FreeDrink      string `xml:"free_drink" json:"free_drink"`
	FreeFood       string `xml:"free_food" json:"free_food"`
	PrivateRoom    string `xml:"private_room" json:"private_room"`
	Horigotatsu    string `xml:"horigotatsu" json:"horigotatsu"`
	Tatami         string `xml:"tatami" json:"tatami"`
	Card           string `xml:"card" json:"card"`
	NonSmoking     string `xml:"non_smoking" json:"non_smoking"`
	Charter        string `xml:"charter" json:"charter"`
	Parking        string `xml:"parking" json:"parking"`
	BarrierFree    string `xml:"barrier_free" json:"barrier_free"`
	Show           string `xml:"show" json:"show"`
	Karaoke        string `xml:"karaoke" json:"karaoke"`
	Band           string `xml:"band" json:"band"`
	Tv             string `xml:"tv" json:"tv"`
	Lunch          string `xml:"lunch" json:"lunch"`
	Midnight       string `xml:"midnight" json:"midnight"`
	English        string `xml:"english" json:"english"`
	Pet            string `xml:"pet" json:"pet"`
	Child          string `xml:"child" json:"child"`
	Wifi           string `xml:"wifi" json:"wifi"`
	CouponUrls     struct {
		Pc string `xml:"pc" json:"pc"`
		Sp string `xml:"sp" json:"sp"`
	} `xml:"coupon_urls" json:"coupon_urls"`
}

type GourmetXMLResponse struct {
	APIVersion      string `xml:"api_version" json:"api_version"`
	ResultAvailable string `xml:"results_available" json:"results_available"`
	ResultsReturned string `xml:"results_returned" json:"results_returned"`
	ResultStart     string `xml:"results_start" json:"results_start"`
	Shop            []Shop `xml:"shop" json:"shop"`
}
