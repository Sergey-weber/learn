package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/go-redis/redis/v8"
	"github.com/rs/cors"
	"golang.org/x/crypto/acme/autocert"
	"log"
	"net/http"
)

var ctx = context.Background()
var rdb = redis.NewClient(&redis.Options{
	Addr:     "localhost: 6379",
	password: "",
	DB:       0,
})

type analyticsData struct {
	HitType       string `json: "hit_type"`
	PageType      string `json: "page_type"`
	MaterialPK    int    `json: "meterial_pk"`
	EventCategory string `json: "event_category"`
	EventAction   string `json: "event_action"`
	EventLabel    int    `json: "event_label"`
	EventValue    int    `json: "event_value"`
	Email         string `json: "email"`
}
