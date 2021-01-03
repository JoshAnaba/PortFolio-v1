document.addEventListener('DOMContentLoaded', ()=>{
    const copyright=document.querySelector('#copyright')

        let date = new Date().getFullYear();

    copyright.innerHTML = `Copyright&copy; ${date}`
})