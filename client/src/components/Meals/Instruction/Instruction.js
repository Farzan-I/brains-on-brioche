import React from "react"
import '../../../style.css'


const Instruction = (props) => {

  
  console.log(props.analyzedInstructions[0])
  
  if (props.analyzedInstructions[0]) {
    const instructionList = props.analyzedInstructions[0].steps.map((step) => {
    return (
      <div>
        <ol>
          <li>
          {step.step}
          </li>
        </ol>
      </div>
      )
    })
  
  return (
    <div>
      <h1> Instructions:</h1>
      {instructionList}
    </div>
  )
} else {
  return (<div>
    <h1>Instructions:</h1>
    <p className="recipe--instructions">Sorry this recipe does not have any available instructions. Please visit:</p>
    <a href={props.sourceUrl}>{props.sourceUrl}</a>
  </div>)
}

}

export default Instruction;