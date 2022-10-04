
# Pesto Week 1 - Assignment Exercise 1.1
> How does the browser take a readable domain and returrn the correct webpage everytime?
### Introduction

The internet is in its essence a network of [interconnected devices](https://i.imgur.com/JaUkPUs.png). These devices consist of mobiles, computers, laptops, smart devices and basically anything that can connect to the internet. Easy right? Lets look at the information bandwagon behind this seemingly impossible modern wonder.

![enter image description here](https://i.imgur.com/JaUkPUs.png)

###  Flow:
- URL is entered into the address bar. (ex: https://www.google.com)
```js
Protocol/scheme://<Domain>:<Port>/<Path>?<Query String>#<FragmentId>
 ```
- [DNS](https://developer.mozilla.org/en-US/docs/Glossary/DNS "Domain Name System") replies with the IP of the server where the website is hosted where requested domain is pointing to. (ex: 142.250.196.36). This IP is cached for faster access times.
- [TCP](https://developer.mozilla.org/en-US/docs/Glossary/TCP_handshake) connection is established securely if the protocol is ```https```. A [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS) handshake also occurs.
- The browser sends a request to the server once the connection is established with   GET, POST, PUT, PATCH, DELETE etc. (ex; ```GET /hello-world HTTP/1.1```)
- The server takes the request and sends it back response to the browser. The response has the following information
	- a status line that contains [HTTP response codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) (ex: 200 OK if the  request is successful, 404 Not Found if the resource or path is, well, not found)
	- response headers that specifies how the response should be handled
	- The requested resource which may be of [any](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) kind, HTML, CSS, Javascript, or image files, or data.
	- Finally the browser renders the content.



### Components of a browser

![enter image description here](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=500)

The main components of a modern browser are :
- User interface : This is what the user interacts with to interface with the internet.
- Browser & Rendering Engine: The rendering engine is responsible for displaying requested content.

> Different browsers use different rendering engines: Internet Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit. Chrome and Opera (from version 15) use Blink, a fork of WebKit.

>[WebKit](http://webkit.org/) is an open source rendering engine which started as an engine for the Linux platform and was modified by Apple to support Mac and Windows.

![enter image description here](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/bPlYx9xODQH4X1KuUNpc.png?auto=format&w=650)

- JS Interpreter : Responsile for parsing and executing the JS code.
- Data Storage : The browser has a cached memory where it stores the cached files, cookies, etc.
  


### References
- [Web.dev](https://web.dev/howbrowserswork)
- [Mozilla Developers Network](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Wikipedia](https://en.wikipedia.org/wiki/Web_browser)
