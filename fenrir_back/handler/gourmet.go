package handler

import (
	"encoding/xml"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"

	"github.com/labstack/echo/v4"

	"github.com/ASpooky/fenrir_app/types"
)

type GourmetHandler struct{}

func NewGourmetHandler() *GourmetHandler {
	return &GourmetHandler{}
}

type Filters struct {
	key string
	lat string
	lng string
	rng string
}

func (gh *GourmetHandler) GetGourmet(c echo.Context) error {
	//検索クエリをセットしてhotpepperのapiから帰ってきたxmlのレスポンスをjsonにして返す.
	filter := Filters{
		key: "d43f3088b310b8a2",
		lat: "34.3924",
		lng: "132.4897",
		rng: "1000",
	}
	queryParams := url.Values{}
	queryParams.Set("key", filter.key)
	queryParams.Set("lat", filter.lat)
	queryParams.Set("lng", filter.lng)
	queryParams.Set("range", filter.rng)

	queryString := queryParams.Encode()

	URL := fmt.Sprintf("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?%s", queryString)

	response, err := http.Get(URL)

	if err != nil {
		log.Println("Failed to fetch gourmet API:", err)
		return c.String(http.StatusInternalServerError, "Failed to fetch gourmet API")
	}

	defer response.Body.Close()

	var gourmetResponse types.GourmetXMLResponse

	byteValue, err := io.ReadAll(response.Body)
	if err != nil {
		log.Println("Failed to read all response body:", err)
		return c.String(http.StatusInternalServerError, "Failed to read all response body")
	}

	err = xml.Unmarshal(byteValue, &gourmetResponse)
	if err != nil {
		log.Println("Failed to encode JSON:", err)
		return c.String(http.StatusInternalServerError, "Failed to encode JSON")
	}

	return c.JSON(http.StatusOK, gourmetResponse)
}
