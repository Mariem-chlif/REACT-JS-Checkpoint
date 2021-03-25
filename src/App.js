import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function App() {
  return (
    <div className="App" >
  
      
  <div class='container'>
    <form class='container'> 
    <h1>Inscription Form </h1>


    <div class="form-group ">
    <label for="exampleInputEmail1">Email address</label>
   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email " required ></input>
   <div class="invalid-feedback">Please enter a valid email address.</div>

   
</div>

<div class='form-group'>
<label for="exampleInputPassword1">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required ></input>
<div class="invalid-feedback">Please enter your password to continue.</div>
</div>

<div class='form-group'>
     <label for="exampleInputEmail1">Phone Number</label>
            <input type="number" class="form-control" placeholder="Phone Number"></input>
     </div>

  

     <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1"> Check me out </label>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>


    </form>
    
    </div>
   
    
    </div>
  );
}

export default App;
