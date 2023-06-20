export function getValue(id) {
  return document.getElementById(id).value;
}

export function doStuff() {
  var div = document.createElement("div");
  div.id = "mydiv";
  div.style.height = "100%";
  div.style.width = "100%";
  div.style.position = "absolute";
  div.style.background = "black";
  div.style.top = "0px";
  div.style.left = "0px";
  div.style.zIndex = "1000";
  document.body.appendChild(div);

  var header = document.createElement("h1");
  header.innerHTML = "You've been hacked!";
  header.style.color = "white";
  div.appendChild(header);

  var skull = document.createElement("img");
  skull.src = "https://media.tenor.com/APPy3J30LA4AAAAM/skull-laughing.gif";
  skull.style["margin-left"] = "auto";
  skull.style["margin-right"] = "auto";
  skull.style.display = "block";
  div.appendChild(skull);
}

//doStuff();