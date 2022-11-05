package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Helloworld(g *gin.Context) {
	g.JSON(http.StatusOK, "hello world!!")
}

func SetupRouter() *gin.Engine {
	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	router.GET("/hello", Helloworld)

	// Ping test
	router.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})
	return router
}

func main() {

	r := SetupRouter()
	r.Run()
}
