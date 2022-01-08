function pop(){
    if (confirm("Czy chcesz złapac mysz?")){
      alert("Złapałes Mysz gratulacje!!!");
      document.getElementById("mouse").style.display = 'none';
    } else {
      alert("Mysz uciekła");
      document.getElementById("mouse").style.display = 'none';
    }
}