import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestApiData } from "./actions";


function Home(props) {


   useEffect(() => {
    console.log("props", props);
    props.fetchUserList();
   }, [])


  const person = (x, i) =>
    <div key={x.id.value}>
      <h1>
        {x.gender}
      </h1>
      <h1>
        {x.name.first}
      </h1>
      <h1>
        {x.name.last}
      </h1>
      <img src={x.picture.medium} />
    </div>;

  const { results = [] } = props.data;

  return (
    <div>
      {
        results.length ? <h1> {results.map(person)} </h1>
          : <h1>loading...</h1>
      }
    </div>
  )
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => ({
  fetchUserList: (payload) => dispatch(requestApiData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
