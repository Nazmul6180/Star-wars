import react from 'react';
 
  class StarWar extends react.Component {
    constructor(){
      super()
      this.state = {
          name : null,
          hight : null,
          homeworld : null,
          imageUrl : null,
          wiki:null,
          lodedCh : false,
      }
    }
    getNewCarectar(){
      const RandomCh = Math.round(Math.random() * 82)
      const url =`https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${RandomCh}.json`
      fetch (url)
      .then(Response => Response.json())
        .then(data => {
          this.setState({
          name : data.name,
          hight : data.height,
          homeworld : data.homeworld,
          imageUrl: data.image,
          wiki:data.wiki,
          lodedCh : true,
        })
      })  
    }
    render() {
      
    
      return(
       <div>
         {
           this.state.lodedCh &&
           <div>
                <h1>{this.state.name}</h1>
                <p><img src={this.state.imageUrl} alt={this.state.name} className="img" /></p>
                <p>Height (cm):{this.state.hight}</p>
                <p>Homeworld: <b>{this.state.homeworld}</b></p>
                <button  className='wiki_btn'><a className='wiki_btn_a' href={this.state.wiki} rel="noreferrer" target="_blank" >Learn More..</a></button>
           </div>
         }  
          <button type="button"  onClick={()=> this.getNewCarectar()} className='btn'>Randomize!!</button>
         <div className="bg-img" style={{backgroundImage: `url(${this.state.imageUrl})`}}></div>
       </div>
      )
    }
  }

  export default StarWar;

  // <p><a href={this.state.homeworld} target = "_balnk" >Homeworld</a></p>