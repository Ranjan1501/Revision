var usersData = document.getElementById("users");
var page = 1;
let getData = async () => {
  try {
    let limit = 35;

    const res = await fetch(
      `http://localhost:4500/data?_limit=${limit}&_page=${page}`
    );
    const data = await res.json();
    console.log("res:", data);
    data.forEach((user) => {
      let div = document.createElement("div");
      let name = document.createElement("h3");
      name.innerText = user.Name;
      div.append(name);
      usersData.append(div);
    });
  } catch (e) {
    console.log("error", e);
  }
};

usersData.addEventListener("scroll", function () {
  //   page = page + 1;

  if (
    usersData.scrollTop + usersData.clientHeight >= usersData.scrollHeight &&
    page <= 25
  ) {
    page = page + 1;
    console.log("scroll bottom", page);
    getData();
  }
  //   getData();
});
getData();

//usersData.scrollHeight
