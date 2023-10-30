
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

document.addEventListener("DOMContentLoaded", (event) => {

    //aside

let bars = document.querySelector('.main__nav__bars');
let closeMenu = document.querySelector('.aside__menu__svg-x')
let aside = document.querySelector('.aside');
let innerContent = document.querySelector('.inner-content-container');
aside.style.height = '100%'
let menuActive = false;


bars.addEventListener('click',(e)=>{

    e.preventDefault()
    aside.style.transform = 'translate(0%)'
    innerContent.style.opacity = '0.3'
    menuActive = true

})



closeMenu.addEventListener('click',(e)=>{
    e.preventDefault()
    aside.style.transform = 'translate(-100%)'
    innerContent.style.opacity = '1'
    menuActive = false
    
})



innerContent.addEventListener('click',(e)=>{
    e.preventDefault()
    if (menuActive && e.target.className != 'main__nav__bars'){
        aside.style.transform = 'translate(-100%)'
        innerContent.style.opacity = '1'
    }
    
    
})

window.addEventListener('resize',(e)=>{

    e.preventDefault()
    
    if (innerWidth>768) {
        aside.style.transform = 'translate(0%)'
        innerContent.style.opacity = 1
    }
    
    if (innerWidth<=768 && menuActive) {
        innerContent.style.opacity = 0.3
        aside.style.transform = 'translate(0%)'
    }
    
    if (innerWidth<=768 && !menuActive) {
        aside.style.transform = 'translate(-100%)'
    }

    })


//swiper brands



let btnActive = false;
let rows = 2;
let height = innerWidth > 320 ? '200px' : '110px';
console.log(height)
const btn = document.querySelector('.brands-container__button');


window.addEventListener('resize',(e)=>{

    e.preventDefault()
    
    if (innerWidth > 320 && btnActive) {
        height = '300px'
        document.querySelector('.brands-swiper').style.height = `${height}`
       
    }

    else if (innerWidth > 320 && !btnActive) {
        height = '200px'
        document.querySelector('.brands-swiper').style.height = `${height}`
        
    }

    else if (innerWidth <= 320) {
        height = '110px'
        document.querySelector('.brands-swiper').style.height = `${height}`

    }

    })

btn.addEventListener('click',(e)=>{
e.preventDefault();
btnActive = btnActive === false ? true : false;
rows = btnActive ? 3 : 2 
btn.innerHTML = btnActive ? 

`<svg width="88" height="24" viewBox="0 0 88 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.44 8.44024C32.44 6.57358 33.4 5.64024 35.32 5.64024H39C40.92 5.64024 41.88 6.57358 41.88 8.44024V9.08024C41.88 9.24024 41.8 9.32024 41.64 9.32024H40.6C40.44 9.32024 40.36 9.24024 40.36 9.08024V8.44024C40.36 7.53358 39.9067 7.08024 39 7.08024H35.32C34.4133 7.08024 33.96 7.53358 33.96 8.44024V14.3602C33.96 15.2669 34.4133 15.7202 35.32 15.7202H39C39.9067 15.7202 40.36 15.2669 40.36 14.3602V13.7202C40.36 13.5602 40.44 13.4802 40.6 13.4802H41.64C41.8 13.4802 41.88 13.5602 41.88 13.7202V14.3602C41.88 16.2269 40.92 17.1602 39 17.1602H35.32C33.4 17.1602 32.44 16.2269 32.44 14.3602V8.44024ZM47.44 13.3202H45.44V16.7602C45.44 16.9202 45.36 17.0002 45.2 17.0002H44.32C44.16 17.0002 44.08 16.9202 44.08 16.7602V9.08024C44.08 8.92024 44.16 8.84024 44.32 8.84024H45.2C45.36 8.84024 45.44 8.92024 45.44 9.08024V12.0402H47.44L49.04 9.08024C49.0827 8.99491 49.1307 8.93624 49.184 8.90424C49.2373 8.86158 49.3227 8.84024 49.44 8.84024H50.4C50.5813 8.84024 50.6347 8.92024 50.56 9.08024L48.56 12.6802L50.8 16.7602C50.8747 16.9202 50.8213 17.0002 50.64 17.0002H49.68C49.5627 17.0002 49.4773 16.9842 49.424 16.9522C49.3707 16.9096 49.3227 16.8456 49.28 16.7602L47.44 13.3202ZM56.6394 15.7202C57.002 15.7202 57.29 15.6136 57.5034 15.4002C57.7274 15.1762 57.8394 14.8829 57.8394 14.5202V11.1602C57.8394 10.7976 57.7274 10.5096 57.5034 10.2962C57.29 10.0722 57.002 9.96024 56.6394 9.96024H55.2794C54.7994 9.96024 54.3994 10.1202 54.0794 10.4402C53.7594 10.7602 53.5994 11.1602 53.5994 11.6402V15.7202H56.6394ZM53.5994 17.0002V19.8002C53.5994 19.9602 53.5194 20.0402 53.3594 20.0402H52.4794C52.3194 20.0402 52.2394 19.9602 52.2394 19.8002V9.08024C52.2394 8.92024 52.3194 8.84024 52.4794 8.84024H53.3594C53.5194 8.84024 53.5994 8.92024 53.5994 9.08024V9.64024H53.6794C53.7647 9.45891 53.8874 9.29891 54.0474 9.16024C54.186 9.04291 54.3674 8.93624 54.5914 8.84024C54.8154 8.73358 55.098 8.68024 55.4394 8.68024H56.6394C57.482 8.68024 58.1167 8.89358 58.5434 9.32024C58.9807 9.74691 59.1994 10.3602 59.1994 11.1602V14.5202C59.1994 15.3202 58.9807 15.9336 58.5434 16.3602C58.1167 16.7869 57.482 17.0002 56.6394 17.0002H53.5994ZM65.2387 15.7202C65.5587 15.7202 65.8094 15.6296 65.9907 15.4482C66.1827 15.2562 66.2787 15.0002 66.2787 14.6802V13.8802C66.2787 13.5602 66.1827 13.3096 65.9907 13.1282C65.8094 12.9362 65.5587 12.8402 65.2387 12.8402H62.7587V15.7202H65.2387ZM61.6387 17.0002C61.4787 17.0002 61.3987 16.9202 61.3987 16.7602V9.08024C61.3987 8.92024 61.4787 8.84024 61.6387 8.84024H62.5187C62.6787 8.84024 62.7587 8.92024 62.7587 9.08024V11.5602H65.2387C66.8388 11.5602 67.6388 12.3336 67.6388 13.8802V14.6802C67.6388 16.2269 66.8388 17.0002 65.2387 17.0002H61.6387ZM70.3588 16.7602C70.3588 16.9202 70.2788 17.0002 70.1187 17.0002H69.2388C69.0787 17.0002 68.9987 16.9202 68.9987 16.7602V9.08024C68.9987 8.92024 69.0787 8.84024 69.2388 8.84024H70.1187C70.2788 8.84024 70.3588 8.92024 70.3588 9.08024V16.7602ZM74.5544 17.0002C74.3944 17.0002 74.3144 16.9202 74.3144 16.7602V10.1202H71.8344C71.6744 10.1202 71.5944 10.0402 71.5944 9.88024V9.08024C71.5944 8.92024 71.6744 8.84024 71.8344 8.84024H78.1544C78.3144 8.84024 78.3944 8.92024 78.3944 9.08024V9.88024C78.3944 10.0402 78.3144 10.1202 78.1544 10.1202H75.6744V16.7602C75.6744 16.9202 75.5944 17.0002 75.4344 17.0002H74.5544ZM83.7994 15.7202C84.1194 15.7202 84.37 15.6296 84.5514 15.4482C84.7434 15.2562 84.8394 15.0002 84.8394 14.6802V13.8802C84.8394 13.5602 84.7434 13.3096 84.5514 13.1282C84.37 12.9362 84.1194 12.8402 83.7994 12.8402H80.9994V15.7202H83.7994ZM79.8794 17.0002C79.7194 17.0002 79.6394 16.9202 79.6394 16.7602V9.08024C79.6394 8.92024 79.7194 8.84024 79.8794 8.84024H80.7594C80.9194 8.84024 80.9994 8.92024 80.9994 9.08024V11.5602H83.7994C85.3994 11.5602 86.1994 12.3336 86.1994 13.8802V14.6802C86.1994 16.2269 85.3994 17.0002 83.7994 17.0002H79.8794Z" fill="#1B1C21"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.49992 16.4999L11.9999 13.9999L14.4999 16.4999C14.7761 16.7761 15.2238 16.7761 15.4999 16.4999C15.7761 16.2238 15.7761 15.7761 15.4999 15.4999L12.707 12.707C12.3165 12.3165 11.6833 12.3165 11.2928 12.707L8.49992 15.4999C8.22378 15.7761 8.22378 16.2238 8.49992 16.4999C8.77607 16.7761 9.22378 16.7761 9.49992 16.4999ZM9.49992 10.4999L11.9999 7.99992L14.4999 10.4999C14.7761 10.7761 15.2238 10.7761 15.4999 10.4999C15.7761 10.2238 15.7761 9.77607 15.4999 9.49992L12.707 6.70703C12.3165 6.31651 11.6833 6.31651 11.2928 6.70703L8.49992 9.49993C8.22378 9.77607 8.22378 10.2238 8.49992 10.4999C8.77607 10.7761 9.22378 10.7761 9.49992 10.4999Z" fill="#41F6D7"/>
</svg>`
:
`<svg width="133" height="24" viewBox="0 0 133 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.32 5.8C42.48 5.8 42.56 5.88 42.56 6.04V16.76C42.56 16.92 42.48 17 42.32 17H41.28C41.12 17 41.04 16.92 41.04 16.76V7.24H35.12V16.76C35.12 16.92 35.04 17 34.88 17H33.84C33.68 17 33.6 16.92 33.6 16.76V6.04C33.6 5.88 33.68 5.8 33.84 5.8H42.32ZM50.8363 11.16C50.8363 10.7973 50.7243 10.5093 50.5003 10.296C50.2869 10.072 49.9989 9.96 49.6363 9.96H47.6363C47.2736 9.96 46.9803 10.072 46.7563 10.296C46.5429 10.5093 46.4363 10.7973 46.4363 11.16V14.68C46.4363 15.0427 46.5429 15.336 46.7563 15.56C46.9803 15.7733 47.2736 15.88 47.6363 15.88H49.6363C49.9989 15.88 50.2869 15.7733 50.5003 15.56C50.7243 15.336 50.8363 15.0427 50.8363 14.68V11.16ZM52.1963 14.68C52.1963 15.48 51.9776 16.0933 51.5403 16.52C51.1136 16.9467 50.4789 17.16 49.6363 17.16H47.6363C46.7936 17.16 46.1536 16.9467 45.7163 16.52C45.2896 16.0933 45.0763 15.48 45.0763 14.68V11.16C45.0763 10.36 45.2896 9.74667 45.7163 9.32C46.1536 8.89333 46.7936 8.68 47.6363 8.68H49.6363C50.4789 8.68 51.1136 8.89333 51.5403 9.32C51.9776 9.74667 52.1963 10.36 52.1963 11.16V14.68ZM57.7556 13.32H55.7556V16.76C55.7556 16.92 55.6756 17 55.5156 17H54.6356C54.4756 17 54.3956 16.92 54.3956 16.76V9.08C54.3956 8.92 54.4756 8.84 54.6356 8.84H55.5156C55.6756 8.84 55.7556 8.92 55.7556 9.08V12.04H57.7556L59.3556 9.08C59.3983 8.99467 59.4463 8.936 59.4996 8.904C59.553 8.86133 59.6383 8.84 59.7556 8.84H60.7156C60.897 8.84 60.9503 8.92 60.8756 9.08L58.8756 12.68L61.1156 16.76C61.1903 16.92 61.137 17 60.9556 17H59.9956C59.8783 17 59.793 16.984 59.7396 16.952C59.6863 16.9093 59.6383 16.8453 59.5956 16.76L57.7556 13.32ZM62.0787 14.52C62.0787 12.9733 62.8787 12.2 64.4787 12.2H67.4387V11.16C67.4387 10.7973 67.3267 10.5093 67.1027 10.296C66.8894 10.072 66.6014 9.96 66.2387 9.96H65.1187C64.7561 9.96 64.4627 10.072 64.2387 10.296C64.0254 10.5093 63.9187 10.7973 63.9187 11.16C63.9187 11.32 63.8387 11.4 63.6787 11.4H62.7987C62.6387 11.4 62.5587 11.32 62.5587 11.16C62.5587 10.36 62.7721 9.74667 63.1987 9.32C63.6361 8.89333 64.2761 8.68 65.1187 8.68H66.2387C67.0814 8.68 67.7161 8.89333 68.1427 9.32C68.5801 9.74667 68.7987 10.36 68.7987 11.16V16.76C68.7987 16.92 68.7188 17 68.5588 17H67.6788C67.5187 17 67.4387 16.92 67.4387 16.76V16.2H67.3587C67.2734 16.3813 67.1508 16.5413 66.9907 16.68C66.8521 16.7973 66.6707 16.904 66.4467 17C66.2227 17.1067 65.9401 17.16 65.5987 17.16H64.4787C62.8787 17.16 62.0787 16.3867 62.0787 14.84V14.52ZM63.4387 14.84C63.4387 15.16 63.5294 15.416 63.7107 15.608C63.9027 15.7893 64.1587 15.88 64.4787 15.88H65.7587C66.2387 15.88 66.6387 15.72 66.9587 15.4C67.2787 15.08 67.4387 14.68 67.4387 14.2V13.48H64.4787C64.1587 13.48 63.9027 13.576 63.7107 13.768C63.5294 13.9493 63.4387 14.2 63.4387 14.52V14.84ZM73.2319 17.16C72.3892 17.16 71.7492 16.9467 71.3119 16.52C70.8852 16.0933 70.6719 15.48 70.6719 14.68V14.28C70.6719 14.12 70.7519 14.04 70.9119 14.04H71.7919C71.9519 14.04 72.0319 14.12 72.0319 14.28V14.68C72.0319 15.0427 72.1385 15.336 72.3519 15.56C72.5759 15.7733 72.8692 15.88 73.2319 15.88H75.3119C75.6319 15.88 75.8825 15.7893 76.0639 15.608C76.2559 15.416 76.3519 15.16 76.3519 14.84V14.52C76.3519 14.2 76.2559 13.9493 76.0639 13.768C75.8825 13.576 75.6319 13.48 75.3119 13.48H73.9519C73.7919 13.48 73.7119 13.4 73.7119 13.24V12.44C73.7119 12.28 73.7919 12.2 73.9519 12.2H75.1519C75.4719 12.2 75.7225 12.1093 75.9039 11.928C76.0959 11.736 76.1919 11.48 76.1919 11.16V11C76.1919 10.68 76.0959 10.4293 75.9039 10.248C75.7225 10.056 75.4719 9.96 75.1519 9.96H73.3919C73.0292 9.96 72.7359 10.072 72.5119 10.296C72.2985 10.5093 72.1919 10.7973 72.1919 11.16V11.56C72.1919 11.72 72.1119 11.8 71.9519 11.8H71.0719C70.9119 11.8 70.8319 11.72 70.8319 11.56V11.16C70.8319 10.36 71.0452 9.74667 71.4719 9.32C71.9092 8.89333 72.5492 8.68 73.3919 8.68H75.1519C76.7519 8.68 77.5519 9.45333 77.5519 11V11.16C77.5519 11.48 77.4879 11.7413 77.3599 11.944C77.2319 12.136 77.0932 12.2907 76.9439 12.408C76.7625 12.536 76.5652 12.6267 76.3519 12.68V12.76C76.6079 12.8133 76.8319 12.9147 77.0239 13.064C77.1945 13.192 77.3492 13.3733 77.4879 13.608C77.6372 13.8427 77.7119 14.1467 77.7119 14.52V14.84C77.7119 16.3867 76.9119 17.16 75.3119 17.16H73.2319ZM79.4288 14.52C79.4288 12.9733 80.2288 12.2 81.8288 12.2H84.7888V11.16C84.7888 10.7973 84.6768 10.5093 84.4528 10.296C84.2394 10.072 83.9514 9.96 83.5888 9.96H82.4688C82.1061 9.96 81.8128 10.072 81.5888 10.296C81.3754 10.5093 81.2688 10.7973 81.2688 11.16C81.2688 11.32 81.1888 11.4 81.0288 11.4H80.1488C79.9888 11.4 79.9088 11.32 79.9088 11.16C79.9088 10.36 80.1221 9.74667 80.5488 9.32C80.9861 8.89333 81.6261 8.68 82.4688 8.68H83.5888C84.4314 8.68 85.0661 8.89333 85.4928 9.32C85.9301 9.74667 86.1488 10.36 86.1488 11.16V16.76C86.1488 16.92 86.0688 17 85.9088 17H85.0288C84.8688 17 84.7888 16.92 84.7888 16.76V16.2H84.7088C84.6234 16.3813 84.5008 16.5413 84.3408 16.68C84.2021 16.7973 84.0208 16.904 83.7968 17C83.5728 17.1067 83.2901 17.16 82.9488 17.16H81.8288C80.2288 17.16 79.4288 16.3867 79.4288 14.84V14.52ZM80.7888 14.84C80.7888 15.16 80.8794 15.416 81.0608 15.608C81.2528 15.7893 81.5088 15.88 81.8288 15.88H83.1088C83.5888 15.88 83.9888 15.72 84.3088 15.4C84.6288 15.08 84.7888 14.68 84.7888 14.2V13.48H81.8288C81.5088 13.48 81.2528 13.576 81.0608 13.768C80.8794 13.9493 80.7888 14.2 80.7888 14.52V14.84ZM90.3419 17C90.1819 17 90.1019 16.92 90.1019 16.76V10.12H87.6219C87.4619 10.12 87.3819 10.04 87.3819 9.88V9.08C87.3819 8.92 87.4619 8.84 87.6219 8.84H93.9419C94.1019 8.84 94.1819 8.92 94.1819 9.08V9.88C94.1819 10.04 94.1019 10.12 93.9419 10.12H91.4619V16.76C91.4619 16.92 91.3819 17 91.2219 17H90.3419ZM99.5869 15.72C99.9069 15.72 100.158 15.6293 100.339 15.448C100.531 15.256 100.627 15 100.627 14.68V13.88C100.627 13.56 100.531 13.3093 100.339 13.128C100.158 12.936 99.9069 12.84 99.5869 12.84H96.7869V15.72H99.5869ZM95.6669 17C95.5069 17 95.4269 16.92 95.4269 16.76V9.08C95.4269 8.92 95.5069 8.84 95.6669 8.84H96.5469C96.7069 8.84 96.7869 8.92 96.7869 9.08V11.56H99.5869C101.187 11.56 101.987 12.3333 101.987 13.88V14.68C101.987 16.2267 101.187 17 99.5869 17H95.6669ZM111.427 15.72C111.747 15.72 111.998 15.6293 112.179 15.448C112.371 15.256 112.467 15 112.467 14.68V14.52C112.467 14.2 112.371 13.9493 112.179 13.768C111.998 13.576 111.747 13.48 111.427 13.48H108.387V15.72H111.427ZM110.947 12.2C111.267 12.2 111.518 12.1093 111.699 11.928C111.891 11.736 111.987 11.48 111.987 11.16C111.987 10.84 111.891 10.5893 111.699 10.408C111.518 10.216 111.267 10.12 110.947 10.12H108.387V12.2H110.947ZM107.267 17C107.107 17 107.027 16.92 107.027 16.76V9.08C107.027 8.92 107.107 8.84 107.267 8.84H110.947C112.547 8.84 113.347 9.61333 113.347 11.16C113.347 11.48 113.288 11.7413 113.171 11.944C113.064 12.136 112.947 12.2907 112.819 12.408C112.67 12.536 112.499 12.6267 112.307 12.68V12.76C112.584 12.8133 112.835 12.9147 113.059 13.064C113.251 13.192 113.427 13.3733 113.587 13.608C113.747 13.8427 113.827 14.1467 113.827 14.52V14.68C113.827 16.2267 113.027 17 111.427 17H107.267ZM116.902 14.68C116.902 15.0427 117.009 15.336 117.222 15.56C117.446 15.7733 117.739 15.88 118.102 15.88H119.942C120.305 15.88 120.593 15.7733 120.806 15.56C121.03 15.336 121.142 15.0427 121.142 14.68V14.28C121.142 14.12 121.222 14.04 121.382 14.04H122.262C122.422 14.04 122.502 14.12 122.502 14.28V14.68C122.502 15.48 122.283 16.0933 121.846 16.52C121.419 16.9467 120.785 17.16 119.942 17.16H118.102C117.259 17.16 116.619 16.9467 116.182 16.52C115.755 16.0933 115.542 15.48 115.542 14.68V11.16C115.542 10.36 115.755 9.74667 116.182 9.32C116.619 8.89333 117.259 8.68 118.102 8.68H119.942C120.785 8.68 121.419 8.89333 121.846 9.32C122.283 9.74667 122.502 10.36 122.502 11.16V11.56C122.502 11.72 122.422 11.8 122.262 11.8H121.382C121.222 11.8 121.142 11.72 121.142 11.56V11.16C121.142 10.7973 121.03 10.5093 120.806 10.296C120.593 10.072 120.305 9.96 119.942 9.96H118.102C117.739 9.96 117.446 10.072 117.222 10.296C117.009 10.5093 116.902 10.7973 116.902 11.16V14.68ZM130.069 12.2V11.16C130.069 10.7973 129.957 10.5093 129.733 10.296C129.519 10.072 129.231 9.96 128.869 9.96H126.949C126.586 9.96 126.293 10.072 126.069 10.296C125.855 10.5093 125.749 10.7973 125.749 11.16V12.2H130.069ZM125.749 13.48V14.68C125.749 15.0427 125.855 15.336 126.069 15.56C126.293 15.7733 126.586 15.88 126.949 15.88H128.869C129.231 15.88 129.519 15.7733 129.733 15.56C129.957 15.336 130.069 15.0427 130.069 14.68V14.6C130.069 14.44 130.149 14.36 130.309 14.36H131.189C131.349 14.36 131.429 14.44 131.429 14.6V14.68C131.429 15.48 131.21 16.0933 130.773 16.52C130.346 16.9467 129.711 17.16 128.869 17.16H126.949C126.106 17.16 125.466 16.9467 125.029 16.52C124.602 16.0933 124.389 15.48 124.389 14.68V11.16C124.389 10.36 124.602 9.74667 125.029 9.32C125.466 8.89333 126.106 8.68 126.949 8.68H128.869C129.711 8.68 130.346 8.89333 130.773 9.32C131.21 9.74667 131.429 10.36 131.429 11.16V13.24C131.429 13.4 131.349 13.48 131.189 13.48H125.749Z" fill="#1B1C21"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5001 7.50008L12.0001 10.0001L9.50008 7.50008C9.22393 7.22393 8.77622 7.22393 8.50008 7.50008C8.22393 7.77622 8.22393 8.22393 8.50008 8.50008L11.293 11.293C11.6835 11.6835 12.3167 11.6835 12.7072 11.293L15.5001 8.50008C15.7762 8.22393 15.7762 7.77622 15.5001 7.50008C15.2239 7.22393 14.7762 7.22393 14.5001 7.50008ZM14.5001 13.5001L12.0001 16.0001L9.50008 13.5001C9.22393 13.2239 8.77622 13.2239 8.50008 13.5001C8.22393 13.7762 8.22393 14.2239 8.50008 14.5001L11.293 17.293C11.6835 17.6835 12.3167 17.6835 12.7072 17.293L15.5001 14.5001C15.7762 14.2239 15.7762 13.7762 15.5001 13.5001C15.2239 13.2239 14.7762 13.2239 14.5001 13.5001Z" fill="#41F6D7"/>
</svg>`;


if (btnActive && innerWidth>320) {
    height = '300px'
}

else {height = '200px'}

swiper = new Swiper('.brands-swiper', {

mousewheel:false,
speed:1000,
direction: 'horizontal',
loop:true,
allowSlidePrev:true,
slidesPerView: 1.3,
spaceBetween: 10,
pagination:true,
breakpoints: {
// when window width is >= 640px
768: {
slidesPerView: 3,
spaceBetween: 40,
pagination:false,
grid: {
    rows:rows,
    gap:20
},
allowSlidePrev:false,
allowSlideNext:false,

},
1120: {
slidesPerView: 4,
spaceBetween: 40,
pagination:false,
grid: {
    rows:rows,
    gap:20
},
allowSlidePrev:false,
allowSlideNext:false,
}
},

pagination: {
el: '.swiper-pagination',
clickable:true
},
});


const updatedContent = arraySlidesContent.map((item,i)=>{

    item.innerHTML = `<img src='${svgArray[i]}'></img> ${commonSvg}`
    return item
})

document.querySelector('.brands-swiper').style.height = `${height}`

}

)







let swiper = new Swiper('.brands-swiper', {

mousewheel:false,
speed:1000,
direction: 'horizontal',
loop:true,
allowSlidePrev:true,
slidesPerView: 1.3,
spaceBetween: 10,
breakpoints: {

768: {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination:false,
    grid: {
    rows:rows,
    gap:20
    },
    allowSlidePrev:false,
    allowSlideNext:false,
},
1120: {
    slidesPerView: 4,
    spaceBetween: 40,
    pagination:false,
    grid: {
    rows:rows,
    gap:20
    },
    allowSlidePrev:false,
allowSlideNext:false,
}
},
pagination: {
el: '.swiper-pagination',
clickable:true
}
});

document.querySelector('.swiper').style.height = `${height}`

const slidesContent = document.getElementsByClassName("slide");

const arraySlidesContent = Array.from(slidesContent);

const commonSvg = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="38" height="38" rx="19" stroke="#FF3E79" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z" fill="#FF3E79"/>
</svg>
`
const svgArray = ['./assets/1.png','./assets/2.png','./assets/3.png','./assets/4.png','./assets/5.png'
,'./assets/6.png','./assets/7.png','./assets/8.png','./assets/9.png','./assets/10.png','./assets/11.png']



const updatedContent = arraySlidesContent.map((item,i)=>{

    item.innerHTML = `<img src='${svgArray[i]}'></img> ${commonSvg}`
    return item
})


// swiper services content

const slidesServices = document.getElementsByClassName("services-container__swiper__swiper-wrapper__slide");
    const arraySlidesServices = Array.from(slidesServices);
    
    const slidesServicesContent = arraySlidesServices.map((item,i)=>{
    
        item.innerHTML = `<h1 class = 'services-container__swiper__swiper-wrapper__slide__header'>Ремонт ноутбуков</h1> 
                            <div class='services-container__swiper__swiper-wrapper__slide__svg'>${commonSvg}</div>`
        return item
    })
    

});


//modal

const btnPhone = document.querySelector('.footer__phone')
const btnMessage = document.querySelector('.footer__message')
const modalFeedback = document.querySelector('.section__dialog-feedback')


btnMessage.addEventListener('click',(e)=>{
    e.preventDefault()

    modalFeedback.showModal()
})

