const React = require('react')
const Def = require('../default')

function index (data) {
    let gamesFormatted = data.games.map((game) => {
      return (
        <div className='col-sm-6'>
            <h2>
              <a href={`./games/${game.id}`} >
                {game.name}
              </a>
            </h2>
          <p className='text-left'>
              {game.category}
          </p>
          <img className="img-fluid" src={game.pic} alt={game.name}/>
          
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Games</h1>
              <div className='row'>
              {gamesFormatted}
              </div> 
          </main>
      </Def>
  )
  }
  module.exports = index