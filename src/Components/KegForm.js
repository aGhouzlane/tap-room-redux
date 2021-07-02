import React from "react";

function KegForm(props) {
  return (
    <React.Fragment>
      <h3>Add a Keg</h3>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Brand:
          <input type="text" name="brand" />
        </label>
        <label>
          Price:
          <input type="text" name="price" />
        </label>
        <label>
          AlcoholeContent:
          <input type="text" name="alcoholeContent" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  );
}

export default KegForm;