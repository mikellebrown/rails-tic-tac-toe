import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

const Home = () => (
<>
  {/* <Game {...props} /> */}
    <Segment inverted>
      <Menu style={{fontSize: "32px", background: "black"}}>
        <Menu.Item>
          <NavLink
          exact 
          to='/'
          activeStyle={Styles.active}
          >
            Home
          </NavLink>
            </Menu.Item>
              <Menu.Item>
                <NavLink
                exact 
                to='/game'
                activeStyle={Styles.active}
                >
                  Play Game
                </NavLink>
              </Menu.Item>
              
            </Menu>
              <div style={{ display: 'flex', justifyContent: 'center',
              fontSize: '100px',
              height: '1000px',
              marginTop: '300px',
            }}>
                React Tic Tac Toe
              </div>
          </Segment>
  </>
);



const Styles = {
  active: {
    color: 'purple',
    fontWeight: 'bold',
  }
}

export default Home;
