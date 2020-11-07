package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/Vinicch/spacex-launches/graph/generated"
	"github.com/Vinicch/spacex-launches/graph/model"
)

func (r *queryResolver) Launches(ctx context.Context) ([]*model.Launch, error) {
	bodyBytes := handleHTTPGet("/launches")

	var launches []*model.Launch
	json.Unmarshal(bodyBytes, &launches)

	return launches, nil
}

func (r *queryResolver) Launch(ctx context.Context, flightNumber int) (*model.Launch, error) {
	bodyBytes := handleHTTPGet("/launches/" + strconv.Itoa(flightNumber))

	var launch *model.Launch
	json.Unmarshal(bodyBytes, &launch)

	return launch, nil
}

func (r *queryResolver) Rockets(ctx context.Context) ([]*model.Rocket, error) {
	bodyBytes := handleHTTPGet("/rockets")

	var rockets []*model.Rocket
	json.Unmarshal(bodyBytes, &rockets)

	return rockets, nil
}

func (r *queryResolver) Rocket(ctx context.Context, rocketID string) (*model.Rocket, error) {
	bodyBytes := handleHTTPGet("/rockets/" + rocketID)

	var rocket *model.Rocket
	json.Unmarshal(bodyBytes, &rocket)

	return rocket, nil
}

func handleHTTPGet(endpoint string) []byte {
	baseURL := "https://api.spacexdata.com/v3"
	resp, err := http.Get(baseURL + endpoint)
	if err != nil {
		panic("Couldn't connect to the SpaceX API")
	}

	defer resp.Body.Close()
	bodyBytes, _ := ioutil.ReadAll(resp.Body)

	return bodyBytes
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
