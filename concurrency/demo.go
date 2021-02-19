package main

import (
	"net/http"
	"sync"
)

func main() {
	var wg sync.WaitGroup

	var urls = []string{
		"http://google.com",
		"http://baidu.com",
		"http://microsoft.com",
	}

	for _, url := range urls {
		wg.Add(1)
		// launch a go routine
		go func(url string) {
			defer wg.Done()

			http.Get(url)
		}(url)
	}

	// Wait for all http fetches to complete
	wg.Wait()
}
