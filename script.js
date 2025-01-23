const card = document.querySelector(".card"),
tabs_basic = document.querySelector(".tab1"),
tabs_standard = document.querySelector(".tab2"),
tabs_ultimate = document.querySelector(".tab3"),
info = document.querySelector(".info");

tabs_basic.onclick = (e)=>{
  tabs_basic.classList.add("basic");
  tabs_standard.classList.remove("standard");
  tabs_ultimate.classList.remove("ultimate");

  info.classList.add("basic");
  info.classList.remove("standard");
  info.classList.remove("ultimate");
}

tabs_standard.onclick = (e)=>{
  tabs_standard.classList.add("standard");
  tabs_basic.classList.remove("basic");
  tabs_ultimate.classList.remove("ultimate");

  info.classList.remove("basic");
  info.classList.add("standard");
  info.classList.remove("ultimate");
}

tabs_ultimate.onclick = (e)=>{
  tabs_basic.classList.remove("basic");
  tabs_standard.classList.remove("standard");
  tabs_ultimate.classList.add("ultimate"); // now this is for the tabs movement

  info.classList.remove("basic");
  info.classList.remove("standard");
  info.classList.add("ultimate"); // this is for the text movement
}
