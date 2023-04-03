import { useState } from "react";
import "./style.css";

export default function HomeIndeed() {
  const [openModel, setOpenModel] = useState(false);


  const handlClick = () =>{
    setOpenModel(true);
  }
  //console.log(data);
  return (
    <div className="App">
      <form>
        <div>
          <h2>Total </h2>
          <select>
            <option>1</option>
            <option>2</option> 
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div>
          <h2>Position</h2>
          <select>
            <option>sell</option>
            <option>buy</option>
            <option>cancel</option>
            <option>return</option>
          </select>
        </div>
        <div>
          <h2>Option Type </h2>
          <select>
            <option>call</option>
            <option>help</option>
            <option>about</option>
          </select>
        </div>
        <div>
          <h2>Expiry</h2>
          <select>
            <option>weekly</option>
            <option>monthly</option>
            <option>year</option>
          </select>
        </div>
        <div>
          <h2>Select Strike Criteria</h2>
          <select>
            <option>Strike Type</option>
          </select>
        </div>
        <br /> <br />

        <button className="addbtn" onClick={handlClick}>Add Leg</button>
        <button className="cancelbtn">Cancel</button>
       
      </form>



      {
        openModel &&
        <div>
        <form>
        <div>
          <h2>Total </h2>
          <select>
            <option>1</option>
            <option>2</option> 
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div>
          <h2>Position</h2>
          <select>
            <option>sell</option>
            <option>buy</option>
            <option>cancel</option>
            <option>return</option>
          </select>
        </div>
        <div>
          <h2>Option Type </h2>
          <select>
            <option>call</option>
            <option>help</option>
            <option>about</option>
          </select>
        </div>
        <div>
          <h2>Expiry</h2>
          <select>
            <option>weekly</option>
            <option>monthly</option>
            <option>year</option>
          </select>
        </div>
        <div>
          <h2>Select Strike Criteria</h2>
          <select>
            <option>Strike Type</option>
          </select>
        </div>
        <br /> <br />

        <button className="addbtn">Add Leg</button>
        <button className="cancelbtn">Cancel</button>
       
      </form>
      </div>
      }
    </div>
  );
}
