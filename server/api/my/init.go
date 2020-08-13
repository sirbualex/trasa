package my

import (
	"github.com/seknox/trasa/server/global"
	"github.com/seknox/trasa/server/models"
)

//InitStore initialises package state
func InitStore(con *global.State) {
	// initialize local state
	Store = myStore{
		State: con,
	}

}

//func InitStoreMock() *userstoremocks.UserStoreMock {
//	// initialize local state
//	mockUser := new(userstoremocks.UserStoreMock)
//	Store = mockUser
//	return mockUser
//}

//Store is the package state variable which contains database connections
var Store adapter

type myStore struct {
	*global.State
}

type adapter interface {
	GetUserAppsDetailsWithPolicyFromUserID(userID, orgID string) ([]models.MyServiceDetails, error)
}
