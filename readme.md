
# JSXBird

  

JSXBirdAI is a flappy bird clone implemented in the [JSXGraph library](https://jsxgraph.uni-bayreuth.de/wp/index.html). 

## Run

To run the code use a http server tool like [http-server](https://www.npmjs.com/package/http-server) to serve the index.html.

Example using http-server:

```sh

$ http-server .

```

## Usage
 If the ball touches the rectangles, they lose. The ball lifts upward each time the player hits the arrow up key, if the key is not pressed, the ball falls because of gravity. Every pxiel that the ball travels to the right is one point in the highscore. Clicking "restart" will restart the game.