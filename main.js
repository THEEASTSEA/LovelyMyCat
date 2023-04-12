
async function dongWithFetch() {
  const dog = await fetch("https://api.thedogapi.com/v1/images/search?breed_ids=222&include_breeds=true", {
    method: "GET",
    headers: {
      "conteent-type": "application/json",
      "x-api-key": "live_ OILgWBDOdSSaiZrjLCZNgmoODOHjTT n7jKf7HYmEWKkKxgZtl0i1G4ZJDKvB 9Jt9",
    },
  })
  const json = await dog.json()
  const imageUrl = json[0].url
  const image = document.createElement('img')
  image.src = imageUrl
  document.querySelector(".list").appendChild(image)
}

for (let i = 0; i < 15; i++) {
  dongWithFetch()
}

// 무한 스크롤
// window.innerHeight : 브라우저 영역의 높이
// window.scrollY : 스크롤의 이동 높이
// document.body.offsetHeight : 요소의 실제 높이(보이는 영역 + 스크롤 영역)

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // const toAdd = document.createElement('img');
    // toAdd.src = image
    // document.querySelector(".list").appendChild(toAdd);
    for (let i = 0; i < 9; i++) {
      dongWithFetch()
    }
  }
});
