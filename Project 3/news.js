console.log('Welcome to News App');

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Instantiate an xhr object
let xhr = new XMLHttpRequest();

// Open the object
xhr.open('GET', `data.json`, true);   // used local data json cause news-api is only for production sites

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let newsHTML = '';
        let articles = json.articles;
        articles.forEach((article, index) => {
            let news = `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                ${article.title}
                                        </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                            data-bs-parent="#newsAccordion">
                            <div class="accordion-body">
                               ${article.content}
                               <a href="${article.url}" target="_blank">Read More..</a>
                            </div>
                        </div>
                    </div>`
            newsHTML += news;
        });
        newsAccordion.innerHTML = newsHTML;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();
