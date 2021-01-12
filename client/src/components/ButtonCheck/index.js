import React, { useState } from "react"
import "./ButtonCheck.css"

const ButtonCheck = ({ state = false, onClick }) => {

    const [checkState, setCheckState] = useState(state)

    const handleClick = (e) => {
        setCheckState(!checkState)
        // onClick(checkState)
    }

    return (
        <button className="ms__button-only-icon" onClick={handleClick}>
            { !checkState &&
                <svg className="ms__only-icon-button" x="0px" y="0px" viewBox="0 0 512 512">
                    <path d="M257,0C116.39,0,0,114.39,0,255s116.39,257,257,257s255-116.39,255-257S397.61,0,257,0z M392,285H287v107c0,16.54-13.47,30-30,30c-16.54,0-30-13.46-30-30V285H120c-16.54,0-30-13.46-30-30c0-16.54,13.46-30,30-30h107V120c0-16.54,13.46-30,30-30c16.53,0,30,13.46,30,30v105h105c16.53,0,30,13.46,30,30S408.53,285,392,285z"/>
                </svg>
            }

            { checkState &&
                <svg className="ms__only-icon-button" x="0px" y="0px" viewBox="0 0 191.667 191.667">
                    <path d="M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0zM150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969C156.146,65.765,156.146,74.362,150.862,79.646z"/>
                </svg>
            }
        </button> 
    )
}

export default ButtonCheck