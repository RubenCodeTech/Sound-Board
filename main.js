const audio = document.querySelectorAll('audio')
const buttons = document.querySelector('#buttons')
const audioId = document.querySelectorAll('*[id^="snd"]')
const btn = document.querySelectorAll('button')

audio.forEach((e) => {
    let eachButton = document.createElement('button')
    eachButton.classList.add("btn")
    buttons.appendChild(eachButton).addEventListener('click', () => {
        e.play()
    })
})

for (let i = 0; i < btn.length; i++) {
    btn[i].textContent = audioId[i].id.toString()
};
