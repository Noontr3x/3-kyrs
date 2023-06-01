class UserForm extends React.Component {
    constructor(props) {
      super(props);
      var name = props.name;
      var nameIsValid = this.validateName(name);
      var age = props.age;
      var ageIsValid = this.validateAge(age);
      this.state = {name: name, age: age, nameValid: nameIsValid, ageValid: ageIsValid};
  
      this.nameInputRef = React.createRef();
      this.ageInputRef = React.createRef();
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    validateAge(age){
      return age >= 0;
    }
  
    validateName(name){
      return name.length > 2;
    }
  
    handleSubmit(e) {
      e.preventDefault();
      var name = this.nameInputRef.current.value;
      var age = this.ageInputRef.current.value;
      var nameValid = this.validateName(name);
      var ageValid = this.validateAge(age);
  
      this.setState({name: name, age: age, nameValid: nameValid, ageValid: ageValid});
  
      if (nameValid && ageValid) {
        alert("Имя: " + name + " Возраст: " + age);
      }
    }
  
    render() {
      var nameColor = this.state.nameValid === true ? "green" : "red";
      var ageColor = this.state.ageValid === true ? "green" : "red";
      return (
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Имя:</label><br />
            <input type="text" ref={this.nameInputRef} value={this.state.name} style={{borderColor: nameColor}} />
          </p>
          <p>
            <label>Возраст:</label><br />
            <input type="number" ref={this.ageInputRef} value={this.state.age} style={{borderColor: ageColor}} />
          </p>
          <input type="submit" value="Отправить" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <UserForm name="" age="0" />,
    document.getElementById("app")
  );
r  