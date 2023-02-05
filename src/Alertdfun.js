export default function Alertdfun(){
  let data = "Mr.Dev";
  function alerttesting(){
    alert('Hello ' + data);
  }
  return(
    <div> 
      <h1> Hello {data}</h1>
      <button onClick={()=>alerttesting()}> Click me</button>
    </div>
  );
}

// function alerting(){
//   return(
//       alert("outside function");

    
//   );
// }