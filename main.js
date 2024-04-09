const image1 = document.getElementById("image1")
const NextButton = document.getElementById("gallerynext")

var a = ["download (1).jpg", "download.jpg", "download (2).jpg", "download (3).jpg", "download (4).jpg", "images.jpg"]

var num = 0

NextButton.addEventListener("click", function() {
    num+=1
    num= num%a.length
    image1.src = a[num]
    console.log("aaaaaa")
})