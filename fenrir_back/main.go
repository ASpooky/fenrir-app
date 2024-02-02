package main

import (
	"github.com/ASpooky/fenrir_app/router"
)

func main() {

	e := router.NewRouter()

	e.Logger.Fatal(e.Start(":8080"))
}
