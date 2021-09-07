import React, { useState } from 'react';

const BoxGenerator = () => {

    const [boxColor, setBoxColor] = useState("black");
    const [boxes, setBoxes] = useState([]);

    const addBox = (e) => {
        e.preventDefault();
        const newBox = { boxColor };
        setBoxes([...boxes, newBox]);
        console.log(boxes)
    };

    return (<div>


        <form onSubmit={(e) => addBox(e)} className="form-group">
            <h3>Pick a Color</h3>
            <input onChange={(e) => setBoxColor(e.target.value)} type="text" name="boxColor" id="boxColor"></input>
            <button className="btn btn-success" type="submit">Create Box</button>
        </form>

        { boxes.map((box, idx) => {
            return <div key={idx} style={{ display: 'inline-flex', backgroundColor: box.boxColor, height: 50, width: 50, margin: 10 }}>
                </div>
            })
        } </div> );
}

export default BoxGenerator;