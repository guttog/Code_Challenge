let noticias =[
    {noticia:"noticia 1 com status 0", status: 0},
    {noticia:"noticia 1 com status 1", status: 1},
    {noticia:"noticia 2 com status 0", status: 0},
    {noticia:"noticia 3 com status 0", status: 0},
    {noticia:"noticia 2 com status 1", status: 1},
    {noticia:"noticia 3 com status 1", status: 1}
];

for(let dados of noticias){
    let noticia = dados.noticia
    let status = dados.status
    
    if (status == 1 ){
        continue;
    }
    console.log(noticias)
    console.log(noticia)
}