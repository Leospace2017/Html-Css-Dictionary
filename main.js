const toggleNav = () => {
    const naviKreis = document.querySelector("#navi");
    const naviNormal = document.querySelector("#navi2");
    if(naviKreis.style.display === "none"){
        naviKreis.style.display = "block";
        naviNormal.style.display = "none";
    }else{
        naviKreis.style.display = "none";
        naviNormal.style.display = "block";
    }
}

const btn = document.querySelector("#switch");
btn.addEventListener("click", toggleNav);
