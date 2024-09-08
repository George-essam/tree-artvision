

let box1=document.querySelector(".box1")

let img1 = document.createElement("img")
img1.src="./img/Tree Artvision_files/66030u.jpg"
img1.classList.add('img1')
box1.appendChild(img1)
box1.insertBefore(img1, box1.firstChild);
///////////////////////////////////////////////
let box2=document.querySelector(".box2")

let img2 = document.createElement("img")
img2.src="./img/Tree Artvision_files/660CbV.jpg"
img2.classList.add('img2')
box2.appendChild(img2)
box2.insertBefore(img2, box2.firstChild);
///////////////////////////////////////////////
let box3=document.querySelector(".box3")

let img3 = document.createElement("img")
img3.src="./img/Tree Artvision_files/660u0g.jpg"
img3.classList.add('img3')
box3.appendChild(img3)
box3.insertBefore(img3, box3.firstChild);

toggle=true;

const interval = setInterval(() =>
{
    toggle = !toggle
    if(toggle==true)
    {
        img1.remove
        img2.remove
        img3.remove
        img1.src = './img/Tree Artvision_files/s21.webp'
        img2.src = './img/Tree Artvision_files/s33.webp'
        img3.src = "./img/Tree Artvision_files/s11.webp"
    }
    else
    {
        img3.src ="./img/Tree Artvision_files/660u0g.jpg"
        img2.src="./img/Tree Artvision_files/660CbV.jpg"
        img1.src="./img/Tree Artvision_files/66030u.jpg"
    }
},2000)