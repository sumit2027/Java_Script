const grp = document.getElementById("grp");
const list = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"];


list.forEach(x  => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    bt.textContent = x;
    grp.appendChild(bt);
    
});

grp.addEventListener("click", e => {
    if(e.target.classList.contains("opt-btn")){
       document.querySelectorAll(".opt-btn").forEach( btn => btn.classList.remove("active"));
       e.target.classList.add("active");
          console.log(e.target.textContent);
          
    }
});

