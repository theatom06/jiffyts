# Jiffy: A Lightweight Bun-Based Server Framework

This repository contains a minimal server framework built on top of Bun for creating efficient and scalable web applications. It provides a structured approach for handling HTTP requests and response capabilities.

## Quick Start:

1. **Install Bun:**
   ```bash
   bun i jiffyts -g
   ```
2. **Create an instance of the `Jiffy` class:**
   ```javascript
   import Jiffy from './app';

   const app = new Jiffy({}); //the {} is important for configs which will be added later
   ```
3. **Define routes and handlers:**
   ```javascript
   app.get('/api', (req) => {
     return 'Hello, world!';
   }, 'text/plain');

    app.get('/index', (req) => {
     return Bun.file('/index.html');
    }, 'text/html');
   ```
5. **Start the server:**
   ```javascript
   app.listen(3000);
   ```

## API

### `app.get(path: string, handler: RouteHandler, contentType: string = "text/plain")`

- **Description:** Add a route for handling GET requests.
- **Parameters:**
  - `path`: The URL path for the route.
  - `handler`: The route handler function.
  - `contentType`: (Optional) The content type of the response. Default is `text/plain`.

### `app.post(path: string, handler: RouteHandler, contentType: string = "text/plain")`

- **Description:** Add a route for handling POST requests.
- **Parameters:**
  - `path`: The URL path for the route.
  - `handler`: The route handler function.
  - `contentType`: (Optional) The content type of the response. Default is `text/plain`.

### `app.put(path: string, handler: RouteHandler, contentType: string = "text/plain")`

- **Description:** Add a route for handling PUT requests.
- **Parameters:**
  - `path`: The URL path for the route.
  - `handler`: The route handler function.
  - `contentType`: (Optional) The content type of the response. Default is `text/plain`.

### `app.delete(path: string, handler: RouteHandler, contentType: string = "text/plain")`

- **Description:** Add a route for handling DELETE requests.
- **Parameters:**
  - `path`: The URL path for the route.
  - `handler`: The route handler function.
  - `contentType`: (Optional) The content type of the response. Default is `text/plain`.

### `app.notFound(res: string | BunFile = "Default 404")`

- **Description:** Set a custom response for 404 Not Found errors.
- **Parameter:**
  - `res`: (Optional) Custom response for 404 errors. Default is "Default 404".

### `RouteHandler`

- **Type:** `(req: Request) => string | BunFile`
- **Description:** A function that takes an HTTP request (`Request` object) and returns either a string or a `BunFile`. Use this to define the logic for handling different routes.

## Contributing:

Contributions are welcome! Please refer to the [Gandalf's JavaScript Naming Scheme](https://gist.github.com/theatom06/62b4a5d90346422f443b93869cd2436d) file for formating.

## License:

This project is licensed under the [Carbon License v2.2.0](https://gist.github.com/theatom06/6d520406e0d1d7612f29d31517888d90). See the LICENSE file for details.

## Contact:

For any queries or feedback, please reach out to steve.alappat@gmail.com.

## Future Plans:

- Adding WebSockets support
- Adding middleware
- Usage in Meta Framework

Gemini was used to create doucmentation, format the code and help in debuging.

VScode was used as a editor for this project.

This project was created using `bun init` in bun v1.0.25. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
