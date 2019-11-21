import React from "react"
class ReactAnimateImages extends React.Component {
    constructor(props){
        super()
        this.state = {
            is_dragging: false,
            images: props.images, 
            interval: 0, 
            framInterval: props.framInterval ? props.framInterval : 100, 
            activeImageIndex: props.activeImageIndex ? props.activeImageIndex : 1, 
            stopAfterFirstRound: props.stopAfterFirstRound ? props.stopAfterFirstRound : false,
            stopAfterEachRound: props.stopAfterEachRound ? props.stopAfterFirstRound : false, 
            className: props.className ? props.className : {},
            style: props.style ? props.style : {}
        }
        this.handleStop = this.handleStop.bind(this)
        this.handleStart = this.handleStart.bind(this)
    }

    componentDidMount() {
        this.animate(this.state.stopAfterFirstRound)
    }

    handleStart(){
        this.animate(this.state.stopAfterEachRound)
    }

    handleStop(){
        clearInterval(this.state.interval)
    }

    animate(is_stoping){
        clearInterval(this.state.interval)
        this.setState({
            interval: setInterval(()=>{
                var activeImageIndex = this.state.activeImageIndex
                if(activeImageIndex === this.state.images.length){
                    this.setState({activeImageIndex: 1})
                    if(is_stoping){
                        clearInterval(this.state.interval)
                    }
                    return  
                }
                this.setState({activeImageIndex: activeImageIndex+1})
                return
            }, this.state.framInterval)
        })
    }

    handleMouseEvent(key, e){
        e.preventDefault()
        if(key === "Move"){
            if(this.state.is_dragging){
                let index = this.state.activeImageIndex 
                if(e.movementX >= 0){
                    this.setState({
                        activeImageIndex: index === 1 ? this.state.images.length : index - 1
                    })
                }else{
                    this.setState({
                        activeImageIndex: index === this.state.images.length ? 1 : index + 1
                    })
                }
            }
        }else if(key === "Down"){
            this.setState({
                is_dragging: true
            })
        }else if(key === "Up"){
            this.setState({
                is_dragging: false
            })
        }
    }

    render() {
        const { activeImageIndex, images, className, style } = this.state
        return (
            <img src={images[activeImageIndex-1]} alt="" className={className} style={style}
                onClick={this.handleStop}
                onMouseMove={this.handleMouseEvent.bind(this, "Move")}
                onMouseDown={this.handleMouseEvent.bind(this, "Down")}
                onMouseUp={this.handleMouseEvent.bind(this, "Up")}
            />
        )
    }
}

export default ReactAnimateImages