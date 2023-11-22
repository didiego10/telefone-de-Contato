
let p = document.querySelector('p')
    let input = document.querySelector('input')

    const contacts =[
        { name: 'Rodolfo',Number:'(19) 94343-3434' },
        {name: 'Paulo', Number: '(12) 91256-3434'},
        {name:'Aline', Number: '(13) 94343-3434'},
        {name:'Maria', Number: '(14) 94343-3434'},
    ]

    function search(){
    
        for(let i = 0;i< contacts.length ;i++){
            if(input.value.toLocaleLowerCase() === contacts[i].name.toLocaleLowerCase()){
                p.innerHTML = `contato encontrado nome: ${contacts[i].name} tel: ${contacts[i].Number}`
                
                break
            }else{
                p.innerHTML = "Contato não encontrado tente novamente"
            }
        }
    }