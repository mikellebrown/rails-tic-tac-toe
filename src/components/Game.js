import React from 'react';
import { Grid, Button } from 'semantic-ui-react';



class Game extends React.Component {
    state = {
      choices: [
        { userChoice: 'X'},
        { compChoice: 'O'},
      ],
        
        result: '',
    };

  // toggleSquare = (props) => (
  //   this.setState({
  //     choices: this.state.squares( square => {

  //     })
  //   })
    
  // );

  optionClick = (id) => {

    
  };


  render () {
       
    return(
      <>
      <Grid >
          <Grid.Row style={styles.flex}>
        <div className="ui grid">
          <div className="three column row">
          <div className="column">
            <div className="square" id="1" optionClick={this.optionClick}>
            </div>
          </div>
          <div className="column">
            <div className="square" id="2">
            </div>
          </div>
          <div className="column">
          <div className="square" id="3">
            </div>
          </div>
        </div>
      </div>
      </Grid.Row>
      <Grid.Row style={styles.flex}>
        <div className="ui grid">
          <div className="three column row">
          <div className="column">
            <div className="square" id="4">
            </div>
          </div>
          <div className="column">
            <div className="square" id="5">
            </div>
          </div>
          <div className="column">
          <div className="square" id="6">
            </div>
          </div>
        </div>
      </div>
      </Grid.Row>
      <Grid.Row style={styles.flex}>
        <div className="ui grid">
        <div className="three column row">
          <div className="column">
            <div className="square" id="7">
            </div>
          </div>
          <div className="column">
          <div className="square" id="8">
            </div>
          </div>
          <div className="column">
          <div className="square" id="9">
            </div>
          </div>
        </div>
      </div>
      </Grid.Row>
    </Grid>
   
    <Button>Play Again</Button>
    </>
  
    

    )
  }
}


const styles = {
  flex: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,

  }
}

export default Game;