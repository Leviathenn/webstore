package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"strings"
)

var debugmood bool

func checkIds(spriteID int) {

}

func main() {

	args := os.Args
	if len(args) < 1 {
		log.Fatalln("program requires an argument.")
		os.Exit(1)
	}
	//fmt.Println(args[0], args[1])
	b, err := ioutil.ReadFile("map/" + args[1] + ".ucmp")
	// can file be opened?
	if err != nil {
		log.Fatalln("Cannot open map: " + args[1] + ".")
	}

	d, grr := ioutil.ReadFile("debugger")
	// can file be opened?
	if grr != nil {
		fmt.Println("No debugger active")
	}
	// convert bytes to string
	bling := string(d)
	if bling == "enabled" {
		debugmood = true
		fmt.Println("Debugger Active")
	}
	str := string(b)

	// show file data
	splitStr := strings.Split(str, " ")
	for _, rawId := range splitStr {
		fmt.Println(rawId)
	}
	fileContent, err := os.Open("users.json")

	if err != nil {
		log.Fatal(err)
		return
	}

	fmt.Println("The File is opened successfully...")

	defer fileContent.Close()

	byteResult, _ := ioutil.ReadAll(fileContent)

	var res map[string]interface{}
	json.Unmarshal([]byte(byteResult), &res)

	fmt.Println(res["users"])
}
