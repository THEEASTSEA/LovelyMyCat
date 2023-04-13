async function dogWithFetch() {
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

(async () => {
  await dogWithFetch()
  await dogWithFetch()
  await dogWithFetch()
  await dogWithFetch()
  await dogWithFetch()
  await dogWithFetch()
  await dogWithFetch()
  await dogWithFetch()
  await dogWithFetch()
  await dogWithFetch()
  await dogWithFetch()
  await dogWithFetch()
  await imgDownload()
})()

function imgDownload() {
  const imgList = document.querySelectorAll('img')
  console.log(imgList)
  imgList.forEach((img) => {
    img.addEventListener('click', () => {
      const imgDownUrl = img.src
      const a = document.createElement('a')
      a.href = imgDownUrl
      a.download = 'dog'
      a.click()
    })
  })
}




// 무한 스크롤
// window.innerHeight : 브라우저 영역의 높이
// window.scrollY : 스크롤의 이동 높이
// document.body.offsetHeight : 요소의 실제 높이(보이는 영역 + 스크롤 영역)
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    for (let i = 0; i < 6; i++) {
      dogWithFetch()
    }
  }
});
