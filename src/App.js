import React from "react"
import ReactAnimateImages from "./lib/index"

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