import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">
        {props.allSushis.slice(props.belt,props.belt+4).map(sushiObj =>
          <Sushi
            key={sushiObj.id}
            sushiObj={sushiObj}
            eatenSushi={props.eatenSushi}
            budget={props.budget}
            positionChange={props.positionChange}
            handleEatSushi={props.handleEatSushi}
            />
        )
        }


        <MoreButton
          positionChange={props.positionChange}
          />

      </div>
    </Fragment>
  )
}

export default SushiContainer
