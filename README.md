## Info

This is the project for the making animation with showing series of images in time interval. You can Move from mouse also.
You can place anywhere in the react project and customise with your style of Fram. Many option are given in this.

### Dependencies

No

### Demo App

import React from "react"
import ReactAnimateImages from "../src/lib"
class Demo extends React.Component {

  constructor() {
    super()
    this.state = {}
    this.state.images = []
    for (var i = 1; i <= 72; i++) {
      this.state.images.push("https://imgd.aeplcdn.com/1280x720/cw/360/marutisuzuki/1082/closed-door/" + i + ".jpg")
    }
  }

  render() {
    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <h1>Demo For React Animate Images</h1>
          <div>
            <button onClick={() => this.IMGAE_ANIMATION.handleStart()}> Start </button>
            <button onClick={() => this.IMGAE_ANIMATION.handleStop()}> Stop </button>
          </div>
          <div>
            <ReactAnimateImages
              style={{ heigth: "150px" }}
              ref={instance => { this.IMGAE_ANIMATION = instance }}
              images={this.state.images} 
              framInterval={50} 
              stopAfterFirstRound={true}/>
          </div>
        </div>
      </div>
    )
  }
}
export default Demo

### Option

images: list of images 
framInterval: positive integre interval between showing another images defaul is 100, 
activeImageIndex: integer Start Index of image on the given array of images default 1
stopAfterFirstRound: boolean - Stop On page load when first round completed default false
stopAfterEachRound: boolean - Stop on each round completed defalt false
className: classNames
style: styles

### Give Contribution

Feel free to test and open issue on this project and will make sure your issue will be solved as soon as possible

### License

#### (ISC OR GPL-3.0)