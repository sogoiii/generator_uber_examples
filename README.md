Intro:
------

This is a set of examples of using generators around an existing api. There is a raw example if you wish to view. The purpose is to show how to wrap your api and use generator manager like co.


Example Description:
------

Our [uber api](https://developer.uber.com/v1/endpoints) gets the products, time, and price for a location. Returning a large object with data from each endpoint.


```javascript
var getInfo = {
      products: {},
      time: {},
      price: {}
    }
```


Getting Started:
------
1. Install node 0.11 or greater
2. git clone this repo
3. npm install
4. [Create](https://developer.uber.com/getting-started/) your own api keys, and modify the config.js file with your keys
5. Review the Command List to run 


Details:
------
I set up config.js to be easily modified to add new locations. If you want to see the price between Disney Land and LAX, make the following change in the file you are running.

```javascript
var queryObj = {
  start_latitude: locations.disneyLand.latitude,
  start_longitude: locations.disneyLand.longitude,
  end_latitude: locations.LAX.latitude,
  end_longitude: locations.LAX.longitude
}
```

If you want to test our your location, try something like [latlong.net](http://www.latlong.net/) and create another object with your desired name, latitude, and longitude variables.


Command List:
------
(I assume you are in the directory with the code)

node --harmony callbacks_example/uber_cb.js

node --harmony callbacks_example/uber_cb_min.js

node --harmony generators_example/uber_generators.js

node --harmony generators_example/uber_generators_promise.js 

node --harmony generators_example/uber_generators_return_error.js

node --harmony generators_example/uber_generators_throw_error.js

node --harmony promises_example/uber_promises.js

node --harmony raw_example/generator_yields.js  



The MIT License
===============

Copyright (c) 2009-2014 Stuart Knightley, David Duponchel, Franz Buchinger, António Afonso

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.