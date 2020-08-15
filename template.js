(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let windowCats = this.window.cats;
        console.log(windowCats);

        let windowCatsJSON = {...windowCats};

        console.log(windowCatsJSON);

        let src = document.getElementById('cattemplate').innerHTML;
        let cats = document.getElementById('cat-container').innerHTML;
        let template = Handlebars.compile(cats);
        Handlebars.registerPartial('cattemplate', src);

        let container = document.getElementById('allCats');

        container.innerHTML = template({windowCatsJSON});

         // TODO: Render button info on click
        let button = document.querySelectorAll('.showBtn');
        console.log(button.length);

        for(let i = 0; i < button.length; i++){
            button[i].addEventListener('click', function(){
                console.log('button clicked');
                let display = this.nextSibling.nextSibling;
                if(display.style == 'none'){
                    display.style = 'block';
                } else {
                    display.style = 'none';
                }
                console.log(display);
            });
        }
        
        
        
        console.log(windowCats[0].id);
    }

})();


/*
<ul>
    <li>
        <img src="images/cat100.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="100">
                <h4>Status Code: 100</h4>
                <p>Continue</p>
            </div>
        </div>
    </li>
</ul>
*/
