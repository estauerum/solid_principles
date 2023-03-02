//Принцип единичной ответственности
//Класс отвечающий за создание новых новостей
class News {
    constructor (title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }
}

//Класс, отвечающий за трансформацию новости в форматы
class NewsPrinter {
    constructor (news) {
        this.news = news
    }

    html() {
        return `
        <div class="news">
            <h1>${this.news.title}</h1>
            <p>${this.news.text}</p>
        </div>
    `
    }

    json() {
        return JSON.stringify( {
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2) 
    }
}

const printer = new NewsPrinter(new News ('Путин', 'Новая конституция'));

console.log(printer.html());
console.log(printer.json());

