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

func (gh *GourmetHandler) GetGourmet(c echo.Context) error {
	//検索クエリをセットしてhotpepperのapiから帰ってきたxmlのレスポンスをjsonにして返す.

	key := "d43f3088b310b8a2"

	lat := c.QueryParam("lat")
	lng := c.QueryParam("lng")
	rng := c.QueryParam("range")
	str := c.QueryParam("start")

	queryParams := url.Values{}
	queryParams.Set("key", key)
	queryParams.Set("lat", lat)
	queryParams.Set("lng", lng)
	queryParams.Set("range", rng)
	//orderはおすすめ順にする
	queryParams.Set("order", "4")
	//ページング対応
	queryParams.Set("start", str)

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
