document.getElementById('add-book').addEventListener('click', function(e){
    e.preventDefault();
    //console.log('clicked hoyci');
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    //console.log(author);
    const year = document.getElementById('year').value;
    //console.log(title);

    if(title == '' && author == '' && year == ''){
        alert('Please input something');
    }
    else{
        const newRow = document.createElement('tr');
        const newTitle = document.createElement('th');
        newTitle.innerText = title;
        newRow.append(newTitle);
        //console.log(newTitle);
        const newAuthor = document.createElement('th');
        newAuthor.innerText = author;
        newRow.append(newAuthor);
        const newYear = document.createElement('th');
        newYear.innerText = year;
        newRow.append(newYear);

        const newBookList = document.getElementById('book-list');
        newBookList.append(newRow);

    }
    
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';
})