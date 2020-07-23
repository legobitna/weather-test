import React, { Component } from 'react'


const apikey = process.env.REACT_APP_APIKEY
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      weather:null
    }
  }

  componentDidMount(){
    this.callWeather()
    
  }
// 1. how can i change the city 
//2.  how can i get weather by my current location?
  callWeather = async() =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=cape town&appid=${apikey}&units=metric`
    //console.log("url",url)
    let data = await fetch(url)
    let result = await data.json()
    console.log("result?",result)
    this.setState({weather:result})
    

  }
  render() {
    if(this.state.weather === null){
      return(
        <h1>Loading...</h1>
      )
    }
    return (
      <div>
        <h1>{this.state.weather.name}</h1>
        <h2>{this.state.weather.main.temp}C</h2>
        <h3>{this.state.weather.weather[0].description}</h3>
      </div>
    )
  }
}

