function Login2(){

  return(
    <div>
    <Input/>
    <Button onClick = { (e) => {
      console.log(e)
      alert(e.target.value)
     }}> 로그인! </Button>
    </div>
  )
}

class Login extends React.Component{
  constructor(){
    super()
    this.state = {id : "whatthe"}
  }

  render(){
    return(    <div>
      <Input onChange = {(e) => this.setState({id : e.target.value })}/>
      <Button value = {this.state.id}onClick = { (e) => {
        console.log(e)
        alert(this.state.id)
      }}> Login! </Button>
      </div>
    )
  }
}
