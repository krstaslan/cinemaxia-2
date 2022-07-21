// Invoke Functions Call on Document Loaded
document.addEventListener('DOMContentLoaded', function () {
  hljs.highlightAll();
});


let alertWrapper = document.querySelector('.alert')
let alertClose = document.querySelector('.alert__close')

if (alertWrapper) {
  alertClose.addEventListener('click', () =>
    alertWrapper.style.display = 'none'
  )
}
function onloading(row,column){
  // <img type="image" disabled = true id="{{row}}-{{column}}" value="reserved" src="{% static 'images/bk.png' %}" style="height: 80px; width: 80px;"/>

  let id = row+"-"+column
  console.log(column);
  document.getElementById(id).src = "{% static 'images/bk.png' %}";
  document.getElementById(id).value="reserved" ;

}
function bookSeat(element,column,row)
{
  let val = document.getElementById("count").value;
  let id = row+"-"+column
  let value =document.getElementById(id).value
  
  if (value==="reserved"){
      pass
  }
  else if (value==="clicked"){
      document.getElementById(id).src = "{% static 'images/seat.png' %}";
      document.getElementById(id).value= "notclicked"
    
      let seats=document.getElementById('seat-locations').value
      seats = seats.replace(id+"," ,"");
      console.log(seats)
      document.getElementById('seat-locations').value= seats
      val = parseInt(val)-1;
      document.getElementById("count").value = val;

  }
  else{
  document.getElementById(id).src = "{% static 'images/booked.png' %}";
  document.getElementById(id).value= "clicked"  
  document.getElementById('seat-locations').value += id+",";
  console.log(document.getElementById('seat-locations').value)
  if(val)
  {
      val = parseInt(val)+1;
      document.getElementById("count").value = val;
  }
  else{
      document.getElementById("count").value = 1;
  }
}
  
}