

class Tampilan {
    constructor() {
    
    }

    menampilkan() {
        
   let rubah =   `<div>
                
                <form action="#">
               <p> 1. Siapakah Penemu Baling-Baling Bambu:</p>
               <input type="radio" id="Doraemon" />
               <label for="Doraemon">Doraemon</label>
             
               <input type="radio" id="Suneo" />
               <label for="Suneo">Suneo</label>
              <br>
              <br>
               <input type="radio" id="Nobita"/>
               <label for="Nobita">Nobita</label> 
              
               <input type="radio" id="Naruto" />
               <label for="Naruto">Naruto</label>
       </form>
       <br>

      
    
       <form action="#">
               <p> 2. Pilihlah 3 yang benar mengenai Aqil</p>
               <input type="checkbox" id="Trainer" />
               <label for="Trainer">Trainer Juara Koding</label>
               <br></br>
               <input type="checkbox" id="Manusia" />
               <label for="Manusia">Manusia</label>
               <br></br>
               <input type="checkbox" id="Avanger"/>
               <label for="Avanger">Anggota Avanger </label>
               
       </form>

   <br></br>
 
           <form action ="#">
           <p> 3. Ceritkan Pengalaman Anda Ketika Sedang Tidur</p>
           <label for="tambahText"></label>
           <textarea id="tambahText" rows="6" cols="50"></textarea>
         
           </form>
           </div>`
           return rubah;
    }

}

export default Tampilan;