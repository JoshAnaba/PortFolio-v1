document.addEventListener('DOMContentLoaded', ()=>{
    const copyright=document.querySelector('#copyright')

        let date = new Date().getFullYear();

    copyright.innerHTML = `Copyright&copy; ${date}`
})

function goTo(link) {
    window.open(`https://${link}`, '_blank');
}