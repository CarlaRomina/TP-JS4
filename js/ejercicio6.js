class Libro{
    constructor(isbn,titulo,autor,numPaginas){
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numPaginas = numPaginas;
    }
    mostrarLibro(){
        document.write(`<br>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas <br>`)
    }
    get isbn(){
        return this._isbn;
    }
    set isbn (nuevoIsbn){
        if(nuevoIsbn.legth >13){
            this._isbn = nuevoIsbn;
        }
    }
    get titulo(){
        return this._titulo;
    }
    set titulo (nuevoTitulo){
        if(nuevoTitulo.legth >8){
            this._titulo = nuevoTitulo;
        }
    }
    get iautor(){
        return this._autor;
    }
    set autor (nuevoAutor){
        if(nuevoAutor.legth >10){
            this._autor = nuevoAutor;
        }
    }
    get numPaginas(){
        return this._numPaginas;
    }
    set numPaginas (nuevoNumPaginas){
        if(nuevoNumPaginas.legth >350){
            this._numPaginas = nuevoNumPaginas;
        }
    }
    
}

let libro1 = new Libro (9789871138142,'"100 años de soledad"','Gabriel Garcia Marquez',496)
let libro2 = new Libro (9789588611778,'"La casa de los espiritus"','Isabel Allende',464)



libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numPaginas > libro2.numPaginas){
    document.write(`<br>El libro ${libro1.titulo} tiene más páginas <br>`)
}else{
    document.write(`<br>El libro ${libro2.titulo} tiene más páginas <br>`)
    
}