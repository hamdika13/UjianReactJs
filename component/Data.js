


class Data {
    constructor() {

    }

    view() {
              
    let jumlah = `[{
        "type" : "radio",
        "soal" : "siapakah penemu baling-baling bambu",
        "a" : "Doraemon",
        "b" : "Hanif",
        "c" : "Nobita",
        "d" : "Naruto"
    }, 
    
    
    {
        "type" : "checkbox",
        "soal" : "pilihllah 3 yang benar mengenai aqil",
        "option" : ["Trainer Juara Koding","Manusia","anggota Avanger"],
        "jawab" : ["Manusia","anggota Avanger"]
    },
    
    {
        "type" : "essay",
        "soal" : "ceritakan pengalaman anda ketika sedang tidur"
    
    }]`

return jumlah;
       
    }
}

export default Data;