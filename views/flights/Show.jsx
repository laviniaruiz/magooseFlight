import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {
console.log(props.flight)
    return (
        <DefaultLayout>
        
        <h1>Flight Details for {props.flight.airline} Airline</h1>
        <div className="container">
          <h2>Airline : {props.flight.airline}</h2>
          <h2>Flight Number : {props.flight.flightNo}</h2>
          <h2>Departure : {props.flight.departs.toLocaleDateString()} , {props.flight.departs.toLocaleTimeString()}</h2>
          <h2>Airport : {props.flight.airport}</h2>
        </div>

          {props.flight.destinations.length ?
          <>
            <p>Destinations</p>
            {props.flight.destinations.map((item, index) =>
              <div className="container" key={index}>
                <p>Airport: {item.airport}</p>
                <p>Arrival: {item.arrival}</p>
                <p>Arrival: {item.arrival}</p>

                <form className="destination-Btn"  action={`/flight/${props.flight._id}/destinations/${item._id}`}>
                  <button>Edit Destination</button>
                </form>

                <form className="destination-Btn"  action={`/flight/${props.flight._id}/destinations/${item._id}?_method=DELETE`} method="POST">
                  <button>Delete Destination</button>
                </form>

              </div>
            )}
          </>
          :
          <>
            <p>Destination is to be determined...</p>
          </>
        }

                <br />
                <br />
                <div >
                    <form action={`/flight/${props.flight._id}/destinations`} method="POST">
                    <label htmlFor="airport">Select Airport:</label><br />
                        <select name='airport' id="airport">
                            <option selected >Select Airport</option>
                            <option value='AUS' >AUS</option>
                            <option value='DAL' >DAL</option>
                            <option value='LAX' >LAX</option>
                            <option value='SAN' >SAN</option>
                            <option value='SEA' >SEA</option>
                        </select>
                        <br />
                        <label htmlFor="arrival">Arrival:</label><br />
                        <input type="datetime-local" id="arrival"
                            name="arrival" />
                        <br />

                        <button>Submit</button>
                    </form>
                    <a href="/flight">
                        <button>Back</button>
                    </a>
                </div>
        </DefaultLayout>
    );
}

export default Show;