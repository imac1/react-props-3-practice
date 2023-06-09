/*
  Instructions
    Utilize the props passed to Badge to finish the Badge component.
    You'll also need to pass props down another level to the child Components.
*/

import * as React from "react";

class Avatar extends React.Component {
  render() {
  
    return <img src={this.props.img} alt={this.props.name} />;
  }
}

class Name extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}

class Handle extends React.Component {
  render() {
    return <h3>@{this.props.handle}</h3>;
  }
}

class Badge extends React.Component {
  render() {
    const {user, style, addFriend} = this.props
    return (
      <div style={style}>
        <Avatar name={user.name} img={user.img} />
        <div>
          <Name name={user.name}/>
          <Handle handle={user.handle}/>
          <button onClick={() => ({addFriend})}>Add Friend</button>
        </div>
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Badge
        user={{
          name: "Tyler McGinnis",
          img: "https://avatars0.githubusercontent.com/u/2933430",
          handle: "tylermcginnis"
        }}
        style={{
          width: 300,
          margin: "0 auto",
          border: "1px solid var(--biege-10)",
          borderRadius: 8,
          backgroundColor: "var(--charcoal)",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          textAlign: "center"
        }}
        addFriend={() => alert("Added!")}
      />
    );
  }
}
