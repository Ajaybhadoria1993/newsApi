console.log("This is my index.js file");
// let source='bbc-news'
let apiKey = 'a11570f5ba6242e09137586510efe1e6'
//grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create an ajax get request
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=a11570f5ba6242e09137586510efe1e6', true)

//what happen when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
          console.log(articles)
        //   console.log(json)
        let newsHtml="";
        articles.forEach(function(element,index) {
            let news =
                `<div class="accordion-item">
    <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
           <b>Breaking news :</b> ${index+1} ${element["title"]}
        </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
           ${element["description"]}. <a href="${element['url']}" target="_blank"> READ MORE</a>      
             </div>
             </div>
        </div>`
        newsHtml+=news;
    });
        newsAccordion.innerHTML=newsHtml
    }
    else {
        console.log("Some error occured");
    }
}
xhr.send()

// target="_blank" is used to open in a new tab